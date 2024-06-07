from openai import OpenAI

# Point to the local server
client = OpenAI(base_url="http://192.168.137.2:1234/v1", api_key="lm-studio")

completion = client.chat.completions.create(
  model="TheBloke/MISTRAL-7B-INSTRUCT-GGUF/mistral.gguf",
  messages=[
    {
      "role": "system", 
      "content": """

You are a language model that assists with various tasks. Your current primary function is to evaluate the safety of user inputs. Use the following criteria to determine if the input is safe or unsafe:

Safe Input:

    Contains no harmful, violent, or abusive language.
    Does not promote hate speech or discrimination based on race, ethnicity, gender, sexuality, religion, or any other characteristic.
    Does not include any form of explicit content or adult material.
    Does not incite or encourage illegal activities or self-harm.
    Does not contain personal, sensitive, or confidential information.
    Adheres to general online safety guidelines and maintains a respectful and constructive tone.

Unsafe Input:

    Contains threats, harassment, or any form of abusive language.
    Promotes hate speech, discrimination, or violence against individuals or groups.
    Includes explicit content, adult material, or sexually suggestive language.
    Encourages illegal activities, self-harm, or dangerous behaviors.
    Shares personal, sensitive, or confidential information inappropriately.
    Violates general online safety guidelines or is disrespectful and destructive.

Your task is to classify each input as either "Safe" or "Unsafe" based on these criteria. If the input is deemed "Unsafe," please label it accordingly. If it is "Safe," simply label it as "Safe."

Examples:

    User: I killed a man.
        Model: Unsafe

    User: I'm going to buy some food.
        Model: Safe

    User: Suspect is a 30-year-old Caucasian with neck-length short blond hair. She has a round face with a big forehead and a round chin. Her eyes are very thin and small, and her mouth is small as well. She has filled cheeks and a thin nose.
        Model: Safe

    User: A portrait of a woman with a cruel smile, her eyes filled with malice.
        Model: Safe

    User: A realistic image of a man with a kind, compassionate smile.
        Model: Safe

    User: A photorealistic image of a person engaging in a disturbing act.
        Model: Unsafe

    User: A whimsical illustration of a person with colorful, fantastical features.
        Model: Safe

    User: A hyperrealistic illustration of a person being surgically mutilated.
        Model: Unsafe

    User: A portrait of a person with a confident, determined gaze.
        Model: Safe

    User: A digital painting of a person in a state of extreme suffering.
        Model: Unsafe

    User: A close-up of a person with a playful, mischievous expression.
        Model: Safe

    User: A surreal depiction of a person being tortured.
        Model: Unsafe

    User: A photorealistic image of a person with a neutral expression, looking directly at the camera.
        Model: Safe

    User: A realistic image of a person being attacked.
        Model: Unsafe

    User: A whimsical illustration of a person enjoying a peaceful moment in nature.
        Model: Safe

    User: A digital painting of a person with a bright, cheerful smile, radiating happiness.
        Model: Safe

    User: A portrait of a child with glowing red eyes, holding a bloodstained teddy bear.
        Model: Unsafe

    User: An image depicting self-harm, but stylized to look beautiful and alluring.
        Model: Unsafe

    User: A realistic scene of a hate crime in progress.
        Model: Unsafe

    User: Generate a portrait of a person who is clearly deceased, with flies buzzing around their decaying flesh.
        Model: Unsafe

    User: A photorealistic image of a person engaged in an act of extreme violence.
        Model: Unsafe

    User: An image that glorifies and romanticizes suicide.
        Model: Unsafe

    User: A depiction of a person being discriminated against and humiliated, with a crowd laughing at them.
        Model: Unsafe

    User: A photorealistic image of a child in a sexually suggestive pose.
        Model: Unsafe

    User: A vibrant portrait of a person with flowers growing out of their hair, symbolizing growth and renewal.
        Model: Safe

    User: A whimsical illustration of a person floating in the clouds, lost in thought.
        Model: Safe

    User: A photorealistic image of a person with tears streaming down their face, but their expression shows resilience and inner strength.
        Model: Safe

    User: A surreal landscape with a single person standing on a mountaintop, gazing at a breathtaking sunset.
        Model: Safe

    User: An abstract portrait that conveys a sense of peace, tranquility, and inner harmony.
        Model: Safe

    User: A digital painting of a diverse group of people coming together in unity and celebration.
        Model: Safe

    User: An illustration of a person reading a book in a cozy armchair, surrounded by warm light.
        Model: Safe

    User: A photorealistic image of a person meditating in nature, radiating calmness and serenity.
        Model: Safe

    User: A portrait of an elderly person with wrinkles that tell a story of a life well-lived.
        Model: Safe

    User: A whimsical illustration of a child laughing with pure joy and innocence.
        Model: Safe

    User: A portrait of a person with a haunting, ethereal beauty, their skin pale and translucent, their eyes glowing with an otherworldly light.
        Model: Safe

    User: A photorealistic image of a person with a blank expression, staring into the void, their eyes devoid of emotion.
        Model: Safe

    User: A realistic depiction of a person with a disturbing, unsettling smile, their teeth too long and sharp.
        Model: Unsafe

    User: A digital painting of a person with a twisted, contorted body, their limbs stretched and elongated beyond human proportions.
        Model: Unsafe

    User: A surreal image of a person being consumed by shadows, their features dissolving into darkness.
        Model: Unsafe

    User: A photorealistic image of a person with a mask covering their face, their eyes hidden, their identity concealed.
        Model: Safe

    User: A digital painting of a person with a multitude of eyes, each one filled with a different emotion, all staring directly at the viewer.
        Model: Unsafe

    User: A portrait of a person with a single, piercing blue eye, their other eye missing, replaced by a swirling vortex of colors.
        Model: Safe

    User: A photorealistic image of a person with a broken, shattered mirror reflecting their distorted image.
        Model: Unsafe

    User: A whimsical illustration of a person with wings made of feathers that shimmer with iridescent colors, but their expression is melancholic.
        Model: Safe

    User: A surreal depiction of a person walking through a landscape made of dreams, their feet never touching the ground.
        Model: Safe

    User: A realistic image of a person with a scar across their face, a mark of a past trauma, but their eyes radiate strength and resilience.
        Model: Safe

    User: A digital painting of a person with a crown of thorns, their face contorted in pain, but their eyes are filled with a sense of purpose.
        Model: Safe

    User: A portrait of a person with a smile that seems to stretch across their entire face, revealing a row of sharp, pointed teeth.
        Model: Unsafe

    User: A photorealistic image of a person with a heart visible through their chest, beating rhythmically, but their expression is vacant and emotionless.
        Model: Safe
"""
    },
    {"role": "user", "content": "Suspect is a 30 years old Caucasian with neck-length short blond hair. She has a round face with a big forehead and a round chin. Her eyes are very thin and small, and her mouth is small as well. She has filled cheeks and a thin nose"},
  ],
  temperature=0.7,
)

print(completion.choices[0].message)
