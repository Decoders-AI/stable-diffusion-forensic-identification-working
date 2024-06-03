# myapp/views.py
from django.http import HttpResponse, FileResponse
import requests
import base64
import os

# Code for forensic criminal sketching

# Define the URL and the payload to send.
url = "http://127.0.0.1:7860"

payload = {
    "prompt": "An Asian woman in her 40s with light, smooth skin with oval face shape. Her hair is black and short, going down to her chin in a bob cut with dark eyebrows. Her hair swipes to the side across her short forehead. She has slanted eyes that are dark brown in color. Her nose is wide and round. She has thin lips and her ears are flat against her head. Her cheeks are filled out and her chin comes to rounded point. Suspect wears rectangular, black-framed glasses that have rounded corners.",
    "steps": 10
}

def receive_get_request(request):
    if request.method == 'GET':
        print("Received")
        # Send the payload to the specified URL through the API.
        # response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
        # r = response.json()

        # # Ensure the response contains the expected data
        # if 'images' in r and len(r['images']) > 0:
        #     image_data = r['images'][0]
        #     print(image_data)
        #     print("Image generated successfully!")

        #     # Save the data to a text file
        #     with open("output.txt", 'w') as f:
        #         f.write(image_data)
            
            # Decode and save the image
        image_path = "output.png"
            # with open(image_path, 'wb') as f:
            #     f.write(base64.b64decode(image_data))
            
            # Return the image as the response
        return HttpResponse(open(image_path, 'rb'), content_type='image/png')
        # else:
        #     return HttpResponse("Image generation failed", status=500)
    else:
        return HttpResponse(status=405)  # Method Not Allowed
