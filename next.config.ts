// next.config.ts
// ─────────────────────────────────────────────────────────────────────────────
//  NEXT.JS CONFIGURATION
//  Production-grade · Security headers · Image optimisation · Bundle hygiene
// ─────────────────────────────────────────────────────────────────────────────

import type { NextConfig } from "next";

// ─── Security headers ─────────────────────────────────────────────────────────
// Applied to every route via the headers() API.
// These are the headers Google PSI, securityheaders.com and OWASP recommend.

const SECURITY_HEADERS = [
  // Blocks the page from being embedded in an iframe on another origin.
  // Prevents clickjacking attacks.
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  // Prevents browsers from MIME-sniffing the Content-Type.
  // Stops scripts being executed from unexpected content types.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // Controls how much referrer info is included with requests.
  // strict-origin-when-cross-origin: full URL for same-origin,
  // only origin for cross-origin HTTPS, nothing for HTTP.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // Enables browser XSS filtering (legacy browsers) and blocks rendering on attack.
  // Not a substitute for a CSP but adds a second layer.
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },

  // Forces HTTPS for 2 years, including subdomains.
  // Add preload once your domain is submitted to the HSTS preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },

  // Restricts which browser features can be used.
  // Disable features you don't need to reduce attack surface.
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",   // opt out of FLoC / Topics API
    ].join(", "),
  },

  // Content Security Policy.
  // Start in report-only mode with your real origins, then switch to enforcing.
  // Current policy: allows self + trusted CDNs used by the app.
  // Update script-src when adding third-party scripts (e.g. Hotjar, Intercom).
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + GTM + GA
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      // Styles: self + inline (Tailwind injects inline styles)
      "style-src 'self' 'unsafe-inline'",
      // Images: self + data URIs + optimised Next.js image domains
      "img-src 'self' data: blob: https://*.googleapis.com",
      // Fonts: self (next/font self-hosts everything)
      "font-src 'self'",
      // Connections: self + analytics + GTM
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com",
      // Frames: GTM no-script iframe only
      "frame-src https://www.googletagmanager.com",
      // Everything else blocked
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

// ─── Next.js config ───────────────────────────────────────────────────────────

const nextConfig: NextConfig = {

  // ── Security headers ──────────────────────────────────────────────────────
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },

  // ── Image optimisation ────────────────────────────────────────────────────
  images: {
    // Remote image domains — add CDN / CMS origins here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // Add your CMS image domain here, e.g.:
      // { protocol: "https", hostname: "cdn.sanity.io" },
    ],

    // Serve modern formats — Next.js automatically picks the best one
    formats: ["image/avif", "image/webp"],

    // Breakpoints used by next/image srcSet — tune to your layout widths
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],

    // Minimum cache TTL for optimised images (seconds) — 30 days
    minimumCacheTTL: 2592000,

    // Disable the static image import size warning
    dangerouslyAllowSVG: false,
  },

  // ── Compiler ──────────────────────────────────────────────────────────────
  compiler: {
    // Strip console.log in production, keep console.error + console.warn
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  // ── Output ────────────────────────────────────────────────────────────────
  // "standalone" bundles only what's needed — ideal for Docker / Cloud Run.
  // Remove if deploying to Vercel (not needed there).
  // output: "standalone",

  // ── Redirects ─────────────────────────────────────────────────────────────
  // Canonical redirect: www → non-www (or reverse — pick one, stay consistent)
  async redirects() {
    return [
      // Redirect bare domain to www (update if you prefer non-www)
      // {
      //   source:      "/:path*",
      //   has:         [{ type: "host", value: "straightline.in" }],
      //   destination: "https://www.straightline.in/:path*",
      //   permanent:   true,
      // },
    ];
  },

  // ── Experimental ──────────────────────────────────────────────────────────
  experimental: {
    // Improve startup time by pre-bundling dependencies
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
    ],
  },

  // ── Logging (dev) ─────────────────────────────────────────────────────────
  logging: {
    fetches: {
      fullUrl: true, // log full fetch URLs during development
    },
  },

  // ── Powered-by header ─────────────────────────────────────────────────────
  // Remove "X-Powered-By: Next.js" — minor security hygiene
  poweredByHeader: false,

  // ── TypeScript / ESLint ───────────────────────────────────────────────────
  // Do NOT set ignoreBuildErrors: true — fix errors, don't hide them
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;