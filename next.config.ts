
import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },

  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },

  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },


  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.googleapis.com",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com",
      "frame-src https://www.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],

    formats: ["image/avif", "image/webp"],

    qualities: [75, 85, 90],

    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],

    imageSizes: [16, 32, 64, 128, 256, 384],

    minimumCacheTTL: 2592000,

    dangerouslyAllowSVG: false,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  async redirects() {
    return [

    ];
  },


  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
    ],
  },


  poweredByHeader: false,

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;