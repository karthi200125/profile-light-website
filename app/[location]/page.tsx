import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/FeaturedProjects";
import CTA from "@/components/sections/CTA";


import { LOCATIONS } from "@/data/locations";
import FaqSection from "@/components/sections/FAQ";
import AboutSection from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonilas";

type LocationSlug = keyof typeof LOCATIONS;

interface PageProps {
    params: Promise<{
        location: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(LOCATIONS).map((location) => ({
        location,
    }));
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
        `https://straightline.in/${location}`;

    return {
        title: data.metaTitle,
        description: data.metaDescription,

        alternates: {
            canonical: canonicalUrl,
        },

        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: canonicalUrl,
            siteName: "StraightLine",
            locale: "en_IN",
            type: "website",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: data.metaTitle,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: data.metaTitle,
            description: data.metaDescription,
            images: ["/og-image.jpg"],
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export default async function LocationPage({
    params,
}: PageProps) {
    const { location } = await params;

    const data =
        LOCATIONS[
        location as LocationSlug
        ];

    if (!data) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "StraightLine",
        description: data.metaDescription,
        areaServed: data.name,
        telephone: "+91XXXXXXXXXX",
        address: {
            "@type": "PostalAddress",
            addressLocality: data.name,
            addressRegion: "Karnataka",
            addressCountry: "IN",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <Navbar />

            <main>
                <HeroSection
                    eyebrow={`${data.name} · Bangalore`}
                    headline={data.heroHeadline}
                    description={data.heroSubheadline}
                    ctas={[
                        data.heroCTA.primary,
                        data.heroCTA.secondary,
                    ]}
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

            <Footer />
        </>
    );
}