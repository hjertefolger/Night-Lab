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
const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

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
