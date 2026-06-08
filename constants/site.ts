export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL! ?? "http://localhost:3000",
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME!,
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME!,
  phone: process.env.NEXT_PUBLIC_PHONE!,
  email: process.env.NEXT_PUBLIC_EMAIL!,
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
  address: {
    streetAddress: process.env.NEXT_PUBLIC_STREET_ADDRESS ?? "",
    addressLocality: process.env.NEXT_PUBLIC_CITY ?? "",
    addressRegion: process.env.NEXT_PUBLIC_STATE ?? "",
    postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE ?? "",
    addressCountry: process.env.NEXT_PUBLIC_COUNTRY ?? "IN",
  },
  
  foundedYear: 2022,
  serviceArea: "Bangalore",

  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE!,  
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
  },

  googlePlaceId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "",
  priceRange: "₹₹–₹₹₹",

  description: "StraightLine creates premium profile lighting solutions tailored to modern homes, villas, offices and commercial spaces across Bangalore.",
} as const;

export type SiteConfig = typeof siteConfig;