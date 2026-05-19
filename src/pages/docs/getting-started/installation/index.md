---
title: Installation
subtitle: Getting Started
layout: docs.njk
<!-- description: Welcome to the CampsiteJS documentation! -->
---

> This guide will walk you through the installation process and help you set up your first CampsiteJS static site. We'll cover the prerequisites, installation steps, and how to create your first site.

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- **Node.js**: CampsiteJS requires Node.js version 18 or higher. You can download it from [nodejs.org](https://nodejs.org/).
- **npm, pnpm, yarn or bun**: npm comes bundled with Node.js; pnpm/yarn/bun are also supported (auto-detected in init).
- **Git**: While not strictly necessary, having Git installed is recommended for version control and managing your CampsiteJS projects. You can download it from [git-scm.com](https://git-scm.com/).

### Quick Start (Recommended)

The easiest way to create a new CampsiteJS project:

```bash
npm create campsitejs@latest my-site
cd my-site
npm install
camper dev
```

This uses `create-campsitejs` to scaffold a new project with `campsite.config.js`, folders, and starter files.

### Alternative: Global CLI

For the `camper` command available everywhere:

```bash
npm install -g basecampjs
```

Then in any folder:

```bash
camper init
npm install
camper dev
```

### After Scaffolding

Your project will have scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "camper dev",
    "build": "camper build",
    "serve": "camper serve",
    "preview": "camper preview"
  }
}
```

- `camper dev` — start dev server (http://localhost:4173)
- `camper build` — production build to `public/` (or your `outDir`)
- `camper preview` — build + serve production version

**Configuration:** Edit `campsite.config.js` to set `outDir`, `templateEngine`, `integrations`, hooks, etc. See the [Configuration Reference](/docs/essentials/configuration).

### Manual Setup (Advanced)

If you prefer not to use the scaffolder, create the files manually:

1. `npm init -y && npm install basecampjs`
2. Create `campsite.config.js` with `export default { siteName: "My Site", ... }`
3. Create `src/pages/index.md`, `src/layouts/base.njk`, `static/style.css`
4. Add scripts and run `camper dev`

### Next Steps

- **[CLI Reference](/docs/cli)** — All `camper` commands
- **[Configuration](/docs/essentials/configuration)** — Full options
- **[Deploying](/docs/getting-started/deploying)** — Host your site

<a href="/docs/getting-started/deploying" class="btn"><svg class="h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M121 352L224.5 352C259.8 352 288.5 380.7 288.5 416L288.5 519.5C288.5 544.4 315.6 559.7 337 546.9L425.2 494C439.7 485.3 448.5 469.7 448.5 452.8L448.5 357.8C577.4 281.8 583.9 168.3 572.8 92.4C570.9 79.6 560.9 69.6 548.1 67.7C472.2 56.6 358.7 63.1 282.6 192L187.6 192C170.7 192 155.1 200.8 146.4 215.3L93.6 303.5C80.8 324.9 96.1 352 121 352zM448.5 144C475 144 496.5 165.5 496.5 192C496.5 218.5 475 240 448.5 240C422 240 400.5 218.5 400.5 192C400.5 165.5 422 144 448.5 144zM216.9 537.6C248.4 506.1 248.4 455.1 216.9 423.6C185.4 392.1 134.4 392.1 102.9 423.6C71.6 454.9 65.4 515.6 64.6 550C64.2 564.6 75.8 576.2 90.5 575.9C125 575.1 185.6 568.9 216.9 537.6zM176.3 505.6C166.2 515.7 147.8 518.6 135 519.3C127 519.8 120.7 513.4 121.1 505.4C121.8 492.6 124.8 474.2 134.8 464.1C146.2 452.7 164.8 452.7 176.2 464.1C187.6 475.5 187.6 494.1 176.2 505.5z"/></svg><span>Deployment Guide</span></a>