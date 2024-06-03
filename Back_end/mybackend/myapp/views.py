# myapp/views.py
from django.http import HttpResponse, FileResponse
import requests
import base64
import os

from django.core.files.storage import FileSystemStorage
from django.views.decorators.csrf import csrf_exempt
from audio2txt import audio2text

# Define the URL and the payload to send.
url = "http://127.0.0.1:7860"

# Load the image to be used as the input for the controlnet
img_path = os.path.join(os.path.dirname(__file__), 'control.jpg')
with open(img_path, 'rb') as f:
    img = base64.b64encode(f.read()).decode('utf-8')

payload = {
    "prompt": "An Asian woman in her 40s with light, smooth skin with oval face shape. Her hair is black and short, going down to her chin in a bob cut with dark eyebrows. Her hair swipes to the side across her short forehead. She has slanted eyes that are dark brown in color. Her nose is wide and round. She has thin lips and her ears are flat against her head. Her cheeks are filled out and her chin comes to rounded point. Suspect wears rectangular, black-framed glasses that have rounded corners.",
    "steps": 10,
    "batch_size": 3,  # Change batch size to 3
    "n_iter": 1,
    "alwayson_scripts": {
        "controlnet": "openpose"
    },
    "controlnet_input_image": [img],
    "controlnet_module": 'openpose',
    "controlnet_model": 'control_sd15_openpose [fef5e48e]',
}

def receive_get_request(request):
    if request.method == 'GET':
        print("Received")
        # Send the payload to the specified URL through the API.
        response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
        r = response.json()

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
    

@csrf_exempt
def audiototext(request):
    # Check if the request has a file under the 'audio' key
    if 'audio' in request.FILES:
        audio_file = request.FILES['audio']
        # Save the file
        fs = FileSystemStorage()
        filename = fs.save(audio_file.name, audio_file)
        saved_file_path = fs.path(filename)
        
        try:
            # Transcribe audio and get the result
            transcribed_text = audio2text.transcribe_audio(saved_file_path)

            # Delete the saved file
            os.remove(saved_file_path)

            return HttpResponse(transcribed_text, status=200)
        except Exception as e:
            # If an error occurs during transcription or file deletion, return an error response
            return HttpResponse("Error processing audio: {}".format(str(e)), status=500)
    else:
        return HttpResponse("No audio file found in the request.", status=400)