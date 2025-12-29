---
title: Installation
subtitle: Getting Started
layout: docs.njk
<!-- description: Welcome to the CampsiteJS documentation! -->
---

> This guide will walk you through the installation process and help you set up your first CampsiteJS static site. We'll cover the prerequisites, installation steps, and how to create your first site.

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- **Node.js**: CampsiteJS requires Node.js version 14 or higher. You can download it from [nodejs.org](https://nodejs.org/).
- **npm or yarn**: npm comes bundled with Node.js, but you can also use yarn as an alternative package manager. You can install yarn from [yarnpkg.com](https://yarnpkg.com/).
- **Git**: While not strictly necessary, having Git installed is recommended for version control and managing your CampsiteJS projects. You can download it from [git-scm.com](https://git-scm.com/).

### Installation Steps
To create your first CampsiteJS site, follow these steps:

1. **Install Campsite**: Use npm or yarn to install CampsiteJS globally.
   ```bash
   npm install -g campsitejs
   ```
2. **Create a New Site**: Run the following command to create a new CampsiteJS project.
    ```bash
    CampsiteJS create my-site
    ```
3. **Navigate to Your Site**: Change into your new site directory.
   ```bash
   cd my-site
   ```
4. **Start the Development Server**: Launch the development server to preview your site.
   ```bash
   CampsiteJS dev
   ```
5. **Build for Production**: When you're ready to deploy, build your site with:
   ```bash
   CampsiteJS build
   ```
   The output will be in the `./campfire/` folder, this can be changed in your `campsite.config.js` file.
