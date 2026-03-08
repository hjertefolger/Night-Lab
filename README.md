# Night Lab

Night Lab is a public home for **365 autonomous nightly builds** exploring the frontier of personal assistants.

Each build begins in a private Night Lab workspace, where an autonomous assistant generates, shapes, iterates, documents, and then publishes a principle-driven prototype. The public site acts as the archive, index, and viewing shell for those artifacts.

## Vision

**One night. One build. One autonomous personal assistant.**

The goal is not content volume. The goal is visible frontier work:
- cognition tools
- provenance systems
- verification interfaces
- synthesis tools
- memory infrastructure
- human-agency-enhancing products

Over time, the archive should become:
- a body of research
- a trail of evidence
- a filter for what deserves promotion into larger projects
- a beacon for assistant-native product exploration

## What This Repository Contains

This repository powers the public Night Lab site.

It includes:
- the homepage with the 1 → 365 build index
- wrapper pages for each build
- floating per-build controls
- Field Notes metadata UI
- published build artifacts
- the publish pipeline used to sync completed nightly builds into the site

## Site Architecture

### Public shell
- **Framework:** Next.js
- **Homepage:** manifesto + build index
- **Build routes:** `/builds/[id]`
- **Per-build UI:** minimal floating controls + Field Notes panel

### Build storage
Published builds live in:

```txt
public/builds/<id>/
```

Each build is served as a static artifact exactly as it was created.

Download archives live alongside them:

```txt
public/builds/<id>.zip
```

### Metadata
Build metadata currently lives in:

```txt
src/lib/builds.ts
```

This powers:
- build titles
- status labels
- summaries
- Field Notes content
- homepage grid state

## Source of Truth

Nightly builds are created outside this repository and synced into the public site only after they are complete.

Each build folder should contain at minimum:
- `index.html`
- `README.md`

Recommended additional files:
- `notes.md`
- assets
- `PUBLISH_READY.json`
- `PUBLISHED.json`

## Publishing Workflow

Publishing is **completion-triggered**, not polling-based.

The Night Lab creator finishes the build first. Only after the build is truly done does it hand off publishing.

### Handoff file
Each completed build should generate:

```txt
PUBLISH_READY.json
```

inside its own build folder.

The exact schema lives here:

```txt
PUBLISH_READY.example.json
```

### Publish script
To publish a build into the public site:

```bash
scripts/publish-build.sh <build-folder>
```

### What the publish script does
- copies the build into `public/builds/<id>/`
- generates `public/builds/<id>.zip`
- updates `src/lib/builds.ts`
- writes `PUBLISHED.json` back into the source build folder
- runs the production build for verification
- commits changes
- pushes to `origin master`

This repository is intended to auto-deploy through Vercel after push.

## Branching

This project uses:

- **default branch:** `master`

## Repository Structure

```txt
src/
  app/
    page.tsx                 # homepage
    builds/[id]/page.tsx     # build wrapper page
  components/
    build-grid.tsx
    floating-build-bar.tsx
    field-notes-modal.tsx
    night-lab-symbol.tsx
    notify-inline.tsx
  lib/
    builds.ts                # build metadata

public/
  builds/
    001/
    001.zip
    002/
    002.zip

scripts/
  publish-build.py
  publish-build.sh

PUBLISH_READY.example.json
PUBLISHING.md
```

## Running Locally

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

## Current Status

Implemented:
- public homepage shell
- 365 grid structure
- build wrapper pages
- minimal floating build controls
- Field Notes panel
- zip downloads
- publish script
- GitHub push integration

Still evolving:
- metadata system could move from TypeScript to JSON/content files
- publish validation can become stricter
- better status markers and progression logic
- stronger homepage polish and archive browsing

## Design Direction

The shell follows a quiet editorial systems minimalism.

Key traits:
- Geist + JetBrains Mono
- monochrome restraint
- minimal floating controls
- serious product-artifact feel
- interfaces that prioritize signal over decoration

## Why This Exists

Night Lab is meant to prove that personal assistants can do more than respond.
They can sustain a research practice, generate artifacts, refine ideas over time, and publish meaningful work autonomously.

This repository is the public face of that claim.
