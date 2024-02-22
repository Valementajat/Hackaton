# Quick Start Guide

## Requirements
- Docker Desktop
- Git
- VS Code
- Node.js

## Steps
1. **Download and Install Required Software:**
    - [Docker Desktop](https://www.docker.com/products/docker-desktop)
        - After installation, you may encounter a "Docker failed to initialize" error. Use a terminal to kill the Docker process and restart
        - You need to install wsl. Use CMD like Windows powershell to run:
        ```
        wsl --update
        ```
    - [Git](https://git-scm.com/)
    - [VS Code](https://code.visualstudio.com/)
    - [Node.js](https://nodejs.org/)


2. **Clone the Repository:**
    ```
    git clone <repository_url>
    ```
    Make sure to replace `<repository_url>` with the actual URL of the repository.

3. **Build and Run the Docker Environment:**
    Navigate to the root folder of the project in the terminal and run:
    ```
    docker-compose up --build
    ```

4. **Access the Environment:**
    After the environment has started, access it through your web browser using the following URL:
    ```
    localhost
    ```
    If it's not running on the default port, use the port specified, e.g., `localhost:80`.

## Notes
- Make sure that no other services are running on the ports that the project intends to use.
- Consult the project's documentation for any specific configurations or environment variables needed.
