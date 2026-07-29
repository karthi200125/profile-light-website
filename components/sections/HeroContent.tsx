"use client";

import { blurUpVariants, containerVariants, dividerVariants, fadeUpVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

interface HeroContentProps {
    eyebrow?: string;
    headlineLines: string[];
    description: string;
}

export default function HeroContent({ eyebrow, headlineLines, description }: HeroContentProps) {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pb-10">

            {eyebrow && (
                <motion.p variants={fadeUpVariants} className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    {eyebrow}
                </motion.p>
            )}

            {/* Line-level reveal — one blurUpVariants per line, not per letter */}
            <h1 className="text-[clamp(32px,7vw,100px)] font-light uppercase text-white/70">
                {headlineLines.map((text, i) => (
                    <motion.span key={i} variants={blurUpVariants} className="block overflow-hidden">
                        {text}
                    </motion.span>
                ))}
            </h1>

            <motion.div variants={dividerVariants} aria-hidden className="my-5 h-px bg-white/5 lg:my-8" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <motion.p variants={fadeUpVariants} className="max-w-[400px] text-[14px] leading-[1.7] text-white/40 md:text-[15px]">
                    {description}
                </motion.p>

                <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-6">
                    <CustomButton label="View Projects" href="/projects" variant="ghost" />
                    <CustomButton label="Contact Us" href="/#contact" variant="ghost" />
                </motion.div>
            </div>

        </motion.div>
    );
}