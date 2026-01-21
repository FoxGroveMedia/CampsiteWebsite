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
- **Multiple Directories**: Use both `src/data` and `src/collections` for organizing different types of data.

## Collection Directories

CampsiteJS supports two directories for storing JSON data collections:

### `src/data/`
General-purpose data that can be used throughout your site:
- Site configuration
- Global settings
- Shared data

### `src/collections/`
Content-focused collections with higher priority:
- Blog posts metadata
- Product listings
- Team members
- Project portfolios

**Priority:** When duplicate filenames exist in both directories, `src/collections` takes precedence (processed last).

---

## Getting Started

### 1. Create a Data Collection

Define a new data collection as a JSON file in either directory:

```
src/
  data/
    settings.json
    navigation.json
  collections/
    team.json
    products.json
```

### 2. Add Data Items

Populate your collection with data:

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/collections/team.json</div>

```json
[
  {
    "name": "John Doe",
    "position": "Software Engineer",
    "email": "john.doe@example.com",
    "bio": "Full-stack developer with 10 years experience"
  },
  {
    "name": "Jane Smith",
    "position": "Product Manager",
    "email": "jane.smith@example.com",
    "bio": "Strategic thinker and user advocate"
  }
]
```

### 3. Access Data in Templates

Access collections using the `collections` object:

```njk
<ul>
  {% for member in collections.team %}
    <li>
      <h3>{{ member.name }}</h3>
      <p>{{ member.position }}</p>
      <a href="mailto:{{ member.email }}">Contact</a>
    </li>
  {% endfor %}
</ul>
```

---

## Collection Examples

### Site Configuration

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/data/site.json</div>

```json
{
  "name": "My Awesome Site",
  "url": "https://example.com",
  "description": "A cozy static site built with CampsiteJS",
  "author": "John Doe",
  "social": {
    "twitter": "@mysite",
    "github": "mysite"
  }
}
```

**Usage:**
```njk
<footer>
  <p>{{ collections.site.name }} - {{ collections.site.description }}</p>
  <a href="https://twitter.com/{{ collections.site.social.twitter }}">Twitter</a>
</footer>
```

### Navigation Menu

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/collections/navbar.json</div>

```json
[
  {
    "label": "Home",
    "url": "/"
  },
  {
    "label": "About",
    "url": "/about"
  },
  {
    "label": "Services",
    "url": "/services"
  },
  {
    "label": "Contact",
    "url": "/contact"
  }
]
```

**Usage:**
```njk
<nav>
  <ul>
    {% for item in collections.navbar %}
      <li>
        <a href="{{ item.url }}">{{ item.label }}</a>
      </li>
    {% endfor %}
  </ul>
</nav>
```

### Blog Posts Metadata

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/collections/posts.json</div>

```json
[
  {
    "title": "Getting Started with CampsiteJS",
    "slug": "getting-started",
    "date": "2026-01-15",
    "author": "John Doe",
    "excerpt": "Learn how to build fast static sites",
    "tags": ["tutorial", "getting-started"]
  },
  {
    "title": "Advanced CampsiteJS Features",
    "slug": "advanced-features",
    "date": "2026-01-18",
    "author": "Jane Smith",
    "excerpt": "Explore powerful features",
    "tags": ["tutorial", "advanced"]
  }
]
```

**Usage:**
```njk
<div class="blog-posts">
  {% for post in collections.posts %}
    <article>
      <h2><a href="/blog/{{ post.slug }}">{{ post.title }}</a></h2>
      <p class="meta">
        By {{ post.author }} on {{ post.date }}
      </p>
      <p>{{ post.excerpt }}</p>
      <div class="tags">
        {% for tag in post.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </article>
  {% endfor %}
</div>
```

### Product Catalog

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/collections/products.json</div>

```json
[
  {
    "id": "prod-001",
    "name": "Camping Tent",
    "price": 299.99,
    "description": "4-person waterproof tent",
    "image": "/images/products/tent.jpg",
    "inStock": true
  },
  {
    "id": "prod-002",
    "name": "Sleeping Bag",
    "price": 89.99,
    "description": "Warm down sleeping bag",
    "image": "/images/products/sleeping-bag.jpg",
    "inStock": true
  }
]
```

**Usage:**
```njk
<div class="products">
  {% for product in collections.products %}
    <div class="product-card">
      <img src="{{ product.image }}" alt="{{ product.name }}">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      {% if product.inStock %}
        <button>Add to Cart</button>
      {% else %}
        <span class="out-of-stock">Out of Stock</span>
      {% endif %}
    </div>
  {% endfor %}
</div>
```

---

## Working with Collections

### Filtering Collections

```njk
{# Filter by property #}
{% set featured = [] %}
{% for post in collections.posts %}
  {% if post.featured %}
    {% set featured = (featured.push(post), featured) %}
  {% endif %}
{% endfor %}

{# Display filtered posts #}
{% for post in featured %}
  <article class="featured">{{ post.title }}</article>
{% endfor %}
```

### Sorting Collections

```njk
{# Sort by date (newest first) #}
{% set sortedPosts = collections.posts | sort(attribute='date') | reverse %}

{% for post in sortedPosts %}
  <article>{{ post.title }}</article>
{% endfor %}
```

### Limiting Results

```njk
{# Show only the first 5 posts #}
{% for post in collections.posts | slice(0, 5) %}
  <article>{{ post.title }}</article>
{% endfor %}
```

### Accessing Nested Data

```njk
{# Access nested properties #}
<p>Twitter: {{ collections.site.social.twitter }}</p>
<p>GitHub: {{ collections.site.social.github }}</p>
```

---

## Collection File Naming

Collection names are derived from filenames (without extension):

| Filename | Access In Templates |
|----------|-------------------|
| `team.json` | `collections.team` |
| `navbar.json` | `collections.navbar` |
| `products.json` | `collections.products` |
| `blog-posts.json` | `collections['blog-posts']` |

**Note:** Filenames with hyphens require bracket notation.

---

## Best Practices

### 1. Organize by Purpose

```
src/
  data/
    site.json          # Site-wide settings
    seo.json           # SEO defaults
  collections/
    team.json          # Team members
    products.json      # Product catalog
    posts.json         # Blog posts
```

### 2. Use Descriptive Names

```json
// ✅ Good - clear and descriptive
{
  "name": "John Doe",
  "position": "Senior Developer",
  "email": "john@example.com"
}

// ❌ Bad - unclear abbreviations
{
  "n": "John Doe",
  "pos": "Sr Dev",
  "e": "john@example.com"
}
```

### 3. Keep Collections Flat

```json
// ✅ Good - simple array
[
  { "name": "Item 1" },
  { "name": "Item 2" }
]

// ⚠️ Okay - object with arrays (when needed)
{
  "featured": [...],
  "recent": [...]
}
```

### 4. Validate Your JSON

Use a JSON validator before building:
- [JSONLint](https://jsonlint.com/)
- VS Code JSON validation
- Command: `node -e "JSON.parse(require('fs').readFileSync('file.json'))"`

### 5. Use Consistent Data Structures

```json
// ✅ Consistent structure
[
  {
    "name": "John",
    "role": "Developer",
    "active": true
  },
  {
    "name": "Jane",
    "role": "Designer",
    "active": true
  }
]

// ❌ Inconsistent structure
[
  {
    "name": "John",
    "role": "Developer"
  },
  {
    "firstName": "Jane",
    "position": "Designer",
    "isActive": true
  }
]
```

---

## Creating Collections with CLI

Use the `make:collection` command:

```bash
# Single collection
camper make:collection team

# Multiple collections
camper make:collection team, products, posts
```

**Generated file:**

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/collections/team.json</div>

```json
[
  {
    "name": "Example Item",
    "description": "Add your collection items here"
  }
]
```

---

## Directory Priority

When the same filename exists in both directories, `src/collections` wins:

```
src/
  data/
    products.json      ← Lower priority
  collections/
    products.json      ← Higher priority (used)
```

**Use case:** Override general data with content-specific collections.

---

## Listing Collections

View all collections in your project:

```bash
camper list
```

**Output:**
```
📦 Collections (3):
  • team.json
  • products.json
  • posts.json

📊 Data (2):
  • site.json
  • navigation.json
```

---

## Example: Complete Team Page

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/collections/employees.json</div>

```json
[
  {
    "name": "John Doe",
    "position": "Software Engineer",
    "email": "john.doe@example.com",
    "bio": "Full-stack developer specializing in JavaScript",
    "photo": "/images/team/john.jpg",
    "social": {
      "linkedin": "johndoe",
      "github": "johndoe"
    }
  },
  {
    "name": "Jane Smith",
    "position": "Product Manager",
    "email": "jane.smith@example.com",
    "bio": "Strategic thinker with a passion for user experience",
    "photo": "/images/team/jane.jpg",
    "social": {
      "linkedin": "janesmith",
      "twitter": "janesmith"
    }
  }
]
```

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/pages/team.njk</div>

### Additional Resources
- [Configuration](/docs/essentials/configuration) - All config options
- [Partials](/docs/essentials/partials) - Reusable template snippets
- [Components](/docs/essentials/components) - Interactive elements
- [Make Commands](/docs/cli/make-commands) - Create collections with CLI
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [Mustache Documentation](https://mustache.github.io/mustache.5.html)

Feel free to explore and experiment with CampsiteJS to create your perfect static site!

---

**Next Steps:**
- [Partials](/docs/essentials/partials) - Create reusable template snippets
- [Components](/docs/essentials/components) - Add interactive elements
- [Extending CampsiteJS](/docs/essentials/extending) - Custom filters and hooks
