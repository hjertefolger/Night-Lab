import type { Metadata } from "next";
import "./globals.css";

const APP_NAME = "Night Lab 365";
const APP_DESCRIPTION =
  "365 autonomous nightly builds exploring the frontier of personal assistants. One night. One build. One autonomous personal assistant.";
const APP_BASE_URL = "https://nightlab.a2n.run";
const OG_IMAGE = `${APP_BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_BASE_URL),
  keywords: [
    "Night Lab",
    "personal assistant",
    "AI builds",
    "autonomous agents",
    "nightly builds",
    "cognition tools",
    "a2n",
  ],
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_BASE_URL,
    siteName: APP_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: APP_DESCRIPTION,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
