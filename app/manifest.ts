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

        shortcuts: [
            {
                name: "Get Free Consultation",
                short_name: "Consult",
                description: "Book a free site visit",
                url: "/contact",
            },
            {
                name: "View Projects",
                short_name: "Projects",
                description: "Browse completed projects",
                url: "/projects",
            },
        ],

        prefer_related_applications: false,
    };
}