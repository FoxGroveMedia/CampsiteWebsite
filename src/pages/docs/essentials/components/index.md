---
title: Components
subtitle: Essentials
layout: docs.njk
description: Learn how to create and use reusable components in CampsiteJS for Vue.js and Alpine.js.
---

> Components in CampsiteJS allow you to create reusable, interactive UI elements using Vue.js or Alpine.js. Unlike partials (which are server-side template includes), components are client-side and can include JavaScript logic and interactivity.

## Overview

CampsiteJS supports two popular JavaScript frameworks for building interactive components:

- **Vue.js** - Full-featured progressive framework
- **Alpine.js** - Lightweight, reactive framework

Components live in the `src/components/` directory and can be included in your pages and layouts.

## Setup

### Enabling Components

Enable JavaScript frameworks in your `campsite.config.js`:

```javascript
export default {
  // ... other config
  integrations: {
    nunjucks: true,
    liquid: false,
    mustache: false,
    vue: true,      // Enable Vue.js
    alpine: true    // Enable Alpine.js
  }
};
```

### During Project Creation

When creating a new CampsiteJS project, you can select frameworks interactively:

```bash
npm create campsitejs@latest
```

You'll be prompted:
```
? Sprinkle in JS frameworks?
  ◉ Alpine.js
  ◯ Vue.js
```

## Directory Structure

```
src/
  components/
    HelloCampsite.vue      # Vue component
    alpine-card.html       # Alpine component
  pages/
    index.njk
  layouts/
    base.njk
```

## Vue.js Components

### Creating a Vue Component

Create a `.vue` file in `src/components/`:

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/components/Counter.vue</div>

```vue
<template>
  <div class="counter">
    <h3>{{ title }}</h3>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    title: {
      type: String,
      default: 'Counter'
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

<style scoped>
.counter {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

button {
  margin: 0.5rem 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
```

### Using Vue Components

Include Vue components in your pages or layouts:

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/pages/index.njk</div>

```njk
---
layout: base.njk
title: Home
---

<div id="app">
  <h1>Welcome to CampsiteJS</h1>
  
  <!-- Use the Counter component -->
  <counter title="My Counter"></counter>
  
  <!-- Multiple instances -->
  <counter title="First Counter"></counter>
  <counter title="Second Counter"></counter>
</div>
```

### Mounting Vue

Add Vue mounting code to your layout:

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/layouts/base.njk</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
</head>
<body>
  {{ content | safe }}
  
  <!-- Vue.js -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    const { createApp } = Vue;
    
    // Import your components
    import Counter from './components/Counter.vue';
    
    createApp({
      components: {
        Counter
      }
    }).mount('#app');
  </script>
</body>
</html>
```

### Advanced Vue Example

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/components/TodoList.vue</div>

```vue
<template>
  <div class="todo-list">
    <h3>{{ title }}</h3>
    
    <div class="input-group">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="Add a new task..."
      >
      <button @click="addTodo">Add</button>
    </div>
    
    <ul>
      <li 
        v-for="(todo, index) in todos" 
        :key="index"
        :class="{ completed: todo.done }"
      >
        <input 
          type="checkbox" 
          v-model="todo.done"
        >
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(index)">×</button>
      </li>
    </ul>
    
    <p class="stats">
      {{ remaining }} of {{ todos.length }} remaining
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    title: {
      type: String,
      default: 'My Tasks'
    }
  },
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(t => !t.done).length
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo,
          done: false
        })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.todo-list {
  max-width: 500px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

li.completed span {
  text-decoration: line-through;
  opacity: 0.5;
}

.stats {
  margin-top: 1rem;
  color: #666;
}
</style>
```

## Alpine.js Components

Alpine.js is a lightweight alternative to Vue.js, using HTML attributes for reactivity.

### Creating an Alpine Component

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/components/alpine-counter.html</div>

```html
<div x-data="{ count: 0 }" class="alpine-counter">
  <h3>Alpine Counter</h3>
  <p>Count: <span x-text="count"></span></p>
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
</div>
```

### Using Alpine Components

Include Alpine components using Nunjucks includes:

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/pages/index.njk</div>

```njk
---
layout: base.njk
title: Home
---

<h1>Welcome to CampsiteJS</h1>

<!-- Include Alpine component -->
{% include "components/alpine-counter.html" %}
```

### Adding Alpine.js to Layout

<div class="inline-block rounded-md bg-black py-1 px-3 text-base font-bold text-white mb-0">Filename: src/layouts/base.njk</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
</head>
<body>
  {{ content | safe }}
  
  <!-- Alpine.js -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</body>
</html>
```

### Alpine Examples

#### Toggle Component

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  
  <div x-show="open" x-transition>
    <p>This content can be toggled!</p>
  </div>
</div>
```

#### Dropdown Menu

```html
<div x-data="{ open: false }" @click.away="open = false">
  <button @click="open = !open">
    Menu
  </button>
  
  <ul x-show="open" x-transition>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>
```

#### Form with Validation

```html
<div x-data="{ 
  email: '', 
  isValid: false,
  checkEmail() {
    this.isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
  }
}">
  <input 
    type="email" 
    x-model="email"
    @input="checkEmail()"
    placeholder="Enter email"
  >
  
  <p x-show="!isValid && email.length > 0" class="error">
    Please enter a valid email
  </p>
  
  <button :disabled="!isValid">
    Submit
  </button>
</div>
```

#### Tab Component

```html
<div x-data="{ activeTab: 'home' }">
  <div class="tabs">
    <button 
      @click="activeTab = 'home'"
      :class="{ active: activeTab === 'home' }"
    >
      Home
    </button>
    <button 
      @click="activeTab = 'profile'"
      :class="{ active: activeTab === 'profile' }"
    >
      Profile
    </button>
    <button 
      @click="activeTab = 'settings'"
      :class="{ active: activeTab === 'settings' }"
    >
      Settings
    </button>
  </div>
  
  <div class="tab-content">
    <div x-show="activeTab === 'home'">
      <h3>Home Content</h3>
    </div>
    <div x-show="activeTab === 'profile'">
      <h3>Profile Content</h3>
    </div>
    <div x-show="activeTab === 'settings'">
      <h3>Settings Content</h3>
    </div>
  </div>
</div>
```

## Creating Components with CLI

Use the `make:component` command:

```bash
# Vue component
camper make:component MyComponent.vue

# Alpine component
camper make:component my-card.html

# Multiple components
camper make:component Card.vue, Modal.vue, Dropdown.html
```

**Generated Vue component:**
```vue
<template>
  <div class="my-component">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: String,
    content: String
  }
}
</script>

<style scoped>
.my-component {
  padding: 1rem;
}
</style>
```

## Components vs Partials

| Feature | Components | Partials |
|---------|------------|----------|
| **Purpose** | Interactive UI | Reusable templates |
| **Rendering** | Client-side | Server-side |
| **JavaScript** | Yes (Vue/Alpine) | No |
| **Location** | `src/components/` | `src/partials/` |
| **Usage** | Dynamic content | Static content |
| **Best For** | Forms, modals, counters | Headers, footers, navigation |

### When to Use Components

✅ Forms with validation  
✅ Interactive widgets (counters, toggles)  
✅ Dynamic content loading  
✅ Client-side state management  
✅ Real-time updates  

### When to Use Partials

✅ Site header/footer  
✅ Navigation menus  
✅ Static content blocks  
✅ SEO-important content  
✅ Content that needs to be rendered immediately  

## Best Practices

### 1. Component Organization

Keep components organized by type or feature:

```
src/
  components/
    common/
      Button.vue
      Modal.vue
    forms/
      ContactForm.vue
      SearchForm.vue
    alpine/
      toggle.html
      dropdown.html
```

### 2. Prop Validation (Vue)

Always validate props:

```vue
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0
    }
  }
}
</script>
```

### 3. Scoped Styles

Use scoped styles to prevent CSS conflicts:

```vue
<style scoped>
.my-component {
  /* These styles only apply to this component */
}
</style>
```

### 4. Naming Conventions

**Vue components:**
- PascalCase: `MyComponent.vue`
- Use in templates: `<my-component>`

**Alpine components:**
- kebab-case: `my-component.html`
- Descriptive names: `alpine-toggle.html`

### 5. Keep Components Small

Break large components into smaller, reusable pieces:

```vue
<!-- ❌ Too large -->
<template>
  <!-- 500 lines of template code -->
</template>

<!-- ✅ Better -->
<template>
  <div>
    <component-header />
    <component-body />
    <component-footer />
  </div>
</template>
```

## Listing Components

View all components in your project:

```bash
camper list
```

**Output:**
```
🧩 Components (5):
  • Counter.vue
  • TodoList.vue
  • ContactForm.vue
  • alpine-counter.html
  • alpine-toggle.html
```

## CDN vs Local Installation

### Using CDN (Recommended for Getting Started)

**Vue.js:**
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

**Alpine.js:**
```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Local Installation

```bash
npm install vue@3
npm install alpinejs
```

Then bundle with your build process (requires additional configuration).

## Additional Resources

### Vue.js
- [Vue.js Documentation](https://vuejs.org/)
- [Vue.js Examples](https://vuejs.org/examples/)
- [Vue.js API Reference](https://vuejs.org/api/)

### Alpine.js
- [Alpine.js Documentation](https://alpinejs.dev/)
- [Alpine.js Examples](https://alpinejs.dev/examples)
- [Alpine.js Directives](https://alpinejs.dev/directives)

### CampsiteJS
- [Partials](/docs/essentials/partials) - Server-side includes
- [Make Commands](/docs/cli/make-commands) - Create components with CLI
- [Configuration](/docs/essentials/extending) - Enable integrations

---

**Next Steps:**
- [Partials](/docs/essentials/partials) - Learn about server-side includes
- [JavaScript Frameworks](/docs/js-frameworks) - Framework-specific guides
- [Make Commands](/docs/cli/make-commands) - Create components with CLI
