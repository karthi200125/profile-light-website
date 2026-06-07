"use client";

import { useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowLeft, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
        );
    };

    const next = () => {
        setCurrent((prev) =>
            prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
        );
    };

    const testimonial = TESTIMONIALS[current];

    return (
        <Section id="testimonials" className="bg-white">
            <Container>
                <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
                    {/* Left */}

                    <Reveal>
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <SectionLabel>
                                    Testimonials
                                </SectionLabel>

                                <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.03em] text-[#111111]">
                                    What our clients say
                                </h2>
                            </div>

                            <div className="mt-10 flex gap-3">
                                <button
                                    onClick={prev}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-all duration-300 hover:border-black/20"
                                >
                                    <ArrowLeft size={18} />
                                </button>

                                <button
                                    onClick={next}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-all duration-300 hover:border-black/20"
                                >
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right */}

                    <div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -24 }}
                                transition={{ duration: 0.4 }}
                            >
                                <span className="text-7xl leading-none text-black">
                                    "
                                </span>

                                <h3 className="mt-6 max-w-5xl text-[32px] leading-[1.15] tracking-[-0.04em] text-[#111111] md:text-[48px] lg:text-[58px]">
                                    {testimonial.review}
                                </h3>

                                <div className="mt-14 flex items-center gap-4">
                                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            sizes="56px"
                                            quality={85}
                                            draggable={false}
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-[#111111]">
                                            {testimonial.name}
                                        </h4>

                                        <p className="text-sm text-black/60">
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </Section>
    );
}