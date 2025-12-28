import { createHash } from "crypto";
import { readFileSync } from "fs";
import path from "path";

const cssPath = path.resolve("public/style.css");

let styleVersion = Date.now().toString();

try {
  const css = readFileSync(cssPath);
  styleVersion = createHash("md5").update(css).digest("hex").slice(0, 10);
} catch (error) {
  // Keep the timestamp-based fallback when style.css is missing in dev.
}

export default {
  styleVersion,
};
