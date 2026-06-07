// config/site.ts
// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONFIG
//  Single source of truth for base URL, brand name, social handles and
//  anything else shared across robots.ts, sitemap.ts and schema.ts.
//
//  ⚠️  Replace every placeholder value before going live.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  /** Production origin — no trailing slash */
  url: "https://www.straightline.in",

  /** Brand / company name */
  name: "StraightLine",

  /** Full legal / trading name */
  legalName: "StraightLine Lighting Solutions",

  /** Primary phone (E.164 format) */
  phone: "+91-99001-00000",

  /** Primary contact email */
  email: "hello@straightline.in",

  whatsapp: "https://wa.me/919900100000",

  /** Physical / service address */
  address: {
    streetAddress: "123, 1st Cross, Indiranagar",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560038",
    addressCountry: "IN",
  },

  /** Default OG / Twitter image (absolute URL) */
  ogImage: "https://www.straightline.in/og-default.jpg",

  /** Social profiles */
  social: {
    instagram: "https://www.instagram.com/straightline.in",
    youtube: "https://www.youtube.com/@straightline",
    linkedin: "https://www.linkedin.com/company/straightline",
  },

  /** Google Business / Maps place ID — used in LocalBusiness schema */
  googlePlaceId: "ChIJxxxxxxxxxxxxxxxxxx",

  /** Price range indicator for LocalBusiness schema */
  priceRange: "₹₹–₹₹₹",

  /** Default meta description (home page fallback) */
  description:
    "StraightLine creates premium profile lighting solutions tailored to modern homes, villas, offices and commercial spaces across Bangalore.",
} as const;

export type SiteConfig = typeof siteConfig;