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
  },
  hooks: {
    nunjucksEnv(env) {
      env.addFilter("anchorsFromContent", (html) => {
        // if (!html) return [];
        const links = [];

        // Match anchors like <a id="overview"></a> optionally followed by a heading for label
        const anchorRegex = /<a[^>]*id="([^"]+)"[^>]*><\/a>\s*(?:<h[1-6][^>]*>(.*?)<\/h[1-6]>)?/gi;
        let match;
        while ((match = anchorRegex.exec(html)) !== null) {
          const id = match[1];
          const rawLabel = match[2] || "";
          const label = rawLabel.replace(/<[^>]+>/g, "").trim() || id;
          links.push({ href: `#${id}`, label });
        }

        // Also catch standalone h2/h3 with ids (in case no explicit anchor tag)
        const headingRegex = /<h[23][^>]*id="([^"]+)"[^>]*>(.*?)<\/h[23]>/gi;
        while ((match = headingRegex.exec(html)) !== null) {
          const id = match[1];
          // Skip if we already captured this id via anchor
          if (links.some((l) => l.href === `#${id}`)) continue;
          const rawLabel = match[2] || "";
          const label = rawLabel.replace(/<[^>]+>/g, "").trim() || id;
          links.push({ href: `#${id}`, label });
        }

        return links;
      });

      env.addFilter("labelize", (value = "") => {
        return String(value).replace(/-/g, " ");
      });
    },
  },
};
