---
title: Vue.js
subtitle: Template Languages
layout: docs.njk
description: Learn how to use Vue.js as a template language in your Campsite projects.
---

### Vue.js Template Language
<p class="mb-8">Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and can easily integrate with other libraries or existing projects, making it a great choice for Campsite projects.</p>

#### Key Features of Vue.js
- **Reactive Data Binding**: Automatically updates the DOM when data changes.
- **Component-Based Architecture**: Build reusable components for better code organization.
- **Directives**: Special attributes that provide functionality to HTML elements.
- **Computed Properties**: Define properties that depend on other data properties.

#### Getting Started with Vue.js in Campsite
1. **Installation**: Include Vue.js in your Campsite project by adding it to your dependencies or via CDN.
2. **Configuration**: No special configuration is needed; simply include Vue.js in your templates.
3. **Creating Templates**: Start creating `.html` or other supported template files for your templates.
4. **Using Vue.js Syntax**: Utilize Vue.js directives and features to add interactivity to your templates.

#### Example Vue.js Template
```html
<div id="app">
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">Reverse Message</button>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      message: 'Hello, Campsite!'
    },
    methods: {
      reverseMessage() {
        this.message = this.message.split('').reverse().join('');
      }
    }
  });
</script>
```

### Directives
Vue.js uses special attributes called directives to add behavior to your HTML elements.
- `v-bind`: Binds attributes to data properties.
- `v-model`: Creates two-way data bindings on form input elements.
- `v-if`: Conditionally renders elements based on data properties.
- `v-for`: Renders a list of items based on an array.

### Reactivity
Vue.js automatically updates the DOM when the underlying data changes. You can define reactive properties within the `data` object.
```html
<div id="app">
  <input v-model="name" placeholder="Enter your name">
  <p>Hello, {{ name }}!</p>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      name: ''
    }
  });
</script>
```

#### Additional Resources
- [Vue.js Official Documentation](https://vuejs.org/)
- [Campsite Template Language Guide](https://campsite.dev/docs/template-languages)

Feel free to explore and experiment with Vue.js to enhance your Campsite projects!