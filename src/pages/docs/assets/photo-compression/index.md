---
title: Photo Compression
subtitle: Assets
layout: docs.njk
description: Automatic image optimization in CampsiteJS - convert JPG/PNG to modern WebP and AVIF formats with configurable quality settings.
---

> CampsiteJS includes built-in photo compression that automatically converts your images to modern, optimized formats during the build process. This feature dramatically reduces file sizes while maintaining visual quality, resulting in faster page loads and better user experience.

## Overview

When enabled, CampsiteJS automatically compresses and converts your images to modern formats (**WebP** and **AVIF**) during the build using the [Sharp](https://sharp.pixelplumbing.com/) library.

This can significantly reduce file sizes (often 30–70%) while preserving visual quality, leading to faster page loads.

## Configuration

Enable photo compression in `campsite.config.js`:

```javascript
export default {
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp', '.avif'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  }
};
```

### Key Options

| Option              | Default     | Description |
|---------------------|-------------|-----------|
| `compressPhotos`    | `false`     | Enable the feature |
| `quality`           | `80`        | Quality level (0–100). 80 is a good default |
| `formats`           | `['.webp']` | Output formats (`'.webp'`, `'.avif'`) |
| `preserveOriginal`  | `true`      | Keep the original file alongside optimized versions |

## Recommended Setup

For most sites, this configuration gives excellent results:

```javascript
export default {
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp', '.avif'],
    preserveOriginal: true
  }
};
```

This produces both WebP and AVIF versions while keeping the originals as fallbacks.

## Build Output

When enabled, `camper build` will automatically process images in your output directory and generate optimized versions.

## Using Optimized Images

The best way to serve the compressed versions is with the `<picture>` element:

```html
<picture>
  <source srcset="/images/hero.avif" type="image/avif">
  <source srcset="/images/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Hero image">
</picture>
```

This lets modern browsers use the smaller AVIF or WebP versions, while older browsers fall back to the original JPEG/PNG.

For responsive images, you can combine it with `srcset` and `sizes` as usual.

## Format Recommendations

For most projects, enable both formats:

```javascript
formats: ['.webp', '.avif']
```

- **WebP** — Excellent support and good compression. Great default choice.
- **AVIF** — Even smaller files, but slightly less browser support.

## Quality & Performance Tips

- `quality: 80` works well for most websites.
- Use higher quality (90+) for photography sites.
- Resize large images before adding them to your project (e.g. hero images at ~1920px wide).
- Use the `excludeFiles` option if you want to skip compressing specific images (logos, icons, etc.).
- Add `loading="lazy"` to images for additional performance gains.

### Compression Not Working

**Check your config:**
```javascript
compressPhotos: true,  // Must be true
```

**Verify Sharp installation:**
```bash
npm install sharp --save-dev
```

### Images Not Appearing

- Ensure images are in `public/` directory
- Check file extensions match `inputFormats`
- Verify build completed without errors

### Large File Sizes

- Lower the `quality` setting (try 70-75)
- Use both `.webp` and `.avif` formats
- Pre-resize images before adding to project

## Examples

### Photo Gallery

```html
<div class="gallery">
  <picture>
    <source srcset="/images/gallery/photo1.webp" type="image/webp">
    <img src="/images/gallery/photo1.jpg" alt="Photo 1" loading="lazy">
  </picture>
  
  <picture>
    <source srcset="/images/gallery/photo2.webp" type="image/webp">
    <img src="/images/gallery/photo2.jpg" alt="Photo 2" loading="lazy">
  </picture>
</div>
```

### Blog Post with Featured Image

```njk
---
title: My Blog Post
featuredImage: /images/blog/post-hero.jpg
---

<article>
  <picture>
    <source srcset="{{ featuredImage | replace('.jpg', '.avif') }}" type="image/avif">
    <source srcset="{{ featuredImage | replace('.jpg', '.webp') }}" type="image/webp">
    <img src="{{ featuredImage }}" alt="{{ title }}" class="featured-image">
  </picture>
  
  <h1>{{ title }}</h1>
  {{ content | safe }}
</article>
```

## Best Practices

## Best Practices

- Always use the `<picture>` element when serving multiple formats.
- Start with `quality: 80` and `formats: ['.webp', '.avif']`.
- Keep `preserveOriginal: true` while developing so you can compare results.
- Resize images appropriately before adding them to your project.

## Additional Resources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP on Can I Use](https://caniuse.com/webp)
- [AVIF on Can I Use](https://caniuse.com/avif)
- [MDN: &lt;picture&gt; element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
