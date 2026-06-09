"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/Splitreveal";
import Stagger from "@/components/ui/Stagger";

export type FaqItem = {
    question: string;
    answer: string;
};

export type FaqSectionProps = {
    heading: string;
    subheading?: string;
    faqs: FaqItem[];
    image?: {
        src: string;
        alt: string;
    };
};

const DEFAULT_IMAGE = {
    src: "/faq.png",
    alt: "Profile lighting installation in Bangalore",
};

export default function FaqSection({
    heading,
    subheading = "Frequently Asked Questions",
    faqs,
    image = DEFAULT_IMAGE,
}: FaqSectionProps) {
    const [activeIndex, setActiveIndex] =
        useState<number | null>(0);

    return (
        <Section
            id="faq"
            className="bg-white"
        >
            <Container>

                <div className="grid gap-12 lg:grid-cols-[48%_52%] lg:gap-16">

                    {/* Image */}

                    <Reveal variant="fade">
                        <div className="relative overflow-hidden">

                            <div className="relative aspect-[4/5] lg:h-[780px]">

                                <Image
                                    src="/frequently-asked-question.png"
                                    alt="Profile lighting installation and frequently asked questions"
                                    fill
                                    quality={90}
                                    priority={false}
                                    draggable={false}
                                    sizes="(max-width: 1024px) 100vw, 48vw"
                                    className="object-cover"
                                />

                            </div>

                        </div>
                    </Reveal>

                    {/* Content */}

                    <div>

                        <Reveal variant="fade">
                            <SectionLabel>
                                {subheading}
                            </SectionLabel>
                        </Reveal>

                        <div className="mt-8">

                            <SplitReveal
                                as="h2"
                                split="words"
                                stagger={0.03}
                                duration={0.75}
                                className="max-w-3xl text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-[3.5rem]"
                                text={heading}
                            />

                        </div>

                        <Stagger className="mt-14">

                            {faqs.map((faq, index) => {
                                const active =
                                    activeIndex === index;

                                const displayId =
                                    String(index + 1).padStart(
                                        2,
                                        "0"
                                    );

                                return (
                                    <Reveal
                                        key={index}
                                        variant="fade"
                                    >
                                        <div className="border-b border-black/10">

                                            <button
                                                onClick={() =>
                                                    setActiveIndex(
                                                        active
                                                            ? null
                                                            : index
                                                    )
                                                }
                                                aria-expanded={active}
                                                className={`w-full text-left transition-all duration-300 ${active
                                                    ? "bg-black text-white"
                                                    : "bg-transparent text-[#111111]"
                                                    }`}
                                            >
                                                <div className="flex gap-6 p-6">

                                                    <span
                                                        className={`mt-1 min-w-[28px] text-xs ${active
                                                            ? "text-white/50"
                                                            : "text-black/50"
                                                            }`}
                                                    >
                                                        {displayId}
                                                    </span>

                                                    <div className="flex-1">

                                                        <div className="flex items-center justify-between gap-4">

                                                            <h3 className="text-lg font-medium md:text-xl">
                                                                {
                                                                    faq.question
                                                                }
                                                            </h3>

                                                            {active ? (
                                                                <Minus className="h-5 w-5 shrink-0" />
                                                            ) : (
                                                                <Plus className="h-5 w-5 shrink-0" />
                                                            )}

                                                        </div>

                                                        <div
                                                            className={`overflow-hidden transition-all duration-500 ${active
                                                                ? "mt-4 max-h-64 opacity-100"
                                                                : "max-h-0 opacity-0"
                                                                }`}
                                                        >
                                                            <p
                                                                className={`max-w-xl text-sm leading-7 ${active
                                                                    ? "text-white/75"
                                                                    : ""
                                                                    }`}
                                                            >
                                                                {
                                                                    faq.answer
                                                                }
                                                            </p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </button>

                                        </div>
                                    </Reveal>
                                );
                            })}

                        </Stagger>

                    </div>

                </div>

            </Container>
        </Section>
    );
}