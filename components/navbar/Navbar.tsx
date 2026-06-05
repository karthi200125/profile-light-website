"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS1, NAV_LINKS2 } from "@/constants/navigation";
import Link from "next/link";
import MobileMenu from "./MobileNav";
export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 40);

            if (currentScrollY <= 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-[999] transition-transform duration-500 ease-out ${open
                ? "translate-y-0"
                : isVisible
                    ? "translate-y-0"
                    : "-translate-y-full"
                }`}
        >
            <Container>
                <div
                    className={`flex h-[72px] items-center justify-between rounded-2xl px-5 transition-all duration-500 lg:px-8 ${isScrolled
                        ? "mt-2 bg-black/60 backdrop-blur-xl"
                        : "bg-transparent"
                        }`}
                >
                    {/* Left Navigation */}

                    <nav className="hidden items-center gap-12 lg:flex text-white">
                        {NAV_LINKS1.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-white/65 transition-colors duration-300 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Logo */}

                    <Logo width={130} height={80} />

                    {/* Right Navigation */}

                    <nav className="hidden items-center gap-12 lg:flex text-white">
                        {NAV_LINKS2.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-white/65 transition-colors duration-300 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu */}

                    <div className="lg:hidden">
                        <MobileMenu open={open} setOpen={setOpen} />
                    </div>
                </div>
            </Container>
        </header>
    );
}