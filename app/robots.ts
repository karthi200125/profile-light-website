
import { siteConfig } from "@/constants/site";
import { type MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/admin/",
                    "/_next/",
                    "/studio/",   
                ],
            },
            
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