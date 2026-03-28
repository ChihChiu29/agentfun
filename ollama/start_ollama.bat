@echo off
title Ollama Server 0.0.0.0
set OLLAMA_HOST=0.0.0.0
cmd /k ollama.exe serve
