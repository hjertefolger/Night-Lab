# Resend Integration for Night Lab

## Purpose

Wire up Resend to the Night Lab website for two flows:
1. **Subscribe** — visitors enter email on the site, contact is added to a Resend segment
2. **Broadcast** — after a build publishes and pushes to GitHub, a broadcast email is sent to the segment with build metadata

## Architecture

```
User visits site -> fills email -> POST /api/subscribe
  -> resend.contacts.create({ email })
  -> resend.contacts.segments.add({ email, segmentId })

Agent builds at 3am -> publish-build.sh runs
  -> copies files, updates builds.ts, commits, pushes
  -> scripts/send-broadcast.ts reads PUBLISH_READY.json
  -> resend.broadcasts.create({ segmentId, subject, html })
  -> resend.broadcasts.send(broadcastId)

User clicks unsubscribe link in email -> /unsubscribe?email=...
  -> POST /api/unsubscribe
  -> resend.contacts.segments.remove({ email, segmentId })
  -> resend.contacts.remove({ email })
  -> shows confirmation message
```

## Files

| File | Action |
|------|--------|
| `.env.local` | Create — RESEND_API_KEY, RESEND_SEGMENT_ID, RESEND_FROM_EMAIL |
| `package.json` | Add `resend` dependency |
| `src/app/api/subscribe/route.ts` | Create — POST handler |
| `src/app/api/unsubscribe/route.ts` | Create — POST handler |
| `src/app/unsubscribe/page.tsx` | Create — client page with confirmation UI |
| `src/components/notify-inline.tsx` | Modify — replace mock with fetch('/api/subscribe') |
| `src/lib/email-template.ts` | Create — HTML email builder |
| `scripts/send-broadcast.ts` | Create — reads metadata, creates + sends broadcast |
| `scripts/publish-build.sh` | Modify — add broadcast step after git push |

## Email Design

**Subject:** `Build 003 · Night Lab`

**Body:** Inline-styled HTML matching site aesthetic.
- White background (#ffffff), dark text (#111111)
- Night Lab cross symbol as inline SVG
- Build number + title in monospace
- Tagline in #666666
- Summary in system sans-serif (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)
- "Why this exists" section from PUBLISH_READY.json
- "View Build" link to live page
- Footer: copyright + unsubscribe link
- No web fonts — system font stacks only (monospace, sans-serif)

Structure mirrors the Field Notes modal but in email-safe inline CSS.

## Unsubscribe Page

Minimal page at `/unsubscribe?email=...` matching site style:
- Shows the email being unsubscribed
- Confirm button
- Success: "You've been unsubscribed. No more builds."
- Error: simple error message
- Removes contact from segment AND deletes contact entirely

## Broadcast Script

`scripts/send-broadcast.ts` — standalone script:
- Reads PUBLISH_READY.json from build folder (path passed as argument)
- Builds HTML email using template
- Subject: `Build {id} · Night Lab`
- Creates broadcast targeting segment, sends immediately
- Called from publish-build.sh after git push

## Environment Variables

```
RESEND_API_KEY=re_xxxxxxxxx
RESEND_SEGMENT_ID=uuid-of-night-lab-segment
RESEND_FROM_EMAIL=Night Lab <builds@yourdomain.com>
NEXT_PUBLIC_SITE_URL=https://nightlab.yourdomain.com
```

Segment created manually in Resend dashboard, ID pasted into env.
