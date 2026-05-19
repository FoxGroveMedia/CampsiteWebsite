---
title: Working with Assets
subtitle: Assets
layout: docs.njk
description: Learn how to work with CSS, JavaScript, images, and other static files in your CampsiteJS project.
---

CampsiteJS makes it easy to include CSS, JavaScript, images, and other static assets without any complex configuration.

## Static Assets Directory

By default, CampsiteJS looks for static files in the `static/` folder at the root of your project.

Any files placed in `static/` are automatically copied into your output directory (`public/` by default) when you run `camper build`.

Example project structure:

```
my-site/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── hero.jpg
├── src/
│   ├── pages/
│   └── layouts/
└── campsite.config.js
```

During build, everything in `static/` will be available at the root of your site (`/style.css`, `/images/hero.jpg`, etc.).

### Customizing the Static Directory

You can change the source folder using the `staticDir` option:

```javascript
export default {
  staticDir: "assets",   // use an "assets" folder instead of "static"
  outDir: "dist"
};
```

## Adding CSS

The simplest and most reliable way to add CSS is to place it in your `static/` folder and link it in your layout file.

**In `src/layouts/base.njk`:**

```html
<head>
  <link rel="stylesheet" href="/style.css">
</head>
```

**Recommended folder structure:**

```
static/
└── css/
    └── main.css
```

Then link it as `/css/main.css`.

You can also use multiple stylesheets or organize by component.

## Adding JavaScript

JavaScript works the same way as CSS.

Place your scripts in `static/js/` and include them in your layout:

```html
<script src="/js/main.js"></script>
```

For scripts that need to run after the DOM loads, use the `defer` attribute:

```html
<script src="/js/main.js" defer></script>
```

## Using External Libraries and Frameworks

CampsiteJS does not force you to use any particular CSS or JavaScript framework. You are free to use whatever you prefer.

### Recommended Approach: CDN (Simplest)

For most projects, the easiest way to use popular libraries is to include them via CDN directly in your layout.

**Alpine.js (lightweight reactivity):**

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

**Tailwind CSS (via Play CDN - great for prototyping):**

```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Bootstrap:**

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
```

**Vue.js:**

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
```

Add these in the `<head>` or before the closing `</body>` tag of your main layout.

### Using npm Packages (Advanced)

If you want to use a proper build process (recommended for larger projects), you can:

1. Install packages with npm
2. Use a tool like Vite, esbuild, or Tailwind CLI
3. Output the final CSS/JS files into your `static/` folder

CampsiteJS will pick them up automatically on the next build.

## Working with Images and Media

Place images, fonts, videos, and other static media in your `static/` directory (or your configured `staticDir`). They will be copied to the root of your built site.

Reference them using root-relative paths:

```html
<img src="/images/hero.jpg" alt="Hero">
<link rel="stylesheet" href="/fonts/inter.woff2">
```

### Automatic Image Optimization

CampsiteJS can automatically optimize your photos during the build by converting them to modern formats like **WebP** and **AVIF**. This often reduces image file sizes by 30–70% with little to no visible quality loss.

To enable it, add this to your `campsite.config.js`:

```javascript
export default {
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp', '.avif'],
    preserveOriginal: true
  }
};
```

For full details on configuration, using the `<picture>` element, and best practices, see the [Photo Compression](/docs/assets/photo-compression) guide.

## Excluding Files from the Build

Sometimes you want to keep certain files in your `static/` folder but prevent them from being copied to the final site (drafts, source files, large assets, etc.).

Use the `excludeFiles` option in `campsite.config.js`:

```javascript
export default {
  excludeFiles: [
    '.DS_Store',
    '*.psd',
    'drafts/*',
    '**/*.map'
  ]
};
```

See the [File Exclusion](/docs/essentials/file-exclusion) guide for more patterns and examples.

## Best Practices

- Keep your `static/` folder organized (use `css/`, `js/`, `images/`, `fonts/` subfolders)
- Prefer root-relative paths (`/style.css`) over relative paths
- Use `defer` on non-critical scripts
- For large projects, consider adding a simple build step that outputs to `static/`
- The `static/` folder is the single source of truth for everything that should be publicly accessible

This approach keeps things simple for beginners while remaining flexible enough for complex sites.