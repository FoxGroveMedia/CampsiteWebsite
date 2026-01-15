---
title: Deploying
subtitle: Getting Started
layout: docs.njk
description: Learn how to deploy your CampsiteJS site to various hosting platforms, including step-by-step guides for popular services.
---

## Preparing Your Site for Deployment

Deploying your CampsiteJS site is a straightforward process. This guide will walk you through the steps to deploy your static site to popular hosting platforms such as Cloudflare, Netlify, and Vercel.

Before deploying, ensure that your site is built and ready for production. Run the following command in your terminal:

```bash
npm run build
```
*This command generates the static files for your site in the `./campsite` directory.*

### Deployment Paths

From here there are two paths you can take to deploy your site, depending on your preferred hosting platform.

### Path 1: Using Traditional Web Hosting

**cPanel, Plesk, or Traditional Web Hosting:** Probably the simplest way to deploy your CampsiteJS site is to use traditional web hosting services. You can use the panel's built in file manager or an FTP client to upload the contents of the `./campsite` directory to your web server's public directory (often named `public_html` or `www`).

1. Connect to your web hosting account using the file manager or an FTP client.
2. Navigate to the public directory of your website.
3. Upload all files and folders from the `./campsite` directory to the public directory.
4. Once the upload is complete, your site should be live and accessible via your domain.


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

## Conclusion
Deploying your CampsiteJS site is easy with the variety of hosting options available. Choose the platform that best suits your needs and follow the steps outlined above to get your site live in no time!
