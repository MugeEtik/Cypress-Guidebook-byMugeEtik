# 01 - Getting Started: Setup & Installation ⚙️

This section documents the initial environment configuration and the very first steps taken to launch Cypress.

## 🛠️ Environment Setup
To ensure a stable testing environment, I followed these steps:
- **Node.js**: Installed the latest LTS version.
- **Project Init**: Run `npm init -y` to create the project backbone.
- **Cypress Installation**: Installed via `npm install cypress --save-dev`.

## 📂 Understanding the Folder Structure
- **cypress/e2e**: The home for all test files (specs).
- **cypress/fixtures**: Storage for static data (JSON files).
- **cypress/support**: Custom commands and global configurations.

> **NOTE:** I organized the `e2e` folder into numbered sub-folders (01, 02, 03) to create a clear learning roadmap for anyone reviewing this repository.