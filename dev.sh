#!/bin/bash

# Start Angular app in the background
(cd frontend && npm run watch -- -n) &
FRONTEND_PID=$!

# Start NestJS app in the background
(cd backend && npm run start:dev) &
BACKEND_PID=$!

# Function to clean up processes on exit
cleanup() {
    echo "Stopping applications..."
    kill $FRONTEND_PID $BACKEND_PID
    wait $FRONTEND_PID $BACKEND_PID 2>/dev/null
    exit 0
}

# Trap SIGINT (CTRL+C) to stop both processes
trap cleanup SIGINT

# Keep script running to wait for both processes
echo "Press CTRL+C to stop both applications..."
wait $FRONTEND_PID $BACKEND_PID
