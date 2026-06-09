export const NAV_LINKS_LEFT = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const MOBILE_NAV_LINKS = [
  { number: "01", label: "Services", href: "/#services" },
  { number: "02", label: "Projects", href: "/#projects" },
  { number: "04", label: "About", href: "/#about" },
  { number: "05", label: "FAQ", href: "/#faq" },
  { number: "06", label: "Contact", href: "/#contact" },
] as const;

export const COMPANY_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export type NavLink = (typeof NAV_LINKS_LEFT)[number];
export type MobileNavLink = (typeof MOBILE_NAV_LINKS)[number];
export type CompanyNavLink = (typeof COMPANY_LINKS)[number];