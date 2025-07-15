# OLLAMA_CONTEXT_LENGTH=8192 ollama serve
# set OLLAMA_API_BASE="http://192.168.1.71:11434"

$Env:OLLAMA_API_BASE = "http://192.168.1.71:11434"
# ~\.local\bin\aider --model ollama_chat/qwen3:8b
# ~\.local\bin\aider --model ollama_chat/gemma3n
# ~\.local\bin\aider --model ollama_chat/gemma3:12b
~\.local\bin\aider --model ollama_chat/deepseek-coder:6.7b