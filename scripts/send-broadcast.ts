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
  console.error(
    "Missing required env vars: RESEND_API_KEY, RESEND_SEGMENT_ID, RESEND_FROM_EMAIL",
  );
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

  const { data: broadcast, error: createError } =
    await resend.broadcasts.create({
      name: subject,
      segmentId: segmentId!,
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
