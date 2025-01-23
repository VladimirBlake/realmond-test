import type { Metadata } from "next";
import "./globals.css";

import '@fontsource/inter';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
