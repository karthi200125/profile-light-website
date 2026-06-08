"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { MOBILE_NAV_LINKS } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";

import {
    mobilePanelVariants,
    mobileListVariants,
    mobileItemVariants,
    mobileFooterVariants,
} from "@/lib/motion";

interface MobileMenuProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
    const pathname = usePathname();
    const closeRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = document.documentElement;
        if (open) {
            el.classList.add("overflow-hidden");
        } else {
            el.classList.remove("overflow-hidden");
        }
        return () => el.classList.remove("overflow-hidden");
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, setOpen]);

    useEffect(() => {
        if (open) {
            const id = setTimeout(() => closeRef.current?.focus(), 50);
            return () => clearTimeout(id);
        }
    }, [open]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== "Tab" || !panelRef.current) return;

        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    };

    const isActiveLink = (
        pathname: string,
        href: string
    ) => {
        return pathname === href || pathname.startsWith(href);
    };

    return (
        <>
            <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={open}
                aria-controls="mobile-menu-panel"
                onClick={() => setOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg
                   text-white transition-colors duration-200                   
                   "
            >
                <Menu size={22} aria-hidden="true" />
            </button>

            {/* ── Panel ── */}
            <AnimatePresence mode="wait">
                {open && (
                    <motion.div
                        id="mobile-menu-panel"
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                        variants={mobilePanelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onKeyDown={handleKeyDown}
                        className="fixed inset-0 z-[9999] flex h-dvh w-screen flex-col bg-neutral-950"
                    >

                        {/* ── Header ── */}
                        <div className="flex items-center justify-between px-8 py-3">
                            <Logo width={110} height={70} />

                            <button
                                ref={closeRef}
                                type="button"
                                aria-label="Close navigation menu"
                                onClick={() => setOpen(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-lg
                           text-white transition-colors duration-200
                           "
                            >
                                <X size={22} aria-hidden="true" />
                            </button>
                        </div>

                        {/* ── Navigation links ── */}
                        <motion.nav
                            variants={mobileListVariants}
                            initial="hidden"
                            animate="visible"
                            aria-label="Mobile navigation"
                            className="flex flex-1 flex-col justify-center px-4"
                        >
                            {MOBILE_NAV_LINKS.map((link) => {
                                const isActive = isActiveLink(
                                    pathname,
                                    link.href
                                );

                                return (
                                    <motion.div key={link.label} variants={mobileItemVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                            className="group flex items-center justify-between
                                 border-b border-white/[0.07] px-4 py-5
                                 focus-visible:outline-none
                                 focus-visible:ring-1 focus-visible:ring-white/30"
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Number */}
                                                <span
                                                    className={`mt-[5px] font-mono text-xs tabular-nums
                                      transition-colors duration-300
                                      ${isActive ? "text-amber-300/70" : "text-white/25"}`}
                                                >
                                                    {link.number}
                                                </span>

                                                {/* Label */}
                                                <span
                                                    className={`text-[2rem] font-light leading-none
                                      transition-colors duration-300
                                      ${isActive ? "text-white" : "text-white/75"}
                                      group-hover:text-white`}
                                                >
                                                    {link.label}
                                                </span>
                                            </div>

                                            {/* Arrow */}
                                            <ArrowUpRight
                                                size={20}
                                                aria-hidden="true"
                                                className={`shrink-0 transition-all duration-300
                                    group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                                    ${isActive ? "text-amber-300/70" : "text-white/30"}
                                    group-hover:text-white/80`}
                                            />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.nav>

                        {/* ── Footer ── */}
                        <motion.div
                            variants={mobileFooterVariants}
                            initial="hidden"
                            animate="visible"
                            className="px-8 py-6"
                        >

                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                                Let&apos;s talk lighting
                            </p>

                            <div className="space-y-2">
                                <a
                                    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                                    className="block text-lg font-light text-white
                             transition-colors duration-200 hover:text-amber-300
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-amber-300/50"
                                >
                                    {siteConfig.phone}
                                </a>

                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="block text-sm text-white/40
                             transition-colors duration-200 hover:text-white/70
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-white/30"
                                >
                                    {siteConfig.email}
                                </a>
                            </div>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}