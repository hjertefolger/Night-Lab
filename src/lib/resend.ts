import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const SEGMENT_ID = process.env.RESEND_SEGMENT_ID!;
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL!;
