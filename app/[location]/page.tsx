import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

import { LOCATIONS } from "@/data/locations";

import { siteConfig } from "@/constants/site";

import {
    buildLocationSchema,
    buildFaqSchema,
    buildBreadcrumbSchema,
    buildReviewSchema,
    toJsonLd,
} from "@/lib/schema";

type LocationSlug = keyof typeof LOCATIONS;

interface PageProps {
    params: Promise<{
        location: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(LOCATIONS).map(
        (location) => ({
            location,
        })
    );
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { location } = await params;

    const data =
        LOCATIONS[
        location as LocationSlug
        ];

    if (!data) {
        return {
            title: "Page Not Found",
        };
    }

    const canonicalUrl =
        `${siteConfig.url}${data.canonicalPath}`;

    return {
        title: data.metaTitle,

        description:
            data.metaDescription,

        alternates: {
            canonical: canonicalUrl,
        },

        openGraph: {
            title: data.metaTitle,

            description:
                data.metaDescription,

            url: canonicalUrl,

            siteName:
                siteConfig.name,

            locale: "en_IN",

            type: "website",

            images: [
                {
                    url: siteConfig.ogImage,

                    width: 1200,

                    height: 630,

                    alt: data.metaTitle,
                },
            ],
        },

        twitter: {
            card:
                "summary_large_image",

            title: data.metaTitle,

            description:
                data.metaDescription,

            images: [
                siteConfig.ogImage,
            ],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function LocationPage({
    params,
}: PageProps) {
    const { location } =
        await params;

    const data =
        LOCATIONS[
        location as LocationSlug
        ];

    if (!data) {
        notFound();
    }

    const schemas = [
        buildLocationSchema(data),

        buildFaqSchema(data.faqs),

        buildReviewSchema(data),

        buildBreadcrumbSchema([
            {
                name: "Home",
                href: "/",
            },
            {
                name: "Profile Lighting Installation",
                href: "/",
            },
            {
                name: data.name,
                href: data.canonicalPath,
            },
        ]),
    ];

    return (
        <>
            {schemas.map(
                (schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html:
                                toJsonLd(schema),
                        }}
                    />
                )
            )}
            
            <main>
                <HeroSection
                    eyebrow={`${data.name} · Bangalore`}
                    headline={
                        data.heroHeadline
                    }
                    description={
                        data.heroSubheadline
                    }
                />

                <AboutSection />

                <Services />

                <WhyChooseUs />

                <Projects />

                <Testimonials />

                <FaqSection
                    heading={`Frequently Asked Questions About Profile Lighting Installation In ${data.name}`}
                    subheading="Location FAQ"
                    faqs={data.faqs}
                />

                <CTA />
            </main>
            
        </>
    );
}