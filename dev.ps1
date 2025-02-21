# Start both processes in the same terminal and capture PIDs
$backend = Start-Process -NoNewWindow -PassThru -FilePath "cmd.exe" -ArgumentList "/c cd backend && npm run start:dev"
$frontend = Start-Process -NoNewWindow -PassThru -FilePath "cmd.exe" -ArgumentList "/c cd frontend && npm run start -n"

# Function to clean up processes
function Cleanup {
    Write-Host "`nStopping applications..."
    Stop-Process -Id $backend.Id -Force -ErrorAction SilentlyContinue
    Stop-Process -Id $frontend.Id -Force -ErrorAction SilentlyContinue
    exit
}

# Wait for both processes and handle CTRL+C
try {
    Write-Host "Press CTRL+C to stop both applications..."
    Wait-Process -Id $backend.Id, $frontend.Id
} finally {
    Cleanup
}
