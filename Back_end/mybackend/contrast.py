import cv2
import numpy as np

def decrease_sharpness(image_path, kernel_size=3):
  """Decreases the sharpness of an image using averaging.

  Args:
      image_path: Path to the image file.
      kernel_size: Size of the averaging kernel (default 3).

  Returns:
      The image with decreased sharpness.
  """

  # Read the image
  image = cv2.imread(image_path)

  # Check if image is read successfully
  if image is None:
    print("Failed to read image:", image_path)
    return

  # Create averaging kernel
  kernel = np.ones((kernel_size, kernel_size), np.float32) / (kernel_size * kernel_size)

  # Apply averaging filter
  blurred_image = cv2.filter2D(image, -1, kernel)

  return blurred_image

# Example usage
image_path = "output_0.png"
blurred_image = decrease_sharpness(image_path,1)

# You can display or save the blurred_image here
cv2.imshow("Blurred Image", blurred_image)
cv2.waitKey(0)
cv2.destroyAllWindows()