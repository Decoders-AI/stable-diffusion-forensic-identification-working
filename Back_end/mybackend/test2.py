from fastapi import FastAPI, HTTPException
from PIL import Image
from io import BytesIO

app = FastAPI()

@app.get("/image")
async def get_image():
    try:
        # Load the image using PIL
        image_path = "output.png"  # Assuming the image is named "output.png" and it's in the same folder as your script
        image = Image.open(image_path)

        # Convert the image to bytes
        img_byte_array = BytesIO()
        image.save(img_byte_array, format="PNG")

        # Return the image
        return img_byte_array.getvalue()
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Image not found")
