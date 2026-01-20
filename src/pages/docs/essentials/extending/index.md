---
title: Extending CampsiteJS
subtitle: Essentials
layout: docs.njk
description: Discover how to extend the functionality of CampsiteJS through custom hooks, and more to tailor your static site projects to your needs.
---

> Extending CampsiteJS allows you to customize and enhance the functionality of your static site projects. This guide will walk you through the process of creating plugins, custom filters, and other extensions to tailor CampsiteJS to your needs.

## Key Features of Extending CampsiteJS
- **Custom Hooks**: Tap into template engine environments to add custom filters, globals, and tags.
- **Nunjucks Extensions**: Add custom filters, globals, and extensions to Nunjucks.
- **Liquid Extensions**: Add custom filters, tags, and globals to Liquid.

## Template Engine Hooks

CampsiteJS provides hooks that allow you to extend template engines with custom functionality. Hooks are defined in your `campsite.config.js` file and are called during the build process.

### Available Hooks

- **`nunjucksEnv(env)`** - Extend the Nunjucks environment
- **`liquidEnv(liquid)`** - Extend the Liquid environment

---

## Nunjucks Hook

The `nunjucksEnv` hook allows you to customize the Nunjucks template engine by adding:

- **Global variables** - Available in all templates
- **Custom filters** - Transform data in templates
- **Custom tags** - Create new template syntax
- **Extensions** - Advanced functionality

### Basic Example: Global Variable

Add a global variable available to all Nunjucks templates:

```javascript
// campsite.config.js
export default {
  // ... other config
  hooks: {
    nunjucksEnv: (env) => {
      env.addGlobal('currentYear', new Date().getFullYear());
    }
  }
};
```

**Usage in templates:**

```njk
<p>&copy; {{ currentYear }} My Company</p>
<!-- Output: © 2026 My Company -->
```

### Adding Custom Filters

Create custom filters to transform data:

```javascript
// campsite.config.js
export default {
  hooks: {
    nunjucksEnv: (env) => {
      // Uppercase filter
      env.addFilter('shout', (str) => {
        return str.toUpperCase() + '!!!';
      });
      
      // Truncate filter
      env.addFilter('truncate', (str, length = 50) => {
        return str.length > length 
          ? str.substring(0, length) + '...' 
          : str;
      });
      
      // Currency filter
      env.addFilter('currency', (amount) => {
        return '$' + amount.toFixed(2);
      });
    }
  }
};
```

**Usage in templates:**

```njk
<h1>{{ title | shout }}</h1>
<!-- Output: <h1>HELLO WORLD!!!</h1> -->

<p>{{ description | truncate(100) }}</p>
<!-- Output: Long text truncated to 100 chars... -->

<p>Price: {{ price | currency }}</p>
<!-- Output: Price: $19.99 -->
```

### Multiple Global Variables

```javascript
// campsite.config.js
export default {
  hooks: {
    nunjucksEnv: (env) => {
      env.addGlobal('siteName', 'My Awesome Site');
      env.addGlobal('siteUrl', 'https://example.com');
      env.addGlobal('currentYear', new Date().getFullYear());
      env.addGlobal('buildDate', new Date().toISOString());
    }
  }
};
```

**Usage:**

```njk
<footer>
  <p>{{ siteName }} - {{ currentYear }}</p>
  <p>Visit us at: {{ siteUrl }}</p>
  <small>Built on: {{ buildDate }}</small>
</footer>
```

### Advanced: Custom Functions

Add utility functions available in templates:

```javascript
// campsite.config.js
export default {
  hooks: {
    nunjucksEnv: (env) => {
      // Random number generator
      env.addGlobal('random', (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      
      // Array shuffler
      env.addGlobal('shuffle', (array) => {
        return array.sort(() => Math.random() - 0.5);
      });
      
      // Date formatter
      env.addGlobal('formatDate', (date) => {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      });
    }
  }
};
```

**Usage:**

```njk
<p>Random dice roll: {{ random(1, 6) }}</p>

{% set items = shuffle(myArray) %}

<p>Published: {{ post.date | formatDate }}</p>
```

---

## Liquid Hook

The `liquidEnv` hook allows you to customize the Liquid template engine with:

- **Custom filters** - Transform data
- **Custom tags** - Create new syntax
- **Global variables** - Available in all templates

### Basic Example: Custom Filter

Add custom filters to Liquid:

```javascript
// campsite.config.js
export default {
  hooks: {
    liquidEnv: (liquid) => {
      // Uppercase with emphasis
      liquid.registerFilter('shout', (str) => {
        return str.toUpperCase() + '!!!';
      });
      
      // Reverse string
      liquid.registerFilter('reverse', (str) => {
        return str.split('').reverse().join('');
      });
      
      // Currency formatter
      liquid.registerFilter('currency', (amount) => {
        return '$' + parseFloat(amount).toFixed(2);
      });
    }
  }
};
```

**Usage in Liquid templates:**

```liquid
<h1>{{ title | shout }}</h1>
<!-- Output: <h1>HELLO WORLD!!!</h1> -->

<p>{{ word | reverse }}</p>
<!-- Output: Reversed text -->

<p>Total: {{ price | currency }}</p>
<!-- Output: Total: $29.99 -->
```

### Multiple Filters

```javascript
// campsite.config.js
export default {
  hooks: {
    liquidEnv: (liquid) => {
      // Truncate text
      liquid.registerFilter('truncate', (str, length = 50) => {
        return str.length > length 
          ? str.substring(0, length) + '...' 
          : str;
      });
      
      // Slugify
      liquid.registerFilter('slugify', (str) => {
        return str
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
      });
      
      // Read time calculator
      liquid.registerFilter('readTime', (content) => {
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
      });
    }
  }
};
```

**Usage:**

```liquid
<p>{{ description | truncate: 100 }}</p>

<a href="/blog/{{ post.title | slugify }}">Read more</a>

<span>{{ post.content | readTime }}</span>
<!-- Output: 5 min read -->
```

### Date Formatting in Liquid

```javascript
// campsite.config.js
export default {
  hooks: {
    liquidEnv: (liquid) => {
      liquid.registerFilter('formatDate', (date, format = 'long') => {
        const d = new Date(date);
        
        if (format === 'short') {
          return d.toLocaleDateString('en-US');
        }
        
        return d.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      });
    }
  }
};
```

**Usage:**

```liquid
<time>{{ post.date | formatDate }}</time>
<!-- Output: January 15, 2026 -->

<time>{{ post.date | formatDate: 'short' }}</time>
<!-- Output: 1/15/2026 -->
```

---

## Using Both Hooks Together

You can use both Nunjucks and Liquid hooks in the same configuration:

```javascript
// campsite.config.js
export default {
  siteName: "My Campsite",
  srcDir: "src",
  outDir: "dist",
  templateEngine: "nunjucks",
  
  integrations: {
    nunjucks: true,
    liquid: true
  },
  
  hooks: {
    // Nunjucks customizations
    nunjucksEnv: (env) => {
      env.addGlobal('currentYear', new Date().getFullYear());
      env.addGlobal('siteName', 'My Campsite');
      
      env.addFilter('shout', (str) => str.toUpperCase() + '!!!');
      env.addFilter('truncate', (str, len) => {
        return str.length > len ? str.substring(0, len) + '...' : str;
      });
    },
    
    // Liquid customizations
    liquidEnv: (liquid) => {
      liquid.registerFilter('shout', (str) => str.toUpperCase() + '!!!');
      liquid.registerFilter('truncate', (str, len) => {
        return str.length > len ? str.substring(0, len) + '...' : str;
      });
    }
  }
};
```

This allows you to use the same functionality across both template engines!

---

## Real-World Examples

### Social Media Share Links

```javascript
// campsite.config.js
export default {
  hooks: {
    nunjucksEnv: (env) => {
      env.addFilter('twitterShare', (url, text) => {
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      });
      
      env.addFilter('facebookShare', (url) => {
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      });
    }
  }
};
```

**Usage:**

```njk
<a href="{{ page.url | twitterShare(page.title) }}">Share on Twitter</a>
<a href="{{ page.url | facebookShare }}">Share on Facebook</a>
```

### Reading Time Estimator

```javascript
// campsite.config.js
export default {
  hooks: {
    nunjucksEnv: (env) => {
      env.addFilter('readingTime', (content) => {
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return minutes === 1 ? '1 minute' : `${minutes} minutes`;
      });
    }
  }
};
```

**Usage:**

```njk
<span>{{ post.content | readingTime }} read</span>
```

### Excerpt Generator

```javascript
// campsite.config.js
export default {
  hooks: {
    nunjucksEnv: (env) => {
      env.addFilter('excerpt', (content, length = 150) => {
        // Remove HTML tags
        const text = content.replace(/<[^>]*>/g, '');
        // Truncate to length
        if (text.length <= length) return text;
        // Find last space before length
        const trimmed = text.substring(0, length);
        const lastSpace = trimmed.lastIndexOf(' ');
        return trimmed.substring(0, lastSpace) + '...';
      });
    }
  }
};
```

**Usage:**

```njk
<p>{{ post.content | excerpt(200) }}</p>
```

---

## Best Practices

### 1. Keep Filters Pure

Filters should not have side effects:

```javascript
// ✅ Good - pure function
env.addFilter('double', (num) => num * 2);

// ❌ Bad - modifies external state
let count = 0;
env.addFilter('increment', (num) => {
  count++; // Side effect!
  return num + count;
});
```

### 2. Handle Edge Cases

Always validate input:

```javascript
env.addFilter('truncate', (str, length = 50) => {
  // Handle null/undefined
  if (!str) return '';
  
  // Handle non-strings
  str = String(str);
  
  // Truncate
  return str.length > length 
    ? str.substring(0, length) + '...' 
    : str;
});
```

### 3. Document Your Extensions

Add comments explaining custom functionality:

```javascript
export default {
  hooks: {
    nunjucksEnv: (env) => {
      /**
       * Formats a date string into a human-readable format
       * @param {string|Date} date - The date to format
       * @param {string} format - 'short' or 'long' (default: 'long')
       * @returns {string} Formatted date string
       */
      env.addFilter('formatDate', (date, format = 'long') => {
        // Implementation...
      });
    }
  }
};
```

### 4. Reuse Code

Extract common logic into functions:

```javascript
// Helper functions
const formatCurrency = (amount) => '$' + amount.toFixed(2);
const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');

export default {
  hooks: {
    nunjucksEnv: (env) => {
      env.addFilter('currency', formatCurrency);
      env.addFilter('slug', slugify);
    },
    
    liquidEnv: (liquid) => {
      liquid.registerFilter('currency', formatCurrency);
      liquid.registerFilter('slug', slugify);
    }
  }
};
```

---

## Additional Resources

- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Liquid Documentation](https://liquidjs.com/)
- [Collections](/docs/essentials/collections) - Working with data
- [Partials](/docs/essentials/partials) - Reusable templates
- [Components](/docs/essentials/components) - Interactive elements

---

**Next Steps:**
- [Collections](/docs/essentials/collections) - Organize your data
- [Partials](/docs/essentials/partials) - Create reusable template snippets
- [Components](/docs/essentials/components) - Add interactivity with Vue/Alpine

