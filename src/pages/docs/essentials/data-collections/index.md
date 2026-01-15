---
title: Data Collections
subtitle: Essentials
layout: docs.njk
description: Learn about data collections in CampsiteJS, including how to create, manage, and utilize them in your static site projects.
---

> Data collections in CampsiteJS allow you to organize and manage related data items efficiently. This guide will walk you through the process of creating and using data collections in your static site projects.

## Key Features of Data Collections
- **Organized Data Management**: Group related data items into collections for better organization.
- **Easy Access**: Access and manipulate data collections easily within your templates.
- **Flexible Structure**: Define custom structures for your data collections to suit your project's needs.

### To get started with data collections, follow these steps:
1. **Create a Data Collection**: Define a new data collection (*.json) in the `src/data` or `src/collections` directory. If there are duplicate JSON file names in both directories, the `src/collections` files will take precedence since they're processed second in the array.
2. **Add Data Items**: Populate your data collection with relevant data items.
3. **Access Data in Templates**: Use CampsiteJS templating features to access and display data from your collections.

### Example
Here is a simple example of a data collection in CampsiteJS:
```json
// src/data/employees.json
[
  {
    "name": "John Doe",
    "position": "Software Engineer",
    "email": "john.doe@example.com"
  },
    {
        "name": "Jane Smith",
        "position": "Product Manager",
        "email": "jane.smith@example.com"
    }
]
```

Then you can access this data in your templates like so:
```njk
<ul>
  {% for employee in collections.employees %}
    <li>{{ employee.name }} - {{ employee.position }} - {{ employee.email }}</li>
  {% endfor %}
</ul>
```

### Additional Resources
- [Mustache Documentation](https://mustache.github.io/mustache.5.html)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Liquid Documentation](https://shopify.github.io/liquid/)

Feel free to explore and experiment with CampsiteJS to create your perfect static site!
