#!/bin/zsh
set -euo pipefail
DIR="$1"
SCRIPT_DIR="$(cd -- "$(dirname "$0")" && pwd)"
ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"
CONFIG="$SCRIPT_DIR/local-config.json"
BUILD_ID="$(basename "$DIR" | cut -d'-' -f1)"
TITLE="$(basename "$DIR" | cut -d'-' -f2- | tr '-' ' ')"
BRANCH="$(python3 - "$CONFIG" <<'PY'
import json, pathlib, sys
cfg = pathlib.Path(sys.argv[1])
print(json.loads(cfg.read_text()).get("branch", "master"))
PY
)"
python3 "$SCRIPT_DIR/publish-build.py" "$DIR"
cd "$ROOT"
pnpm build
git add .
if ! git diff --cached --quiet; then
  git commit -m "Publish build ${BUILD_ID} - ${TITLE}"
  git push origin "$BRANCH"

  # Send broadcast email to subscribers after a real successful publish push.
  # Best-effort only, and only once per build.
  if [ -f "$DIR/PUBLISH_READY.json" ] && [ -f "$ROOT/.env.local" ]; then
    set -a; source "$ROOT/.env.local"; set +a
    echo "Sending broadcast email..."
    npx tsx "$SCRIPT_DIR/send-broadcast.ts" "$DIR" || echo "Broadcast failed (non-fatal)"
  fi
fi
