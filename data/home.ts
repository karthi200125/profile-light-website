import { type FAQ } from "@/data/locations";


export type HomeHeroData = {
  headline: [string, string];
  description: string;
  eyebrow?: never;
};

export const homeHero: HomeHeroData = {
  headline: ["Design That", "Illuminates"],
  description:
    "StraightLine creates premium profile lighting solutions for homes, villas, offices and commercial spaces across Bangalore and Tamil Nadu. From concept to installation, we deliver clean architectural lighting that transforms interiors and enhances every space.",
};


export type HomeFaqData = {
  heading: string;
  subheading: string;
  faqs: FAQ[];
};

export const homeFaq: HomeFaqData = {
  heading: "Everything You Need To Know About Profile Lighting",

  subheading:
    "Everything you need to know about profile lighting design, installation, pricing and service coverage across Bangalore and Tamil Nadu.",

  faqs: [
    {
      question:
        "What is profile lighting and how is it different from regular lighting?",
      answer:
        "Profile lighting uses aluminium channel extrusions (profiles) to house LED strips, delivering clean linear light with precise control over direction and diffusion. Unlike exposed bulbs or downlights, profile lights blend seamlessly into ceilings, walls and furniture, creating architectural-grade illumination with no visible hardware.",
    },

    {
      question: "What types of spaces do you work on?",
      answer:
        "We work on all residential and commercial spaces including apartments, villas, independent houses, penthouses, offices, retail showrooms, hotels and hospitality interiors. Whether it is a single room cove or a complete building fit-out, our team handles projects of every scale across Bangalore and Tamil Nadu.",
    },

    {
      question: "Which locations do you serve?",
      answer:
        "We provide profile lighting installation services across Bangalore and major cities throughout Tamil Nadu. Our team regularly works in Whitefield, Marathahalli, HSR Layout, Koramangala, Electronic City, Indiranagar, Hebbal and other Bangalore locations, as well as Chennai, Coimbatore, Salem, Erode, Namakkal and surrounding regions. Contact us to confirm availability in your area.",
    },

    {
      question: "How much does profile lighting installation cost?",
      answer:
        "Pricing depends on the profile type, LED strip quality, ceiling design complexity, installation requirements and total running length. Every project is different, so we provide a detailed quotation after understanding your requirements and conducting a site inspection.",
    },

    {
      question: "Do you offer a free site visit?",
      answer:
        "Yes. We provide free site visits and consultations to understand your space, discuss design ideas and recommend the most suitable profile lighting solution. Following the visit, we provide a detailed quotation with no obligation.",
    },

    {
      question: "Which LED and profile brands do you use?",
      answer:
        "We work with premium aluminium profile systems and high-CRI LED strips to ensure excellent light quality, durability and long-term performance. Depending on your budget and project requirements, we recommend the most suitable products from trusted industry brands.",
    },

    {
      question: "Can you integrate profile lights with smart home systems?",
      answer:
        "Yes. Profile lighting can be integrated with smart home ecosystems including Alexa, Google Home and other automation systems, allowing you to control brightness, schedules and lighting scenes with ease.",
    },

    {
      question: "How long does installation take?",
      answer:
        "Most residential projects can be completed within one to three days, depending on the scope of work. Larger villas, offices and commercial projects may require additional time. We provide a clear project timeline before installation begins.",
    },

    {
      question: "What warranty do you provide?",
      answer:
        "We provide warranty coverage on installation workmanship and support manufacturer warranties on LED strips, drivers and associated components. Warranty terms may vary depending on the products selected for your project.",
    },

    {
      question:
        "Do you handle the electrical work too, or only the lighting?",
      answer:
        "We handle the complete profile lighting installation process, including mounting profiles, LED installation, wiring, driver integration, testing and final commissioning. This ensures a seamless experience from start to finish.",
    },
  ],
};