---
title: Overview
subtitle: CLI Reference
layout: docs.njk
description: Complete reference for the CampsiteJS CLI (campsite command) - manage your static site projects with ease.
---

<a id="overview"></a>

## CampsiteJS CLI Reference

The `campsite` CLI is your command center for managing CampsiteJS projects. With a cozy campfire theme 🏕️ and intuitive commands, it makes static site development a breeze.

### CLI Structure

The CampsiteJS ecosystem consists of two packages:

- **`campsitejs`** (Scaffolder): Creates new projects via `npm create campsitejs@latest`
- **`basecampjs`** (Build Engine): Provides the `campsite` CLI for managing existing projects

<a id="command-categories"></a>

### Command Categories

Commands are organized into logical groups for easy discovery:

#### Help & Version
- `campsite -h` / `campsite --help` - Shows comprehensive help
- `campsite -v` / `campsite --version` - Displays current version

#### Project Initialization
- `campsite init` - Initialize Campsite in current directory

#### Development
- `campsite dev` - Start development server with hot reloading
- `campsite build` - Production build
- `campsite serve` - Serve built site from dist/
- `campsite preview` - Build + serve for production testing

#### Utilities
- `campsite clean` - Remove dist/ folder
- `campsite check` - Validate project structure
- `campsite list` - List all content with counts
- `campsite upgrade` - Update basecampjs to latest

#### Content Creation (Make Commands)
- `campsite make:page` - Create pages
- `campsite make:post` - Create blog posts
- `campsite make:layout` - Create layouts
- `campsite make:component` - Create components
- `campsite make:partial` - Create partials
- `campsite make:collection` - Create data collections

<a id="quick-examples"></a>

### Quick Examples

Start development server:
```bash
campsite dev
```

Create multiple pages at once:
```bash
campsite make:page home, about, contact
```

Build for production:
```bash
campsite build
```

Check project health:
```bash
campsite check
```

<a id="theme"></a>

### Campfire Theme 🏕️

All CLI output embraces the cozy campfire aesthetic:
- 🏕️ Campsite and outdoor emojis
- ✅ Clear success indicators
- ⚠️ Helpful warnings
- ❌ Informative error messages
- 🌲 Friendly tips like "Happy camping!"

<a id="next-steps"></a>

### Next Steps

- **[All Commands Reference](/docs/cli/commands)** - Detailed documentation for each command
- **[Make Commands Guide](/docs/cli/make-commands)** - Complete guide to content creation
- **[Configuration](/docs/essentials/extending)** - Customize your campsite.config.js

---

🏕️ **Pro Tip**: Run `campsite --help` anytime to see all available commands with examples!
