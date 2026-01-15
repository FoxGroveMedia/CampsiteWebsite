---
title: Partials
subtitle: Essentials
layout: docs.njk
description: Learn about partials in CampsiteJS and how to use them to create reusable snippets of code in your templates.
---

> Partials in CampsiteJS are reusable snippets of code that can be included in multiple templates. They help you maintain consistency and reduce redundancy in your codebase.

### Creating Partials
To create a partial, simply create a new file in the `src/partials` directory of your CampsiteJS project. You can name the file anything you like, though it's common to prefix partial filenames with an underscore (e.g., `_navbar.njk`) as a naming convention to distinguish them from regular templates.

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/partials/navbar.njk</div>

```njk
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### Including Partials
To include a partial in your template, use the `{% include %}` tag followed by the path to the partial file. For example, to include the `_navbar.njk` partial in your main layout, you would do the following:

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/layouts/base.njk</div>

```njk
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }} | {{ site.name }}</title>
</head>
<body>
  <header>
    {% include "partials/navbar.njk" %}
  </header>
  <main>
    {{ content | safe }}
  </main>
</body>
</html>
```

### Passing Variables to Partials
You can also pass variables to partials when including them. This allows you to customize the content of the partial based on the context in which it is used. To pass variables, use the `with` keyword followed by a dictionary of variables. For example:

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/partials/alert.njk</div>

```njk
<div class="alert alert-{{ type }}">
  {{ message }}
</div>
```


<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/pages/example.njk</div>

```njk
{% include "partials/alert.njk" with { type: "success", message: "Your operation was successful!" } %}
```

### Output

This will render the following HTML:
```html
<div class="alert alert-success">
  Your operation was successful!
</div>
```

### Conclusion
Partials are a powerful feature in CampsiteJS that help you create reusable components for your templates. By using partials, you can keep your code DRY (Don't Repeat Yourself) and maintain consistency across your site. Experiment with creating and including partials to see how they can enhance your CampsiteJS projects!
