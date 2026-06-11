import { siteConfig } from "@/constants/site";

export type PropertyType =
  | "Apartments"
  | "Villas"
  | "Independent Houses"
  | "Penthouses"
  | "Commercial Spaces"
  | "Offices"
  | "Retail Showrooms"
  | "Hotels & Hospitality";

export type ServiceHighlight =
  | "Profile Light Installation"
  | "False Ceiling Lighting"
  | "Linear Lighting"
  | "Cove Lighting"
  | "Recessed Lighting"
  | "Facade & Exterior Lighting"
  | "Smart Lighting Integration"
  | "Commercial Lighting"
  | "Accent & Decorative Lighting"
  | "Kitchen Under-Cabinet Lighting"
  | "Staircase Lighting"
  | "Landscape & Garden Lighting";

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  location: string;
  propertyType: string;
  rating: number;
  review: string;
};

export type Location = {

  slug: string;
  name: string;
  region: "East" | "South" | "West" | "North" | "Central";


  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;


  heroHeadline: string;
  heroSubheadline: string;
  heroCTA: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };


  description: string;
  longDescription: string;


  nearbyAreas: string[];
  landmarks: string[];


  propertyTypes: PropertyType[];
  serviceHighlights: ServiceHighlight[];


  stats: {
    projectsCompleted: number;
    happyClients: number;
    yearsServing: number;
    avgRating: number;
  };
  testimonials: Testimonial[];


  faqs: FAQ[];


  schema: {
    areaServed: string;
    serviceType: string;
    provider: string;
    telephone: string;
    priceRange: string;
  };


  priority: number;
  changefreq: "daily" | "weekly" | "monthly";
};


const PHONE = siteConfig.phone.replace(/\D/g, "");
const COMPANY = siteConfig.legalName || siteConfig.name;

const createLocation = (
  slug: string,
  name: string,
  region: Location["region"],
  nearbyAreas: string[],
  landmarks: string[],
  extraPropertyTypes: PropertyType[] = [],
  extraServices: ServiceHighlight[] = [],
  projectsCompleted = 120,
  priority = 0.8
): Location => {
  const basePropertyTypes: PropertyType[] = [
    "Apartments",
    "Villas",
    "Independent Houses",
    "Commercial Spaces",
  ];

  const baseServices: ServiceHighlight[] = [
    "Profile Light Installation",
    "False Ceiling Lighting",
    "Linear Lighting",
    "Cove Lighting",
    "Recessed Lighting",
    "Smart Lighting Integration",
    "Commercial Lighting",
  ];

  return {
    // ── Core identity ────────────────────────────────────────
    slug,
    name,
    region,

    // ── SEO ──────────────────────────────────────────────────
    title: `Profile Lighting Installation in ${name}, Bangalore`,
    metaTitle: `Profile Lighting in ${name} | ${COMPANY}`,
    metaDescription: `Top-rated profile lighting installation in ${name}, Bangalore. Cove lights, false ceiling, linear & smart lighting for homes, villas & offices. Free site visit.`,
    canonicalPath: `/${slug}`,

    // ── Hero ─────────────────────────────────────────────────
    heroHeadline: `Premium Profile Lighting in ${name}`,
    heroSubheadline: `Transform your home or office in ${name} with precision-installed cove lights, linear profiles & smart lighting systems. Trusted by ${projectsCompleted}+ happy clients.`,
    heroCTA: {
      primary: {
        label: "Get Free Site Visit",
        href: `/contact?location=${slug}&source=hero`,
      },
      secondary: {
        label: "View Our Projects",
        href: `/projects?location=${slug}`,
      },
    },

    // ── Description ──────────────────────────────────────────
    description: `Professional profile lighting solutions for homes & commercial spaces in ${name}.`,
    longDescription: `${COMPANY} delivers end-to-end profile lighting installation across ${name}, ${nearbyAreas.slice(0, 2).join(" and ")}, and surrounding areas. From minimalist cove lighting in luxury apartments to full commercial fit-outs, our certified electricians ensure flawless finishes every time. We work with all leading aluminium profile brands and provide a 1-year installation warranty.`,

    // ── Geography ────────────────────────────────────────────
    nearbyAreas,
    landmarks,

    // ── Services ─────────────────────────────────────────────
    propertyTypes: [...new Set([...basePropertyTypes, ...extraPropertyTypes])],
    serviceHighlights: [...new Set([...baseServices, ...extraServices])],

    // ── Social proof ─────────────────────────────────────────
    stats: {
      projectsCompleted,
      happyClients: Math.round(projectsCompleted * 0.95),
      yearsServing: 6,
      avgRating: 4.8,
    },
    testimonials: [
      {
        name: "Ramesh K.",
        location: name,
        propertyType: "3BHK Apartment",
        rating: 5,
        review: `The team did a fantastic job with cove lighting in our living room and kitchen profiles. Very clean work, no mess left behind, and the final look is stunning.`,
      },
      {
        name: "Priya S.",
        location: name,
        propertyType: "Villa",
        rating: 5,
        review: `We had full villa lighting done — false ceiling, exterior facade, staircase profiles. Everything was completed on time and within budget. Highly recommend ${COMPANY}.`,
      },
      {
        name: "Arun M.",
        location: name,
        propertyType: "Office Space",
        rating: 4,
        review: `Hired them for our new office fitout. The linear lighting they installed looks very professional. Would definitely use them again.`,
      },
    ],

    // ── FAQ ──────────────────────────────────────────────────
    faqs: [
      {
        question: `Do you provide profile lighting installation in ${name}?`,
        answer: `Yes, ${COMPANY} provides professional profile lighting installation throughout ${name} and nearby areas including ${nearbyAreas.slice(0, 3).join(", ")}. Our team is available 7 days a week.`,
      },
      {
        question: `What types of profile lights do you install in ${name}?`,
        answer: `We install recessed aluminium profiles, surface-mounted linear profiles, corner profiles, and suspended profiles for both residential and commercial projects in ${name}.`,
      },
      {
        question: `What is the cost of profile lighting installation in ${name}?`,
        answer: `Pricing depends on the profile type, LED strip quality, ceiling complexity and total linear footage. Typical residential projects in ${name} start from ₹150–₹300 per running foot (profile + LED + installation). We provide a detailed written quotation after a free site visit.`,
      },
      {
        question: `Do you install profile lights for villas, apartments and offices in ${name}?`,
        answer: `Yes — we serve apartments, villas, independent houses, penthouses, offices, retail showrooms and hospitality spaces across ${name}.`,
      },
      {
        question: `How long does profile lighting installation take in ${name}?`,
        answer: `A standard 2BHK or 3BHK project in ${name} typically takes 1–2 days. Larger villas or commercial spaces may take 3–5 days depending on scope and site conditions.`,
      },
      {
        question: `Do you offer a warranty on your work in ${name}?`,
        answer: `Yes. We provide a 1-year installation warranty on all profile lighting work done in ${name}. LED strips and drivers carry the manufacturer's warranty (typically 2–3 years).`,
      },
      {
        question: `Can you integrate smart lighting controls with profile lights in ${name}?`,
        answer: `Absolutely. We integrate profile lighting systems with smart home platforms like Alexa, Google Home and dedicated dimmer controllers so you can control brightness, colour temperature and scenes from your phone.`,
      },
      {
        question: `Do you provide free site visits in ${name}?`,
        answer: `Yes, we offer a completely free, no-obligation site visit and quotation for all projects in ${name}. Call us or fill the contact form and we'll confirm a slot within 24 hours.`,
      },
    ],

    // ── Schema ───────────────────────────────────────────────
    schema: {
      areaServed: `${name}, Bangalore`,
      serviceType: "Profile Lighting Installation",
      provider: COMPANY,
      telephone: PHONE,
      priceRange: "₹₹–₹₹₹",
    },

    // ── Sitemap ──────────────────────────────────────────────
    priority,
    changefreq: "monthly",
  };
};

// ============================================================
//  LOCATION REGISTRY
// ============================================================

export const LOCATIONS = {

  // ── EAST BANGALORE ─────────────────────────────────────────

  whitefield: createLocation(
    "whitefield", "Whitefield", "East",
    ["ITPL", "Hope Farm", "Brookefield", "Varthur", "Kadugodi", "EPIP Zone"],
    ["ITPL Tech Park", "Phoenix Marketcity", "VR Bengaluru Mall", "International Tech Park"],
    ["Penthouses", "Hotels & Hospitality"],
    ["Facade & Exterior Lighting", "Smart Lighting Integration", "Landscape & Garden Lighting"],
    280, 1.0
  ),

  brookefield: createLocation(
    "brookefield", "Brookefield", "East",
    ["AECS Layout", "Kundalahalli", "ITPL", "Whitefield", "Hoodi"],
    ["Kundalahalli Lake", "ITPL Main Gate"],
    ["Apartments", "Villas"],
    ["Accent & Decorative Lighting"],
    150, 0.8
  ),

  varthur: createLocation(
    "varthur", "Varthur", "East",
    ["Gunjur", "Balagere", "Whitefield", "Thubarahalli", "Siddapura"],
    ["Varthur Lake", "Prestige Shantiniketan"],
    ["Villas", "Independent Houses"],
    ["Landscape & Garden Lighting", "Staircase Lighting"],
    130, 0.8
  ),

  hoodi: createLocation(
    "hoodi", "Hoodi", "East",
    ["ITPL", "Whitefield", "Mahadevapura", "KR Puram", "Garudacharapalya"],
    ["Hoodi Junction", "ITPL Road"],
    [],
    ["Recessed Lighting"],
    110, 0.8
  ),

  mahadevapura: createLocation(
    "mahadevapura", "Mahadevapura", "East",
    ["Phoenix Marketcity", "Hoodi", "KR Puram", "Whitefield Road"],
    ["Phoenix Marketcity Whitefield", "Hoodi Circle"],
    ["Commercial Spaces", "Retail Showrooms"],
    ["Commercial Lighting", "Accent & Decorative Lighting"],
    140, 0.8
  ),

  "kr-puram": createLocation(
    "kr-puram", "KR Puram", "East",
    ["Battarahalli", "Ramamurthy Nagar", "TC Palya", "Tin Factory", "Banaswadi"],
    ["KR Puram Railway Station", "Tin Factory"],
    [],
    [],
    120, 0.8
  ),

  "ramamurthy-nagar": createLocation(
    "ramamurthy-nagar", "Ramamurthy Nagar", "East",
    ["Horamavu", "KR Puram", "TC Palya", "Banaswadi"],
    ["Ramamurthy Nagar Main Road"],
    [],
    [],
    100, 0.7
  ),

  horamavu: createLocation(
    "horamavu", "Horamavu", "East",
    ["Kalkere", "Hennur", "Ramamurthy Nagar", "Banaswadi"],
    ["Horamavu Agara Lake"],
    [],
    [],
    100, 0.7
  ),

  kaggadasapura: createLocation(
    "kaggadasapura", "Kaggadasapura", "East",
    ["CV Raman Nagar", "DRDO Township", "Old Airport Road"],
    ["HAL Airport Road", "DRDO Layout"],
    [],
    [],
    90, 0.7
  ),

  "cv-raman-nagar": createLocation(
    "cv-raman-nagar", "CV Raman Nagar", "East",
    ["Kaggadasapura", "BEML Layout", "Old Airport Road"],
    ["CV Raman Nagar Metro Station"],
    [],
    [],
    90, 0.7
  ),

  indiranagar: createLocation(
    "indiranagar", "Indiranagar", "East",
    ["100 Feet Road", "HAL 2nd Stage", "CMH Road", "Domlur", "Defence Colony"],
    ["100 Feet Road", "CMH Road", "Domlur Flyover"],
    ["Penthouses", "Retail Showrooms", "Hotels & Hospitality"],
    ["Accent & Decorative Lighting", "Kitchen Under-Cabinet Lighting", "Smart Lighting Integration"],
    200, 0.9
  ),

  marathahalli: createLocation(
    "marathahalli", "Marathahalli", "East",
    ["Munnekollal", "AECS Layout", "Aswath Nagar", "Doddanekkundi", "Kadubeesanahalli"],
    ["Marathahalli Bridge", "ORR Marathahalli"],
    ["Commercial Spaces", "Retail Showrooms"],
    ["Commercial Lighting"],
    180, 0.9
  ),

  bellandur: createLocation(
    "bellandur", "Bellandur", "East",
    ["Green Glen Layout", "Kadubeesanahalli", "ORR", "Sarjapur Road"],
    ["Bellandur Lake", "Outer Ring Road Bellandur"],
    ["Apartments", "Villas"],
    ["Smart Lighting Integration"],
    160, 0.9
  ),

  panathur: createLocation(
    "panathur", "Panathur", "East",
    ["Bellandur", "Kadubeesanahalli", "Varthur", "Carmelaram"],
    ["Panathur Lake", "Panathur Road"],
    [],
    [],
    120, 0.8
  ),

  kadubeesanahalli: createLocation(
    "kadubeesanahalli", "Kadubeesanahalli", "East",
    ["Bellandur", "Panathur", "ORR", "Marathahalli"],
    ["Outer Ring Road", "Kadubeesanahalli Signal"],
    [],
    [],
    110, 0.7
  ),

  // ── SOUTH BANGALORE ────────────────────────────────────────

  "sarjapur-road": createLocation(
    "sarjapur-road", "Sarjapur Road", "South",
    ["Kaikondrahalli", "Dommasandra", "Carmelaram", "Kasavanahalli", "Ambalipura"],
    ["Sarjapur Road ORR Junction", "Wipro Campus"],
    ["Villas", "Apartments", "Penthouses"],
    ["Smart Lighting Integration", "Landscape & Garden Lighting", "Facade & Exterior Lighting"],
    240, 0.9
  ),

  "hsr-layout": createLocation(
    "hsr-layout", "HSR Layout", "South",
    ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 7", "Agara"],
    ["HSR Layout BDA Complex", "Agara Lake"],
    ["Apartments", "Villas", "Independent Houses"],
    ["Kitchen Under-Cabinet Lighting", "Accent & Decorative Lighting", "Smart Lighting Integration"],
    220, 0.9
  ),

  "electronic-city": createLocation(
    "electronic-city", "Electronic City", "South",
    ["Phase 1", "Phase 2", "Neeladri Nagar", "Doddathoguru", "Hebbagodi"],
    ["Infosys Campus Electronic City", "Wipro Limited Electronic City", "NICE Road"],
    ["Apartments", "Commercial Spaces", "Offices"],
    ["Commercial Lighting", "Smart Lighting Integration"],
    190, 0.9
  ),

  koramangala: createLocation(
    "koramangala", "Koramangala", "South",
    ["1st Block", "3rd Block", "4th Block", "5th Block", "6th Block", "8th Block"],
    ["Forum Mall Koramangala", "Sony World Signal", "BDA Complex"],
    ["Apartments", "Villas", "Retail Showrooms", "Offices"],
    ["Accent & Decorative Lighting", "Kitchen Under-Cabinet Lighting", "Commercial Lighting", "Smart Lighting Integration"],
    250, 1.0
  ),

  "jp-nagar": createLocation(
    "jp-nagar", "JP Nagar", "South",
    ["1st Phase", "5th Phase", "6th Phase", "7th Phase", "8th Phase"],
    ["JP Nagar Metro Station", "Bannerghatta Road Junction"],
    ["Independent Houses", "Villas", "Apartments"],
    ["Staircase Lighting", "Landscape & Garden Lighting"],
    170, 0.9
  ),

  jayanagar: createLocation(
    "jayanagar", "Jayanagar", "South",
    ["4th Block", "5th Block", "7th Block", "9th Block", "11th Block"],
    ["Jayanagar Shopping Complex", "South End Circle"],
    ["Independent Houses", "Villas"],
    ["Accent & Decorative Lighting", "Staircase Lighting"],
    160, 0.9
  ),

  banashankari: createLocation(
    "banashankari", "Banashankari", "South",
    ["2nd Stage", "3rd Stage", "Kathriguppe", "Uttarahalli"],
    ["Banashankari Temple", "Banashankari Metro Station"],
    ["Independent Houses", "Apartments"],
    [],
    140, 0.8
  ),

  uttarahalli: createLocation(
    "uttarahalli", "Uttarahalli", "South",
    ["Subramanyapura", "Banashankari", "Chikkalasandra", "Kanakapura Road"],
    ["Uttarahalli Main Road"],
    [],
    [],
    110, 0.7
  ),

  "bannerghatta-road": createLocation(
    "bannerghatta-road", "Bannerghatta Road", "South",
    ["Arekere", "Hulimavu", "Gottigere", "Begur", "Meenakshi Temple Road"],
    ["Meenakshi Temple", "Bannerghatta National Park Entrance"],
    ["Villas", "Apartments"],
    ["Landscape & Garden Lighting", "Facade & Exterior Lighting"],
    160, 0.9
  ),

  "begur-road": createLocation(
    "begur-road", "Begur Road", "South",
    ["Akshayanagar", "Hulimavu", "Hongasandra", "Gottigere"],
    ["Begur Fort Road", "Hongasandra Signal"],
    [],
    [],
    110, 0.7
  ),

  "kanakapura-road": createLocation(
    "kanakapura-road", "Kanakapura Road", "South",
    ["Talaghattapura", "Vajarahalli", "Konanakunte", "Anjanapura"],
    ["NICE Road Kanakapura Junction", "Art of Living Campus"],
    ["Villas", "Independent Houses"],
    ["Landscape & Garden Lighting", "Facade & Exterior Lighting"],
    140, 0.8
  ),

  // ── NORTH BANGALORE ────────────────────────────────────────

  hebbal: createLocation(
    "hebbal", "Hebbal", "North",
    ["Kodigehalli", "RT Nagar", "Nagawara", "Bellary Road", "Esteem Mall Area"],
    ["Hebbal Flyover", "Manyata Tech Park", "Esteem Mall"],
    ["Apartments", "Commercial Spaces", "Offices"],
    ["Commercial Lighting", "Smart Lighting Integration"],
    200, 0.9
  ),

  yelahanka: createLocation(
    "yelahanka", "Yelahanka", "North",
    ["Yelahanka New Town", "Kogilu", "Jakkur", "Thanisandra", "Attur Layout"],
    ["Air Force Station Yelahanka", "Yelahanka Satellite Town"],
    ["Villas", "Independent Houses"],
    ["Landscape & Garden Lighting", "Staircase Lighting"],
    150, 0.8
  ),

  jakkur: createLocation(
    "jakkur", "Jakkur", "North",
    ["Yelahanka", "Hebbal", "Kogilu", "Thanisandra"],
    ["Jakkur Aerodrome", "Jakkur Lake"],
    ["Villas"],
    ["Landscape & Garden Lighting"],
    110, 0.7
  ),

  thanisandra: createLocation(
    "thanisandra", "Thanisandra", "North",
    ["Nagawara", "Manyata Tech Park", "Hebbal", "Kogilu", "Kannur"],
    ["Manyata Tech Park", "Nagawara Lake"],
    ["Apartments", "Offices"],
    ["Smart Lighting Integration", "Commercial Lighting"],
    160, 0.8
  ),

  nagawara: createLocation(
    "nagawara", "Nagawara", "North",
    ["Thanisandra", "Hebbal", "Manyata", "Banaswadi"],
    ["Nagawara Lake", "Manyata Tech Park Entrance"],
    ["Apartments"],
    [],
    130, 0.8
  ),

  "sahakar-nagar": createLocation(
    "sahakar-nagar", "Sahakar Nagar", "North",
    ["Hebbal", "Kodigehalli", "Yelahanka", "Devanahalli Road"],
    ["Sahakar Nagar Park", "Bellary Road"],
    [],
    [],
    100, 0.7
  ),

  "hennur-road": createLocation(
    "hennur-road", "Hennur Road", "North",
    ["Kothanur", "Horamavu", "Byrathi", "Kalkere", "Nagawara"],
    ["Hennur Main Road", "Kalkere Lake"],
    [],
    [],
    120, 0.7
  ),

  devanahalli: createLocation(
    "devanahalli", "Devanahalli", "North",
    ["Airport Road", "IVC Road", "Akash Nagar", "Sadahalli"],
    ["Kempegowda International Airport", "Devanahalli Fort"],
    ["Villas", "Hotels & Hospitality"],
    ["Facade & Exterior Lighting", "Landscape & Garden Lighting"],
    130, 0.8
  ),

  // ── WEST BANGALORE ─────────────────────────────────────────

  rajajinagar: createLocation(
    "rajajinagar", "Rajajinagar", "West",
    ["Malleswaram", "Yeshwanthpur", "Basaveshwara Nagar", "Nagarbhavi Road"],
    ["Rajajinagar Metro Station", "Big Bazaar Rajajinagar"],
    ["Independent Houses", "Apartments"],
    ["Accent & Decorative Lighting"],
    140, 0.8
  ),

  malleswaram: createLocation(
    "malleswaram", "Malleswaram", "West",
    ["Rajajinagar", "Yeshwanthpur", "Seshadripuram", "Sadashivanagar"],
    ["Malleswaram Market", "Sankey Tank", "Yeshwanthpur ISCON Temple"],
    ["Independent Houses", "Villas"],
    ["Accent & Decorative Lighting", "Staircase Lighting"],
    150, 0.8
  ),

  vijayanagar: createLocation(
    "vijayanagar", "Vijayanagar", "West",
    ["RPC Layout", "Attiguppe", "Chandra Layout", "Nagarbhavi"],
    ["Vijayanagar Metro Station", "BEML Circle"],
    [],
    [],
    120, 0.7
  ),

  kengeri: createLocation(
    "kengeri", "Kengeri", "West",
    ["RR Nagar", "Mysore Road", "Kommaghatta", "Subramanyapura"],
    ["Kengeri Metro Station", "ISRO Layout"],
    [],
    [],
    110, 0.7
  ),

  "rr-nagar": createLocation(
    "rr-nagar", "Rajarajeshwari Nagar", "West",
    ["Kengeri", "Mysore Road", "Uttarahalli", "Nagarbhavi"],
    ["RR Nagar Metro Station", "Mysore Road NICE Junction"],
    [],
    ["Landscape & Garden Lighting"],
    110, 0.7
  ),

  // ── CENTRAL BANGALORE ──────────────────────────────────────

  "mg-road": createLocation(
    "mg-road", "MG Road", "Central",
    ["Brigade Road", "Residency Road", "Richmond Town", "Shivajinagar"],
    ["MG Road Metro Station", "Brigade Road", "Barton Centre"],
    ["Retail Showrooms", "Offices", "Hotels & Hospitality"],
    ["Commercial Lighting", "Accent & Decorative Lighting", "Smart Lighting Integration"],
    180, 0.9
  ),

  "btm-layout": createLocation(
    "btm-layout", "BTM Layout", "South",
    ["1st Stage", "2nd Stage", "Madiwala", "HSR Layout", "Bommanahalli"],
    ["BTM Layout Water Tank", "Madiwala Lake"],
    ["Apartments", "Independent Houses"],
    [],
    160, 0.8
  ),

  "rt-nagar": createLocation(
    "rt-nagar", "RT Nagar", "North",
    ["Hebbal", "Sadashivanagar", "HBR Layout", "Ganganagar"],
    ["RT Nagar Main Road", "Ganganagar Park"],
    [],
    [],
    100, 0.7
  ),

  "old-madras-road": createLocation(
    "old-madras-road", "Old Madras Road", "East",
    ["Banaswadi", "KR Puram", "Virgonagar", "Dooravani Nagar"],
    ["KR Puram Bridge", "Tin Factory"],
    [],
    [],
    100, 0.7
  ),

} as const;

// ============================================================
//  HELPERS
// ============================================================

export type LocationSlug = keyof typeof LOCATIONS;

/** Returns all location slugs sorted by priority descending */
export const getLocationsByPriority = (): Location[] =>
  (Object.values(LOCATIONS) as Location[]).sort((a, b) => b.priority - a.priority);

/** Returns all locations for a given region */
export const getLocationsByRegion = (region: Location["region"]): Location[] =>
  (Object.values(LOCATIONS) as Location[]).filter((l) => l.region === region);

/** Returns location or null — safe for dynamic routing */
export const getLocation = (slug: string): Location | null =>
  (LOCATIONS as Record<string, Location>)[slug] ?? null;

/** Returns all valid slugs — use in generateStaticParams() */
export const getAllLocationSlugs = (): { location: string }[] =>
  Object.keys(LOCATIONS).map((slug) => ({ location: slug }));

/** Returns nearby location objects for a given slug */
export const getNearbyLocations = (slug: LocationSlug, limit = 4): Location[] => {
  const current = LOCATIONS[slug];
  return getLocationsByRegion(current.region)
    .filter((l) => l.slug !== slug)
    .slice(0, limit);
};