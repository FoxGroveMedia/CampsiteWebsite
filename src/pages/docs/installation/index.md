---
title: Installation
subtitle: Getting Started
layout: docs.njk
<!-- description: Welcome to the Campsite documentation! -->
---

> This guide will walk you through the installation process and help you set up your first Campsite static site. We'll cover the prerequisites, installation steps, and how to create your first site.

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- **Node.js**: Campsite requires Node.js version 14 or higher. You can download it from [nodejs.org](https://nodejs.org/).
- **npm or yarn**: npm comes bundled with Node.js, but you can also use yarn as an alternative package manager. You can install yarn from [yarnpkg.com](https://yarnpkg.com/).
- **Git**: While not strictly necessary, having Git installed is recommended for version control and managing your Campsite projects. You can download it from [git-scm.com](https://git-scm.com/).

### Installation Steps
To create your first Campsite site, follow these steps:

- **Install Campsite**: Use npm or yarn to install Campsite globally.
   ```bash
   npm install -g campsite
   ```
- **Create a New Site**: Run the following command to create a new Campsite project.
   ```bash
   campsite create my-site
   ```
- **Navigate to Your Site**: Change into your new site directory.
   ```bash
   cd my-site
   ```
- **Start the Development Server**: Launch the development server to preview your site.
   ```bash
   campsite dev
   ```
- **Build for Production**: When you're ready to deploy, build your site with:
   ```bash
   campsite build
   ```
   The output will be in the `./campfire/` folder, this can be changed in your `campsite.config.js` file.
