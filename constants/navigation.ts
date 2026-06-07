export const NAV_LINKS_LEFT = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
  // { label: "Locations", href: "/profile-lighting-installation" },
] as const;

export const NAV_LINKS_RIGHT = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const MOBILE_NAV_LINKS = [
  { number: "01", label: "Services", href: "/services" },
  { number: "02", label: "Projects", href: "/projects" },
  { number: "03", label: "Locations", href: "/profile-lighting-installation" },
  { number: "04", label: "About", href: "/about" },
  { number: "05", label: "FAQ", href: "/#faq" },
  { number: "06", label: "Contact", href: "/contact" },
] as const;

export type NavLink = (typeof NAV_LINKS_LEFT)[number];
export type MobileNavLink = (typeof MOBILE_NAV_LINKS)[number];