import { siteConfig } from "@/constants/site";
import type { FAQ, Location } from "@/data/locations";

export type BreadcrumbItem = {
    name: string;
    href: string;
};

// ─────────────────────────────────────────────────────────────
// ORGANIZATION
// ─────────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",

        "@id": `${siteConfig.url}/#organization`,

        name: siteConfig.name,
        legalName: siteConfig.legalName,

        url: siteConfig.url,

        logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.webp`,
        },

        contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: [
                "English",
                "Kannada",
                "Hindi",
            ],
        },

        address: {
            "@type": "PostalAddress",
            ...siteConfig.address,
        },

        sameAs: Object.values(siteConfig.social).filter(Boolean),
    };
}

// ─────────────────────────────────────────────────────────────
// LOCAL BUSINESS
// ─────────────────────────────────────────────────────────────

export function buildLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",

        "@id": `${siteConfig.url}/#localbusiness`,

        name: siteConfig.name,

        image: siteConfig.ogImage,

        url: siteConfig.url,

        telephone: siteConfig.phone,

        email: siteConfig.email,

        priceRange: siteConfig.priceRange,

        address: {
            "@type": "PostalAddress",
            ...siteConfig.address,
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9716,
            longitude: 77.5946,
        },

        areaServed: {
            "@type": "City",
            name: "Bangalore",
        },

        sameAs: Object.values(siteConfig.social).filter(Boolean),
    };
}

// ─────────────────────────────────────────────────────────────
// WEBSITE
// ─────────────────────────────────────────────────────────────

export function buildWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",

        "@id": `${siteConfig.url}/#website`,

        url: siteConfig.url,

        name: siteConfig.name,

        description: siteConfig.description,

        publisher: {
            "@id": `${siteConfig.url}/#organization`,
        },
    };
}

// ─────────────────────────────────────────────────────────────
// GLOBAL SERVICE
// ─────────────────────────────────────────────────────────────

export function buildServiceSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Service",

        "@id": `${siteConfig.url}/#service`,

        name: "Profile Lighting Installation",

        serviceType: "Profile Lighting Installation",

        description:
            "Professional profile lighting installation services for homes, villas, apartments, offices and commercial spaces across Bangalore.",

        provider: {
            "@id": `${siteConfig.url}/#organization`,
        },

        areaServed: {
            "@type": "City",
            name: "Bangalore",
        },
    };
}

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────

export function buildFaqSchema(
    faqs: FAQ[]
) {
    return {
        "@context": "https://schema.org",

        "@type": "FAQPage",

        mainEntity: faqs.map((faq) => ({
            "@type": "Question",

            name: faq.question,

            acceptedAnswer: {
                "@type": "Answer",

                text: faq.answer,
            },
        })),
    };
}

// ─────────────────────────────────────────────────────────────
// AGGREGATE RATING
// ─────────────────────────────────────────────────────────────

export function buildAggregateRatingSchema(
    loc: Location
) {
    return {
        "@type": "AggregateRating",

        ratingValue: loc.stats.avgRating,

        reviewCount: loc.testimonials.length,

        bestRating: 5,

        worstRating: 1,
    };
}

// ─────────────────────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────────────────────

export function buildReviewSchema(
    loc: Location
) {
    return {
        "@context": "https://schema.org",

        "@type": "LocalBusiness",

        name: siteConfig.name,

        review: loc.testimonials.map(
            (testimonial) => ({
                "@type": "Review",

                author: {
                    "@type": "Person",

                    name: testimonial.name,
                },

                reviewRating: {
                    "@type": "Rating",

                    ratingValue:
                        testimonial.rating,

                    bestRating: 5,
                },

                reviewBody:
                    testimonial.review,
            })
        ),
    };
}

// ─────────────────────────────────────────────────────────────
// LOCATION SERVICE PAGE
// ─────────────────────────────────────────────────────────────

export function buildLocationSchema(
    loc: Location
) {
    return {
        "@context": "https://schema.org",

        "@type": "Service",

        "@id": `${siteConfig.url}${loc.canonicalPath}#service`,

        name: `Profile Lighting Installation in ${loc.name}`,

        serviceType: loc.schema.serviceType,

        description: loc.longDescription,

        url: `${siteConfig.url}${loc.canonicalPath}`,

        provider: {
            "@type": "LocalBusiness",

            "@id": `${siteConfig.url}/#localbusiness`,

            name: loc.schema.provider,

            telephone: loc.schema.telephone,
        },

        areaServed: {
            "@type": "Place",

            name: loc.schema.areaServed,
        },

        aggregateRating:
            buildAggregateRatingSchema(
                loc
            ),

        offers: {
            "@type": "Offer",

            availability:
                "https://schema.org/InStock",

            priceSpecification: {
                "@type":
                    "PriceSpecification",

                priceCurrency: "INR",

                priceRange:
                    loc.schema.priceRange,
            },
        },
    };
}

// ─────────────────────────────────────────────────────────────
// BREADCRUMBS
// ─────────────────────────────────────────────────────────────

export function buildBreadcrumbSchema(
    items: BreadcrumbItem[]
) {
    return {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: items.map(
            (item, index) => ({
                "@type": "ListItem",

                position: index + 1,

                name: item.name,

                item: `${siteConfig.url}${item.href}`,
            })
        ),
    };
}

// ─────────────────────────────────────────────────────────────
// JSON-LD HELPER
// ─────────────────────────────────────────────────────────────

export function toJsonLd(
    schema: object
) {
    return JSON.stringify(schema);
}