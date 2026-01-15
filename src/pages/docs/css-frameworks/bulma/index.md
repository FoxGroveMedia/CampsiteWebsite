---
title: Bulma
subtitle: CSS Frameworks
layout: docs.njk
description: An introduction to using Bulma with Campsite.
---

### Introduction to Bulma with Campsite
Bulma is a modern CSS framework based on Flexbox that provides a set of responsive and customizable components to help you build websites quickly. CampsiteJS makes it easy to integrate Bulma into your projects, providing a seamless development experience.

### Installing Bulma in Campsite
To get started with Bulma in your CampsiteJS project, follow these steps:
1. **Install Bulma**: Use npm or yarn to install Bulma and its dependencies.
   ```bash
   npm install bulma
   ```
   or
   ```bash
   yarn add bulma
   ```
2. **Import Bulma Styles**: In your main CSS file (e.g., `src/styles/main.css`), import Bulma's CSS.
   ```css
   @import 'bulma/css/bulma.min.css';
   ```
3. **Initialize Bulma JavaScript**: Bulma is a CSS-only framework and does not require JavaScript initialization. You can directly use its classes in your HTML or templating files.

### Using Bulma in Your CampsiteJS Project
To use Bulma in your CampsiteJS project, simply add Bulma's classes to your HTML or templating files. For example, you can create a button with Bulma classes like this:
```html
<button class="button is-primary">
  Click Me
</button>
```

### Customizing Bulma
You can customize Bulma by modifying the `_variables.sass` file in your CampsiteJS project. This allows you to change default variables such as colors, typography, and spacing. For example, to change the primary color, you can do the following:
```sass
$primary: #1DA1F2
@import 'bulma/bulma.sass';
```
### Building Your CSS and JavaScript
CampsiteJS automatically processes your Bulma CSS during the build process. You can run the development server with:
```bash
npm run dev
```
This will watch for changes in your CSS and HTML files, allowing you to see updates in real-time.
When you're ready to build your site for production, use:
```bash
npm run build
```

This will compile and optimize your CSS and JavaScript for deployment.
