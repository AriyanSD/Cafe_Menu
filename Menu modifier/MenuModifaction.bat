@echo off
cd %~dp0
start python -m http.server 8000
timeout /t 2 > nul
start http://localhost:8000/ModifyForm.html
