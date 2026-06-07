import type { Metadata } from "next";

import Footer from "@/components/Footer";

import AboutSection from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FaqSection from "@/components/sections/FAQ";
import Projects from "@/components/sections/FeaturedProjects";
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonilas";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

import { homeFaq, homeHero } from "@/data/home";

import { siteConfig } from "@/constants/site";

import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  toJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Profile Lighting Installation Bangalore | StraightLine",

  description: siteConfig.description,

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    title:
      "Profile Lighting Installation Bangalore | StraightLine",

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: siteConfig.name,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Profile Lighting`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Profile Lighting Installation Bangalore | StraightLine",

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const schemas = [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
    buildFaqSchema(homeFaq.faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(schema),
          }}
        />
      ))}

      <main>
        <HeroSection
          headline={homeHero.headline}
          description={homeHero.description}
        />

        <AboutSection />

        <Services />

        <WhyChooseUs />

        <Projects />

        <Testimonials />

        <FaqSection
          heading={homeFaq.heading}
          subheading={homeFaq.subheading}
          faqs={homeFaq.faqs}
        />

        <CTA />
      </main>

      <Footer />
    </>
  );
}