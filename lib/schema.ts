// lib/schema.ts
// ─────────────────────────────────────────────────────────────────────────────
//  JSON-LD STRUCTURED DATA BUILDERS
//  Schema.org · Google Rich Results compatible
//
//  Usage (in a Server Component or layout):
//
//    import { buildOrganizationSchema, buildLocalBusinessSchema } from "@/lib/schema";
//
//    <script
//      type="application/ld+json"
//      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
//    />
//
//  One <script> tag per schema type on the same page is fine.
//  Never embed these in "use client" components — keep them server-side.
// ─────────────────────────────────────────────────────────────────────────────

import { siteConfig } from "@/constants/site";
import { type Location } from "@/data/locations";
import { type FAQ } from "@/data/locations";

// ─────────────────────────────────────────────────────────────────────────────
//  1. ORGANIZATION  (global — used in root layout.tsx)
// ─────────────────────────────────────────────────────────────────────────────

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
            url: `${siteConfig.url}/logo.png`,
            width: 200,
            height: 60,
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Kannada", "Hindi"],
        },
        address: {
            "@type": "PostalAddress",
            ...siteConfig.address,
        },
        sameAs: Object.values(siteConfig.social),
    };
}

// ─────────────────────────────────────────────────────────────────────────────
//  2. LOCAL BUSINESS  (global — used in root layout.tsx alongside Organization)
// ─────────────────────────────────────────────────────────────────────────────

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
            // Approximate centre of Bangalore — update to your office coords
            "@type": "GeoCoordinates",
            latitude: 12.9716,
            longitude: 77.5946,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "19:00",
            },
        ],
        areaServed: {
            "@type": "City",
            name: "Bangalore",
        },
        hasMap: `https://www.google.com/maps/place/?q=place_id:${siteConfig.googlePlaceId}`,
        sameAs: Object.values(siteConfig.social),
    };
}

// ─────────────────────────────────────────────────────────────────────────────
//  3. WEBSITE  (home page)
// ─────────────────────────────────────────────────────────────────────────────

export function buildWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

// ─────────────────────────────────────────────────────────────────────────────
//  4. SERVICE  (home page / services page)
// ─────────────────────────────────────────────────────────────────────────────

export function buildServiceSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${siteConfig.url}/#service`,
        name: "Profile Lighting Installation",
        serviceType: "Interior & Exterior Lighting Installation",
        description:
            "Professional profile lighting installation for homes, villas, apartments and commercial spaces across Bangalore. Includes cove lighting, false ceiling lighting, linear profiles and smart lighting integration.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: {
            "@type": "City",
            name: "Bangalore",
            sameAs: "https://en.wikipedia.org/wiki/Bangalore",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Profile Lighting Services",
            itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cove Lighting Installation" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "False Ceiling Profile Lighting" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Linear Profile Lighting" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recessed Profile Lighting" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Lighting Integration" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facade & Exterior Lighting" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Lighting Installation" } },
            ],
        },
    };
}

// ─────────────────────────────────────────────────────────────────────────────
//  5. FAQ PAGE  (home page + every location page)
// ─────────────────────────────────────────────────────────────────────────────

export function buildFaqSchema(faqs: FAQ[]) {
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

// ─────────────────────────────────────────────────────────────────────────────
//  6. LOCATION SERVICE PAGE  (dynamic /profile-lighting-installation/[location])
// ─────────────────────────────────────────────────────────────────────────────

export function buildLocationSchema(loc: Location) {
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
        offers: {
            "@type": "Offer",
            priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceCurrency: "INR",
                unitText: "per running foot",
                description: "Profile + LED strip + installation. Final price after free site visit.",
            },
            priceRange: loc.schema.priceRange,
            availability: "https://schema.org/InStock",
            validFrom: new Date().toISOString().split("T")[0],
        },
    };
}

// ─────────────────────────────────────────────────────────────────────────────
//  7. BREADCRUMB  (location pages + any nested page)
// ─────────────────────────────────────────────────────────────────────────────

export type BreadcrumbItem = {
    name: string;
    href: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.href}`,
        })),
    };
}

// ─────────────────────────────────────────────────────────────────────────────
//  HELPER — serialise any schema object to a safe JSON string for dangerouslySetInnerHTML
// ─────────────────────────────────────────────────────────────────────────────

export function toJsonLd(schema: object): string {
    return JSON.stringify(schema);
}