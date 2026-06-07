"use client";

import { containerVariants, dividerVariants, fadeUpVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const WIRE_START_DELAY = 800;

const WIRE_PATH = "M1271.06 275.978H1233.56L1097.56 349.978L1070.56 362.978V568.978L1204.06 609.478H1236.06L1268.06 618.978V596.478L1554.56 665.478H1613.06M1097.56 349.978H1045.56M1045.56 349.978H873.56L867.56 324.978H525.56L386.56 240.357L1.56 5.97766M386.56 240.357L1206.56 234.978L1045.56 349.978M1045.56 349.978L1554.56 2.47766M1271.06 275.978L1546.56 140.978M1271.06 275.978V547.478";

const DEFAULT_IMAGES = {
    off: "/hero-off.webp",
    on: "/hero-on.webp",
};

export type HeroSectionProps = {
    headline: string | [string, string];
    description: string;
    images?: { off: string; on: string };
    eyebrow?: string;
};


// function WireAnimation({ onComplete }: { onComplete: () => void }) {
//     const [started, setStarted] = useState(false);

//     useEffect(() => {
//         const id = setTimeout(() => setStarted(true), WIRE_START_DELAY);
//         return () => clearTimeout(id);
//     }, []);

//     return (
//         <svg
//             viewBox="0 0 1624 680"
//             className="pointer-events-none absolute inset-0 h-full w-full"
//             style={{ top: "-8%" }}
//             preserveAspectRatio="xMidYMid slice"
//             aria-hidden="true"
//         >
//             <defs>
//                 <filter id="wire-glow" x="-50%" y="-50%" width="200%" height="200%">
//                     <feGaussianBlur stdDeviation="3" result="blur1" />
//                     <feGaussianBlur stdDeviation="8" result="blur2" />
//                     <feMerge>
//                         <feMergeNode in="blur2" />
//                         <feMergeNode in="blur1" />
//                         <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                 </filter>
//             </defs>

//             {/* Static dim track */}
//             <path d={WIRE_PATH} fill="none" stroke="rgba(255,216,154,0.06)" strokeWidth="1.5" />

//             {/* Animated electrified wire */}
//             {started && (
//                 <motion.path
//                     d={WIRE_PATH}
//                     fill="none"
//                     stroke="#FFD89A"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0, opacity: 0.9 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{
//                         pathLength: { duration: 7, ease: [0.4, 0, 0.2, 1] },
//                         opacity: { duration: 0.1 },
//                     }}
//                     onAnimationComplete={onComplete}
//                     filter="url(#wire-glow)"
//                 />
//             )}
//         </svg>
//     );
// }

export default function HeroSection({
    headline,
    description,
    images = DEFAULT_IMAGES,
    eyebrow,
}: HeroSectionProps) {
    const [lightsOn, setLightsOn] = useState(false);
    const headlineLines = Array.isArray(headline) ? headline : [headline];

    return (
        <section
            aria-label="Hero"
            className="relative h-screen min-h-[600px] overflow-hidden bg-neutral-950"
        >
            {/* ── Background: lights off ── */}
            <motion.div
                className="absolute inset-0"
                animate={{ opacity: lightsOn ? 0 : 1 }}
                transition={{ duration: 1.4 }}
            >
                <Image
                    src={images.off}
                    alt=""
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                    draggable={false}
                />
            </motion.div>

            {/* ── Background: lights on ── */}
            <motion.div
                className="absolute inset-0"
                animate={{ opacity: lightsOn ? 1 : 0 }}
                transition={{ duration: 1.4 }}
            >
                <Image
                    src={images.on}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* ── Gradient overlays ── */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            {/* ── Wire animation ── */}
            {/* <WireAnimation onComplete={() => setLightsOn(true)} /> */}

            {/* ── Main content ── */}
            <div className="relative z-20 flex h-full flex-col justify-end mx-auto w-full max-w-screen-2xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="w-full">

                    {/* Eyebrow */}
                    {eyebrow && (
                        <motion.p
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80"
                        >
                            {eyebrow}
                        </motion.p>
                    )}

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
                            {headlineLines.map((line, i) => (
                                <motion.span key={i} className="block" variants={fadeUpVariants}>
                                    {line}
                                </motion.span>
                            ))}
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

                    {/* Bottom bar */}
                    <motion.div
                        className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p
                            variants={fadeUpVariants}
                            className="max-w-[400px] text-[14px] leading-[1.7] text-white/65 md:text-[15px]"
                        >
                            {description}
                        </motion.p>

                        <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-6">

                            <Button
                                label="View Projects"
                                href="/projects"
                                variant="ghost"
                            />

                            <Button
                                label="Contact Us"
                                href="/contact"
                                variant="ghost"
                            />

                        </motion.div>
                    </motion.div>

                </div>
            </div>


        </section>
    );
}