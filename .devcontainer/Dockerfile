# Use the official Node.js image
FROM node:current-bullseye

# Set working directory to /workspaces/js_experimental
# WORKDIR /workspaces/js_experimental

# Install TypeScript globally
RUN npm install -g typescript

# Expose port 6006 for Storybook (the default port for running Storybook)
EXPOSE 6006

# Expose port 5173 for Vite (the default port for Vite development server)
EXPOSE 5173