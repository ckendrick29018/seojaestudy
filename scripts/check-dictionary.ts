/**
 * Offline-dictionary coverage check.
 *
 * The story reader's "tap any word" feature glosses words from the hand-built
 * offline dictionary (`src/lib/dictionary`), which we grow per lesson. This
 * script replays the reader's exact lookup path — split every story sentence on
 * whitespace, hand each chunk to `lookupEnKo` / `lookupKoEn` (stem fallback and
 * all) — and prints every surface form that comes back unglossed, so a new
 * lesson never ships with words the reader can't look up.
 *
 *   npx tsx scripts/check-dictionary.ts               # every lesson
 *   npx tsx scripts/check-dictionary.ts fir-tree      # just these slugs
 *   npx tsx scripts/check-dictionary.ts --list fir-tree   # bare surface forms, one per line
 *
 * Exit code is the number of distinct gaps (0 = clean), so it can gate CI.
 */
import { lessons } from "../src/lib/data/lessons";
import { lookupEnKo, lookupKoEn } from "../src/lib/dictionary/index";

const args = process.argv.slice(2);
const listMode = args.includes("--list");
const only = new Set(args.filter((a) => a !== "--list"));

interface Gap {
  count: number;
  slugs: Set<string>;
  sample: string;
}

const trimSurface = (raw: string): string =>
  raw
    .replace(/^[^0-9a-z가-힣'’-]+/i, "")
    .replace(/[^0-9a-z가-힣'’-]+$/i, "") || raw;

const enGaps = new Map<string, Gap>();
const koGaps = new Map<string, Gap>();
let enChecked = 0;
let koChecked = 0;

function note(map: Map<string, Gap>, key: string, slug: string, sample: string) {
  const g = map.get(key) ?? { count: 0, slugs: new Set<string>(), sample };
  g.count += 1;
  g.slugs.add(slug);
  map.set(key, g);
}

for (const lesson of lessons) {
  if (only.size && !only.has(lesson.slug)) continue;
  for (const sentence of lesson.paragraphs.flat()) {
    for (const chunk of sentence.text.split(/\s+/)) {
      if (!/[a-z]/i.test(chunk)) continue;
      enChecked += 1;
      if (lookupEnKo(chunk) === null) note(enGaps, trimSurface(chunk).toLowerCase(), lesson.slug, chunk);
    }
    for (const chunk of sentence.translation.split(/\s+/)) {
      if (!/[가-힣]/.test(chunk)) continue;
      koChecked += 1;
      if (lookupKoEn(chunk) === null) note(koGaps, trimSurface(chunk), lesson.slug, chunk);
    }
  }
}

if (listMode) {
  for (const k of [...enGaps.keys()].sort()) console.log("EN\t" + k);
  for (const k of [...koGaps.keys()].sort()) console.log("KO\t" + k);
  process.exit(0);
}

function print(title: string, map: Map<string, Gap>, checked: number) {
  const rows = [...map.entries()].sort(
    (a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0]),
  );
  console.log(`\n${title} — ${rows.length} distinct gap(s) / ${checked} chunks checked`);
  for (const [key, g] of rows) {
    const slugs = [...g.slugs].slice(0, 5).join(", ") + (g.slugs.size > 5 ? " …" : "");
    console.log(`  ${String(g.count).padStart(3)} ×  ${key.padEnd(24)} [${slugs}]`);
  }
}

print("EN→KO", enGaps, enChecked);
print("KO→EN", koGaps, koChecked);

const total = enGaps.size + koGaps.size;
console.log(`\nTotal distinct gaps: ${total} (EN ${enGaps.size} · KO ${koGaps.size})`);
process.exit(total > 255 ? 255 : total);
