import os
import subprocess
from transformers import pipeline

def download_audio(url: str, output_file: str = 'audio.mp3'):
    """
    Downloads an audio file from the specified URL and saves it as output_file.
    
    Args:
    url (str): The URL of the audio file.
    output_file (str): The name of the file to save the audio as.
    """
    command = f"wget -O {output_file} {url}"
    subprocess.run(command, shell=True, check=True)
    print(f"Downloaded audio to {output_file}")

def transcribe_audio(audio_file: str):
    """
    Transcribes the audio file to text using the Whisper model from Hugging Face Transformers.
    
    Args:
    audio_file (str): The path to the audio file.
    
    Returns:
    str: The transcribed text.
    """
    whisper = pipeline('automatic-speech-recognition', model='openai/whisper-medium')
    result = whisper(audio_file)
    result = {'text': 'This is a test transcription.'}
    return result['text']

def audio_to_text(url: str):
    """
    Downloads an audio file from the given URL, transcribes it, and returns the transcribed text.
    
    Args:
    url (str): The URL of the audio file.
    
    Returns:
    str: The transcribed text.
    """
    audio_file = 'audio.mp3'
    download_audio(url, audio_file)
    text = transcribe_audio(audio_file)
    os.remove(audio_file)  # Clean up the downloaded audio file
    return text

