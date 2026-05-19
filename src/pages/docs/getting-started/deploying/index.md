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
*This command generates the static files for your site in your `outDir` (defaults to `./public`).*

### Deployment Paths

From here there are two paths you can take to deploy your site, depending on your preferred hosting platform.

### Path 1: Using Traditional Web Hosting

**cPanel, Plesk, or Traditional Web Hosting:** The simplest way is to upload the contents of your `outDir` (e.g. `./public`) to your web server's public directory (often `public_html` or `www`).

1. Run `camper build` (or `npm run build`).
2. Connect to your host using file manager or FTP.
3. Upload all files from your `outDir` (default `public/`) to the server's public folder.
4. Your site is live!


### Cloudflare Pages
1. Connect your Git repo in Cloudflare Pages.
2. Build command: `npm run build` (or `camper build`)
3. Build output directory: `public` (or your `outDir` from config)
4. Deploy.

### Netlify
1. New site from Git → connect repo.
2. Build command: `npm run build`
3. Publish directory: `public` (match your `outDir`)
4. Deploy.

### Vercel
1. New Project → import Git repo.
2. Build command: `npm run build`
3. Output directory: `public` (or your configured `outDir`)
4. Deploy. Vercel often auto-detects.

## Conclusion
Deploying your CampsiteJS site is easy with the variety of hosting options available. Choose the platform that best suits your needs and follow the steps outlined above to get your site live in no time!
