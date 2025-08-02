## Generate lyrics for songs

```
foreach ($file in Get-ChildItem -Path '.') { Write-Host $file.FullName; C:\\Tools\\ComfyUI_windows_portable\\lyric_gen\\GetLyrics.bat $file.FullName }
```