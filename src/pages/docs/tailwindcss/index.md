---
title: Tailwind CSS
subtitle: Essentials
layout: docs.njk
description: An introduction to using Tailwind CSS with Campsite.
---

### Introduction to Tailwind CSS with Campsite
Tailwind CSS is a utility-first CSS framework that allows you to build custom designs directly in your markup. Campsite makes it easy to integrate Tailwind CSS into your projects, providing a seamless development experience. Tailwind CSS comes pre-installed with Campsite, so you can start using it right away.

### Using Tailwind CSS in Your Campsite Project
To use Tailwind CSS in your Campsite project, simply add Tailwind's utility classes to your HTML or templating files. For example, you can create a button with Tailwind classes like this:
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

### Customizing Tailwind CSS
You can customize Tailwind CSS by modifying the `tailwind.config.js` file in your Campsite project. This allows you to extend the default theme, add custom colors, spacing, and more. For example, to add a custom color, you can do the following:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#1DA1F2',
      },
    },
  },
}
```

### Adding Custom Styles with @layer
You can add your own custom styles to Tailwind CSS using the `@layer` directive in your CSS files. This allows you to define base styles, components, or utilities that can be used throughout your project. For example, you can add custom styles to the `src/styles/tailwind.css` file like this:
```css
@layer base {
  body {
    @apply text-white;
  }
  code {
    @apply inline-block bg-campfire-950 text-lime-500 font-mono py-1.5 px-3 rounded-md;
  }
}
```

### Import Tailwind's base styles, components, and utilities
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Building Your CSS
Campsite automatically processes your Tailwind CSS during the build process. You can run the development server with:
```bash
campsitejs dev
```
This will watch for changes in your CSS and HTML files, allowing you to see updates in real-time.
When you're ready to build your site for production, use:
```bash
campsitejs build
```
This will generate the optimized CSS along with your static site files.
### Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Campsite Documentation](https://campsite.foxgrovemedia.com/docs)
