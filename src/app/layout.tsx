import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Lab 365",
  description: "365 public builds exploring the frontier of personal assistants.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
