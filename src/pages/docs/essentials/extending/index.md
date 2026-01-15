---
title: Extending CampsiteJS
subtitle: Essentials
layout: docs.njk
description: Discover how to extend the functionality of CampsiteJS through custom hooks, and more to tailor your static site projects to your needs.
---

> Extending CampsiteJS allows you to customize and enhance the functionality of your static site projects. This guide will walk you through the process of creating plugins, custom filters, and other extensions to tailor CampsiteJS to your needs.

## Key Features of Extending CampsiteJS
- **Custom Hooks**: Tap into various stages of the build process to perform custom actions.

### Hooks
CampsiteJS provides hooks that allow you to tap into various stages of the build process. This enables you to perform custom actions at specific points during the site generation.

#### Using Hooks
You can define hooks in your `campsite.config.js` file. For example, to add a global variable to the Nunjucks environment:

#### Hook Example

<pre class="text-gray-600">
// campsite.config.js
export default {
  ...<code>
  hooks: {
    nunjucksEnv: (env) => {
      env.addGlobal('currentYear', new Date().getFullYear());
    }
  }</code>
};
</pre>

#### Template Example

Then to use the global variable in your templates like so:

<pre class="text-gray-600">
&lt;p&gt;&amp;copy; <code>{{ currentYear }}</code>&lt;/p&gt;
</pre>

