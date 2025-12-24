---
title: Alpine.js
subtitle: Template Languages
layout: docs.njk
description: Learn how to use Alpine.js as a template language in your Campsite projects.
---

### Alpine.js Template Language
<p class="mb-8">Alpine.js is a lightweight JavaScript framework that offers a simple and declarative way to add interactivity to your web pages. It is designed to be easy to use and integrates seamlessly with Campsite projects.</p>

#### Key Features of Alpine.js
- **Declarative Syntax**: Use HTML attributes to define behavior.
- **Reactivity**: Automatically updates the DOM when data changes.
- **Lightweight**: Minimal footprint, making it ideal for performance-focused projects.
- **Component-Based**: Build reusable components for better code organization.

#### Getting Started with Alpine.js in Campsite
1. **Installation**: Include Alpine.js in your Campsite project by adding it to your dependencies or via CDN.
2. **Configuration**: No special configuration is needed; simply include Alpine.js in your templates.
3. **Creating Templates**: Start creating `.html` or other supported template files for your templates.
4. **Using Alpine.js Syntax**: Utilize Alpine.js directives to add interactivity to your templates.

#### Example Alpine.js Template
```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">
    <p>This content is toggled by Alpine.js!</p>
  </div>
</div>
```

### Directives
Alpine.js uses special attributes called directives to add behavior to your HTML elements.
- `x-data`: Initializes a component's state.
- `x-show`: Toggles the visibility of an element.
- `@click`: Listens for click events.
- `x-bind`: Binds attributes to data properties.

### Reactivity
Alpine.js automatically updates the DOM when the underlying data changes. You can define reactive properties within the `x-data` directive.
```html
<div x-data="{ count: 0 }">
  <button @click="count++">Increment</button>
  <p>Count: <span x-text="count"></span></p>
</div>
```

#### Additional Resources
- [Alpine.js Official Documentation](https://alpinejs.dev/)
- [Campsite Template Language Guide](https://campsite.dev/docs/template-languages)

Feel free to explore and experiment with Alpine.js to enhance your Campsite projects!