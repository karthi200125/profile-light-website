"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

import { siteConfig } from "@/constants/site";

const QUICK_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];

const COMPANY_LINKS = [
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white">
            <Container>
                <div className="pb-10 pt-20 lg:pt-24">
                    <div className="grid gap-14 border-t border-white/10 pt-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <Reveal>
                            <div>
                                <h2 className="max-w-sm text-3xl font-medium leading-tight tracking-[-0.03em]">
                                    Architectural Profile Lighting For Modern Spaces.
                                </h2>

                                <p className="mt-6 max-w-sm leading-relaxed text-white/60">
                                    StraightLine provides premium profile lighting design and installation services across Bangalore for homes, villas, offices and commercial interiors.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div>
                                <p className="mb-6 text-sm uppercase tracking-[0.12em] text-white/40">
                                    Quick Links
                                </p>

                                <ul className="space-y-3">
                                    {QUICK_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-white/75 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div>
                                <p className="mb-6 text-sm uppercase tracking-[0.12em] text-white/40">
                                    Company
                                </p>

                                <ul className="space-y-3">
                                    {COMPANY_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-white/75 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div>
                                <p className="mb-6 text-sm uppercase tracking-[0.12em] text-white/40">
                                    Contact
                                </p>

                                <div className="space-y-3 text-white/75">
                                    <p>{siteConfig.phone}</p>
                                    <p>{siteConfig.email}</p>
                                    <p>{siteConfig.address.streetAddress}</p>
                                    <p>{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* <div className="mt-24">
                        <h2 className="text-[18vw] font-medium uppercase leading-none tracking-[-0.08em] text-white md:text-[12vw]">
                            STRAIGHTLINE
                        </h2>
                    </div> */}

                    <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
                        <p>
                            © {new Date().getFullYear()} StraightLine. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>

                            <Link href="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}