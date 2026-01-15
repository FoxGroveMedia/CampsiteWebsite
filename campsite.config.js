export default {
  siteName: "CampsiteWebsite",
  domain: "https://campsitejs.dev",
  baseURL: "/",
  srcDir: "src",
  outDir: "campfire",
  templateEngine: "nunjucks",
  markdown: true,
  minifyCSS: true,
  minifyHTML: true,
  cacheBustAssets: true,
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