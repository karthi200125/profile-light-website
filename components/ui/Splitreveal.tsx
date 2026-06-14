"use client";

import { buildVariants, EASE_EXPO } from "@/lib/motion";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type SplitMode = "words" | "chars";

type SplitRevealProps = {
    text?: string;
    lines?: string[];
    as?: any;
    className?: string;
    split?: SplitMode;
    stagger?: number;
    duration?: number;
    delay?: number;
    amount?: number;
};

const simpleFade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};


function splitToUnits(text: string, mode: SplitMode): string[] {
    if (mode === "chars") return text.split("");    
    return text.split(" ").filter(Boolean);
}


function AnimatedUnit({
    unit,
    index,
    stagger,
    delay,
    variants,
    isSpace,
}: {
    unit: string;
    index: number;
    stagger: number;
    delay: number;
    variants: Variants;
    isSpace: boolean;
}) {
    if (isSpace) {
        return <span aria-hidden="true">&nbsp;</span>;
    }

    return (
        <span
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
            aria-hidden="true"
        >
            <motion.span
                style={{ display: "inline-block" }}
                variants={variants}
                transition={{
                    delay: delay + index * stagger,
                }}
            >
                {unit}
            </motion.span>
        </span>
    );
}


export default function SplitReveal({
    text,
    lines,
    as = "p",
    className,
    split = "words",
    stagger = 0.045,
    duration = 0.75,
    delay = 0,
    amount = 0.2,
}: SplitRevealProps) {
    const prefersReduced = useReducedMotion();

    // Determine content to render
    const content = lines ?? (text ? [text] : []);
    if (content.length === 0) return null;

    const Tag = as as "p";
    const { unit } = buildVariants(duration, EASE_EXPO);

    // ── Reduced motion: render plain text with simple fade ───────────────────
    if (prefersReduced) {
        return (
            <motion.p
                className={className}
                variants={simpleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount }}
            >
                {content.join(" ")}
            </motion.p>
        );
    }

    // ── Full animation ───────────────────────────────────────────────────────
    // We need a flat index across all lines for consistent stagger timing
    let globalIndex = 0;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            // Screen readers get the full plain text — animated spans are aria-hidden
            aria-label={content.join(" ")}
        >
            <Tag className={className}>
                {content.map((line, lineIdx) => {
                    const units = splitToUnits(line, split);

                    return (
                        <span key={lineIdx} className="block">
                            {units.map((unit_text, unitIdx) => {
                                const idx = globalIndex++;
                                const isLastInLine = unitIdx === units.length - 1;

                                return (
                                    <span key={unitIdx} style={{ display: "inline" }}>
                                        <AnimatedUnit
                                            unit={unit_text}
                                            index={idx}
                                            stagger={stagger}
                                            delay={delay}
                                            variants={unit}
                                            isSpace={false}
                                        />
                                        {/* Space between words (not after last word in line) */}
                                        {split === "words" && !isLastInLine && (
                                            <span aria-hidden="true">&nbsp;</span>
                                        )}
                                    </span>
                                );
                            })}
                        </span>
                    );
                })}
            </Tag>
        </motion.div>
    );
}