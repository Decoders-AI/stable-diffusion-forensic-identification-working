# myapp/views.py
from django.http import HttpResponse, FileResponse
import requests
import base64
import os
from django.utils import timezone
from openai import OpenAI
import json
from django.http import JsonResponse


last_request_time = None

seeds = [0,0,0]
Choices = []

refinePrompt = ""

# Point to the local server
client = OpenAI(base_url="http://192.168.1.25:1234/v1", api_key="lm-studio")

# Define the URL and the payload to send.
url = "http://127.0.0.1:7860"

# Load the image to be used as the input for the controlnet
img_path = os.path.join(os.path.dirname(__file__), 'control.jpg')
with open(img_path, 'rb') as f:
    img = base64.b64encode(f.read()).decode('utf-8')

# payload = {
#     "prompt": "An Asian woman in her 40s with light, smooth skin with oval face shape. Her hair is black and short, going down to her chin in a bob cut with dark eyebrows. Her hair swipes to the side across her short forehead. She has slanted eyes that are dark brown in color. Her nose is wide and round. She has thin lips and her ears are flat against her head. Her cheeks are filled out and her chin comes to rounded point. Suspect wears rectangular, black-framed glasses that have rounded corners.",
#     "steps": 10,
#     "batch_size": 3,  # Change batch size to 3
#     "n_iter": 1,
#     "alwayson_scripts": {
#         "controlnet": "openpose"
#     },
#     "controlnet_input_image": [img],
#     "controlnet_module": 'openpose',
#     "controlnet_model": 'control_sd15_openpose [fef5e48e]',
# }

def receive_first_get_request(request):

    global last_request_time
    global seeds
    global Choices
    global refinePrompt
    current_time = timezone.now()

    # If last_request_time is not set or the time difference is more than 5 seconds
    if last_request_time is None or (current_time - last_request_time).total_seconds() > 10:
        last_request_time = current_time
        
        if request.method == 'GET':
            receivedPrompt = request.GET.get('prompt', "")
            if len(receivedPrompt) > 4 and receivedPrompt != "undefined":
                refinePrompt = receivedPrompt
            else:
                refinePrompt = refinePrompt
            prompt = refinePrompt + "photo, portrait, face, looking at viewer, plain background"
            print("Received prompt:", prompt)

            system_message = """You are a prompt generator for a stable diffusion model. You have to extract important facial features form a given discription give a comma seperated string. 
            # Example 1 - Suspect is a 30 years old Caucasian with neck-length short blond hair. She has a round face with a big forehead and a round chin. Her eyes are very thin and small, and her mouth is small as well. She has filled cheeks and a thin nose.
            # Output 1 - 30 years old Caucasian woman, neck length short blond hair, round face, very thin small eyes, round chin, small mouth, big forehead, filled cheeks, thin nose

            # Example 2 - Suspect is a 40-year-old East Asian man. He has straight, shoulder-length black hair neatly combed. His face is oval-shaped with high cheekbones and a defined jawline. He possesses almond-shaped brown eyes . His nose is straight and of average size.
            # Output 2 - 40 years old East Asian man, shoulder length black hair, neatly combed hair, oval face, almond-shaped brown eyes, high cheekbones, defined jawline, medium sized mouth, full lips, straight nose
            """
            completion = client.chat.completions.create(
            
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            model="TheBloke/Mistral-7B-Instruct-v0.2-GGUF/mistral-7b-instruct-v0.2.Q4_K_S.gguf",
            stream=False
            )

            ChoicePhrase = completion.choices[0].message.content[9:].split('Output: ')[-1]
            Choices = ChoicePhrase.split(',')
            print("Choices: ")
            print(Choices)

            payload = {
                "prompt": prompt,
                "negative_prompt": "(side view:1.2) worst quality, low quality, low res, blurry, text, watermark, logo, banner, extra digits, cropped, jpeg artifacts,  error, sketch ,duplicate, monochrome, geometry",
                "steps": 50,
                "batch_size": 3,  # Change batch size to 3
                "n_iter": 1,
                "alwayson_scripts": {
                    "controlnet": "openpose"
                },
                "controlnet_input_image": [img],
                "controlnet_module": 'openpose',
                "controlnet_model": 'control_sd15_openpose [fef5e48e]',
            }

            print("Received")
            # Send the payload to the specified URL through the API.
            response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
            r = response.json()

            # print(r['info'])

            # Parse the JSON string
            data = json.loads(r['info'])

            # Extract the three seeds
            seeds = data['all_seeds']
            print("Seeds: ")
            print(seeds)

            # Ensure the response contains the expected data
            if 'images' in r and len(r['images']) == 3:
                images_data = r['images']
                print("Images generated successfully!")

                image_paths = []
                for i, image_data in enumerate(images_data):
                    # Save the data to a text file
                    with open(f"output_{i}.txt", 'w') as f:
                        f.write(image_data)
                    
                    # Decode and save the image
                    image_path = f"output_{i}.png"
                    with open(image_path, 'wb') as f:
                        f.write(base64.b64decode(image_data))
                    
                    image_paths.append(image_path)

                # Return the images as the response
                files = [open(image_path, 'rb') for image_path in image_paths]
                return FileResponse(files[0], content_type='image/png')
            else:
                return HttpResponse("Image generation failed", status=500)
        else:
            return HttpResponse(status=405)  # Method Not Allowed
    else:
        # Return a response indicating that the request is too frequent
        return HttpResponse("API requests are too frequent", status=429)
    
def receive_second_get_request(request):
    if request.method == 'GET':
        print("Received")

        return FileResponse(open("output_1.png", 'rb'), content_type='image/png')
    else:
        return HttpResponse(status=405)  # Method Not Allowed
    
def receive_third_get_request(request):
    if request.method == 'GET':
        print("Received")

        return FileResponse(open("output_2.png", 'rb'), content_type='image/png')
    else:
        return HttpResponse(status=405)  # Method Not Allowed
    
def receive_choices_get_request(request):
    if request.method == 'GET':
        global Choices
        print("Received")

        # Send the choices list as JSON
        return JsonResponse({'choices': Choices[:-5]})
    else:
        return HttpResponse(status=405)  # Method Not Allowed
    
def receive_sliders_input_post_request(request):
    global refinePrompt

    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            choices = data.get('choices', [])
            print("Received choices:", choices)

            # Initialize an empty dictionary to store the choices and slider values
            choices_dict = {}

            # Iterate through the list of choices and slider values
            for choice_data in choices:
                choice = choice_data.get('choice')
                slider_value = choice_data.get('sliderValue') / 100 + 0.7
                # Add the choice and slider value to the dictionary
                choices_dict[choice] = slider_value

            # Generate the sentence with each choice and its weight in the desired format
            sentence_parts = []
            for choice, slider_value in choices_dict.items():
                slider_value_one_dec = round(slider_value, 1)
                sentence_parts.append(f"({choice}:{slider_value_one_dec}),")

            sentence = "".join(sentence_parts)

            refinePrompt = sentence

            # Perform actions with the choices
            print("Choices dictionary:")
            print(choices_dict)
            print("Generated sentence:")
            print(sentence)

            return JsonResponse({'choices_dict': choices_dict, 'sentence': sentence, 'message': 'Received choices successfully'}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)