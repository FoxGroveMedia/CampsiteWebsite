---
title: Welcome to Campsite
layout: base.njk
description: Cozy, fast static sites with Campsite.
---

<article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

# Welcome, camper

⛺ Campsite is a fresh new static site generator, pack light, pitch fast, and build sites with a cozy developer experience. Campsite supports Markdown, Nunjucks, Liquid, Vue, and Alpine.

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


___

> Have fun setting up your campsite! 🌲🏕️🔥 Ps. better docs are coming very soon.
>
> -Christophor S. Wilson, 
> Creator of Campsite
>
> [@FoxGroveMedia](https://github.com/FoxGroveMedia)

</article>