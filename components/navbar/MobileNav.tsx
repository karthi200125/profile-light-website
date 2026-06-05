"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { MOBILE_NAV_LINKS } from "@/constants/navigation";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface MobileMenuProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function MobileMenu({
    open,
    setOpen,
}: MobileMenuProps) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                aria-label="Open Menu"
                onClick={() => setOpen(true)}
                className="text-white"
            >
                <Menu size={24} />
            </button>

            <AnimatePresence mode="wait">
                {open && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col bg-black"
                    >
                        {/* Header */}

                        <div className="flex items-center justify-between px-10 py-3">
                            <Logo width={110} height={70} />

                            <button
                                type="button"
                                aria-label="Close Menu"
                                onClick={() => setOpen(false)}
                                className="text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation */}

                        <motion.nav
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-1 flex-col justify-center px-6"
                        >
                            {MOBILE_NAV_LINKS.map((link) => (
                                <motion.div
                                    key={link.label}
                                    variants={fadeUp}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="group flex items-center justify-between border-b border-white/10 py-6 px-5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="mt-1 text-sm text-white/40">
                                                {link.number}
                                            </span>

                                            <span className="text-3xl font-light text-white">
                                                {link.label}
                                            </span>
                                        </div>

                                        <ArrowUpRight
                                            size={22}
                                            className="text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>

                        {/* Footer */}

                        <div className="px-10 py-5">
                            <p className="text-sm text-white/40">
                                Let's discuss your lighting project
                            </p>

                            <div className="mt-4 space-y-2">
                                <a
                                    href="tel:+919999999999"
                                    className="block text-lg text-white"
                                >
                                    +91 99999 99999
                                </a>

                                <a
                                    href="mailto:hello@straightline.com"
                                    className="block text-white/70"
                                >
                                    hello@straightline.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}