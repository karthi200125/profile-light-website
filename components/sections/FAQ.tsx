"use client";

import { useState } from "react";

import Image from "next/image";

import { Minus, Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

import { FAQS } from "@/data/faq";

export default function FAQ() {
    const [activeFaq, setActiveFaq] = useState("01");

    return (
        <Section id="faq">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[48%_52%] lg:gap-16">
                    {/* Left */}

                    <Reveal>
                        <div className="relative overflow-hidden">
                            <div className="relative aspect-[4/5] lg:h-[780px]">
                                <Image
                                    src="/hero-off.png"
                                    alt="Profile lighting installation in Bangalore"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </Reveal>

                    {/* Right */}

                    <div>
                        <Reveal>
                            <SectionLabel>
                                Frequently Asked Questions
                            </SectionLabel>
                        </Reveal>

                        <Reveal>
                            <h2 className="mt-8 max-w-3xl text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-[3.5rem]">
                                Answers to common questions about profile lighting installations.
                            </h2>
                        </Reveal>

                        <div className="mt-14">
                            {FAQS.map((faq) => {
                                const active = activeFaq === faq.id;

                                return (
                                    <div
                                        key={faq.id}
                                        className="border-b border-black/10"
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveFaq(active ? "" : faq.id)
                                            }
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
                                                    {faq.id}
                                                </span>

                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <h3 className="text-lg font-medium md:text-xl">
                                                            {faq.question}
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
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}