"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS_LEFT } from "@/constants/navigation";
import Button from "../ui/Button";
import MobileMenu from "./MobileNav";

function NavLink({
    href,
    label,
    active,
}: {
    href: string;
    label: string;
    active: boolean;
}) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={`relative text-sm font-medium transition-colors duration-300
                  after:absolute after:-bottom-0.5 after:left-0 after:h-px
                  after:w-full after:origin-left after:scale-x-0 after:bg-white
                  after:transition-transform after:duration-300
                  hover:text-white hover:after:scale-x-100
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-white/40 focus-visible:rounded-sm
                  ${active ? "text-white after:scale-x-100" : "text-white/55"}`}
        >
            {label}
        </Link>
    );
}


export default function Navbar() {
    const pathname = usePathname();

    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const lastScrollY = useRef(0);
    const rafId = useRef<number | null>(null);

    const isActiveLink = (
        pathname: string,
        href: string
    ) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (rafId.current !== null) return;

            rafId.current = requestAnimationFrame(() => {
                const currentY = window.scrollY;

                setIsScrolled(currentY > 40);

                if (currentY <= 20) {
                    setIsVisible(true);
                } else if (currentY > lastScrollY.current) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }

                lastScrollY.current = currentY;
                rafId.current = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId.current !== null) cancelAnimationFrame(rafId.current);
        };
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const translateY = open || isVisible ? "translate-y-0" : "-translate-y-full";

    return (
        <motion.header
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-x-0 top-0 z-[999] transition-transform duration-500 ease-out ${translateY}`}
        >
            <Container>
                <div
                    className={`relative flex h-[72px] items-center rounded-2xl px-5 transition-all duration-500 lg:px-8
                        ${isScrolled
                            ? "mt-2 bg-black/60 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
                            : "bg-transparent"
                        }`}
                >
                    {/* Desktop Left */}
                    <nav
                        aria-label="Primary navigation"
                        className="hidden lg:flex items-center gap-10"
                    >
                        {NAV_LINKS_LEFT.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                active={isActiveLink(pathname, link.href)}
                            />
                        ))}
                    </nav>

                    {/* Logo */}
                    <div className=" absolute left-1/2 -translate-x-1/2 hidden lg:block">
                        <Logo />
                    </div>

                    {/* Desktop CTA */}
                    <div className="ml-auto hidden lg:block">
                        <Button
                            label="Get Quote"
                            href="/#contact"
                            variant="solid"
                        />
                    </div>

                    {/* Mobile */}
                    <div className="flex w-full items-center justify-between lg:hidden">
                        <Logo />

                        <MobileMenu
                            open={open}
                            setOpen={setOpen}
                        />
                    </div>
                </div>
            </Container>
        </motion.header>
    );
}