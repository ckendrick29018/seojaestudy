/**
 * Pre-generate narration audio for every lesson.
 *
 *   node scripts/generate-audio.mjs [options]
 *   npm run audio -- [options]
 *
 * Options
 *   --backend <edge-tts|piper>   TTS engine (default: edge-tts)
 *   --lesson <slug>              only this lesson's strings
 *   --lang <en|ko>               only this language
 *   --limit <n>                  stop after n new clips (handy for a test run)
 *   --force                      re-synthesise even if the clip file exists
 *   --prune                      delete clip files no lesson refers to any more
 *   --dry-run                    list what would be generated, synthesise nothing
 *
 * Output
 *   public/audio/<lang>/<key>.<ext>   the clips (committed to git)
 *   src/lib/audio-manifest.json       key -> url map, rebuilt from disk each run
 *
 * The app plays a clip when the manifest has one for the exact text, and
 * falls back to the browser Web Speech voice otherwise — so an empty manifest
 * is safe and changes nothing.
 */

import { readdir, mkdir, stat, writeFile, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { collectClips } from "./lib/collect.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..");
const AUDIO_DIR = path.join(REPO, "public", "audio");
const MANIFEST = path.join(REPO, "src", "lib", "audio-manifest.json");
const LESSONS = path.join(REPO, "src", "lib", "data", "lessons.ts");

function parseArgs(argv) {
  const opts = { backend: "edge-tts" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--force") opts.force = true;
    else if (a === "--prune") opts.prune = true;
    else if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--backend") opts.backend = argv[++i];
    else if (a === "--lesson") opts.lesson = argv[++i];
    else if (a === "--lang") opts.lang = argv[++i];
    else if (a === "--limit") opts.limit = Number(argv[++i]);
    else {
      console.error(`unknown option: ${a}`);
      process.exit(1);
    }
  }
  return opts;
}

async function loadBackend(nameArg) {
  const file = { "edge-tts": "edge-tts", edge: "edge-tts", piper: "piper" }[nameArg];
  if (!file) {
    console.error(`unknown backend: ${nameArg} (expected edge-tts or piper)`);
    process.exit(1);
  }
  return import(`./lib/backends/${file}.mjs`);
}

/** Every clip file currently on disk, as { key -> "/audio/<lang>/<file>" }. */
async function scanManifest() {
  const manifest = {};
  for (const lang of ["en", "ko"]) {
    const dir = path.join(AUDIO_DIR, lang);
    if (!existsSync(dir)) continue;
    for (const file of await readdir(dir)) {
      if (!/\.(mp3|wav)$/.test(file)) continue;
      const key = file.replace(/\.(mp3|wav)$/, "");
      manifest[key] = `/audio/${lang}/${file}`;
    }
  }
  return Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => (a < b ? -1 : 1)));
}

async function dirSizeMB(dir) {
  let bytes = 0;
  for (const lang of ["en", "ko"]) {
    const d = path.join(dir, lang);
    if (!existsSync(d)) continue;
    for (const f of await readdir(d)) {
      bytes += (await stat(path.join(d, f))).size;
    }
  }
  return (bytes / 1024 / 1024).toFixed(1);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  const { lessons } = await import(pathToFileURL(LESSONS).href);
  let clips = collectClips(lessons, { lesson: opts.lesson });
  if (opts.lang) clips = clips.filter((c) => c.lang === opts.lang);
  if (opts.lesson && clips.length === 0) {
    console.error(`no lesson with slug "${opts.lesson}"`);
    process.exit(1);
  }

  const backend = await loadBackend(opts.backend);
  const clipExt =
    typeof backend.ext === "function" ? await backend.ext() : backend.ext || "mp3";

  console.log(
    `backend: ${backend.name}  ·  format: .${clipExt}  ·  ${clips.length} distinct strings` +
      (opts.lesson ? `  ·  lesson: ${opts.lesson}` : "") +
      (opts.lang ? `  ·  lang: ${opts.lang}` : ""),
  );

  if (!opts.dryRun) {
    try {
      await backend.check();
    } catch (err) {
      console.error(`\n${backend.name} is not ready:\n${err.message}\n`);
      process.exit(1);
    }
  }

  await mkdir(path.join(AUDIO_DIR, "en"), { recursive: true });
  await mkdir(path.join(AUDIO_DIR, "ko"), { recursive: true });

  let made = 0;
  let skipped = 0;
  let failed = 0;

  for (const clip of clips) {
    if (opts.limit && made >= opts.limit) break;

    const rel = `audio/${clip.lang}/${clip.key}.${clipExt}`;
    const abs = path.join(REPO, "public", rel);
    const alt = abs.replace(new RegExp(`\\.${clipExt}$`), clipExt === "mp3" ? ".wav" : ".mp3");

    if (!opts.force && (existsSync(abs) || existsSync(alt))) {
      skipped++;
      continue;
    }

    if (opts.dryRun) {
      console.log(`  would synth  ${clip.lang}  ${JSON.stringify(clip.text.slice(0, 60))}`);
      made++;
      continue;
    }

    try {
      await backend.synth(clip.text, clip.lang, abs);
      // Some CLIs (edge-tts on a network/TLS error) exit 0 but write nothing.
      const bytes = existsSync(abs) ? (await stat(abs)).size : 0;
      if (bytes < 512) {
        if (existsSync(abs)) await unlink(abs).catch(() => {});
        throw new Error(`produced ${bytes} bytes — treated as a failure`);
      }
      made++;
      process.stdout.write(`\r  generated ${made}  (skipped ${skipped}, failed ${failed})   `);
    } catch (err) {
      failed++;
      console.error(`\n  ! ${clip.lang} ${JSON.stringify(clip.text.slice(0, 50))}\n    ${err.message}`);
    }
  }
  process.stdout.write("\n");

  // Prune clip files no current lesson string maps to.
  if (opts.prune && !opts.dryRun) {
    const wanted = new Set(collectClips(lessons).map((c) => c.key));
    let pruned = 0;
    for (const lang of ["en", "ko"]) {
      const dir = path.join(AUDIO_DIR, lang);
      if (!existsSync(dir)) continue;
      for (const file of await readdir(dir)) {
        const key = file.replace(/\.(mp3|wav)$/, "");
        if (!wanted.has(key)) {
          await unlink(path.join(dir, file));
          pruned++;
        }
      }
    }
    console.log(`  pruned ${pruned} orphaned clip(s)`);
  }

  const manifest = await scanManifest();
  if (!opts.dryRun) {
    await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  }

  console.log(
    `\ndone — ${made} generated, ${skipped} already present, ${failed} failed\n` +
      `manifest: ${Object.keys(manifest).length} clips  ·  ${await dirSizeMB(AUDIO_DIR)} MB on disk` +
      (opts.dryRun ? "  (dry run — nothing written)" : ""),
  );
  if (failed) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
