export default {
  siteName: "CampsiteWebsite",
  srcDir: "src",
  outDir: "campfire",
  templateEngine: "nunjucks",
  markdown: true,
  minifyCSS: true,
  minifyHTML: true,
  integrations: {
    nunjucks: true,
    liquid: true,
    vue: false,
    alpine: false
  }
};
