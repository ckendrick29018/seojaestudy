import { spawn } from "node:child_process";

/**
 * edge-tts backend — Microsoft Edge's free "Read Aloud" neural voices.
 *
 *   pip install edge-tts
 *
 * No API key, no account, produces MP3 directly (no ffmpeg needed) and has
 * genuinely natural voices for both English and Korean. It does need network
 * access at generation time; the resulting .mp3 files are fully self-hosted,
 * so the app itself has no runtime dependency on it.
 *
 * Override voices / rate with env vars:
 *   AUDIO_VOICE_EN   default en-US-AriaNeural
 *   AUDIO_VOICE_KO   default ko-KR-SunHiNeural
 *   AUDIO_RATE       default -8%   (a touch slower, easier to follow)
 */

export const name = "edge-tts";
export const ext = "mp3";

const VOICE = {
  en: process.env.AUDIO_VOICE_EN || "en-US-AriaNeural",
  ko: process.env.AUDIO_VOICE_KO || "ko-KR-SunHiNeural",
};
const RATE = process.env.AUDIO_RATE || "-8%";

// edge-tts may be a bare `edge-tts` on PATH or only reachable as a module.
const CANDIDATES = [
  ["edge-tts"],
  ["python", "-m", "edge_tts"],
  ["py", "-m", "edge_tts"],
  ["python3", "-m", "edge_tts"],
];

let entry = null;

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "ignore", "pipe"], ...opts });
    let err = "";
    child.stderr.on("data", (d) => (err += d));
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(err.trim() || `${cmd} exited ${code}`)),
    );
  });
}

async function resolveEntry() {
  if (entry) return entry;
  for (const candidate of CANDIDATES) {
    try {
      await run(candidate[0], [...candidate.slice(1), "-h"]);
      entry = candidate;
      return entry;
    } catch {
      // try the next form
    }
  }
  throw new Error(
    "edge-tts not found.\n" +
      "  Install it:   pip install edge-tts\n" +
      "  Or generate fully offline with:   npm run audio -- --backend piper",
  );
}

export async function check() {
  await resolveEntry();
}

export async function synth(text, lang, outPath) {
  const e = await resolveEntry();
  const voice = VOICE[lang] || VOICE.en;
  await run(e[0], [
    ...e.slice(1),
    "--voice",
    voice,
    "--rate",
    RATE,
    "--text",
    text,
    "--write-media",
    outPath,
  ]);
}
