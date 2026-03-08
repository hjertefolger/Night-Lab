# Publishing Flow

## Purpose
Night Lab should stay focused on creation. Publishing happens only after a build is genuinely finished.

## Trigger
The Night Lab creator invokes:

```bash
~/Documents/Dev/52-night-lab-365/scripts/publish-build.sh <nightly-build-folder>
```

Example:

```bash
~/Documents/Dev/52-night-lab-365/scripts/publish-build.sh ~/Documents/Dev/nightly-builds/002-proof-thread
```

## Expected Build Folder Contents
At minimum:
- `index.html`
- `README.md`

Recommended:
- `PUBLISH_READY.json`

## Ready Marker Schema
Use this exact template as the source of truth:

- `~/Documents/Dev/52-night-lab-365/PUBLISH_READY.example.json`

Night Lab should read that file and follow its structure exactly when generating `PUBLISH_READY.json`.

## What the script does
- copies the build folder into `public/builds/<id>/`
- generates `public/builds/<id>.zip`
- updates `src/lib/builds.ts`
- writes `PUBLISHED.json` into the source build folder
- runs `npm run build` for verification

## Notes
- This is completion-triggered, not polling-based.
- Night Lab should call it only after the build is truly done.
