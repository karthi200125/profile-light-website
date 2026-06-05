import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import WhatsappFloat from "@/components/WhatsappFloat";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Profile Light Experts",
    template: "%s | Profile Light Experts",
  },

  description:
    "Professional profile light installation services for homes, offices, villas and commercial spaces.",

  keywords: [
    "profile light installation",
    "profile lighting",
    "led profile lights",
    "false ceiling lights",
    "office lighting",
    "home lighting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
        <WhatsappFloat />
      </body>
    </html>
  );
}