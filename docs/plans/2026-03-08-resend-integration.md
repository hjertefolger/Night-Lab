# Resend Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Wire up Resend to Night Lab for email subscriptions and automated build broadcast notifications.

**Architecture:** Next.js API routes handle subscribe/unsubscribe. A standalone Node script sends broadcasts after publish. The notify-inline component calls the subscribe API. Unsubscribe is a dedicated page + API route.

**Tech Stack:** Next.js 16, Resend SDK, TypeScript, Vercel deployment

**Site URL:** `https://nightlab.a2n.run`

---

### Task 1: Install Resend and create env file

**Files:**
- Modify: `package.json`
- Create: `.env.local`
- Create: `.env.example`

**Step 1: Install resend**

Run: `cd /Users/rootoperator/Documents/Dev/47-Night-Lab && pnpm add resend`

**Step 2: Create `.env.example`** (committed, documents required vars)

```
RESEND_API_KEY=re_xxxxxxxxx
RESEND_SEGMENT_ID=your-segment-uuid
RESEND_FROM_EMAIL=Night Lab <builds@a2n.run>
```

**Step 3: Create `.env.local`** (gitignored, for Tom to fill in)

Same content as `.env.example` — Tom fills in real values.

Note: `.env*` is already in `.gitignore`.

**Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml .env.example
git commit -m "feat: add resend dependency and env template"
```

---

### Task 2: Create Resend client helper

**Files:**
- Create: `src/lib/resend.ts`

**Step 1: Create the shared Resend client**

```typescript
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const SEGMENT_ID = process.env.RESEND_SEGMENT_ID!;
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL!;
export const SITE_URL = "https://nightlab.a2n.run";
```

**Step 2: Commit**

```bash
git add src/lib/resend.ts
git commit -m "feat: add shared resend client"
```

---

### Task 3: Subscribe API route

**Files:**
- Create: `src/app/api/subscribe/route.ts`

**Step 1: Create the route**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { resend, SEGMENT_ID } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const { error: createError } = await resend.contacts.create({
    email,
    unsubscribed: false,
  });

  // Ignore "already exists" errors — still add to segment
  if (createError && !createError.message?.includes("already exists")) {
    return NextResponse.json({ error: createError.message }, { status: 500 });
  }

  const { error: segmentError } = await resend.contacts.segments.add({
    email,
    segmentId: SEGMENT_ID,
  });

  if (segmentError) {
    return NextResponse.json({ error: segmentError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
```

**Step 2: Commit**

```bash
git add src/app/api/subscribe/route.ts
git commit -m "feat: add subscribe API route"
```

---

### Task 4: Wire notify-inline.tsx to the subscribe API

**Files:**
- Modify: `src/components/notify-inline.tsx`

**Step 1: Replace mock delay with real API call**

Replace the `handleSubscribe` function body. Change:

```typescript
await new Promise((resolve) => setTimeout(resolve, 1200));
```

To:

```typescript
const res = await fetch("/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});

if (!res.ok) {
  spin.stopSpin();
  setState("idle");
  return;
}
```

**Step 2: Commit**

```bash
git add src/components/notify-inline.tsx
git commit -m "feat: wire notify form to subscribe API"
```

---

### Task 5: Unsubscribe API route

**Files:**
- Create: `src/app/api/unsubscribe/route.ts`

**Step 1: Create the route**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { resend, SEGMENT_ID } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Remove from segment
  await resend.contacts.segments.remove({
    email,
    segmentId: SEGMENT_ID,
  });

  // Delete contact entirely
  await resend.contacts.remove({ email });

  return NextResponse.json({ ok: true });
}
```

**Step 2: Commit**

```bash
git add src/app/api/unsubscribe/route.ts
git commit -m "feat: add unsubscribe API route"
```

---

### Task 6: Unsubscribe page

**Files:**
- Create: `src/app/unsubscribe/page.tsx`

**Step 1: Create the unsubscribe page**

Client component at `/unsubscribe?email=user@example.com`. Matching the site aesthetic:
- White background, #111111 text
- Night Lab symbol
- Shows the email, confirm button
- On success: "You've been unsubscribed. No more builds."
- On error: error message
- Uses same font families and spacing as main page

States: `idle | processing | done | error`

The page reads `email` from URL search params, shows a confirm button, POSTs to `/api/unsubscribe`, and shows result.

```typescript
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { NightLabSymbol } from "@/components/night-lab-symbol";

type State = "idle" | "processing" | "done" | "error";

export default function UnsubscribePage() {
  const params = useSearchParams();
  const email = params.get("email") ?? "";
  const [state, setState] = useState<State>("idle");

  const handleUnsubscribe = async () => {
    setState("processing");
    const res = await fetch("/api/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setState(res.ok ? "done" : "error");
  };

  if (!email) {
    return (
      <main className="flex h-screen items-center justify-center bg-white px-6">
        <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          No email provided.
        </p>
      </main>
    );
  }

  return (
    <main className="flex h-screen items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-6 max-w-[400px] text-center">
        <NightLabSymbol />

        {state === "done" ? (
          <>
            <p
              className="text-[18px] font-medium text-black leading-[1.3]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
            >
              You've been unsubscribed.
            </p>
            <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'Geist', sans-serif" }}>
              No more builds. Thanks for watching.
            </p>
          </>
        ) : state === "error" ? (
          <>
            <p
              className="text-[18px] font-medium text-black leading-[1.3]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
            >
              Something went wrong.
            </p>
            <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'Geist', sans-serif" }}>
              Try again or contact us.
            </p>
          </>
        ) : (
          <>
            <p
              className="text-[18px] font-medium text-black leading-[1.3]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
            >
              Unsubscribe
            </p>
            <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'Geist', sans-serif" }}>
              {email}
            </p>
            <button
              onClick={handleUnsubscribe}
              disabled={state === "processing"}
              className="text-[14px] font-medium text-black underline underline-offset-4 disabled:text-[#666666] disabled:no-underline"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {state === "processing" ? "Processing..." : "Confirm unsubscribe"}
            </button>
          </>
        )}

        <p
          className="text-[14px] text-[#666666]"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
        >
          ©2026 Night Lab / Field work in public
        </p>
      </div>
    </main>
  );
}
```

Note: Wrap with `<Suspense>` in a layout or use dynamic import since `useSearchParams` needs it in Next.js 16.

**Step 2: Commit**

```bash
git add src/app/unsubscribe/page.tsx
git commit -m "feat: add unsubscribe page"
```

---

### Task 7: Night Lab symbol PNG for email

**Files:**
- Create: `public/night-lab-symbol@3x.png`

**Step 1: Convert the SVG to 3x PNG**

The Night Lab symbol SVG is 37x37. At 3x that's 111x111 pixels.

Use the `sips` command (macOS built-in) or a canvas/sharp approach. Simplest approach — create a temporary SVG file and convert:

```bash
cd /Users/rootoperator/Documents/Dev/47-Night-Lab

# Create temp SVG
cat > /tmp/night-lab-symbol.svg << 'SVG'
<svg width="111" height="111" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="18.5" y1="2" x2="18.5" y2="35" stroke="black" stroke-width="1.42" stroke-linecap="round"/>
  <line x1="2" y1="18.5" x2="35" y2="18.5" stroke="black" stroke-width="1.42" stroke-linecap="round"/>
  <line x1="6.88" y1="6.88" x2="30.12" y2="30.12" stroke="black" stroke-width="1.42" stroke-linecap="round"/>
  <line x1="30.12" y1="6.88" x2="6.88" y2="30.12" stroke="black" stroke-width="1.42" stroke-linecap="round"/>
</svg>
SVG

# Convert to PNG (use qlmanage or rsvg-convert if available, or install sharp as devDep)
# Fallback: use the `sips` approach with a rendered version
```

If `rsvg-convert` is not available, use a quick Node script with `sharp` or just manually export from a browser. The key requirement is a 111x111 PNG at `public/night-lab-symbol@3x.png`.

**Step 2: Commit**

```bash
git add public/night-lab-symbol@3x.png
git commit -m "feat: add night lab symbol PNG for email template"
```

---

### Task 8: Email template builder

**Files:**
- Create: `src/lib/email-template.ts`

**Step 1: Create the HTML email builder**

Takes build metadata (from `PUBLISH_READY.json`) and returns an HTML string. Inline CSS only. System font stacks. PNG symbol from `https://nightlab.a2n.run/night-lab-symbol@3x.png`.

```typescript
interface BuildEmailData {
  buildId: string;
  title: string;
  tagline: string;
  summary: string;
  whyThisExists: string;
  whatChanged?: string[];
  email?: string; // for unsubscribe link
}

const SITE_URL = "https://nightlab.a2n.run";
const MONO = "monospace";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export function buildEmailSubject(buildId: string): string {
  return `Build ${buildId} \u00b7 Night Lab`;
}

export function buildEmailHtml(data: BuildEmailData): string {
  const buildUrl = `${SITE_URL}/builds/${data.buildId}`;
  const unsubscribeUrl = `${SITE_URL}/unsubscribe?email=${encodeURIComponent(data.email ?? "")}`;

  const whatChangedHtml = data.whatChanged?.length
    ? `
      <tr><td style="padding: 24px 0 0 0;">
        <div style="font-family: ${MONO}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.14em; color: #666666; margin-bottom: 8px;">What shifted</div>
        ${data.whatChanged.map((item) => `<div style="font-family: ${SANS}; font-size: 14px; color: #333333; line-height: 1.5; padding: 2px 0;">\u2014 ${item}</div>`).join("")}
      </td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #ffffff;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
    <tr><td align="center" style="padding: 48px 24px;">
      <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="max-width: 480px; width: 100%;">

        <!-- Symbol -->
        <tr><td style="padding: 0 0 32px 0;">
          <img src="${SITE_URL}/night-lab-symbol@3x.png" alt="Night Lab" width="37" height="37" style="display: block; border: 0;" />
        </td></tr>

        <!-- Build title -->
        <tr><td style="padding: 0 0 8px 0;">
          <div style="font-family: ${MONO}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.14em; color: #666666;">New build</div>
        </td></tr>
        <tr><td style="padding: 0 0 12px 0;">
          <div style="font-family: ${MONO}; font-size: 18px; font-weight: 500; color: #111111; letter-spacing: -0.36px; line-height: 1.3;">${data.buildId} \u2014 ${data.title}</div>
        </td></tr>

        <!-- Tagline -->
        <tr><td style="padding: 0 0 24px 0;">
          <div style="font-family: ${MONO}; font-size: 14px; color: #666666; letter-spacing: -0.28px; line-height: 1.3;">${data.tagline}</div>
        </td></tr>

        <!-- Summary -->
        <tr><td style="padding: 0 0 0 0;">
          <div style="font-family: ${SANS}; font-size: 14px; color: #0d0d0d; line-height: 1.5;">${data.summary}</div>
        </td></tr>

        <!-- Why this exists -->
        <tr><td style="padding: 24px 0 0 0;">
          <div style="font-family: ${MONO}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.14em; color: #666666; margin-bottom: 8px;">Why this exists</div>
          <div style="font-family: ${SANS}; font-size: 14px; color: #333333; line-height: 1.5;">${data.whyThisExists}</div>
        </td></tr>

        <!-- What shifted -->
        ${whatChangedHtml}

        <!-- CTA -->
        <tr><td style="padding: 32px 0 0 0;">
          <a href="${buildUrl}" style="font-family: ${MONO}; font-size: 14px; font-weight: 500; color: #111111; text-decoration: underline; text-underline-offset: 4px;">View build \u2192</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding: 48px 0 0 0; border-top: 1px solid #eeeeee; margin-top: 48px;">
          <div style="padding-top: 24px; font-family: ${MONO}; font-size: 12px; color: #666666; letter-spacing: -0.22px;">
            \u00a92026 Night Lab / Field work in public
          </div>
          <div style="padding-top: 8px;">
            <a href="${unsubscribeUrl}" style="font-family: ${SANS}; font-size: 12px; color: #999999; text-decoration: underline;">Unsubscribe</a>
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
```

**Step 2: Commit**

```bash
git add src/lib/email-template.ts
git commit -m "feat: add email template builder"
```

---

### Task 9: Broadcast script

**Files:**
- Create: `scripts/send-broadcast.ts`

**Step 1: Create the broadcast script**

Standalone script that reads `PUBLISH_READY.json` from a build folder, builds the email, and sends a broadcast via Resend. Called from `publish-build.sh`.

```typescript
#!/usr/bin/env npx tsx
/**
 * Send a broadcast email for a newly published build.
 * Usage: npx tsx scripts/send-broadcast.ts <build-folder-path>
 *
 * Requires env vars: RESEND_API_KEY, RESEND_SEGMENT_ID, RESEND_FROM_EMAIL
 * Reads PUBLISH_READY.json from the build folder for metadata.
 */

import { readFileSync } from "fs";
import { join } from "path";
import { Resend } from "resend";
import { buildEmailSubject, buildEmailHtml } from "../src/lib/email-template";

const buildFolder = process.argv[2];
if (!buildFolder) {
  console.error("Usage: npx tsx scripts/send-broadcast.ts <build-folder>");
  process.exit(1);
}

const apiKey = process.env.RESEND_API_KEY;
const segmentId = process.env.RESEND_SEGMENT_ID;
const fromEmail = process.env.RESEND_FROM_EMAIL;

if (!apiKey || !segmentId || !fromEmail) {
  console.error("Missing required env vars: RESEND_API_KEY, RESEND_SEGMENT_ID, RESEND_FROM_EMAIL");
  process.exit(1);
}

const readyPath = join(buildFolder, "PUBLISH_READY.json");
let meta: Record<string, unknown>;
try {
  meta = JSON.parse(readFileSync(readyPath, "utf-8"));
} catch {
  console.log("No PUBLISH_READY.json found, skipping broadcast.");
  process.exit(0);
}

const resend = new Resend(apiKey);

const buildId = meta.buildId as string;
const subject = buildEmailSubject(buildId);
const html = buildEmailHtml({
  buildId,
  title: (meta.title as string) ?? "",
  tagline: (meta.tagline as string) ?? "",
  summary: (meta.summary as string) ?? "",
  whyThisExists: (meta.whyThisExists as string) ?? "",
  whatChanged: (meta.whatChanged as string[]) ?? [],
});

async function main() {
  console.log(`Creating broadcast: ${subject}`);

  const { data: broadcast, error: createError } = await resend.broadcasts.create({
    segmentId,
    from: fromEmail!,
    subject,
    html,
  });

  if (createError || !broadcast) {
    console.error("Failed to create broadcast:", createError);
    process.exit(1);
  }

  console.log(`Sending broadcast ${broadcast.id}...`);

  const { error: sendError } = await resend.broadcasts.send(broadcast.id);

  if (sendError) {
    console.error("Failed to send broadcast:", sendError);
    process.exit(1);
  }

  console.log("Broadcast sent successfully.");
}

main();
```

**Step 2: Commit**

```bash
git add scripts/send-broadcast.ts
git commit -m "feat: add broadcast script for post-publish notifications"
```

---

### Task 10: Add broadcast step to publish-build.sh

**Files:**
- Modify: `scripts/publish-build.sh`

**Step 1: Add broadcast call after git push**

Add these lines at the end of `publish-build.sh`, after the `git push` line (line 22), before the final `fi`:

```bash
  # Send broadcast email to subscribers
  if [ -f "$DIR/PUBLISH_READY.json" ]; then
    echo "Sending broadcast email..."
    npx tsx "$SCRIPT_DIR/send-broadcast.ts" "$DIR" || echo "Broadcast failed (non-fatal)"
  fi
```

The `|| echo` ensures a broadcast failure doesn't block the publish. The broadcast is best-effort.

Note: The `.env.local` file must be loaded. Either:
- Source it in the script: `set -a; source "$ROOT/.env.local"; set +a` before the broadcast call
- Or use `dotenv` via: `npx dotenv -e "$ROOT/.env.local" -- npx tsx "$SCRIPT_DIR/send-broadcast.ts" "$DIR"`

Recommended approach — add env sourcing before the broadcast call:

```bash
  # Send broadcast email to subscribers
  if [ -f "$DIR/PUBLISH_READY.json" ] && [ -f "$ROOT/.env.local" ]; then
    set -a; source "$ROOT/.env.local"; set +a
    echo "Sending broadcast email..."
    npx tsx "$SCRIPT_DIR/send-broadcast.ts" "$DIR" || echo "Broadcast failed (non-fatal)"
  fi
```

**Step 2: Commit**

```bash
git add scripts/publish-build.sh
git commit -m "feat: trigger broadcast email after publish"
```

---

### Task 11: Build verification

**Step 1: Verify Next.js builds without errors**

Run: `cd /Users/rootoperator/Documents/Dev/47-Night-Lab && pnpm build`

Expected: Clean build with no TypeScript or route errors.

**Step 2: Manual test — subscribe flow**

1. Fill in `.env.local` with real Resend API key and segment ID
2. Run `pnpm dev`
3. Enter an email in the notify form
4. Check Resend dashboard — contact should appear in the segment

**Step 3: Manual test — unsubscribe flow**

1. Navigate to `/unsubscribe?email=test@example.com`
2. Click confirm
3. Check Resend dashboard — contact should be removed

**Step 4: Final commit**

```bash
git add .
git commit -m "feat: resend integration — subscribe, broadcast, unsubscribe"
```
