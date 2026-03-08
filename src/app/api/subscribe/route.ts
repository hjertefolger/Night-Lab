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
