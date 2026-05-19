---
title: Commands Reference
subtitle: CLI Reference
layout: docs.njk
description: Detailed reference for all CampsiteJS CLI commands with examples and options.
---

<a id="help-and-version"></a>

## Help & Version

### `camper --help` / `camper -h`

Shows comprehensive help with all commands, examples, and descriptions.

```bash
camper --help
```

**Output includes:**
- All available commands organized by category
- Usage examples for each command
- Command aliases and shortcuts
- Tips for getting started

---

### `camper --version` / `camper -v`

Displays the current version of basecampjs installed.

```bash
camper --version
# Output: 0.0.8
```

---

<a id="project-initialization"></a>

## Project Initialization

### `camper init`

Initializes Campsite in the current directory. This command sets up a minimal project structure for an existing directory.

```bash
camper init
```

**What it creates:**
- `src/pages/` - Directory for page content
- `src/layouts/` - Directory for layout templates
- `static/` - Directory for static assets (CSS, images, etc.)
- `campsite.config.js` - Configuration file
- `package.json` - Node.js dependencies (with `basecampjs`)
- `.gitignore` - Git ignore rules (ignores `public/`)
- Sample page (`src/pages/index.md`) and basic layout (`src/layouts/base.njk`)
- Basic CSS in `static/style.css`

**Features:**
- Detects if already initialized and warns you
- Creates sensible defaults based on detected template engine
- Non-destructive (won't overwrite existing files)

**Example output:**
```
🏕️ Initializing Campsite in current directory...
✅ Created src/pages/
✅ Created src/layouts/
✅ Created static/
✅ Created campsite.config.js
✅ Created package.json
✅ Created .gitignore
✅ Created src/pages/index.md
✅ Created src/layouts/base.njk
✅ Created static/style.css

🌲 Campsite initialized! Run 'camper dev' to start.
```

---

<a id="development-commands"></a>

## Development Commands

### `camper dev`

Starts the development server with hot reloading. Watches `src/` and `public/` directories for changes.

```bash
camper dev
```

**Features:**
- Hot module reloading
- Auto-rebuild on file changes
- Live browser refresh
- Development-optimized builds (faster, unminified)
- Detailed error messages

**Default server:**
- URL: `http://localhost:4173` (configurable via `port` in config)
- Configurable port via config file

**Example output:**
```
🏕️ Starting Campsite dev server...
🔥 Watching for changes in src/ and public/
✅ Dev server running at http://localhost:4173
🌲 Happy camping!
```

---

### `camper build`

Creates an optimized production build. Outputs to your configured `outDir` (defaults to `public/`).

```bash
camper build
```

**Production optimizations:**
- Minified HTML (if `minifyHTML: true`)
- Minified CSS (if `minifyCSS: true`)
- Cache-busted assets (if `cacheBustAssets: true`)
- Optimized file structure
- Static file copying

**Example output:**
```
🏕️ Building your Campsite...
📝 Processing pages... (23 pages)
🎨 Processing layouts... (5 layouts)
🧩 Processing partials... (8 partials)
📦 Processing collections... (3 collections)
✅ Build complete! Output: ./public/
🌲 Ready to deploy!
```

---

### `camper serve`

Serves the built site from your `outDir` directory (defaults to `public/`) on `http://localhost:4173`.

```bash
camper serve
```

**Use cases:**
- Preview production build locally
- Test optimizations and minification
- Verify cache-busting
- Check relative paths

**Example output:**
```
🏕️ Serving built site from public/
🔥 Server running at http://localhost:4173
🗺️ Press Ctrl+C to stop
```

---

### `camper preview`

Combines `build` + `serve` for quick production testing.

```bash
camper preview
```

**Equivalent to:**
```bash
camper build && camper serve
```

---

<a id="utility-commands"></a>

## Utility Commands

### `camper clean`

Removes the `outDir` folder (defaults to `public/`) for fresh builds.

```bash
camper clean
```

**Use cases:**
- Clean up before deployment
- Resolve build caching issues
- Free up disk space

**Example output:**
```
🏕️ Cleaning build directory...
✅ Removed public/
🌲 Fresh start ready!
```

---

### `camper check`

Validates project structure, configuration, and dependencies.

```bash
camper check
```

**Checks performed:**
- `campsite.config.js` exists and is valid
- Required directories exist (`src/pages`, `src/layouts`)
- Pages directory has content
- Layouts directory has templates
- `package.json` exists
- Dependencies are installed

**Example output:**
```
🏕️ Checking Campsite project...
✅ campsite.config.js found
✅ src/pages/ directory exists (23 pages)
✅ src/layouts/ directory exists (5 layouts)
✅ package.json found
⚠️  Tip: Add src/partials/ for reusable components
✅ Project structure looks good!
🌲 Happy camping!
```

---

### `camper list`

Lists all content with counts organized by type.

```bash
camper list
```

**Shows:**
- Pages (with file paths)
- Layouts
- Components
- Partials
- Collections
- Data files

**Example output:**
```
🏕️ Campsite Content Overview

📝 Pages (23):
  - src/pages/index.njk
  - src/pages/about.njk
  - src/pages/docs/index.md
  ...

🎨 Layouts (5):
  - src/layouts/base.njk
  - src/layouts/docs.njk
  ...

🧩 Partials (8):
  - src/partials/hero.njk
  - src/partials/navbar.njk
  ...

📦 Collections (3):
  - src/collections/site.json
  - src/collections/navbar.json
  ...

🌲 Total: 39 files
```

---

### `camper upgrade`

Updates `basecampjs` to the latest version.

```bash
camper upgrade
```

**Process:**
1. Checks current version
2. Fetches latest version from npm
3. Runs `npm install basecampjs@latest`
4. Shows new version

**Example output:**
```
🏕️ Checking for updates...
📦 Current version: 0.0.7
📦 Latest version: 0.0.8
⬆️ Upgrading basecampjs...
✅ Successfully upgraded to 0.0.8
🌲 Enjoy the new features!
```

---

<a id="next-steps"></a>

## Next Steps

- **[Make Commands](/docs/cli/make-commands)** - Learn about content creation commands
- **[Configuration](/docs/essentials/extending)** - Customize your setup
- **[CLI Overview](/docs/cli)** - Back to CLI overview

---

🧭 **Quick Reference**: Run `camper --help` anytime to see all commands!
