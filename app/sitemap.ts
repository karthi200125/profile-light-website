
import { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";
import { getLocationsByPriority } from "@/data/locations";

const createUrl = (path: string) =>
    `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: createUrl("/"),
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: createUrl("/privacy-policy"),
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },

        {
            url: createUrl("/terms-and-conditions"),
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const locationPages: MetadataRoute.Sitemap =
        getLocationsByPriority().map((location) => ({
            url: createUrl(location.canonicalPath),
            lastModified: new Date(),
            changeFrequency: location.changefreq,
            priority: location.priority,
        }));

    return [
        ...staticPages,
        ...locationPages,
    ];
}