---
title: Overview
subtitle: Template Languages
layout: docs.njk
description: Learn about the different template languages supported by CampsiteJS and how to use them in your projects.
---

> CampsiteJS supports multiple template languages to help you build your static site the way you want. This guide will introduce you to the available template languages and how to use them in your CampsiteJS projects.

### Supported Template Languages

1. **[Liquid](/docs/template-languages/liquid)**: A simple and flexible templating language originally created for Shopify. Liquid is known for its ease of use and readability, making it a great choice for beginners.
2. **[Markdown](/docs/template-languages/markdown)**: While not a traditional template language, Markdown is widely used for content creation in CampsiteJS. It allows you to write content in a simple, plain-text format that can be easily converted to HTML.
3. **[Mustache](/docs/template-languages/mustache)**: A logic-less templating engine that emphasizes simplicity and is easy to learn. Mustache is great for projects that require minimal logic in templates.
4. **[Nunjucks](/docs/template-languages/nunjucks)**: A powerful templating engine with a rich feature set, including template inheritance, macros, and filters. Nunjucks is the default template language in Campsite.

### Choosing a Template Language
When starting a new CampsiteJS project, you can choose your preferred template language by specifying it in the `campsite.config.js` file:

```javascript
module.exports = {
  templateEngine: 'nunjucks', // Options: 'mustache', 'nunjucks', 'liquid'
};
```

### Using Template Languages
Once you've selected a template language, you can start creating your templates using the syntax and features specific to that language. Refer to the official documentation for each template language to learn more about their capabilities and best practices.

### Additional Resources
- [Mustache Documentation](https://mustache.github.io/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Liquid Documentation](https://shopify.github.io/liquid/)

Feel free to explore and experiment with different template languages to find the one that best suits your project's needs!
