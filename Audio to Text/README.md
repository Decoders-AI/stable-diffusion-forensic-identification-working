# Stable Diffusion Based Criminal Face Generation Platform for Forensic Identification

This platform uses a Stable Diffusion model for generating criminal faces based on forensic descriptions. As part of this process, we utilize OpenAI's Whisper-medium model to transcribe audio input into text, which then serves as a prompt for the face generation model.

### Audio to Text

This directory contains the code for converting audio input into text using OpenAI's Whisper-medium model.

#### Files:

- `audio2text.py`: This script downloads an audio file from a given URL, transcribes it using the Whisper model, and returns the transcribed text.

- `audio2text_Whisper.ipynb`: A Jupyter notebook version of the audio transcription process, allowing for step-by-step execution and experimentation.

- `requirements.txt`: A list of Python dependencies required to run the audio transcription script and notebook.
