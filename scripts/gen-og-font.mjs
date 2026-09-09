/**
 * Regenerates src/assets/fonts/playfair-display-600.ts from the sibling .ttf.
 *
 * The OG image route (src/app/opengraph-image.tsx) runs on the edge runtime and
 * can't read the filesystem or fetch a relative URL at build time, so the font
 * is base64-inlined. Run this after replacing the .ttf:
 *
 *   node scripts/gen-og-font.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ttfPath = join(root, "src/assets/fonts/PlayfairDisplay-SemiBold.ttf");
const outPath = join(root, "src/assets/fonts/playfair-display-600.ts");

const b64 = readFileSync(ttfPath).toString("base64");

const contents = [
  "// Playfair Display SemiBold (weight 600), Latin subset — SIL Open Font License.",
  "// Source: google-webfonts-helper, from fonts.google.com/specimen/Playfair+Display.",
  "// Base64-inlined so the OG image route is self-contained on the edge runtime",
  "// (no filesystem read or fetch at build time). Regenerate with:",
  "//   node scripts/gen-og-font.mjs",
  "",
  "export const PLAYFAIR_DISPLAY_600_BASE64 =",
  `  "${b64}";`,
  "",
].join("\n");

writeFileSync(outPath, contents);
console.log(`wrote ${outPath} (${contents.length} chars from ${b64.length} base64)`);
