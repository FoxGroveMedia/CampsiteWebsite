---
title: Liquid
subtitle: Template Languages
layout: docs.njk
description: Learn how to use Liquid as a template language in your CampsiteJS projects.
---

### Liquid Template Language

<p class="mb-8">Liquid is a flexible and powerful templating language created by Shopify. It is widely used for building dynamic web pages and is well-suited for use in CampsiteJS projects.</p>

#### Key Features of Liquid
- **Template Inheritance**: Create base templates and extend them in child templates.
- **Filters**: Modify output using built-in or custom filters.
- **Tags**: Control logic and flow within your templates.
- **Objects**: Access and display data within your templates.

#### Getting Started with Liquid in Campsite
1. **Installation**: Ensure Liquid is included in your CampsiteJS project dependencies.
2. **Configuration**: Set up Liquid as your template engine in the CampsiteJS configuration file.
3. **Creating Templates**: Start creating `.liquid` files for your templates.
4. **Using Liquid Syntax**: Utilize Liquid syntax for variables, control structures, and more.

#### Example Liquid Template
```liquid
{% extends "base.liquid" %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>{{ description | escape }}</p>
{% endblock %}
```

### Conditional Statements
Liquid supports conditional statements using `if`, `elsif`, and `else` tags.
```liquid
{% if user.is_logged_in %}
  <p>Welcome back, {{ user.name }}!</p>
{% else %}
  <p>Please log in to continue.</p>
{% endif %}
```

### Loops
You can iterate over arrays or objects using the `for` tag.
```liquid
<ul>
{% for item in items %}
  <li>{{ item }}</li>
{% endfor %}
</ul>
```

#### Additional Resources
- [Liquid Official Documentation](https://shopify.github.io/liquid/)
- [CampsiteJS Template Language Guide](https://campsite.dev/docs/template-languages)

Feel free to explore and experiment with Liquid to enhance your CampsiteJS projects!
