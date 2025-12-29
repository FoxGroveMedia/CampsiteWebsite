---
title: Gadgets
subtitle: Essentials
layout: docs.njk
description: Learn about gadgets in CampsiteJS and how to use them to create reusable templates in your projects.
---

> Gadgets in CampsiteJS allow you to create reusable template snippets that can be included and parameterized throughout your site. This guide will introduce you to the concept of gadgets, how to define them, and how to use them effectively in your CampsiteJS projects.

### What are Gadgets?
Gadgets are reusable blocks of template code think of them like macros or components that can accept parameters and be invoked multiple times within your templates. They help you maintain consistency across your site and reduce code duplication.

### Defining a Gadget
In Campsite, you can define a gadget using the Nunjucks templating language. Here's an example of how to define a simple gadget:
```nunjucks
{% macro button(text, url) %}
  <a href="{{ url }}" class="btn">{{ text }}</a>
{% endmacro %}
```

### Using a Macro
Once you've defined a macro, you can use it in your templates by calling it with the required parameters:
```nunjucks
{{ button('Click Me', 'https://example.com') }}
```

### Benefits of Using Macros
- **Reusability**: Write once, use multiple times across your templates.
- **Maintainability**: Update the macro definition in one place to reflect changes everywhere it's used.
- **Consistency**: Ensure a uniform look and feel across your site by using the same components.

### Additional Resources
- [Nunjucks Macro Documentation](https://mozilla.github.io/nunjucks/templating.html#macros)
- [CampsiteJS Template Language Guide](https://campsite.dev/docs/template-languages)

Feel free to explore and experiment with macros to enhance your CampsiteJS projects!