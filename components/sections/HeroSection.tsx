"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Container from "../ui/Container";

/** Duration (ms) before the SVG wire animation starts */
const WIRE_START_DELAY = 800;

/** SVG path that traces the lighting schematic across the hero */
const WIRE_PATH =
    "M1271.06 275.978H1233.56L1097.56 349.978L1070.56 362.978V568.978L1204.06 609.478H1236.06L1268.06 618.978V596.478L1554.56 665.478H1613.06M1097.56 349.978H1045.56M1045.56 349.978H873.56L867.56 324.978H525.56L386.56 240.357L1.56 5.97766M386.56 240.357L1206.56 234.978L1045.56 349.978M1045.56 349.978L1554.56 2.47766M1271.06 275.978L1546.56 140.978M1271.06 275.978V547.478";

// ─── Animation Variants ────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
};


const dividerVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
};

// ─── Sub-components ────────────────────────────────────────────────────────

/** Animated counter — counts from 0 to `value` over `duration` ms */
function AnimatedStat({
    value,
    suffix,
    label,
}: {
    value: number;
    suffix: string;
    label: string;
}) {
    const [display, setDisplay] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [value]);

    return (
        <div className="flex flex-col gap-1" aria-label={`${value}${suffix} ${label}`}>
            <span
                className="font-display text-white leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.04em" }}
                aria-hidden="true"
            >
                {display}
                <span className="text-amber-300">{suffix}</span>
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                {label}
            </span>
        </div>
    );
}

/** Pill badge — subtle ambient label */
function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center gap-2 rounded-full border border-white/10
                 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase
                 tracking-[0.2em] text-white/60 backdrop-blur-sm"
        >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" aria-hidden="true" />
            {children}
        </span>
    );
}

/** CTA button — borderline underline style matching original design language */
function CtaButton({
    href,
    children,
    variant = "ghost",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "ghost" | "solid";
}) {
    if (variant === "solid") {
        return (
            <a
                href={href}
                className="group inline-flex items-center gap-3 rounded-full bg-amber-300
                   px-7 py-3.5 text-sm font-medium text-neutral-900
                   transition-all duration-300 hover:bg-amber-200 hover:gap-4
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
            >
                {children}
                <span
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                >
                    ↗
                </span>
            </a>
        );
    }

    return (
        <a
            href={href}
            className="group relative inline-flex items-center gap-2 pb-1 text-sm text-white/80
                 transition-colors duration-300 hover:text-white
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
        >
            {children}
            <span
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
            >
                ↗
            </span>
            {/* Underline track */}
            <span
                className="absolute bottom-0 left-0 h-px w-full bg-white/20"
                aria-hidden="true"
            />
            {/* Underline fill on hover */}
            <span
                className="absolute bottom-0 left-0 h-px w-0 bg-white/70
                   transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
            />
        </a>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────

export default function HeroSection() {
    const [lightsOn, setLightsOn] = useState(false);
    const [wireStarted, setWireStarted] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);

    const sectionRef = useRef<HTMLElement>(null);

    // Parallax: background scrolls at 40% of scroll speed
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    // Start wire animation after mount delay
    useEffect(() => {
        const id = setTimeout(() => setWireStarted(true), WIRE_START_DELAY);
        return () => clearTimeout(id);
    }, []);

    // Trigger stat counters shortly after lights-on
    useEffect(() => {
        if (!lightsOn) return;
        const id = setTimeout(() => setStatsVisible(true), 400);
        return () => clearTimeout(id);
    }, [lightsOn]);

    return (
        <>
            {/* ── Structured Data ── */}
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "StraightLine",
                            description:
                                "Premium profile lighting solutions tailored to modern homes, villas, offices and commercial spaces.",
                            url: "https://straightline.in",
                            logo: "https://straightline.in/logo.png",
                            sameAs: [
                                "https://www.instagram.com/straightline",
                                "https://www.linkedin.com/company/straightline",
                            ],
                        }),
                    }}
                />
            </Head>

            {/* ── Section ── */}
            <section
                ref={sectionRef}
                aria-label="StraightLine — Premium Profile Lighting"
                className="relative h-screen min-h-[600px] overflow-hidden bg-neutral-950 "
            >

                {/* ── Background Images with Parallax ── */}
                <motion.div
                    className="absolute inset-0"
                    style={{ y: bgY, scale: 1.08, transformOrigin: "center top" }}
                    aria-hidden="true"
                >
                    {/* Lights-OFF image */}
                    <motion.img
                        src="/hero-off.png"
                        alt=""
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: lightsOn ? 0 : 1 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                    />

                    {/* Lights-ON image */}
                    <motion.img
                        src="/hero-on.png"
                        alt=""
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: lightsOn ? 1 : 0 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* ── Gradient Overlays ── */}
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                >
                    {/* Base dark veil */}
                    <div className="absolute inset-0 bg-black/10" />
                    {/* Bottom-up strong gradient for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    {/* Subtle left-edge vignette */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>

                {/* ── SVG Lighting Wire ── */}
                <svg
                    viewBox="0 0 1624 680"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    style={{ top: "-8%" }}
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                >
                    <defs>
                        <filter id="wire-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur1" />
                            <feGaussianBlur stdDeviation="8" result="blur2" />
                            <feMerge>
                                <feMergeNode in="blur2" />
                                <feMergeNode in="blur1" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Static dim track — always visible as a subtle guide */}
                    <path
                        d={WIRE_PATH}
                        fill="none"
                        stroke="rgba(255,216,154,0.06)"
                        strokeWidth="1.5"
                    />

                    {/* Animated electrified wire */}
                    {wireStarted && (
                        <motion.path
                            d={WIRE_PATH}
                            fill="none"
                            stroke="#FFD89A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0.9 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{
                                pathLength: {
                                    duration: 7,
                                    ease: [0.4, 0, 0.2, 1],
                                },
                                opacity: { duration: 0.1 },
                            }}
                            onAnimationComplete={() => setLightsOn(true)}
                            filter="url(#wire-glow)"
                        />
                    )}
                </svg>


                {/* ── Main Content ── */}
                <div className="relative z-20 flex h-full flex-col justify-end mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="w-full ">

                        {/* Headline */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="max-w-[960px]"
                        >
                            <h1
                                className="font-display font-light uppercase text-white"
                                style={{
                                    fontSize: "clamp(32px, 7vw, 100px)",
                                    letterSpacing: "-0.04em",
                                    lineHeight: 0.92,
                                }}
                            >
                                <motion.span
                                    className="block"
                                    variants={fadeUpVariants}
                                >
                                    Design That
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Divider */}
                        <motion.div
                            className="my-5 h-px bg-white/15 lg:my-8"
                            variants={dividerVariants}
                            initial="hidden"
                            animate="visible"
                            aria-hidden="true"
                        />

                        {/* Bottom Bar */}
                        <motion.div
                            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between pb-10"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >

                            {/* Center — Description */}
                            <motion.p
                                variants={fadeUpVariants}
                                className="max-w-[400px] text-[14px] leading-[1.7] text-white/65 md:text-[15px]"
                            >
                                StraightLine creates premium profile lighting solutions tailored
                                to modern homes, villas, offices and commercial
                                {/* depth, elegance and architectural beauty to every environment. */}
                            </motion.p>

                            {/* Right — CTAs */}
                            <motion.div
                                variants={fadeUpVariants}
                                className="flex flex-wrap items-center gap-6"
                            >
                                <CtaButton href="/projects" variant="ghost">
                                    Get Consultation
                                </CtaButton>
                                <CtaButton href="/projects" variant="ghost">
                                    View Projects
                                </CtaButton>
                            </motion.div>
                        </motion.div>

                    </div>

                </div>

            </section>
        </>
    );
}