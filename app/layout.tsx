// app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
//  ROOT LAYOUT
//  Next.js App Router · Server Component
//
//  Responsibilities:
//   • Global metadata + Open Graph + Twitter card
//   • Viewport / theme-color
//   • Font optimisation (next/font — zero CLS, self-hosted)
//   • Global JSON-LD schema (Organization + LocalBusiness)
//   • Google Tag Manager (no-JS fallback included)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/constants/site";
import {
  buildOrganizationSchema,
  buildLocalBusinessSchema,
  toJsonLd,
} from "@/lib/schema";

// ─── Fonts ────────────────────────────────────────────────────────────────────
// next/font downloads and self-hosts at build time:
//  • Zero layout shift — size-adjust + fallback metrics handled automatically
//  • No third-party network request to Google at runtime
//  • swap display — text visible immediately with fallback font

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // mono used only in code blocks — defer
});

// ─── Viewport & Theme Color ───────────────────────────────────────────────────
// Exported separately per Next.js 14+ spec — must NOT be inside metadata.
// theme-color matches brand dark on both colour schemes.

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,   // allow user zoom — WCAG 2.1 requirement
  // themeColor: [
  //   { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  //   { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  // ],
  // colorScheme: "dark",
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Premium Profile Lighting in Bangalore`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "profile lighting installation Bangalore",
    "cove lighting Bangalore",
    "false ceiling lighting",
    "linear profile lighting",
    "LED profile lights",
    "interior lighting Bangalore",
    "smart lighting installation",
    "profile light installer near me",
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: siteConfig.url,
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Premium Profile Lighting in Bangalore`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image.png", // resolved against metadataBase
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Premium Profile Lighting in Bangalore`,
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Premium Profile Lighting in Bangalore`,
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
    // creator: "@yourhandle",
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico" }],
  },

  // ── Verification ──────────────────────────────────────────────────────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "REPLACE_WITH_BING_WEBMASTER_TOKEN",
  },

  // ── Crawling ──────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── PWA manifest ──────────────────────────────────────────────────────────
  manifest: "/manifest.webmanifest",
};

// ─── GTM ID ───────────────────────────────────────────────────────────────────
// Set in .env.local:  NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
// Undefined in dev → no GTM scripts injected at all

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning  // prevents hydration mismatch from browser extensions
    >
      <head>
        {/* ── Global JSON-LD: injected once, available on every page ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(buildOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(buildLocalBusinessSchema()) }}
        />

        {/* ── Google Tag Manager ── */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>

      <body className="bg-neutral-950 font-sans antialiased">
        {/* ── GTM no-script fallback — required for full GTM data collection ── */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}