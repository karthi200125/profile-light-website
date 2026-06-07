import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.legalName,
        short_name: siteConfig.name,

        description: siteConfig.description,

        start_url: "/",

        display: "standalone",

        background_color: "#111111",

        theme_color: "#111111",

        orientation: "portrait-primary",

        lang: "en-IN",

        categories: [
            "business",
            "home",
            "lifestyle",
        ],

        icons: [
            {
                src: "/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
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

        shortcuts: [
            {
                name: "Get Free Consultation",
                short_name: "Consult",
                description: "Book a free site visit",
                url: "/contact",
                icons: [
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                    },
                ],
            },
            {
                name: "View Projects",
                short_name: "Projects",
                description: "Browse completed projects",
                url: "/projects",
                icons: [
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                    },
                ],
            },
        ],

        prefer_related_applications: false,
    };
}