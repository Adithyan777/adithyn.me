#!/bin/bash
# Build resume.tex and publish it as the site's served resume:
#   public/resume.pdf  (available at adithyn.dev/resume.pdf)

set -e
cd "$(dirname "$0")"

OUT_DIR="../public"

echo "Compiling resume..."
tectonic resume.tex -o "$OUT_DIR"
echo "  → $(cd "$OUT_DIR" && pwd)/resume.pdf (served at /resume.pdf)"
echo "Done."
