# This file contains the function to transcribe an audio file to text using the Whisper model from Hugging Face Transformers.
from transformers import pipeline


def transcribe_audio(audio_file: str):
    """
    Transcribes the audio file to text using the Whisper model from Hugging Face Transformers.
    
    Args:
    audio_file (str): The path to the audio file.
    
    Returns:
    str: The transcribed text.
    """
    model_dir = "model/whisper-medium" # Specify the local directory where the model files are stored 
    
    #Modify the pipeline creation to load from local directory
    whisper = pipeline(
        'automatic-speech-recognition', 
        model=model_dir,  # Specify the local directory where the model files are stored
        device=0  # Specify the device if you want, 0 for CPU, -1 for GPU
    )
    result = whisper(audio_file)
    #result = {'text': 'This is a test transcription.'} # For testing purposes
    return result['text']
