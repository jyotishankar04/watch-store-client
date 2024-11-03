import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";

const font = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seiko",
  description: "Seiko Watches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
