import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/inter";

export const metadata: Metadata = {
  title: "iTunes Seach App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter antialiased`}>{children}</body>
    </html>
  );
}
