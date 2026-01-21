---
title: Photo Compression
subtitle: Essentials
layout: docs.njk
description: Automatic image optimization in CampsiteJS - convert JPG/PNG to modern WebP and AVIF formats with configurable quality settings.
---

> CampsiteJS includes built-in photo compression that automatically converts your images to modern, optimized formats during the build process. This feature dramatically reduces file sizes while maintaining visual quality, resulting in faster page loads and better user experience.

## Overview

Photo compression in CampsiteJS is powered by the [Sharp](https://sharp.pixelplumbing.com/) library, providing high-performance image processing with minimal configuration. When enabled, the build process automatically:

- **Converts** JPG/PNG images to WebP and/or AVIF formats
- **Optimizes** file sizes while maintaining quality
- **Preserves** original images (optional)
- **Processes** images in the `public/` directory during build

## Configuration

Photo compression is configured in your `campsite.config.js` file:

### Basic Configuration

```javascript
export default {
  // ... other config
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp', '.avif'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  }
};
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `compressPhotos` | `boolean` | `false` | Enable/disable photo compression |
| `quality` | `number` | `80` | Compression quality (0-100). Higher = better quality, larger file size |
| `formats` | `array` | `['.webp']` | Output formats. Options: `'.webp'`, `'.avif'` |
| `inputFormats` | `array` | `['.jpg', '.jpeg', '.png']` | Source image formats to process |
| `preserveOriginal` | `boolean` | `true` | Keep original images alongside compressed versions |

## Usage Examples

### WebP Only (Fast, Good Compatibility)

```javascript
export default {
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  }
};
```

### WebP + AVIF (Best Optimization)

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

### Maximum Quality (Larger Files)

```javascript
export default {
  compressPhotos: true,
  compressionSettings: {
    quality: 95,
    formats: ['.webp'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: true
  }
};
```

### Replace Originals (Save Space)

```javascript
export default {
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: ['.webp'],
    inputFormats: ['.jpg', '.jpeg', '.png'],
    preserveOriginal: false  // Removes original files
  }
};
```

## Build Process

When you run `camper build`, compressed images are automatically generated:

```bash
camper build
```

**Example output:**
```
🏕️ Building your Campsite...
📝 Processing pages... (23 pages)
🎨 Processing layouts... (5 layouts)
📸 Compressing photos...
  ✅ hero.jpg → hero.webp (saved 245 KB)
  ✅ hero.jpg → hero.avif (saved 312 KB)
  ✅ team-photo.png → team-photo.webp (saved 189 KB)
✅ Build complete! Output: ./dist/
```

## Using Compressed Images in HTML

### With Picture Element (Recommended)

The `<picture>` element provides the best browser support and fallback options:

```html
<picture>
  <!-- Modern formats for supporting browsers -->
  <source srcset="/images/hero.avif" type="image/avif">
  <source srcset="/images/hero.webp" type="image/webp">
  
  <!-- Fallback for older browsers -->
  <img src="/images/hero.jpg" alt="Hero image">
</picture>
```

### Simple WebP with Fallback

```html
<picture>
  <source srcset="/images/photo.webp" type="image/webp">
  <img src="/images/photo.jpg" alt="Description">
</picture>
```

### Responsive Images

Combine with responsive image techniques:

```html
<picture>
  <source 
    srcset="/images/banner-small.webp 600w,
            /images/banner-medium.webp 1200w,
            /images/banner-large.webp 1800w"
    type="image/webp">
  <img 
    src="/images/banner.jpg" 
    srcset="/images/banner-small.jpg 600w,
            /images/banner-medium.jpg 1200w,
            /images/banner-large.jpg 1800w"
    sizes="(max-width: 600px) 600px,
           (max-width: 1200px) 1200px,
           1800px"
    alt="Banner">
</picture>
```

## Format Comparison

### WebP
- **Browser Support:** 95%+ (all modern browsers)
- **Compression:** ~25-35% smaller than JPEG
- **Speed:** Fast encoding/decoding
- **Use Case:** Best for most projects

### AVIF
- **Browser Support:** ~85% (Chrome, Opera, Firefox, Safari 16+)
- **Compression:** ~50% smaller than JPEG
- **Speed:** Slower encoding
- **Use Case:** Cutting-edge optimization

### Recommended Strategy

Use **both WebP and AVIF** with a fallback:

```javascript
formats: ['.webp', '.avif']
```

This ensures:
- Modern browsers get ultra-optimized AVIF
- Older browsers get efficient WebP
- Legacy browsers fall back to original format

## Quality Guidelines

| Quality | File Size | Use Case |
|---------|-----------|----------|
| **95-100** | Largest | Photography portfolios, professional work |
| **85-90** | Large | High-quality images where detail matters |
| **80** | Balanced | **Default** - Good for most websites |
| **70-75** | Small | Blog posts, thumbnails |
| **60-65** | Smallest | Background images, decorative elements |

## Performance Tips

### 1. Directory Organization

Keep images organized in `public/images/`:

```
public/
  images/
    hero.jpg
    team/
      member-1.jpg
      member-2.jpg
    products/
      product-1.png
```

### 2. Selective Compression

To skip certain images, use the `excludeFiles` option:

```javascript
export default {
  compressPhotos: true,
  excludeFiles: ['logo.png', 'icon-*.png'],  // Skip these files
  compressionSettings: {
    // ...
  }
};
```

### 3. Pre-sized Images

For best results, resize images before adding them to your project:

- Hero images: 1920px wide
- Blog images: 1200px wide
- Thumbnails: 400px wide

### 4. Lazy Loading

Combine with lazy loading for optimal performance:

```html
<picture>
  <source srcset="/images/hero.webp" type="image/webp">
  <img 
    src="/images/hero.jpg" 
    alt="Hero" 
    loading="lazy">
</picture>
```

## Troubleshooting

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

1. **Always use the picture element** for proper browser support
2. **Set quality to 80** for a good balance (default)
3. **Use both WebP and AVIF** for maximum optimization
4. **Keep originals during development** (`preserveOriginal: true`)
5. **Add width/height attributes** to prevent layout shift
6. **Use lazy loading** for below-the-fold images
7. **Test on multiple devices** to ensure quality is acceptable

## Additional Resources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP Browser Support](https://caniuse.com/webp)
- [AVIF Browser Support](https://caniuse.com/avif)
- [MDN: Picture Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)

---

**Next Steps:**
- [File Exclusion](/docs/essentials/file-exclusion) - Skip specific files during build
- [Configuration](/docs/essentials/extending) - Advanced config options
- [Deploying](/docs/getting-started/deploying) - Launch your optimized site
