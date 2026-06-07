// app/manifest.ts
// ─────────────────────────────────────────────────────────────────────────────
//  WEB APP MANIFEST
//  Next.js App Router · MetadataRoute.Manifest
//  Generates /manifest.webmanifest at build time.
//
//  Covers:
//   • PWA installability (Add to Home Screen on Android / iOS)
//   • Theme colour matching the brand dark background
//   • Full icon set — generate these from your logo at https://favicon.inbrowser.app
//     and place them in /public/icons/
// ─────────────────────────────────────────────────────────────────────────────

import { type MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.legalName,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",   // matches bg-neutral-950
        theme_color: "#0a0a0a",   // matches browser chrome on Android

        orientation: "portrait-primary",

        // ── Icons ────────────────────────────────────────────────────────────────
        // Generate the full set at https://favicon.inbrowser.app and drop them in
        // /public/icons/. The sizes below cover every Android / iOS / desktop need.
        icons: [
            {
                src: "/icons/icon-48x48.png",
                sizes: "48x48",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-72x72.png",
                sizes: "72x72",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-96x96.png",
                sizes: "96x96",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-128x128.png",
                sizes: "128x128",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-144x144.png",
                sizes: "144x144",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-256x256.png",
                sizes: "256x256",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-384x384.png",
                sizes: "384x384",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
            // Maskable icon — important for Android adaptive icons (safe-zone padding)
            // Generate separately at https://maskable.app
            {
                src: "/icons/icon-maskable-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/icons/icon-maskable-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],

        // ── Shortcuts — appear on Android long-press ──────────────────────────
        shortcuts: [
            {
                name: "Get Free Consultation",
                short_name: "Consult",
                description: "Book a free site visit and lighting consultation",
                url: "/contact?source=pwa-shortcut",
                icons: [{ src: "/icons/shortcut-contact.png", sizes: "96x96" }],
            },
            {
                name: "View Projects",
                short_name: "Projects",
                description: "Browse our completed profile lighting installations",
                url: "/projects?source=pwa-shortcut",
                icons: [{ src: "/icons/shortcut-projects.png", sizes: "96x96" }],
            },
            {
                name: "Locations We Serve",
                short_name: "Locations",
                description: "Find profile lighting installation near you in Bangalore",
                url: "/profile-lighting-installation?source=pwa-shortcut",
                icons: [{ src: "/icons/shortcut-locations.png", sizes: "96x96" }],
            },
        ],

        // ── Screenshots — shown in install dialog on supported browsers ────────
        screenshots: [
            {
                src: "/screenshots/desktop-home.jpg",
                sizes: "1280x720",
                form_factor: "wide",
                label: "StraightLine — Premium Profile Lighting",
            },
            {
                src: "/screenshots/mobile-home.jpg",
                sizes: "390x844",
                form_factor: "narrow",
                label: "StraightLine — Profile Lighting Bangalore",
            },
        ],

        categories: ["home", "business", "lifestyle"],
        lang: "en-IN",
        dir: "ltr",
        prefer_related_applications: false,
    };
}