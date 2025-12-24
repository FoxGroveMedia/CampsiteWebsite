---
title: Bootstrap
subtitle: Essentials
layout: docs.njk
description: An introduction to using Bootstrap with Campsite.
---

### Introduction to Bootstrap with Campsite
Bootstrap is a popular front-end framework that provides a set of CSS and JavaScript tools to help you build responsive websites quickly. Campsite makes it easy to integrate Bootstrap into your projects, providing a seamless development experience.

### Installing Bootstrap in Campsite
To get started with Bootstrap in your Campsite project, follow these steps:
1. **Install Bootstrap**: Use npm or yarn to install Bootstrap and its dependencies.
   ```bash
   npm install bootstrap
   ```
   or
   ```bash
   yarn add bootstrap
   ```
2. **Import Bootstrap Styles**: In your main CSS file (e.g., `src/styles/main.css`), import Bootstrap's CSS.
   ```css
   @import 'bootstrap/dist/css/bootstrap.min.css';
   ```
3. **Initialize Bootstrap JavaScript**: In your main JavaScript file (e.g., `src/scripts/main.js`), import Bootstrap's JavaScript components.
   ```js
   import 'bootstrap';
   ```
### Using Bootstrap in Your Campsite Project
To use Bootstrap in your Campsite project, simply add Bootstrap's classes to your HTML or templating files. For example, you can create a button with Bootstrap classes like this:
```html
<button class="btn btn-primary">
  Click Me
</button>
```

### Customizing Bootstrap
You can customize Bootstrap by overriding its default variables in your own CSS or SCSS files. This allows you to change default colors, typography, and spacing. For example, to change the primary color, you can do the following:
```scss
$primary: #1DA1F2;
@import 'bootstrap/scss/bootstrap';
```
### Building Your CSS and JavaScript
Campsite automatically processes your Bootstrap CSS and JavaScript during the build process. You can run the development server with:
```bash
campsitejs dev
```
This will watch for changes in your CSS and HTML files, allowing you to see updates in real-time.
When you're ready to build your site for production, use:
```bash
campsitejs build
```

This will compile and optimize your CSS and JavaScript for deployment.