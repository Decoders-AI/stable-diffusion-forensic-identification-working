## Audio to Text Process in Backend Server Side

Note: Add the Whisper-Medium model from Hugging Face to the folder `whisper-medium`.

1. **Install git-lfs**
   - Make sure you have git-lfs installed (https://git-lfs.com)
   - Command: `git lfs install`

2. **Clone Whisper-Medium Model**
   - Clone the Whisper-Medium model from Hugging Face to the folder `whisper-medium`
   - Command: `git clone https://huggingface.co/openai/whisper-medium`

At finally, folder structure in `audio2txt` will be like:

```
audio2txt/
  ├── init.py
  ├── audio2text.py
  ├── README.md
  └── whisper-medium/
```
