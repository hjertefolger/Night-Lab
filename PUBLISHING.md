# Publishing Flow

## Purpose
Night Lab should stay focused on creation. Publishing happens only after a build is genuinely finished.

## Trigger
The Night Lab creator invokes:

```bash
scripts/publish-build.sh <build-folder>
```

## Expected Build Folder Contents
At minimum:
- `index.html`
- `README.md`

Recommended:
- `PUBLISH_READY.json`

## Ready Marker Schema
Use this exact template as the source of truth:

- `PUBLISH_READY.example.json`

Night Lab should read that file and follow its structure exactly when generating `PUBLISH_READY.json`.

## Local Config
Machine-specific paths live in:

- `scripts/local-config.json`

This file is ignored by git.

Use:

- `scripts/local-config.example.json`

as the template when setting up a new environment.

## What the script does
- copies the build artifact into `public/builds/<id>/`
- skips internal build notes and handoff files (`README.md`, `notes.md`, `PUBLISH_READY.json`, `PUBLISHED.json`)
- generates `public/builds/<id>.zip`
- updates `src/lib/builds.ts`
- writes `PUBLISHED.json` into the source build folder
- runs `npm run build` for verification
- commits changes
- pushes to the configured branch

## Notes
- This is completion-triggered, not polling-based.
- Night Lab should call it only after the build is truly done.
- Internal handoff files are not copied into the public build output.
