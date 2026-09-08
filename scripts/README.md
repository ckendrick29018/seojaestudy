# Audio pre-generation

The "Listen" button and the vocab flashcards read text aloud. Left to the
browser's built-in Web Speech voice this sounds robotic and varies wildly by
device. This pipeline renders every lesson sentence and vocab term to a small
static audio file with a neural TTS voice **once**, commits the files, and the
app plays them when it can — falling back to the browser voice for anything it
doesn't have a clip for (user-written study phrases, un-generated lessons).

```
scripts/
  generate-audio.mjs      entrypoint  (npm run audio)
  lib/collect.mjs          which strings to speak
  lib/hash.mjs             text -> clip id   (must match src/lib/audio.ts)
  lib/backends/            edge-tts.mjs · piper.mjs
public/audio/<lang>/<key>.<ext>   the clips   (committed)
src/lib/audio-manifest.json        key -> url  (committed, rebuilt from disk)
```

An empty manifest is the safe default: the app just uses the browser voice
everywhere, exactly as before.

## Quick start (edge-tts — recommended)

`edge-tts` uses Microsoft Edge's free "Read Aloud" neural voices. No account,
no API key, outputs MP3, good English **and** Korean. It needs network access
while generating; the committed `.mp3` files have no runtime dependency on it.

```bash
pip install edge-tts
pip install truststore   # optional, but do it if generation hits a TLS error
npm run audio                       # generate everything that's missing
npm run audio -- --lesson the-secret-garden   # just one lesson
npm run audio -- --force            # re-render everything
npm run audio -- --prune            # also delete clips no lesson uses now
npm run audio -- --dry-run          # show what would be generated
```

Generation runs through `scripts/lib/backends/_edge_tts.py` (not the bare
`edge-tts` CLI) so a failed clip actually fails the run, and `truststore` — if
installed — routes TLS through the OS certificate store.

Voice / pace overrides (env vars):

| var             | default              |
| --------------- | -------------------- |
| `AUDIO_VOICE_EN`| `en-US-AriaNeural`   |
| `AUDIO_VOICE_KO`| `ko-KR-SunHiNeural`  |
| `AUDIO_RATE`    | `-8%`                |

`edge-tts --list-voices` shows the full set (e.g. `en-US-JennyNeural`,
`en-GB-SoniaNeural`, `ko-KR-InJoonNeural`).

### TLS error on a corporate network

If generation fails with `CERTIFICATE_VERIFY_FAILED`, your Python isn't trusting
the proxy's root cert. The shim uses `truststore` when it's importable, which
almost always fixes it:

```bash
pip install truststore
```

Failing that, run the generation off the corporate network, or use the piper
backend (no network at all).

## Fully offline (piper)

[piper](https://github.com/rhasspy/piper) runs a neural model locally — no
network at generation time at all.

1. Download the binary for your OS from the
   [piper releases](https://github.com/rhasspy/piper/releases) and unzip so you
   have `scripts/bin/piper` (or `scripts/bin/piper.exe`).
2. Download a voice (two files, `.onnx` and `.onnx.json`) from
   [rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices) into
   `scripts/voices/`:
   - English: `en_US-amy-medium` (or `en_US-lessac-medium`)
   - Korean: `ko_KO-kss-medium` if available, else set `PIPER_MODEL_KO` to
     whatever KO voice you downloaded, or generate `--lang en` only.
3. Generate:

   ```bash
   npm run audio -- --backend piper
   ```

Piper emits WAV. If `ffmpeg` is on your PATH the clips are transcoded to MP3;
otherwise they're kept as `.wav` (bigger, plays fine). `scripts/bin/` and
`scripts/voices/` are git-ignored — only the rendered clips are committed.

Overrides: `PIPER_BIN`, `PIPER_VOICES`, `PIPER_MODEL_EN`, `PIPER_MODEL_KO`.

## When lesson text changes

The clip id is a hash of the exact text, so editing a sentence simply makes the
app fall back to the browser voice for that line until you re-run `npm run
audio` (add `--prune` to clear the now-orphaned old clip).
