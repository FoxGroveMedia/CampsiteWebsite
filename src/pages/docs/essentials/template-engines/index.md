---
title: Template Engines
subtitle: Essentials
layout: docs.njk
description: Choose the right templating language for your CampsiteJS project.
---

CampsiteJS lets you choose the templating language that best fits your project. You set your preference in `campsite.config.js`.

## Quick Comparison

| Engine      | Best For                              | Logic Level     | Learning Curve | Recommended For          |
|-------------|---------------------------------------|-----------------|----------------|--------------------------|
| **Nunjucks**    | Most sites, reusable components       | High            | Medium         | Default choice           |
| **Liquid**      | Content-focused sites, simplicity     | Medium          | Low            | Blogs & marketing sites  |
| **Mustache**    | Strict separation of logic & content  | Very Low        | Low            | Simple or legacy projects|
| **Markdown**    | Writing-focused content               | None            | Very Low       | Documentation & blogs    |

> **Markdown** is always available — even if you choose another engine. You can use `.md` files directly or enable `markdown: true` in frontmatter to process other templates as Markdown.

## Configuration

```javascript
export default {
  templateEngine: 'nunjucks', // 'nunjucks' | 'liquid' | 'mustache'
};
```

## Engine Details

### Nunjucks (Default)
Nunjucks is powerful and flexible. It supports template inheritance, macros, custom filters, and more.

**Campsite notes:**
- Excellent support for layouts and partials
- Custom filters and globals can be added via the `nunjucksEnv` hook

**Official docs:** [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)

### Liquid
Liquid is simple and readable. It was originally created by Shopify.

**Campsite notes:**
- Great for teams that prefer less logic in templates
- Good balance of power and simplicity

**Official docs:** [Liquid Documentation](https://shopify.github.io/liquid/)

### Mustache
Mustache is a logic-less template language. It forces you to keep logic out of your templates.

**Campsite notes:**
- Very strict — no conditionals or loops in the template itself
- Useful when you want maximum separation

**Official docs:** [Mustache Documentation](https://mustache.github.io/)

### Markdown
Markdown is supported out of the box for content.

**Campsite notes:**
- Use `.md` files for pages
- Enable `markdown: true` in frontmatter to process Nunjucks/Liquid output as Markdown
- Works great with collections and data

**Tip:** Many documentation and blog sites use `templateEngine: 'nunjucks'` + Markdown content via frontmatter.

## Which Should You Choose?

- **Just starting?** → Start with **Nunjucks**.
- **Writing lots of content?** → Use **Nunjucks + Markdown**.
- **Want maximum simplicity?** → Try **Liquid**.
- **Prefer almost no logic in templates?** → Go with **Mustache**.

You can always change `templateEngine` later — your existing templates will just stop working until you update them.
