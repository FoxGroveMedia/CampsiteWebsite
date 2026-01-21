export default {
  srcDir: "src",
  outDir: "campfire",
  templateEngine: "nunjucks",
  markdown: true,
  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true,
  excludeFiles: ['.pdf'],
  compressPhotos: true,
  compressionSettings: {
    quality: 80,
    formats: [".webp", ".avif"],
    inputFormats: [".jpg", ".jpeg", ".png"],
    preserveOriginal: true
  },
  integrations: {
    alpine: false,
    liquid: true,
    mustache: false,
    nunjucks: true,
    vue: false
  },
  hooks: {
    nunjucksEnv: (env) => {
      env.addGlobal('currentYear', new Date().getFullYear());
    }
  }
};