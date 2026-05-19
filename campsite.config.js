export default {
  srcDir: "src",
  outDir: "public",
  templateEngine: "nunjucks",
  minifyCSS: false,
  minifyHTML: false,
  cacheBustAssets: false,
  excludeFiles: ['.pdf'],
  compressPhotos: false,
  compressionSettings: {
    quality: 80,
    formats: [".webp", ".avif"],
    inputFormats: [".jpg", ".jpeg", ".png"],
    preserveOriginal: true
  },
  integrations: {
    alpine: true,
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