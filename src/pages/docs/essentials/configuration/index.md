---
title: Configuration Reference
subtitle: Essentials
layout: docs.njk
description: Complete reference for all CampsiteJS configuration options in campsite.config.js.
---

> This is a comprehensive reference for all configuration options available in `campsite.config.js`. Use this guide to customize your CampsiteJS project to meet your specific needs.

## Configuration File

The `campsite.config.js` file lives at the root of your project and exports a configuration object:

```javascript
export default {
  siteName: "My Campsite",
  srcDir: "src",
  outDir: "public",
  // ... more options
};
```

---

## Basic Options

### `siteName`

**Type:** `string`  
**Default:** `"Campsite"`

The name of your website, available in templates as `site.name`.

```javascript
siteName: "My Awesome Site"
```

**Usage in templates:**
```njk
<title>{{ title }} | {{ site.name }}</title>
```

---

### `srcDir`

**Type:** `string`  
**Default:** `"src"`

The source directory containing your site content (pages, layouts, components, etc.).

```javascript
srcDir: "source"
```

**Directory structure:**
```
source/
  pages/
  layouts/
  partials/
```

---

### `outDir`

**Type:** `string`  
**Default:** `"public"`

The output directory for built files (where the static site is generated).

```javascript
outDir: "build"
```

**Common values:**
- `"public"` - Default, common for web hosting
- `"dist"` - Distribution
- `"build"` - Build output
- `"campfire"` - Custom (used by some Campsite sites)

---

### `staticDir`

**Type:** `string`  
**Default:** `"static"` (auto-derives to avoid collision with `outDir`)

The source directory for static assets (CSS, images, fonts, etc.) that get copied to `outDir` during build. Separate from your page source.

```javascript
staticDir: "assets"
```

**Auto-derivation logic:**
- If `outDir` is `"public"`, defaults to `"static"`
- If `outDir` is `"static"`, defaults to `"public"`
- Otherwise stays `"static"`

This prevents accidentally copying your build output into itself.

---

### `templateEngine`

**Type:** `string`  
**Default:** `"nunjucks"`  
**Options:** `"nunjucks"`, `"liquid"`, `"mustache"`

The primary template engine for your project.

```javascript
templateEngine: "liquid"
```

This sets the default file extension when creating new files with `make:` commands.

### `port`

**Type:** `number`  
**Default:** `4173`

The port used by `camper dev` and `camper serve` (and `preview`).

```javascript
port: 3000
```

---

## Content Options

### Markdown Support

Markdown is **always available** for `.md` files in `src/pages/` — they are automatically parsed for YAML frontmatter and rendered to HTML using Markdown-It.

For other template files (`.njk`, `.liquid`, `.mustache`, `.html`), you can opt-in to Markdown post-processing on a **per-page basis** using frontmatter:

```yaml
---
title: My Page
markdown: true
---
# Heading

This will be rendered as **Markdown** after the template engine processes it.
```

**Note:** The top-level `markdown: true` config option from older versions has been removed. Use the per-page frontmatter flag instead.

---

### `frontmatter`

**Type:** `boolean`  
**Default:** `true`

Controls whether YAML frontmatter is parsed from page files. Currently always enabled (this option is legacy and may be removed in a future version).

---

## Build Optimization

### `minifyCSS`

**Type:** `boolean`  
**Default:** `false`

Minify CSS files during production builds.

```javascript
minifyCSS: true
```

**Benefits:**
- Reduces file size by ~30-50%
- Removes whitespace and comments
- Optimizes CSS rules
- Faster page loads

---

### `minifyHTML`

**Type:** `boolean`  
**Default:** `false`

Minify HTML files during production builds.

```javascript
minifyHTML: true
```

**Benefits:**
- Reduces file size
- Removes whitespace, comments, and unnecessary attributes
- Faster page loads
- Better compression

---

### `cacheBustAssets`

**Type:** `boolean`  
**Default:** `false`

Add content hashes to CSS and JavaScript filenames for cache busting.

```javascript
cacheBustAssets: true
```

**Before:**
```
style.css
app.js
```

**After:**
```
style-2aecb09564.css
app-f8d4a21c3e.js
```

**Benefits:**
- Forces browser to download new versions
- Prevents stale cache issues
- Automatic filename updates in HTML

### Automatic `robots.txt` and `sitemap.xml`

If you do not provide `robots.txt` or `sitemap.xml` in your `staticDir`, CampsiteJS will **automatically generate** them during build:

- `robots.txt` with `User-agent: * Allow: /` and a sitemap reference
- `sitemap.xml` listing all generated HTML pages with lastmod dates

Place your own versions in `static/` to override.

---

## Photo Compression

### `compressPhotos`

**Type:** `boolean`  
**Default:** `false`

Enable automatic photo compression during builds.

```javascript
compressPhotos: true
```

See [Photo Compression](/docs/assets/photo-compression) for detailed guide.

---

### `compressionSettings`

**Type:** `object`

Configure photo compression behavior.

```javascript
compressionSettings: {
  quality: 80,
  formats: ['.webp', '.avif'],
  inputFormats: ['.jpg', '.jpeg', '.png'],
  preserveOriginal: true
}
```

#### `quality`

**Type:** `number`  
**Default:** `80`  
**Range:** `0-100`

Compression quality. Higher = better quality, larger files.

```javascript
quality: 85  // High quality
quality: 80  // Balanced (recommended)
quality: 70  // Smaller files
```

#### `formats`

**Type:** `array`  
**Default:** `['.webp']`  
**Options:** `['.webp', '.avif']`

Output formats to generate.

```javascript
formats: ['.webp']           // WebP only
formats: ['.avif']           // AVIF only
formats: ['.webp', '.avif']  // Both (recommended)
```

#### `inputFormats`

**Type:** `array`  
**Default:** `['.jpg', '.jpeg', '.png']`

Source image formats to process.

```javascript
inputFormats: ['.jpg', '.jpeg', '.png', '.tiff']
```

#### `preserveOriginal`

**Type:** `boolean`  
**Default:** `true`

Keep original images alongside compressed versions.

```javascript
preserveOriginal: true   // Keep originals
preserveOriginal: false  // Replace with compressed
```

---

## File Exclusion

### `excludeFiles`

**Type:** `array`  
**Default:** `[]`

Skip specific files when copying from `public/` directory.

```javascript
excludeFiles: [
  '.pdf',
  '*.zip',
  'draft-*',
  'README.md'
]
```

**Supported patterns:**
- Extensions: `.pdf`, `*.pdf`
- Exact names: `README.md`
- Wildcards: `draft-*`, `*-backup`

See [File Exclusion](/docs/essentials/file-exclusion) for detailed guide.

---

## Template Engines

### `integrations`

**Type:** `object`

Enable/disable template engines and JavaScript frameworks.

```javascript
integrations: {
  nunjucks: true,
  liquid: false,
  mustache: false,
  vue: false,
  alpine: false
}
```

#### Template Engines

- **`nunjucks`** - Mozilla's powerful templating engine
- **`liquid`** - Shopify's template language
- **`mustache`** - Logic-less templates

#### JavaScript Frameworks

- **`vue`** - Vue.js for interactive components (config flag for future use; include via CDN or npm manually for now)
- **`alpine`** - Alpine.js for lightweight interactivity (config flag for future use; include via CDN or npm manually for now)

**Note:** The `integrations` flags for Vue and Alpine currently control defaults in `init` and `make` scaffolding but do not auto-inject scripts or provide special component processing. You can still use them by including the libraries yourself.

---

## Hooks

### `hooks`

**Type:** `object`

Extend template engines with custom filters, globals, and functionality.

```javascript
hooks: {
  nunjucksEnv: (env) => {
    // Customize Nunjucks
  },
  liquidEnv: (liquid) => {
    // Customize Liquid
  }
}
```

See [Extending CampsiteJS](/docs/essentials/extending) for detailed guide.

#### `nunjucksEnv(env)`

Customize the Nunjucks environment.

```javascript
hooks: {
  nunjucksEnv: (env) => {
    // Add global variables
    env.addGlobal('currentYear', new Date().getFullYear());
    
    // Add custom filters
    env.addFilter('shout', (str) => str.toUpperCase() + '!!!');
  }
}
```

#### `liquidEnv(liquid)`

Customize the Liquid environment.

```javascript
hooks: {
  liquidEnv: (liquid) => {
    // Add custom filters
    liquid.registerFilter('shout', (str) => str.toUpperCase() + '!!!');
  }
}
```

---

## Complete Example

Here's a fully-configured `campsite.config.js`:

```javascript
export default {
  // Basic settings
  siteName: "My Awesome Site",
  srcDir: "src",
  outDir: "public",
  templateEngine: "nunjucks",
  
  // Build optimization
  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true,
  
  // Photo compression
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp', '.avif'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  },
  
  // File exclusion
  excludeFiles: [
    '.pdf',
    '.zip',
    'draft-*',
    '*-WIP.*',
    'README.md'
  ],
  
  // Template engines
  integrations: {
    nunjucks: true,
    liquid: true,
    mustache: false,
    vue: true,
    alpine: true
  },
  
  // Custom extensions
  hooks: {
    nunjucksEnv: (env) => {
      // Global variables
      env.addGlobal('currentYear', new Date().getFullYear());
      env.addGlobal('siteName', 'My Awesome Site');
      
      // Custom filters
      env.addFilter('shout', (str) => str.toUpperCase() + '!!!');
      
      env.addFilter('truncate', (str, length = 50) => {
        return str.length > length 
          ? str.substring(0, length) + '...' 
          : str;
      });
      
      env.addFilter('currency', (amount) => {
        return '$' + parseFloat(amount).toFixed(2);
      });
    },
    
    liquidEnv: (liquid) => {
      // Custom filters
      liquid.registerFilter('shout', (str) => str.toUpperCase() + '!!!');
      
      liquid.registerFilter('currency', (amount) => {
        return '$' + parseFloat(amount).toFixed(2);
      });
    }
  }
};
```

---

## Configuration by Project Type

### Blog/Content Site

```javascript
export default {
  siteName: "My Blog",
  srcDir: "src",
  outDir: "public",
  templateEngine: "nunjucks",

  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true,
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  },
  excludeFiles: ['draft-*'],
  integrations: {
    nunjucks: true,
    liquid: false,
    mustache: false,
    vue: false,
    alpine: false
  }
};
```

### Portfolio Site

```javascript
export default {
  siteName: "John Doe Portfolio",
  srcDir: "src",
  outDir: "public",
  templateEngine: "liquid",

  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true,
  compressPhotos: true,
  compressionSettings: {
    quality: 95,  // High quality for portfolio
    formats: ['.webp', '.avif'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  },
  excludeFiles: ['.psd', '.ai', 'original-*'],
  integrations: {
    nunjucks: false,
    liquid: true,
    mustache: false,
    vue: true,  // For gallery
    alpine: false
  }
};
```

### Documentation Site

```javascript
export default {
  siteName: "Product Docs",
  srcDir: "src",
  outDir: "docs",
  templateEngine: "nunjucks",

  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: false,  // Not needed for docs
  compressPhotos: false,   // Few images
  excludeFiles: ['*.map', 'README.md'],
  integrations: {
    nunjucks: true,
    liquid: false,
    mustache: false,
    vue: false,
    alpine: true  // For search/navigation
  }
};
```

### Corporate Site

```javascript
export default {
  siteName: "Acme Corp",
  srcDir: "src",
  outDir: "public",
  templateEngine: "nunjucks",

  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true,
  compressPhotos: true,
  compressionSettings: {
    quality: 85,
    formats: ['.webp', '.avif'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  },
  excludeFiles: [
    '.pdf',
    'internal-*',
    '*-confidential.*'
  ],
  integrations: {
    nunjucks: true,
    liquid: false,
    mustache: false,
    vue: true,
    alpine: true
  }
};
```

---

## Environment-Specific Configuration

You can create different configs for development and production:

### Using Environment Variables

```javascript
// campsite.config.js
const isDev = process.env.NODE_ENV === 'development';

export default {
  siteName: "My Site",
  srcDir: "src",
  outDir: isDev ? "dev-build" : "public",
  minifyCSS: !isDev,
  minifyHTML: !isDev,
  cacheBustAssets: !isDev,
  compressPhotos: !isDev
};
```

### Separate Config Files

**campsite.config.dev.js:**
```javascript
export default {
  siteName: "My Site [DEV]",
  outDir: "dev-build",
  minifyCSS: false,
  minifyHTML: false,
  cacheBustAssets: false,
  compressPhotos: false
};
```

**campsite.config.prod.js:**
```javascript
export default {
  siteName: "My Site",
  outDir: "public",
  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true,
  compressPhotos: true
};
```

---

## Validation Tips

### Check Your Config

```bash
camper check
```

This validates:
- Config file exists
- Required directories exist
- Dependencies are installed

### Test Your Build

```bash
# Development build
camper dev

# Production build
camper build

# Test production build
camper preview
```

---

## Additional Resources

- [Extending CampsiteJS](/docs/essentials/extending) - Custom hooks and filters
- [Photo Compression](/docs/assets/photo-compression) - Image optimization
- [File Exclusion](/docs/essentials/file-exclusion) - Skip files during build
- [CLI Commands](/docs/cli/commands) - All available commands

---

**Next Steps:**
- [Extending CampsiteJS](/docs/essentials/extending) - Add custom functionality
- [Collections](/docs/essentials/collections) - Work with data
- [Deploying](/docs/getting-started/deploying) - Launch your site
