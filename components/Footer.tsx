import Link from "next/link";
import {
    FaInstagram,
    FaYoutube,
    FaFacebookF,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";

import { COMPANY_LINKS, NAV_LINKS_LEFT } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";


const FOOTER_LINK_CLASS =
    "relative inline-block text-white/75 transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100";

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-black text-white">
            <Container>
                <div className="pb-10 pt-20 lg:pt-24">

                    <Stagger>
                        <div className="grid gap-14 border-t border-white/10 pt-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

                            <Reveal>
                                <div>
                                    <h2 className="text-3xl font-medium tracking-[-0.03em]">
                                        {siteConfig.name}
                                    </h2>

                                    <p className="mt-6 max-w-sm text-white/60">
                                        {siteConfig.description}
                                    </p>

                                    <div className="mt-8 flex items-center gap-4">

                                        {siteConfig.social.instagram && (
                                            <a
                                                href={siteConfig.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                                            >
                                                <FaInstagram size={18} />
                                            </a>
                                        )}

                                        {siteConfig.social.youtube && (
                                            <a
                                                href={siteConfig.social.youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                                            >
                                                <FaYoutube size={18} />
                                            </a>
                                        )}

                                        {"facebook" in siteConfig.social && siteConfig.social.facebook && (
                                            <a
                                                href={siteConfig.social.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                                            >
                                                <FaFacebookF size={18} />
                                            </a>
                                        )}

                                    </div>
                                </div>
                            </Reveal>

                            <Reveal>
                                <div>
                                    <p className="mb-6 text-sm uppercase tracking-[0.12em] text-white/40">
                                        Navigation
                                    </p>

                                    <ul className="space-y-3">
                                        {NAV_LINKS_LEFT.map((link) => (
                                            <li key={link.href}>
                                                <Link href={link.href} className={FOOTER_LINK_CLASS}>
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
                                            <li key={link.href}>
                                                <Link href={link.href} className={FOOTER_LINK_CLASS}>
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

                                    <div className="space-y-3">
                                        <a href={`tel:${siteConfig.phone}`} className="block text-white/75 transition-colors hover:text-white">
                                            {siteConfig.phone}
                                        </a>

                                        <a href={`mailto:${siteConfig.email}`} className="block text-white/75 transition-colors hover:text-white">
                                            {siteConfig.email}
                                        </a>

                                        <p className="text-white/75">
                                            {siteConfig.address.addressLocality}
                                        </p>

                                        <p className="text-white/50">
                                            {siteConfig.address.addressRegion}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                        </div>
                    </Stagger>

                    <Reveal>
                        <div className="mt-24 overflow-hidden">
                            <h2 className="text-center whitespace-nowrap text-[clamp(64px,14vw,240px)] font-light uppercase leading-none tracking-[-0.08em] text-white/10">
                                STRAIGHTLINE
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">

                        <p>
                            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link href="/privacy-policy" className="transition-colors hover:text-white">
                                Privacy Policy
                            </Link>

                            <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
                                Terms & Conditions
                            </Link>
                        </div>

                    </div>

                </div>
            </Container>
        </footer>
    );
}