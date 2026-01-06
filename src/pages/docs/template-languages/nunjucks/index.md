---
title: Nunjucks
subtitle: Template Languages
layout: docs.njk
description: Learn how to use Nunjucks as a template language in your CampsiteJS projects.
---

<a id="overview"></a>

## Nunjucks Template Language

<p class="mb-8">Nunjucks is a powerful templating engine for JavaScript, inspired by Jinja2. It provides a rich set of features for building dynamic web pages and is well-suited for use in CampsiteJS projects.</p>

#### Key Features of Nunjucks
- **Template Inheritance**: Create base templates and extend them in child templates.
- **Filters**: Modify output using built-in or custom filters.
- **Macros**: Reusable template snippets for cleaner code.
- **Asynchronous Support**: Handle asynchronous operations seamlessly.

#### Getting Started with Nunjucks in Campsite
1. **Installation**: Ensure Nunjucks is included in your CampsiteJS project dependencies.
2. **Configuration**: Set up Nunjucks as your template engine in the CampsiteJS configuration file.
3. **Creating Templates**: Start creating `.njk` files for your templates.
4. **Using Nunjucks Syntax**: Utilize Nunjucks syntax for variables, control structures, and more.

#### Example Nunjucks Template
```njk
{% extends "base.njk" %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>{{ description | safe }}</p>
{% endblock %}
```

# 

<a id="conditional-statements"></a>

### Conditional Statements

Nunjucks supports conditional statements using `if`, `elif`, and `else` tags.

```njk
{% if user.isLoggedIn %}
  <p>Welcome back, {{ user.name }}!</p>
{% else %}
  <p>Please log in to continue.</p>
{% endif %}
```

<a id="loops-and-iteration"></a>

### Loops

You can iterate over arrays or objects using the `for` tag.

```njk
<ul>
{% for item in items %}
  <li>{{ item }}</li>
{% endfor %}
</ul>
```

<a id="loop-index"></a>

### Loop Index

Sometimes you need to access the current index, you can use `loop.index` or `loop.index0` to start counting from 1 or 0, respectively.

```njk
<ul>
{% for item in items %}
  <li>{{ loop.index }}: {{ item }}</li>
{% endfor %}
</ul>
```

<a id="loop-conditional"></a>

### Loop For Else Conditional

You can also use an `else` statement to handle cases where no items are present.

```njk
<ul>
{% for item in items %}
  {% if item.active %}
    <li>{{ item.name }}</li>
  {% endif %}
{% else %}
  <li>No active items found.</li>
{% endfor %}
</ul>
```

<a id="loop-filtering"></a>

### Loop filtering by substring

Filter items whose `url` contains a substring (e.g., `"docs"`).

```njk
<ul>
{% for item in items %}
  {% if item.url and ('docs' in item.url) %}
    <li>{{ item.name }}</li>
  {% endif %}
{% else %}
  <li>No docs links found.</li>
{% endfor %}
</ul>
```

<a id="debugging"></a>

### Debugging

To debug your Nunjucks templates, you can use the `dump` filter to output variable contents.

```njk
<pre>{{ variable | dump }}</pre>
```

To log messages to the console, you can use the `log` filter.

```njk
{{ variable | log }}
```

To debug specific properties of an object, you can use the `dump` filter with dot notation.

```njk
<pre>{{ object.property | dump }}</pre>
```

To dump and log complex objects, you can chain the `dump` and `log` filters.

```njk
{{ complexObject | dump | log }}
```

### Additional Resources
- [Nunjucks Official Documentation](https://mozilla.github.io/nunjucks/)
- [CampsiteJS Template Language Guide](https://campsite.dev/docs/template-languages)

Feel free to explore and experiment with Nunjucks to enhance your CampsiteJS projects!
