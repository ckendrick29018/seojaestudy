/**
 * Generate every SVG in public/covers from scripts/cover-data.json.
 *
 *   npm i --no-save fontkit @fontsource/playfair-display @fontsource/inter @fontsource/noto-serif-kr
 *   node scripts/generate-covers.mjs                 # all covers -> public/covers
 *   node scripts/generate-covers.mjs jane-eyre       # only slugs containing "jane-eyre"
 *   node scripts/generate-covers.mjs --out /tmp/prev # write somewhere else (preview)
 *   node scripts/generate-covers.mjs --sheet         # also write <out>/_sheet.html
 *   node scripts/generate-covers.mjs --pin           # freeze today's colours into cover-palettes.json
 *
 * Why a generator: the covers are shown through <img>, where an SVG cannot use the
 * site's web fonts, so live <text> fell back to whatever "Georgia" resolved to on the
 * device. Here every string is converted to real font outlines (Playfair Display,
 * Inter, Noto Serif KR) so a cover looks identical everywhere, and one template keeps
 * type sizes, spacing and colours consistent across ~190 covers.
 *
 * To add a cover, append an entry to scripts/cover-data.json:
 *   { slug, aria, footer: CLASSICS|FOLKTALES|BIOGRAPHIES|FABLES, title, tagline,
 *     author: [..uppercase lines..], meta: [..year / CHAPTER n..], art: "<g ...>…</g>",
 *     bbox: [x, y, w, h] }
 * `art` is a line-drawing in page coordinates (see any existing entry); `bbox` is its
 * getBBox() and is used to scale it into the medallion.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as fk from "fontkit";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const FONT_DIR = (pkg) => path.join(ROOT, "node_modules", "@fontsource", pkg, "files");

// ── CLI ────────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
let outDir = path.join(ROOT, "public", "covers");
let wantSheet = false;
let wantPin = false;
const filters = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--out") outDir = path.resolve(args[++i]);
  else if (args[i] === "--sheet") wantSheet = true;
  else if (args[i] === "--pin") wantPin = true;
  else filters.push(args[i]);
}

// ── Fonts ──────────────────────────────────────────────────────────────────────
const loadFont = (file) => fk.create(readFileSync(file));
const FONTS = {
  title: loadFont(path.join(FONT_DIR("playfair-display"), "playfair-display-latin-700-normal.woff")),
  italic: loadFont(path.join(FONT_DIR("playfair-display"), "playfair-display-latin-400-italic.woff")),
  label: loadFont(path.join(FONT_DIR("inter"), "inter-latin-600-normal.woff")),
};

/** Noto Serif KR ships as ~125 unicode-range slices; find the one holding a given syllable. */
const KR_DIR = FONT_DIR("noto-serif-kr");
const krFiles = readdirSync(KR_DIR).filter((f) => /-700-normal\.woff$/.test(f) && !/latin|cyrillic|vietnamese/.test(f));
const krSlices = new Map();
const krCache = new Map();
function krFontFor(ch) {
  if (krCache.has(ch)) return krCache.get(ch);
  for (const f of krFiles) {
    if (!krSlices.has(f)) krSlices.set(f, loadFont(path.join(KR_DIR, f)));
    const font = krSlices.get(f);
    if (font.hasGlyphForCodePoint(ch.codePointAt(0))) {
      krCache.set(ch, font);
      return font;
    }
  }
  krCache.set(ch, null);
  return null;
}
const isHangul = (ch) => /[\u1100-\u11ff\u3130-\u318f\uac00-\ud7a3]/.test(ch);

// ── Text as outlines ───────────────────────────────────────────────────────────
/** Split a string into runs of the same script so each run uses the right font. */
function runs(text, latinFont) {
  const out = [];
  for (const ch of text) {
    const font = isHangul(ch) ? krFontFor(ch) ?? latinFont : latinFont;
    if (!font.hasGlyphForCodePoint(ch.codePointAt(0)) && ch !== " ") {
      console.warn(`  ! no glyph for "${ch}" (U+${ch.codePointAt(0).toString(16)})`);
    }
    const last = out[out.length - 1];
    if (last && last.font === font) last.text += ch;
    else out.push({ font, text: ch });
  }
  return out;
}

/** Lay a string out with fontkit's shaper (advances, pair kerning) plus optional tracking. */
function layout(text, latinFont, size, ls = 0) {
  const placed = [];
  let x = 0;
  for (const r of runs(text, latinFont)) {
    const scale = size / r.font.unitsPerEm;
    const { glyphs, positions } = r.font.layout(r.text);
    glyphs.forEach((glyph, i) => {
      const p = positions[i];
      placed.push({ glyph, x: x + p.xOffset * scale, scale });
      x += p.xAdvance * scale + ls * size;
    });
  }
  return { placed, width: x - ls * size };
}

function measure(text, latinFont, size, ls = 0) {
  return layout(text, latinFont, size, ls).width;
}

// Compact SVG path data: relative commands, leading zeros dropped. Coordinates are rounded to
// 0.1, or to whole units for text 13px and under (an error of half a unit is invisible at
// that size and cuts those strings by about a third).
let PRECISION = 10;
const r1 = (n) => Math.round(n * PRECISION) / PRECISION;
const num = (n) => {
  const s = String(n);
  return s.startsWith("0.") ? s.slice(1) : s.startsWith("-0.") ? `-${s.slice(2)}` : s;
};
const join = (tokens) => tokens.map(num).reduce((acc, t) => (acc === "" ? t : acc + (t.startsWith("-") ? "" : " ") + t), "");

function glyphPath(glyph, ox, oy, scale) {
  let d = "";
  let cx = 0;
  let cy = 0;
  const abs = (x, y) => [r1(ox + x * scale), r1(oy - y * scale)];
  for (const { command, args } of glyph.path.commands) {
    if (command === "moveTo") {
      const [x, y] = abs(args[0], args[1]);
      d += `M${join([x, y])}`;
      [cx, cy] = [x, y];
    } else if (command === "lineTo") {
      const [x, y] = abs(args[0], args[1]);
      d += `l${join([r1(x - cx), r1(y - cy)])}`;
      [cx, cy] = [x, y];
    } else if (command === "quadraticCurveTo") {
      const [x1, y1] = abs(args[0], args[1]);
      const [x, y] = abs(args[2], args[3]);
      d += `q${join([r1(x1 - cx), r1(y1 - cy), r1(x - cx), r1(y - cy)])}`;
      [cx, cy] = [x, y];
    } else if (command === "bezierCurveTo") {
      const [x1, y1] = abs(args[0], args[1]);
      const [x2, y2] = abs(args[2], args[3]);
      const [x, y] = abs(args[4], args[5]);
      d += `c${join([r1(x1 - cx), r1(y1 - cy), r1(x2 - cx), r1(y2 - cy), r1(x - cx), r1(y - cy)])}`;
      [cx, cy] = [x, y];
    } else if (command === "closePath") {
      d += "z";
    }
  }
  return d;
}

/** Path data for `text` centred on cx with baseline y. */
function pathFor(text, latinFont, size, cx, y, ls = 0) {
  const { placed, width } = layout(text, latinFont, size, ls);
  const x0 = cx - width / 2;
  PRECISION = size <= 13 ? 1 : 10;
  return placed.map(({ glyph, x, scale }) => glyphPath(glyph, x0 + x, y, scale)).join("");
}

/** Break `words` into at most `maxLines` lines no wider than `maxW`; among the fits, pick the most balanced. */
function wrap(words, latinFont, size, ls, maxW, maxLines) {
  const n = words.length;
  const widthOf = (a, b) => measure(words.slice(a, b).join(" "), latinFont, size, ls);
  for (let lines = 1; lines <= Math.min(maxLines, n); lines++) {
    let best = null;
    // choose lines-1 cut points among the n-1 gaps
    const cuts = [];
    const rec = (start, left) => {
      if (left === 0) {
        const bounds = [0, ...cuts, n];
        const ws = bounds.slice(1).map((b, i) => widthOf(bounds[i], b));
        const widest = Math.max(...ws);
        if (widest <= maxW && (!best || widest < best.widest)) {
          best = { widest, lines: bounds.slice(1).map((b, i) => words.slice(bounds[i], b).join(" ")) };
        }
        return;
      }
      for (let c = start; c <= n - left; c++) {
        cuts.push(c);
        rec(c + 1, left - 1);
        cuts.pop();
      }
    };
    rec(1, lines - 1);
    if (best) return best.lines;
  }
  return null;
}

// ── Colour ─────────────────────────────────────────────────────────────────────
const CREAM = "#FBF3E4";
const PALETTES = {
  CLASSICS: [
    ["#7A2331", "#4B1420", "#E9C983"], // oxblood
    ["#24513F", "#14332A", "#E6CB81"], // forest
    ["#223A66", "#121F3D", "#EBD08C"], // navy
    ["#5D2C58", "#381837", "#F0CD92"], // plum
    ["#1D6063", "#0E3B3E", "#F0D38F"], // teal
    ["#A44D2A", "#6C2E19", "#F8E0A8"], // rust
    ["#3B5068", "#232F40", "#EAD199"], // slate
    ["#5E6830", "#3C4320", "#F0DA96"], // olive
    ["#45408A", "#292660", "#EFD08E"], // indigo
    ["#6B4327", "#432818", "#F0D394"], // umber
    ["#94405A", "#5F2438", "#F6D9A0"], // rose
    ["#33343B", "#1C1D22", "#E6C874"], // graphite
    ["#1F5A50", "#103630", "#EBD08B"], // pine
  ],
  // hanbok-inspired: crimson, indigo, jade, saffron, plum, ink
  FOLKTALES: [
    ["#9A2B30", "#5E1519", "#F2D08A"],
    ["#274B8C", "#162B54", "#F2D08A"],
    ["#1F6B57", "#0F4034", "#F0D68E"],
    ["#B8801D", "#7C5210", "#FFF1CF"],
    ["#63305F", "#3B1A39", "#F0CD92"],
    ["#2A2A30", "#16161A", "#E6C874"],
  ],
  BIOGRAPHIES: [
    ["#23406B", "#122540", "#EBD08C"],
    ["#1D5A63", "#0E3840", "#EBD08C"],
    ["#3B5068", "#232F40", "#EAD199"],
    ["#33343B", "#1C1D22", "#E6C874"],
  ],
  FABLES: [
    ["#5E6830", "#3C4320", "#F0DA96"],
    ["#1F5A50", "#103630", "#EBD08B"],
    ["#B8801D", "#7C5210", "#FFF1CF"],
  ],
};

const hash = (s) => {
  let h = 2166136261;
  for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return h;
};

/** slug -> book id, so every chapter of a book wears the same colours. */
function bookIndex() {
  // BOOKS_TS lets --pin read an older books.ts (e.g. `git show HEAD:...`) to freeze the colours it produced.
  const src = readFileSync(process.env.BOOKS_TS ?? path.join(ROOT, "src/lib/data/books.ts"), "utf8");
  const map = new Map();
  for (const m of src.matchAll(/id:\s*"([^"]+)"[\s\S]*?chapters:\s*\[([^\]]*)\]/g)) {
    for (const s of m[2].matchAll(/"([^"]+)"/g)) map.set(s[1], m[1]);
  }
  return map;
}

// ── Art ────────────────────────────────────────────────────────────────────────
/** Recolour a line drawing made for a cream page so it reads on a deep background. */
function recolorArt(art, gold) {
  let firstStroke = true;
  return art
    .replace(/<g\b[^>]*>/, (tag) => tag.replace(/stroke="#[0-9A-Fa-f]{6}"/, `stroke="${CREAM}"`))
    .replace(/(<(?!g\b)[a-z]+\b[^>]*?)stroke="#[0-9A-Fa-f]{6}"/g, (_, pre) => `${pre}stroke="${gold}"`)
    .replace(/fill="#[0-9A-Fa-f]{6}"/g, `fill="${gold}"`)
    .replace(/fill-opacity="([\d.]+)"/g, (_, v) => `fill-opacity="${Math.min(0.6, +v * 2.4 + 0.08).toFixed(2)}"`)
    .replace(/(?<![-\w])opacity="([\d.]+)"/g, (_, v) => `opacity="${Math.max(0.78, +v).toFixed(2)}"`)
    .replace(/stroke-width="([\d.]+)"/g, (_, v) => {
      firstStroke = false;
      return `stroke-width="${(+v * 1.3).toFixed(2)}"`;
    });
}

// ── Cover ──────────────────────────────────────────────────────────────────────
const CX = 200;
const TITLE_W = 304; // widest title line, leaving a margin inside the frame
const MED = { cx: 200, cy: 174, r: 84 };
/** Straight quotes become typographic ones, as in the reader. */
const typographic = (t) =>
  t
    .replace(/(^|[\s([—-])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/(^|[\s([—“-])'/g, "$1‘")
    .replace(/'/g, "’");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

function buildCover(d, palette) {
  const [top, bottom, gold] = palette;
  const isChapter = d.meta.some((m) => /^CHAPTER\b/i.test(m));

  // — art, scaled into the medallion
  let art = d.art;
  let bbox = d.bbox;
  if (d.slug === "anne-of-green-gables-with-an-e") {
    // The old cover drew a big serif "E" as live text; outline it instead.
    const dE = pathFor("E", FONTS.title, 110, 0, 38, 0);
    art =
      `<g transform="translate(200 ${MED.cy})" stroke="${CREAM}" fill="none" stroke-linecap="round" stroke-linejoin="round">` +
      `<path d="${dE}" fill="${gold}" stroke="none"/>` +
      `<path d="M-40 52 q 40 14 80 0" stroke-width="1.6"/>` +
      `<path d="M48 -40 l 16 -22 l 7 5 l -16 22 z" stroke-width="1.6"/></g>`;
    bbox = [160, MED.cy - 62, 111, 130];
  }
  const [bx, by, bw, bh] = bbox;
  const fit = 118;
  const scale = Math.min(2.6, Math.max(0.9, Math.min(fit / bw, fit / bh)));
  const tx = MED.cx - (bx + bw / 2) * scale;
  const ty = MED.cy - (by + bh / 2) * scale;
  const artSvg =
    d.slug === "anne-of-green-gables-with-an-e"
      ? art
      : `<g transform="translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${scale.toFixed(3)})">${recolorArt(art, gold)}</g>`;

  // — bottom block (anchored from the foot of the cover upward)
  const labelSize = 12.5;
  const authors = d.author.length ? d.author : [];
  const authorLines = [];
  for (const a of authors) {
    const w = measure(a, FONTS.label, labelSize, 0.16);
    if (w <= 310) authorLines.push(a);
    else {
      const words = a.split(" ");
      const wrapped = wrap(words, FONTS.label, labelSize, 0.16, 310, 2) ?? [a];
      authorLines.push(...wrapped);
    }
  }
  const metaText = d.meta.join("  ·  ");
  const footerY = 556;
  const metaY = metaText ? 532 : null;
  const authorLast = (metaText ? metaY - 22 : footerY - 30);
  const authorFirst = authorLast - (authorLines.length - 1) * 18;
  const authorTop = authorFirst - 14;

  // — title + tagline, fitted into the space between the medallion and the author block
  const zoneTop = MED.cy + MED.r + 30; // top of title cap height
  const zoneBottom = authorTop - 16;
  const taglineSize = isChapter ? 20 : 16;
  const taglineLH = taglineSize * 1.3;
  const words = typographic(d.title).split(/\s+/).filter(Boolean);
  // keep a leading article with a short next word so a line never ends on a lone "The"/"A"
  if (words.length > 2 && /^(the|a|an)$/i.test(words[0]) && words[1].length <= 8) words.splice(0, 2, `${words[0]} ${words[1]}`);
  const LS = 0.01;
  const tagWords = typographic(d.tagline).split(/\s+/).filter(Boolean);
  const tagLines = tagWords.length ? wrap(tagWords, FONTS.italic, taglineSize, 0, 300, 2) ?? [typographic(d.tagline)] : [];
  const tagBlockH = tagLines.length ? 22 + 14 + tagLines.length * taglineLH : 0;
  // Prefer the fewest title lines that still allow a bold size (see minSize); only fall back to
  // more, smaller lines when the title is long.
  let chosen = null;
  const minSize = { 1: 40, 2: 36, 3: 30, 4: 24 };
  for (const maxLines of [1, 2, 3, 4]) {
    for (let size = 52; size >= minSize[maxLines]; size -= 1) {
      const lines = wrap(words, FONTS.title, size, LS, TITLE_W, maxLines);
      if (!lines) continue;
      const lh = size * 1.12;
      const titleH = size * 0.74 + (lines.length - 1) * lh;
      if (titleH + tagBlockH <= zoneBottom - zoneTop) {
        chosen = { size, lines, lh, titleH, tagLines };
        break;
      }
    }
    if (chosen) break;
  }
  if (!chosen) throw new Error(`${d.slug}: title does not fit`);

  const { size, lines, lh, titleH } = chosen;
  // centre the block vertically in the zone
  const tagBlock = tagLines.length ? 22 + 14 + tagLines.length * taglineLH : 0;
  const blockH = titleH + tagBlock;
  const startY = zoneTop + Math.max(0, (zoneBottom - zoneTop - blockH) / 2);
  const firstBase = startY + size * 0.74;
  let titleD = "";
  lines.forEach((ln, i) => {
    titleD += pathFor(ln, FONTS.title, size, CX, firstBase + i * lh, LS);
  });
  const titleBottom = firstBase + (lines.length - 1) * lh;

  let ornament = "";
  let tagD = "";
  if (tagLines.length) {
    const oy = titleBottom + 22;
    ornament =
      `<path d="M138 ${oy.toFixed(1)}H184M216 ${oy.toFixed(1)}H262" stroke="${gold}" stroke-width="1" opacity=".7"/>` +
      `<path d="M200 ${(oy - 4.5).toFixed(1)}l4.5 4.5-4.5 4.5-4.5-4.5z" fill="${gold}"/>`;
    tagLines.forEach((ln, i) => {
      tagD += pathFor(ln, FONTS.italic, taglineSize, CX, oy + 14 + taglineSize * 0.8 + i * taglineLH, 0);
    });
  } else {
    const oy = titleBottom + 26;
    ornament =
      `<path d="M138 ${oy.toFixed(1)}H184M216 ${oy.toFixed(1)}H262" stroke="${gold}" stroke-width="1" opacity=".7"/>` +
      `<path d="M200 ${(oy - 4.5).toFixed(1)}l4.5 4.5-4.5 4.5-4.5-4.5z" fill="${gold}"/>`;
  }

  let authorD = "";
  authorLines.forEach((ln, i) => {
    authorD += pathFor(ln, FONTS.label, labelSize, CX, authorFirst + i * 18, 0.16);
  });
  const metaD = metaText ? pathFor(metaText, FONTS.label, 10.5, CX, metaY, 0.14) : "";
  const footerD = pathFor(`SEOJAE STORY · ${d.footer}`, FONTS.label, 8.5, CX, footerY, 0.32);

  const corner = (x, y) => `<path d="M${x} ${y - 5}l5 5-5 5-5-5z" fill="${gold}"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" role="img" aria-label="${esc(d.aria)}">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
<radialGradient id="glow" cx=".5" cy=".3" r=".62"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<pattern id="weave" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V5" stroke="#fff" stroke-opacity=".025"/></pattern>
</defs>
<rect width="400" height="600" fill="url(#bg)"/>
<rect width="400" height="600" fill="url(#weave)"/>
<rect width="400" height="600" fill="url(#glow)"/>
<rect x="22" y="22" width="356" height="556" fill="none" stroke="${gold}" stroke-width="1.8"/>
<rect x="30" y="30" width="340" height="540" fill="none" stroke="${gold}" stroke-width=".8" opacity=".5"/>
${corner(22, 22)}${corner(378, 22)}${corner(22, 578)}${corner(378, 578)}
<circle cx="${MED.cx}" cy="${MED.cy}" r="${MED.r}" fill="#fff" fill-opacity=".07" stroke="${gold}" stroke-width="1.6"/>
<circle cx="${MED.cx}" cy="${MED.cy}" r="${MED.r - 8}" fill="none" stroke="${gold}" stroke-width=".7" opacity=".45"/>
${artSvg}
<path d="${titleD}" fill="${CREAM}"/>
${ornament}
<path d="${tagD}" fill="${gold}"/>
<path d="${authorD}" fill="${gold}"/>
<path d="${metaD}" fill="${CREAM}" fill-opacity=".72"/>
<path d="${footerD}" fill="${gold}" fill-opacity=".62"/>
</svg>
`;
}

// ── Main ───────────────────────────────────────────────────────────────────────
const data = JSON.parse(readFileSync(path.join(HERE, "cover-data.json"), "utf8"));
const books = bookIndex();
const keyOf = (d) => books.get(d.slug) ?? d.slug;

// Spread palettes evenly within each collection: order the collection's books by a
// stable hash and deal palettes out in turn, so no colour dominates and neighbours vary.
//
// The plain deal shifts for every book whenever a book is added, which would recolour
// covers readers already know. So `cover-palettes.json` (written by --pin, keyed by
// "FAMILY:slug") freezes existing books; only books with no pin are dealt, each taking
// the least-used palette of its collection so far.
const PIN_FILE = path.join(HERE, "cover-palettes.json");
const pins = existsSync(PIN_FILE) ? JSON.parse(readFileSync(PIN_FILE, "utf8")) : {};
const paletteFor = new Map();
for (const family of Object.keys(PALETTES)) {
  const n = PALETTES[family].length;
  const keys = [...new Set(data.filter((d) => d.footer === family).map(keyOf))].sort((a, b) => hash(a) - hash(b));
  if (wantPin) {
    keys.forEach((k, i) => paletteFor.set(`${family}:${k}`, i % n));
    continue;
  }
  const used = new Array(n).fill(0);
  for (const d of data.filter((x) => x.footer === family)) {
    const pin = pins[`${family}:${d.slug}`];
    const id = `${family}:${keyOf(d)}`;
    if (pin !== undefined && !paletteFor.has(id)) {
      paletteFor.set(id, pin);
      used[pin]++;
    }
  }
  for (const k of keys) {
    const id = `${family}:${k}`;
    if (paletteFor.has(id)) continue;
    let best = 0;
    for (let i = 1; i < n; i++) if (used[i] < used[best]) best = i;
    paletteFor.set(id, best);
    used[best]++;
  }
}
const paletteOf = (d) => PALETTES[d.footer]?.[paletteFor.get(`${d.footer}:${keyOf(d)}`)] ?? PALETTES.CLASSICS[0];

if (wantPin) {
  const out = {};
  for (const d of data) out[`${d.footer}:${d.slug}`] = paletteFor.get(`${d.footer}:${keyOf(d)}`);
  writeFileSync(PIN_FILE, JSON.stringify(out, null, 1) + "\n");
  console.log(`pinned ${Object.keys(out).length} covers → ${path.relative(process.cwd(), PIN_FILE)}`);
  process.exit(0);
}

mkdirSync(outDir, { recursive: true });
const made = [];
let bytes = 0;
for (const d of data) {
  if (filters.length && !filters.some((f) => d.slug.includes(f))) continue;
  const svg = buildCover(d, paletteOf(d));
  writeFileSync(path.join(outDir, `${d.slug}.svg`), svg);
  bytes += svg.length;
  made.push(d.slug);
}
console.log(`${made.length} covers → ${path.relative(process.cwd(), outDir) || "."}  (${Math.round(bytes / 1024)} KB, avg ${Math.round(bytes / Math.max(1, made.length) / 1024)} KB)`);

if (wantSheet) {
  const cells = made
    .map((s) => `<img src="${s}.svg" style="width:150px;height:225px;display:block" title="${s}">`)
    .join("");
  writeFileSync(
    path.join(outDir, "_sheet.html"),
    `<html><body style="margin:0;background:#777;display:grid;grid-template-columns:repeat(8,150px);gap:8px;padding:8px">${cells}</body></html>`,
  );
}
