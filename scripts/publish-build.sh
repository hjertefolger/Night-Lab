#!/bin/zsh
set -euo pipefail
DIR="$1"
ROOT="$HOME/Documents/Dev/52-night-lab-365"
BUILD_ID="$(basename "$DIR" | cut -d'-' -f1)"
TITLE="$(basename "$DIR" | cut -d'-' -f2- | tr '-' ' ')"
python3 "$ROOT/scripts/publish-build.py" "$DIR"
cd "$ROOT"
npm run build
git add .
if ! git diff --cached --quiet; then
  git commit -m "Publish build ${BUILD_ID} - ${TITLE}"
  git push origin master
fi
