import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

import AboutSection from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FaqSection from "@/components/sections/FAQ";
import Projects from "@/components/sections/FeaturedProjects";
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonilas";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

import { homeFaq, homeHero } from "@/data/home";

export const metadata: Metadata = {
  title:
    "Profile Lighting Installation Bangalore | StraightLine",

  description:
    "StraightLine provides premium profile lighting installation services across Bangalore for homes, villas, apartments, offices and commercial interiors.",

  alternates: {
    canonical: "https://yourdomain.com",
  },

  openGraph: {
    title:
      "Profile Lighting Installation Bangalore | StraightLine",

    description:
      "Premium profile lighting solutions across Bangalore.",

    url: "https://yourdomain.com",

    siteName: "StraightLine",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StraightLine Profile Lighting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Profile Lighting Installation Bangalore | StraightLine",

    description:
      "Premium profile lighting solutions across Bangalore.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "StraightLine",

    description:
      "Premium profile lighting installation services across Bangalore.",

    areaServed: "Bangalore",

    address: {
      "@type": "PostalAddress",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },

    url: "https://yourdomain.com",
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
          headline={homeHero.headline}
          description={homeHero.description}
          ctas={homeHero.ctas}
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