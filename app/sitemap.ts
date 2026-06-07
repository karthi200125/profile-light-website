// app/sitemap.ts
// ─────────────────────────────────────────────────────────────────────────────
//  SITEMAP
//  Next.js App Router · MetadataRoute.Sitemap
//  Generates /sitemap.xml at build time (or on-demand with ISR).
//
//  Covers:
//    • Static pages  (home, about, services, projects, contact, locations index)
//    • Dynamic pages (/profile-lighting-installation/[location]) — one entry per location
// ─────────────────────────────────────────────────────────────────────────────

import { type MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { getLocationsByPriority } from "@/data/locations";

// Convenience — build absolute URLs cleanly
const url = (path: string) => `${siteConfig.url}${path}`;

// ─── Static pages ─────────────────────────────────────────────────────────────

const STATIC_PAGES: MetadataRoute.Sitemap = [
    {
        url: url("/"),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
    },
    {
        url: url("/about"),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: url("/services"),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        url: url("/projects"),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    },
    {
        url: url("/contact"),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: url("/profile-lighting-installation"),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
];

// ─── Sitemap ──────────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
    // Build one entry per location, pulling priority + changefreq from the data layer
    const locationPages: MetadataRoute.Sitemap = getLocationsByPriority().map((loc) => ({
        url: url(loc.canonicalPath),
        lastModified: new Date(),
        changeFrequency: loc.changefreq,
        priority: loc.priority,
    }));

    return [...STATIC_PAGES, ...locationPages];
}