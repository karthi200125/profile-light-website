// app/robots.ts
// ─────────────────────────────────────────────────────────────────────────────
//  ROBOTS.TXT
//  Next.js App Router · MetadataRoute.Robots
//  Generates /robots.txt at build time.
//
//  Rules:
//   • All bots  → crawl everything except /api/, /admin/, /_next/
//   • GPTBot / Claude / CCBot (AI scrapers) → fully blocked
//   • Sitemap URL injected automatically
// ─────────────────────────────────────────────────────────────────────────────

import { siteConfig } from "@/constants/site";
import { type MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ── General crawlers: allow everything except internals ──
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/admin/",
                    "/_next/",
                    "/studio/",   // Sanity / CMS studio if present
                ],
            },

            // ── AI training scrapers: block entirely ──
            { userAgent: "GPTBot", disallow: "/" },
            { userAgent: "ChatGPT-User", disallow: "/" },
            { userAgent: "CCBot", disallow: "/" },
            { userAgent: "anthropic-ai", disallow: "/" },
            { userAgent: "Claude-Web", disallow: "/" },
            { userAgent: "Omgilibot", disallow: "/" },
            { userAgent: "FacebookBot", disallow: "/" },
            { userAgent: "Bytespider", disallow: "/" },
            { userAgent: "Diffbot", disallow: "/" },
            { userAgent: "ImagesiftBot", disallow: "/" },
            { userAgent: "cohere-ai", disallow: "/" },
        ],

        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}