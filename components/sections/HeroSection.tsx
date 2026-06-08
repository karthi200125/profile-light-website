"use client";

import {
    containerVariants,
    dividerVariants,
    fadeUpVariants,
} from "@/lib/motion";

import { motion } from "framer-motion";

import Image from "next/image";

import { useState } from "react";

import Button from "../ui/Button";
import LightSwitch from "../ui/LightSwitch";
import SplitReveal from "../ui/Splitreveal";

const DEFAULT_IMAGES = {
    off: "/hero-off.webp",
    on: "/hero-on.webp",
};

export type HeroSectionProps = {
    headline: string | [string, string];
    description: string;
    images?: {
        off: string;
        on: string;
    };
    eyebrow?: string;
};

export default function HeroSection({
    headline,
    description,
    images = DEFAULT_IMAGES,
    eyebrow,
}: HeroSectionProps) {
    const [lightsOn, setLightsOn] =
        useState(false);

    const headlineLines =
        Array.isArray(headline)
            ? headline
            : [headline];

    return (
        <section
            aria-label="Hero"
            className="relative h-screen min-h-[600px] overflow-hidden bg-neutral-950"
        >
            {/* OFF IMAGE */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: lightsOn ? 0 : 1,
                }}
                transition={{
                    duration: 1.4,
                }}
            >
                <Image
                    src={images.off}
                    alt=""
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    draggable={false}
                    className="object-cover"
                />
            </motion.div>

            {/* ON IMAGE */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: lightsOn ? 1 : 0,
                }}
                transition={{
                    duration: 1.4,
                }}
            >
                <Image
                    src={images.on}
                    alt=""
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* OVERLAYS */}
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            {/* LIGHT SWITCH */}
            <LightSwitch
                lightsOn={lightsOn}
                onToggle={() =>
                    setLightsOn((prev) => !prev)
                }
            />

            {/* CONTENT */}
            <div className="relative z-20 mx-auto flex h-full w-full max-w-screen-2xl flex-col justify-end px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="w-full">

                    {eyebrow && (
                        <motion.p
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className={`mb-4 text-xs font-medium uppercase tracking-[0.2em]
              transition-colors duration-1000
              ${lightsOn
                                    ? "text-white/80"
                                    : "text-white/40"
                                }`}
                        >
                            {eyebrow}
                        </motion.p>
                    )}

                    <SplitReveal
                        lines={headlineLines}
                        as="h1"
                        className={`text-[clamp(32px,7vw,100px)] font-light uppercase text-white 
                            ${lightsOn
                                ? "text-white"
                                : "text-white/70"
                            }
                            `}
                        stagger={0.05}
                        duration={0.85}
                    />


                    <motion.div
                        variants={dividerVariants}
                        initial="hidden"
                        animate="visible"
                        aria-hidden="true"
                        className={`my-5 h-px transition-all duration-1000 lg:my-8
            ${lightsOn
                                ? "bg-white/15"
                                : "bg-white/5"
                            }`}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between"
                    >
                        <motion.p
                            variants={fadeUpVariants}
                            className={`max-w-[400px] text-[14px] leading-[1.7]
              transition-colors duration-1000 md:text-[15px]
              ${lightsOn
                                    ? "text-white/65"
                                    : "text-white/40"
                                }`}
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            variants={fadeUpVariants}
                            className="flex flex-wrap items-center gap-6"
                        >
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