---
title: Foundation
subtitle: Essentials
layout: docs.njk
description: An introduction to using Foundation with Campsite.
---

### Introduction to Foundation with Campsite
Foundation is a responsive front-end framework that provides a set of CSS and JavaScript tools to help you build responsive websites quickly. CampsiteJS makes it easy to integrate Foundation into your projects, providing a seamless development experience.

### Installing Foundation in Campsite
To get started with Foundation in your CampsiteJS project, follow these steps:
1. **Install Foundation**: Use npm or yarn to install Foundation and its dependencies.
   ```bash
   npm install foundation-sites
   ```
   or
   ```bash
   yarn add foundation-sites
   ```
2. **Import Foundation Styles**: In your main CSS file (e.g., `src/styles/main.css`), import Foundation's CSS.
   ```css
   @import 'foundation-sites/dist/css/foundation.min.css';
   ```
3. **Initialize Foundation JavaScript**: In your main JavaScript file (e.g., `src/scripts/main.js`), import and initialize Foundation's JavaScript components.
   ```js
   import $ from 'jquery';
   import 'foundation-sites';
    $(document).foundation();
    ```

### Using Foundation in Your CampsiteJS Project
To use Foundation in your CampsiteJS project, simply add Foundation's classes to your HTML or templating files. For example, you can create a button with Foundation classes like this:
```html
<button class="button primary">
  Click Me
</button>
```

### Customizing Foundation
You can customize Foundation by modifying the `_settings.scss` file in your CampsiteJS project. This allows you to change default variables such as colors, typography, and spacing. For example, to change the primary color, you can do the following:
```scss
$primary-color: #1DA1F2;
@import 'foundation-sites/scss/foundation';
```
### Building Your CSS and JavaScript
CampsiteJS automatically processes your Foundation CSS and JavaScript during the build process. You can run the development server with:
```bash
campsitejs dev
```
This will watch for changes in your CSS and HTML files, allowing you to see updates in real-time.
When you're ready to build your site for production, use:
```bash
campsitejs build
```

This will compile and optimize your CSS and JavaScript for deployment.
