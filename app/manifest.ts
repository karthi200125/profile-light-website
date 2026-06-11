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
        
        prefer_related_applications: false,
    };
}