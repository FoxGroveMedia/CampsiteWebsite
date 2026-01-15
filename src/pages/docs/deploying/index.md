---
title: Deploying
subtitle: Getting Started
layout: docs.njk
description: Learn how to deploy your CampsiteJS site to various hosting platforms, including step-by-step guides for popular services.
---

> Deploying your CampsiteJS site is a straightforward process. This guide will walk you through the steps to deploy your static site to popular hosting platforms such as Cloudflare, Netlify, Vercel, GitHub Pages, and Bitbucket Pages.

## Preparing Your Site for Deployment
Before deploying, ensure that your site is built and ready for production. Run the following command in your terminal:
```bash
npm run build
```
*This command generates the static files for your site in the `./campsite` directory.*

## Deployment Options

### Cloudflare Pages
1. Log in to your Cloudflare account and navigate to the Pages section.
2. Click on "Create a Project" and connect your Git repository.
3. Set the build command to `npm run build` and the build output directory to `./campsite`.
4. Click "Save and Deploy" to start the deployment process.

### Netlify
1. Log in to your Netlify account and click on "New site from Git".
2. Connect your Git repository and select the branch you want to deploy.
3. Set the build command to `npm run build` and the publish directory to `./campsite`.
4. Click "Deploy site" to initiate the deployment.

### Vercel
1. Log in to your Vercel account and click on "New Project".
2. Import your Git repository and select the appropriate settings.
3. Set the build command to `npm run build` and the output directory to `./campsite`.
4. Click "Deploy" to launch your site.

### GitHub Pages
1. Push your built site to a branch in your GitHub repository (e.g., `gh-pages`).
2. In your repository settings, navigate to the "Pages" section.
3. Select the branch you pushed your site to and set the folder to `/ (root)`.
4. Save the settings, and your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

### Bitbucket Pages
1. Push your built site to a branch in your Bitbucket repository (e.g., `gh-pages`).
2. In your repository settings, navigate to the "Pages" section.
3. Select the branch you pushed your site to and set the folder to `/ (root)`.
4. Save the settings, and your site will be live at `https://<your-username>.bitbucket.io/<your-repo-name>/`.

## Conclusion
Deploying your CampsiteJS site is easy with the variety of hosting options available. Choose the platform that best suits your needs and follow the steps outlined above to get your site live in no time!
