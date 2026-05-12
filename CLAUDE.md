# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing and documentation website for **CampsiteJS**, a static site generator built by Fox Grove Media. The site is itself built with CampsiteJS (`basecampjs` npm package), using Nunjucks templates and Tailwind CSS v4.

## Commands

```bash
npm run dev          # Run CSS watcher + dev server in parallel
npm run dev:css      # Tailwind CSS watcher only
npm run dev:site     # CampsiteJS dev server only
npm run build        # Build CSS then generate static site
npm run serve        # Serve the built site from campfire/
```

Build output goes to `campfire/`. CSS is compiled from `src/styles/tailwind.css` → `public/style.css`.

## Architecture

### Configuration — `campsite.config.js`

Central config for CampsiteJS. Controls template engines (`nunjucks`, `liquid`), output directory, photo compression, file exclusions, and engine hooks. The `nunjucksEnv` hook is where global template variables like `currentYear` are added.

### Source layout under `src/`

| Path | Purpose |
|---|---|
| `src/pages/` | All site pages — Nunjucks (`.njk`) or Markdown (`.md`). Directory structure maps to URL paths. |
| `src/layouts/` | Page layouts. `base.njk` is the root shell; `docs.njk` extends it and adds the two-panel docs layout with sidebar. |
| `src/partials/` | Reusable Nunjucks includes and macros. `docs-sidebar.njk` exports the `docsSidebar` macro used by `docs.njk`. |
| `src/collections/` | JSON data files auto-exposed as `collections.{filename}` in templates. `site.json` → `site.*` globals; `navbar.json` → nav items. |
| `src/styles/tailwind.css` | Tailwind v4 entry point. Defines the custom `campfire-*` color palette and `grove-*` semantic colors, font variables, and base layer styles for article prose. |

### `variants/`

Contains alternate page variants (`variants/index.njk`). These are separate from the main `src/pages/` tree and used for variant builds.

### Template data flow

- Markdown pages use YAML frontmatter — `title`, `subtitle`, `description`, `layout` are the standard keys; `layout: docs.njk` switches a page into the docs shell.
- `page.*` is the current page's frontmatter. `site.*` comes from `src/collections/site.json`. `collections.navbar` drives the header nav.
- The docs sidebar navigation in `docs.njk` is **hardcoded** — adding a new docs page requires manually adding it to the sidebar lists in `src/layouts/docs.njk` (appears twice: mobile drawer and desktop sidebar).

### Styling

Tailwind v4 with `@source` directives pointing at all template paths. Custom theme tokens: `campfire-*` (orange fire palette), `grove-ink`, `grove-foam`, `grove-glow`, `grove-forest`. Font families: `Caprasimo` (serif/headings, loaded from Google Fonts), `Inter` (sans/body), `JetBrains Mono` (mono/code). Global background texture and color are set directly on `html` in the CSS file, not via Tailwind utilities.

The `@tailwindplus/elements` CDN script (loaded in `base.njk`) provides the `<el-dialog>`, `<el-dialog-panel>`, and `<el-dialog-backdrop>` web components used for the mobile sidebar.
