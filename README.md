1.2.2025 - Added new branch "with-apps" with two training apps.

# TsDevContainer

This repository provides a Docker-based development environment for a TypeScript React project, with integrated tools like Storybook, Playwright, and Zod. The setup automates the creation of a new React project using Vite, and configures the development container for Visual Studio Code.

## Features

- Automated setup of a React + TypeScript project using Vite
- Integrated Storybook for UI development
- Playwright for end-to-end testing
- Zod for schema validation
- Docker container configuration for seamless development with VS Code Remote - Containers

## Setup Instructions

### Prerequisites

- Docker
- Visual Studio Code with the Remote - Containers extension installed

### Steps

1. Clone the repository:
   git clone https://github.com/nn-develop/TsDevContainer.git
   cd TsDevContainer

2. Edit the create_new_project.sh script:
  Open the create_new_project.sh file in the root of the repository.
  Modify the PROJECT_NAME variable to set the desired project name.
  Adjust the PROJECT_NAME path if necessary to specify a custom directory.

3. Build and start the development container:
    Open the project folder in Visual Studio Code.
    VS Code should prompt you to reopen the folder in the container. Click "Reopen in Container."
    The Docker container will be built, and your development environment will be ready.

4. After the container is ready, the create_new_project.sh script will run automatically and set up the project as specified.

## Notes

  The project will be initialized with the react-ts template using Vite.
  Storybook, Playwright, and Zod will be installed as dependencies.
  The Storybook server will be set up to run on port 6006.

## Docker Container Details

The Docker container is based on the official node:current-bullseye image. It includes TypeScript, Storybook, and other necessary development tools.

### Exposed Ports
  Storybook: 6006

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the LICENSE file for details.
