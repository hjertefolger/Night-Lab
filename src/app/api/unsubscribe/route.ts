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
