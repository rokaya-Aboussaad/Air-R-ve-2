#!/bin/bash

# Start the backend in development mode
cd api || exit
echo "Starting the backend..."
npm start &
backend_pid=$!

# Wait for a few seconds to ensure the backend is up and running
sleep 5

# Start the frontend in development mode
cd ../client || exit
echo "Starting the frontend..."
npm start &

# Wait for frontend and backend to be running
wait $backend_pid

echo "Application is running. The backend is on http://localhost:8800 and the frontend on http://localhost:3000"

# Build the frontend for production
echo "Building the frontend for production..."
yarn build || npm run build

# Serve the production build (optional)
# npx serve -s build
