#!/bin/bash

# Enable exit on error
set -e

# Define the project name and directory
PROJECT_NAME="simple-app"
PROJECT_DIR="/workspaces/js_experimental/$PROJECT_NAME"

# Check if package.json exists to avoid project recreation
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    echo "Project '$PROJECT_NAME' does not exist, creating a new one..."

    # Create the project with Vite
    npm init vite@latest $PROJECT_NAME -- --template react-ts
    
    # Check if the project directory was created successfully
    if [ ! -d "$PROJECT_NAME" ]; then
        echo "Failed to create project directory. Exiting."
        exit 1
    fi

    # Change to the project directory
    cd $PROJECT_NAME

    # Install dependencies: Zod
    npm install --save zod

    # Install development dependencies: Storybook
    npm install --save-dev @storybook/react

    # Install Playwright
    npm install playwright

    # Initialize (and install) Storybook
    npx storybook init

else
    echo "Project already exists, skipping creation."
fi

# Start Storybook server with specified port and prevent auto-opening browser
echo "Starting Storybook on port 6006 without auto-opening browser"
cd $PROJECT_DIR
npm run storybook -- -p 6006 --no-open