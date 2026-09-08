"""Render one utterance with edge-tts.

Called by scripts/lib/backends/edge-tts.mjs — not meant to be run by hand.

Why a shim instead of the `edge-tts` CLI:
  * the CLI exits 0 even when the network/TLS call failed and it wrote nothing;
    this streams the response and exits non-zero if no audio came back.
  * `truststore` (when installed) makes Python use the OS certificate store,
    which fixes CERTIFICATE_VERIFY_FAILED on TLS-inspecting corporate networks.
"""

import argparse
import asyncio
import os
import sys

try:  # optional — only needed behind a TLS-inspecting proxy
    import truststore

    truststore.inject_into_ssl()
except Exception:
    pass

try:
    import edge_tts
except Exception as exc:  # noqa: BLE001
    sys.stderr.write(
        "edge-tts is not installed for this Python.\n"
        "  pip install edge-tts        (optionally also: pip install truststore)\n"
        f"  ({exc})\n"
    )
    raise SystemExit(2)


async def render(text: str, voice: str, rate: str, out_path: str) -> int:
    communicate = edge_tts.Communicate(text, voice, rate=rate)
    written = 0
    with open(out_path, "wb") as handle:
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                handle.write(chunk["data"])
                written += len(chunk["data"])
    if written == 0:
        os.remove(out_path)
        sys.stderr.write("edge-tts returned no audio\n")
        return 1
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--voice", required=True)
    parser.add_argument("--rate", default="+0%")
    parser.add_argument("--text", required=True)
    parser.add_argument("--out", required=True)
    args = parser.parse_args()
    try:
        return asyncio.run(render(args.text, args.voice, args.rate, args.out))
    except Exception as exc:  # noqa: BLE001
        if os.path.exists(args.out):
            os.remove(args.out)
        sys.stderr.write(f"{type(exc).__name__}: {exc}\n")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
