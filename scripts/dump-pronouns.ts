import { lessons } from "../src/lib/data/lessons";
import { writeFileSync } from "fs";

const PRONOUN = /그는|그가|그를|그의|그에게|그녀는|그녀가|그녀를|그녀의|그녀에게/;

type Row = {
  slug: string;
  kind: "paragraph" | "vocab" | "vocabExample";
  id: string;
  text: string;
  translation: string;
};

const rows: Row[] = [];

for (const lesson of lessons) {
  for (const block of lesson.paragraphs) {
    for (const sent of block) {
      if (PRONOUN.test(sent.translation)) {
        rows.push({
          slug: lesson.slug,
          kind: "paragraph",
          id: sent.id,
          text: sent.text,
          translation: sent.translation,
        });
      }
    }
  }
  for (const v of lesson.vocab ?? []) {
    if (PRONOUN.test(v.exampleTranslation ?? "")) {
      rows.push({
        slug: lesson.slug,
        kind: "vocabExample",
        id: v.id,
        text: v.example ?? "",
        translation: v.exampleTranslation ?? "",
      });
    }
  }
}

writeFileSync(
  process.argv[2] || "pronoun-audit.json",
  JSON.stringify(rows, null, 2),
  "utf-8"
);

const bySlug = new Map<string, number>();
for (const r of rows) bySlug.set(r.slug, (bySlug.get(r.slug) ?? 0) + 1);
console.log(`Total rows: ${rows.length}`);
console.log(`Lessons affected: ${bySlug.size}`);
for (const [slug, n] of [...bySlug.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${n.toString().padStart(3)}  ${slug}`);
}
