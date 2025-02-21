# Start both processes and keep them in the same terminal
$frontend = Start-Process -NoNewWindow -PassThru -FilePath "cmd.exe" -ArgumentList "/c cd frontend && npm run watch"
$backend = Start-Process -NoNewWindow -PassThru -FilePath "cmd.exe" -ArgumentList "/c cd backend && npm run start:dev"

# Trap CTRL+C and kill both processes
try {
    Write-Host "Press CTRL+C to stop both applications..."
    Wait-Process -Id $frontend.Id, $backend.Id
} finally {
    Write-Host "Stopping applications..."
    Stop-Process -Id $frontend.Id -Force
    Stop-Process -Id $backend.Id -Force
}
