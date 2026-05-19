---
title: File Exclusion
subtitle: Essentials
layout: docs.njk
description: Control which files are copied during the build process with the excludeFiles configuration option in CampsiteJS.
---

> The `excludeFiles` configuration option allows you to skip specific files or patterns when copying from the `staticDir` directory (defaults to `static/`) to your `outDir` during the build process. This is useful for excluding large files, work-in-progress content, or files that shouldn't be deployed to production.

## Overview

By default, CampsiteJS copies all files from your `staticDir` directory (defaults to `static/`) to your `outDir` (defaults to `public/`) during the build process. The `excludeFiles` option gives you fine-grained control over what gets excluded, helping you:

- **Reduce build times** by skipping unnecessary files
- **Prevent deployment** of draft or work-in-progress content
- **Exclude large files** like PDFs or ZIP archives
- **Skip development files** that aren't needed in production

## Configuration

Add the `excludeFiles` array to your `campsite.config.js`:

```javascript
export default {
  // ... other config options
  excludeFiles: ['.pdf', '*.zip', 'draft-*']
};
```

## Pattern Types

### Extension Patterns

Exclude all files with a specific extension:

```javascript
excludeFiles: [
  '.pdf',      // Exclude all PDF files
  '.zip',      // Exclude all ZIP files
  '.psd',      // Exclude Photoshop files
  '.ai'        // Exclude Adobe Illustrator files
]
```

**Variations:**
```javascript
// With or without dot - both work
'.pdf'   // Recommended
'pdf'    // Also works

// With asterisk
'*.pdf'  // Also works
```

### Exact Filename Matches

Exclude specific files by exact name:

```javascript
excludeFiles: [
  'draft.html',
  'README.md',
  'notes.txt',
  'temp-backup.json'
]
```

### Wildcard Patterns

Use wildcards (`*`) for flexible matching:

```javascript
excludeFiles: [
  'draft-*',        // Matches: draft-post.html, draft-page.md
  '*-backup',       // Matches: site-backup, data-backup
  'temp-*',         // Matches: temp-file.txt, temp-image.jpg
  '*-WIP.*'         // Matches: project-WIP.pdf, design-WIP.psd
]
```

### Mixed Patterns

Combine different pattern types:

```javascript
excludeFiles: [
  // Extensions
  '.pdf',
  '.zip',
  '.psd',
  
  // Exact names
  'README.md',
  'CHANGELOG.md',
  
  // Wildcards
  'draft-*',
  '*-backup.*',
  'temp-*'
]
```

## Common Use Cases

### Exclude Document Files

```javascript
export default {
  excludeFiles: [
    '.pdf',
    '.docx',
    '.xlsx',
    '.pptx'
  ]
};
```

### Exclude Draft Content

```javascript
export default {
  excludeFiles: [
    'draft-*',
    '*-draft.*',
    'wip-*',
    '*-WIP.*'
  ]
};
```

### Exclude Development Files

```javascript
export default {
  excludeFiles: [
    'README.md',
    '.DS_Store',
    'Thumbs.db',
    '*.map',
    '*.orig'
  ]
};
```

### Exclude Large Assets

```javascript
export default {
  excludeFiles: [
    '.zip',
    '.tar',
    '.gz',
    '.mp4',
    '.mov',
    'large-*'
  ]
};
```

### Exclude Design Files

```javascript
export default {
  excludeFiles: [
    '.psd',
    '.ai',
    '.sketch',
    '.fig',
    '.xd',
    'design-*'
  ]
};
```

## Complete Example

Here's a comprehensive configuration:

```javascript
export default {
  siteName: "My Campsite",
  srcDir: "src",
  outDir: "public",
  templateEngine: "nunjucks",
  
  // File exclusion
  excludeFiles: [
    // Document formats
    '.pdf',
    '.docx',
    
    // Archives
    '.zip',
    '.tar',
    '.gz',
    
    // Draft content
    'draft-*',
    '*-draft.*',
    'wip-*',
    
    // Development files
    'README.md',
    '.DS_Store',
    
    // Design files
    '.psd',
    '.ai',
    '.sketch'
  ],
  
  // Other settings
  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true
};
```

## Build Output

When files are excluded, you'll see confirmation in the build output:

```bash
camper build
```

**Example output:**
```
🏕️ Building your Campsite...
📝 Processing pages... (23 pages)
🎨 Copying public files...
  ⏭️  Skipping excluded file: project.pdf
  ⏭️  Skipping excluded file: design-mockup.psd
  ⏭️  Skipping excluded file: draft-blog-post.html
  ⏭️  Skipping excluded file: backup.zip
✅ Build complete! Output: ./public/
```

## Directory Structure Example

### Before Build (`static/` directory - your `staticDir`):

```
static/
  images/
    hero.jpg
    logo.png
  documents/
    guide.pdf          ← Will be excluded
    manual.pdf         ← Will be excluded
  drafts/
    draft-post.html    ← Will be excluded
  style.css
  script.js
  README.md            ← Will be excluded
```

### Configuration:

```javascript
excludeFiles: ['.pdf', 'draft-*', 'README.md']
```

### After Build (`public/` directory - your `outDir`):

```
public/
  images/
    hero.jpg
    logo.png
  documents/
    (empty - PDFs excluded)
  style.css
  script.js
```

## Pattern Matching Examples

| Pattern | Matches | Doesn't Match |
|---------|---------|---------------|
| `.pdf` | `file.pdf`, `doc.pdf` | `file.txt`, `pdf.html` |
| `draft-*` | `draft-post.html`, `draft-page.md` | `post-draft.html`, `mydraft.html` |
| `*-backup` | `site-backup`, `data-backup` | `backup-site`, `mybackup` |
| `temp-*.*` | `temp-file.txt`, `temp-image.jpg` | `temp`, `mytemp-file.txt` |
| `*.map` | `style.css.map`, `app.js.map` | `map.js`, `sitemap.xml` |

## Exclusion vs. Photo Compression

When using both `excludeFiles` and photo compression, files are excluded **before** compression:

```javascript
export default {
  excludeFiles: ['draft-*.jpg'],  // Exclude draft photos
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp']  // Won't process excluded files
  }
};
```

**Excluded files:**
- Are not copied to output directory
- Are not processed for compression
- Don't appear in build statistics

## Gitignore Comparison

The `excludeFiles` option is similar to `.gitignore`, but works differently:

| Feature | `.gitignore` | `excludeFiles` |
|---------|-------------|----------------|
| **Purpose** | Keep files out of version control | Keep files out of builds |
| **Scope** | Entire project | Only your `staticDir` (e.g. `static/`) |
| **When** | Git operations | Build process |
| **Impact** | Source control | Production deployment |

### Example Workflow

```javascript
// .gitignore
node_modules/
.env
*.log

// campsite.config.js
export default {
  excludeFiles: [
    '.pdf',        // Keep PDFs in Git, exclude from build
    'draft-*',     // Keep drafts in Git, exclude from build
    '*.psd'        // Keep design files in Git, exclude from build
  ]
};
```

## Best Practices

### 1. Document Your Patterns

Add comments explaining exclusion patterns:

```javascript
excludeFiles: [
  // Large documents not needed on site
  '.pdf',
  '.docx',
  
  // Work-in-progress content
  'draft-*',
  'wip-*',
  
  // Development/design files
  '.psd',
  'README.md'
]
```

### 2. Use Consistent Naming

Adopt naming conventions that make exclusion easy:

```
draft-blog-post.html    // Prefix with "draft-"
design-wip.psd          // Suffix with "-wip"
temp-backup.json        // Prefix with "temp-"
```

### 3. Test Your Patterns

Build and verify excluded files aren't in output:

```bash
camper build
ls -la public/  # Check output directory (or your outDir)
```

### 4. Keep Production Clean

Exclude anything not needed in production:

```javascript
excludeFiles: [
  // Documentation
  'README.md',
  'CONTRIBUTING.md',
  'LICENSE',
  
  // Development artifacts
  '*.map',
  '*.orig',
  '.DS_Store',
  'Thumbs.db'
]
```

### 5. Consider Build Time

Excluding files can speed up builds, especially with large files:

```javascript
excludeFiles: [
  '.zip',     // Large archives
  '.mp4',     // Large videos
  '.iso'      // Very large files
]
```

## Troubleshooting

### Files Still Being Copied

**Check pattern syntax:**
```javascript
// ✅ Correct
excludeFiles: ['.pdf']

// ❌ Incorrect (invalid syntax)
excludeFiles: '*.pdf'  // Should be an array

// ❌ Incorrect (regex not supported)
excludeFiles: [/\.pdf$/]
```

### Pattern Not Matching

**Verify the pattern:**
```javascript
// Match extensions
'.pdf'      // ✅ Matches: file.pdf
'pdf'       // ✅ Also works
'*.pdf'     // ✅ Also works

// Match prefixes
'draft-*'   // ✅ Matches: draft-post.html
'*draft*'   // ✅ Matches: mydraft.html, draft-post.html

// Case sensitivity
'Draft-*'   // ❌ Won't match "draft-file.txt" (lowercase)
'draft-*'   // ✅ Matches lowercase
```

### Excluding Nested Directories

The `excludeFiles` option works on file names, not paths:

```javascript
// ✅ Excludes all PDFs in any directory
excludeFiles: ['.pdf']

// ✅ Excludes all files starting with "draft-"
excludeFiles: ['draft-*']
```

## Examples by Project Type

### Blog/Content Site

```javascript
excludeFiles: [
  'draft-*',
  '*-draft.*',
  'README.md',
  '.DS_Store'
]
```

### Portfolio Site

```javascript
excludeFiles: [
  '.psd',
  '.ai',
  '.sketch',
  'original-*',
  '*-highres.jpg'
]
```

### Documentation Site

```javascript
excludeFiles: [
  '*.map',
  '.DS_Store',
  'Thumbs.db',
  'TODO.md'
]
```

### Corporate Site

```javascript
excludeFiles: [
  '.pdf',           // Large documents
  '.docx',          // Word documents
  'internal-*',     // Internal files
  '*-confidential.*' // Confidential files
]
```

## Additional Resources

- [Photo Compression](/docs/assets/photo-compression) - Optimize images during build
- [Configuration](/docs/essentials/extending) - All config options
- [Build Command](/docs/cli/commands#build) - Understanding the build process

---

**Next Steps:**
- [Photo Compression](/docs/assets/photo-compression) - Optimize images
- [Deploying](/docs/getting-started/deploying) - Deploy your site
- [CLI Commands](/docs/cli/commands) - Build and development commands
