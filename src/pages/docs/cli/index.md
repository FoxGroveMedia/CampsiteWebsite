---
title: Overview
subtitle: CLI Reference
layout: docs.njk
description: Complete reference for the CampsiteJS CLI (camper command) - manage your static site projects with ease.
---

<a id="overview"></a>

## CampsiteJS CLI Reference

The `camper` CLI is your command center for managing CampsiteJS projects. With a cozy campfire theme 🏕️ and intuitive commands, it makes static site development a breeze.

### CLI Structure

The CampsiteJS ecosystem consists of two packages:

- **`create-campsitejs`** (Scaffolder): Creates new projects via `npm create campsitejs@latest` (also provides `campsitejs` bin)
- **`basecampjs`** (Build Engine): Provides the `camper` and `campsite` CLI commands for managing existing projects

### Installing the CLI Globally

For easier access to the `camper` command from anywhere, you can install it globally:

```bash
npm install -g basecampjs
```

Once installed globally, you can run `camper` commands directly from any project directory. If you don't install globally, you can still use `npx camper` to run commands from your local project dependencies.

<a id="command-categories"></a>

### Command Categories

Commands are organized into logical groups for easy discovery:

#### Help & Version
- `camper -h` / `camper --help` - Shows comprehensive help
- `camper -v` / `camper --version` - Displays current version

#### Project Initialization
- `camper init` - Initialize Campsite in current directory

#### Development
- `camper dev` - Start development server with hot reloading
- `camper build` - Production build
- `camper serve` - Serve built site from public/ (or configured `outDir`)
- `camper preview` - Build + serve for production testing

#### Utilities
- `camper clean` - Remove public/ (or `outDir`) folder
- `camper check` - Validate project structure
- `camper list` - List all content with counts
- `camper upgrade` - Update basecampjs to latest

#### Content Creation (Make Commands)
- `camper make:page` - Create pages
- `camper make:post` - Create blog posts
- `camper make:layout` - Create layouts
- `camper make:component` - Create components
- `camper make:partial` - Create partials
- `camper make:collection` - Create data collections

#### Template Commands
- `camper add:template [name]` - Install a starter template (single-page, basic-site, blog, docs) into existing project. Use `--force` to overwrite.

<a id="quick-examples"></a>

### Quick Examples

Start development server:
```bash
camper dev
```

Create multiple pages at once:
```bash
camper make:page home, about, contact
```

Build for production:
```bash
camper build
```

Check project health:
```bash
camper check
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

🏕️ **Pro Tip**: Run `camper --help` anytime to see all available commands with examples!
