---
title: Make Commands
subtitle: CLI Reference
layout: docs.njk
description: Complete guide to CampsiteJS content creation commands - create pages, posts, layouts, and more with ease.
---

<a id="overview"></a>

## Make Commands Overview

Make commands in CampsiteJS provide a quick way to create content files with proper structure and naming. All make commands follow the pattern:

```bash
campsite make:<type> <name> [name2, name3, ...]
```

<a id="features"></a>

### Key Features

✅ **Batch creation** - Create multiple files at once with comma separation  
✅ **Smart defaults** - Uses your `templateEngine` setting for extensions  
✅ **Extension override** - Specify custom extensions (e.g., `test.md`)  
✅ **Prevents overwrites** - Skips existing files with warnings  
✅ **Auto-slugification** - Converts names to lowercase with hyphens  
✅ **Smart content** - Generates appropriate boilerplate based on type  

<a id="extension-logic"></a>

### Extension Priority

File extensions are determined by:

1. **User-provided extension** (e.g., `make:page test.liquid`)
2. **Template engine from config** (e.g., `templateEngine: "nunjucks"` → `.njk`)

**Extension mapping:**
- `nunjucks` → `.njk`
- `liquid` → `.liquid`
- `mustache` → `.mustache`
- Markdown → `.md` (when explicitly requested)

---

<a id="make-page"></a>

## `campsite make:page`

Creates page files in `src/pages/`.

### Basic Usage

```bash
# Single page
campsite make:page about

# Multiple pages
campsite make:page home, about, contact

# With custom extension
campsite make:page blog.md
```

### Examples

**Creating with default engine (Nunjucks):**
```bash
campsite make:page about
# Creates: src/pages/about.njk
```

**Batch creation:**
```bash
campsite make:page services, portfolio, testimonials
# Creates:
#   src/pages/services.njk
#   src/pages/portfolio.njk
#   src/pages/testimonials.njk
```

**Markdown page:**
```bash
campsite make:page blog.md
# Creates: src/pages/blog.md
```

### Generated Content

**For HTML/Template files (.njk, .liquid, .mustache):**
```njk
---
title: About
description: About page description
---
{% extends "base.njk" %}

{% block content %}
  <h1>About</h1>
  <p>Welcome to the About page.</p>
{% endblock %}
```

**For Markdown files (.md):**
```md
---
title: Blog
description: Blog page description
layout: base.njk
---

# Blog

Welcome to the blog page.
```

---

<a id="make-post"></a>

## `campsite make:post`

Creates blog posts in `src/pages/blog/` with date and author metadata.

### Basic Usage

```bash
# Single post
campsite make:post my-first-post

# Multiple posts
campsite make:post hello-world, getting-started, tips-and-tricks
```

### Examples

```bash
campsite make:post introducing-campsitejs
# Creates: src/pages/blog/introducing-campsitejs.njk
```

### Generated Content

```njk
---
title: Introducing CampsiteJS
description: Post description
date: 2026-01-15
author: Your Name
layout: post.njk
---

# Introducing CampsiteJS

Your post content goes here.
```

**Note:** Posts automatically include:
- Current date in `YYYY-MM-DD` format
- Default author field (can be customized)
- Suggested `post.njk` layout

---

<a id="make-layout"></a>

## `campsite make:layout`

Creates layout templates in `src/layouts/`.

### Basic Usage

```bash
# Single layout
campsite make:layout post

# Multiple layouts
campsite make:layout post, portfolio, landing
```

### Examples

```bash
campsite make:layout docs
# Creates: src/layouts/docs.njk
```

### Generated Content

```njk
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }} | {{ site.name }}</title>
</head>
<body>
  {% block content %}
    {{ content | safe }}
  {% endblock %}
</body>
</html>
```

---

<a id="make-component"></a>

## `campsite make:component`

Creates reusable components in `src/components/`.

### Basic Usage

```bash
# Single component
campsite make:component button

# Multiple components
campsite make:component card, modal, dropdown
```

### Examples

```bash
campsite make:component hero-section
# Creates: src/components/hero-section.njk
```

### Generated Content

```njk
{# Component: Hero Section #}
<div class="hero-section">
  <!-- Component content -->
</div>
```

---

<a id="make-partial"></a>

## `campsite make:partial`

Creates partial templates in `src/partials/`.

### Basic Usage

```bash
# Single partial
campsite make:partial navbar

# Multiple partials
campsite make:partial header, footer, sidebar
```

### Examples

```bash
campsite make:partial navigation
# Creates: src/partials/navigation.njk
```

### Generated Content

```njk
{# Partial: Navigation #}
<nav>
  <!-- Navigation content -->
</nav>
```

**Using in templates:**
```njk
{% include "partials/navigation.njk" %}
```

---

<a id="make-collection"></a>

## `campsite make:collection`

Creates JSON data collections in `src/collections/`.

### Basic Usage

```bash
# Single collection
campsite make:collection products

# Multiple collections
campsite make:collection team, services, testimonials
```

### Examples

```bash
campsite make:collection team
# Creates: src/collections/team.json
```

### Generated Content

```json
[
  {
    "id": 1,
    "name": "Example Item",
    "description": "Example description"
  }
]
```

**Accessing in templates:**
```njk
{% for member in collections.team %}
  <div>{{ member.name }}</div>
{% endfor %}
```

---

<a id="advanced-usage"></a>

## Advanced Usage

### Nested Directories

Create files in subdirectories by including the path:

```bash
# Nested pages
campsite make:page blog/2024/hello-world

# Nested components
campsite make:component ui/cards/product-card
```

### Mixed Extensions in Batch

Each file can have its own extension:

```bash
campsite make:page about.njk, blog.md, services.liquid
```

### Output Examples

**Success:**
```
🏕️ Creating pages...
✅ Created src/pages/home.njk
✅ Created src/pages/about.njk
✅ Created src/pages/contact.njk
🌲 Created 3 pages. Happy camping!
```

**With skips:**
```
🏕️ Creating pages...
✅ Created src/pages/home.njk
⚠️  Skipped src/pages/about.njk (already exists)
✅ Created src/pages/contact.njk
🌲 Created 2 pages (1 skipped). Happy camping!
```

---

<a id="tips"></a>

## Tips & Best Practices

### Naming Conventions

- **Use kebab-case**: `my-awesome-page` not `my_awesome_page` or `MyAwesomePage`
- **Be descriptive**: `user-profile` better than `page1`
- **Group by type**: Use subdirectories for organization

### File Organization

```
src/
├── pages/
│   ├── index.njk
│   ├── about.njk
│   └── blog/
│       ├── index.njk
│       └── posts/
│           └── hello-world.njk
├── layouts/
│   ├── base.njk
│   ├── post.njk
│   └── docs.njk
├── partials/
│   ├── header.njk
│   ├── footer.njk
│   └── sidebar.njk
├── components/
│   └── ui/
│       ├── button.njk
│       └── card.njk
└── collections/
    ├── site.json
    ├── navbar.json
    └── team.json
```

### Template Engine Selection

Match your make commands to your config:

**campsite.config.js:**
```js
export default {
  templateEngine: "nunjucks", // or "liquid", "mustache"
  // ...
}
```

**Commands automatically use the right extension:**
```bash
campsite make:page about
# With nunjucks: creates about.njk
# With liquid: creates about.liquid
# With mustache: creates about.mustache
```

---

<a id="reference"></a>

## Quick Reference

| Command | Creates In | Purpose |
|---------|-----------|---------|
| `make:page` | `src/pages/` | Regular pages |
| `make:post` | `src/pages/blog/` | Blog posts with metadata |
| `make:layout` | `src/layouts/` | Layout templates |
| `make:component` | `src/components/` | Reusable components |
| `make:partial` | `src/partials/` | Template partials |
| `make:collection` | `src/collections/` | JSON data files |

---

<a id="next-steps"></a>

## Next Steps

- **[All Commands](/docs/cli/commands)** - Complete CLI reference
- **[Collections Guide](/docs/essentials/collections)** - Working with data
- **[Partials Guide](/docs/essentials/partials)** - Reusable templates

---

⛺ **Pro Tip**: Create files in bulk to scaffold your site quickly: `campsite make:page home, about, services, contact, blog`
