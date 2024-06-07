from django.http import HttpResponse
import requests
import base64
import json

# Define the prompt here
prompt = "a man with a beard and a mustache wearing a suit and tie, looking at the camera, with a serious expression, in a professional setting, with a plain background, photo, portrait, face, looking at viewer, plain background"

def fetch_and_save_image():

    with open("input.png", "rb") as file:
        input =  base64.b64encode(file.read()).decode()
    
    with open("pose.jpg", "rb") as file:
        pose =  base64.b64encode(file.read()).decode()

    # Define the URL for the API
    url = "http://127.0.0.1:7860/sdapi/v1/img2img"
    
    # Define the payload for the API request
    payload = {
        "prompt": "30 years old Caucasian woman, oval face, chestnut-brown long wavy hair, almond-shaped hazel eyes, straight nose, full lips" + ", photo, portrait, face, looking at viewer, plain background",
        "steps": 5,
        "batch_count" : 1,
        "batch_size": 2,  # Single image
        "n_iter": 1,
        "seed": -1,
        "negative_prompt": "worst quality, low quality, low res, blurry, text, watermark, logo, banner, extra digits, cropped, jpeg artifacts, error, sketch, duplicate, monochrome, geometry",
        "init_images": [
                            input
                        ],
        # "alwayson_scripts": {
        #     "controlnet": {
        #         "args": [
        #             {
        #                 "input_image": pose,
        #                 "model": "control_v11p_sd15_openpose [cab727d4]",
        #                 "module": "openpose",
        #                 "resize_mode":1,
        #                 "control_mode":0,
        #                 "weight":1,
        #             },
        #         ]
        #     }
        # },
    }

    # Send the request to the API
    response = requests.post(url, json=payload)
    r = response.json()

    print(len(r['images']))

    #save r in a text file
    with open("response.txt", "w") as file:
        file.write(json.dumps(r))

    # Check if the response contains the expected data
    if 'images' in r and len(r['images']) == 2:
        # Decode and save the image
        image_data = r['images'][0]
        image_path = "output.png"
        with open(image_path, 'wb') as f:
            f.write(base64.b64decode(image_data))
        print("Image generated and saved successfully")
    else:
        print("Image generation failed")

# # Call the function to fetch and save the image
# for i in range(10):
fetch_and_save_image()
    