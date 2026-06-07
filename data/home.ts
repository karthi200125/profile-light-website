// data/home.ts
// ─────────────────────────────────────────────────────────────────────────────
//  HOME PAGE DATA
//  Single source of truth for the home page hero and FAQ sections.
//  Import these objects directly into app/page.tsx — no API call needed.
// ─────────────────────────────────────────────────────────────────────────────

import { type HeroCTA } from "@/components/ui/CtaButton";
import { type FAQ } from "@/data/locations"; // re-use the shared FAQ type

// ─── Hero ─────────────────────────────────────────────────────────────────────

export type HomeHeroData = {
  /** Two-line split headline passed to HeroSection */
  headline: [string, string];
  /** Supporting paragraph below the divider */
  description: string;
  /** Primary + secondary CTAs */
  ctas: [HeroCTA, HeroCTA];
  /** No eyebrow on the home page — location pages use this field */
  eyebrow?: never;
};

export const homeHero: HomeHeroData = {
  headline: ["Design That", "Illuminates"],
  description:
    "StraightLine creates premium profile lighting solutions tailored to modern homes, villas, offices and commercial spaces across Bangalore.",
  ctas: [
    { label: "Get Free Consultation", href: "/contact", variant: "solid" },
    { label: "View Projects",         href: "/projects", variant: "ghost" },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export type HomeFaqData = {
  heading: string;
  subheading: string;
  faqs: FAQ[];
};

export const homeFaq: HomeFaqData = {
  heading: "Frequently Asked Questions",
  subheading:
    "Everything you need to know about profile lighting installation with StraightLine.",

  faqs: [
    {
      question: "What is profile lighting and how is it different from regular lighting?",
      answer:
        "Profile lighting uses aluminium channel extrusions (profiles) to house LED strips, delivering clean linear light with precise control over direction and diffusion. Unlike exposed bulbs or downlights, profile lights blend seamlessly into ceilings, walls and furniture — creating architectural-grade illumination with no visible hardware.",
    },
    {
      question: "What types of spaces do you work on?",
      answer:
        "We work on all residential and commercial spaces — apartments, villas, independent houses, penthouses, offices, retail showrooms and hospitality interiors. Whether it's a single room cove or a full-building fit-out, our team handles projects of every scale across Bangalore.",
    },
    {
      question: "Which areas of Bangalore do you serve?",
      answer:
        "We cover all major areas across Bangalore — including Whitefield, Indiranagar, Koramangala, HSR Layout, Sarjapur Road, Electronic City, Hebbal, Yelahanka, Rajajinagar, Malleswaram and 40+ more locations. Visit our locations page to find your area.",
    },
    {
      question: "How much does profile lighting installation cost?",
      answer:
        "Pricing depends on the profile type (recessed, surface-mount, corner, suspended), LED strip quality, ceiling complexity and total linear footage. Most residential projects start from ₹150–₹300 per running foot inclusive of profile, LED strip and installation. We provide a detailed written quotation after a free, no-obligation site visit.",
    },
    {
      question: "Do you offer a free site visit?",
      answer:
        "Yes — completely free and no-obligation. Our lighting consultant visits your site, understands your design brief, and provides a detailed scope and quotation within 24 hours. Call us or fill the contact form and we'll confirm a slot.",
    },
    {
      question: "Which LED and profile brands do you use?",
      answer:
        "We work with premium aluminium profile brands and pair them with high-CRI LED strips (CRI ≥ 90) for accurate colour rendering. We're brand-agnostic and will recommend the best combination for your budget and aesthetic — economy, mid-range and premium tiers available.",
    },
    {
      question: "Can you integrate profile lights with smart home systems?",
      answer:
        "Absolutely. We integrate with Alexa, Google Home, Apple HomeKit and dedicated dimmer/scene controllers so you can adjust brightness, colour temperature and lighting scenes from your phone or voice assistant.",
    },
    {
      question: "How long does installation take?",
      answer:
        "A standard 2BHK or 3BHK apartment typically takes 1–2 days. Larger villas or commercial fit-outs range from 3–7 days depending on scope. We share a detailed project timeline before we begin so there are no surprises.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "We provide a 1-year installation warranty on all our work. LED strips and drivers carry the manufacturer's warranty — typically 2 years on strips and 3 years on drivers. Any defect during the warranty period is rectified at no cost.",
    },
    {
      question: "Do you handle the electrical work too, or only the lighting?",
      answer:
        "We handle the complete installation — profiling, LED fitment, wiring back to the MCB panel, switch/dimmer installation and final testing. You don't need a separate electrician for the lighting portion of your project.",
    },
  ],
};