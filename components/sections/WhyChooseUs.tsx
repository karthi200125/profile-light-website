"use client";

import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import SplitReveal from "@/components/ui/Splitreveal";

import { WHY_CHOOSE_US } from "@/data/WhyChooseUs";

export default function WhyChooseUs() {
    return (
        <Section
            id="why-us"
            className="overflow-hidden bg-[#111111] text-white"
        >
            <Container>

                {/* Top */}

                <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[280px_1fr]">

                    <Reveal variant="fade">
                        <SectionLabel className="text-white/50">
                            Why Choose StraightLine
                        </SectionLabel>
                    </Reveal>

                    <SplitReveal
                        as="h2"
                        split="words"
                        stagger={0.03}
                        duration={0.8}
                        className="max-w-5xl text-4xl font-medium leading-none tracking-[-0.04em] text-white md:text-5xl lg:text-[5rem]"
                        text="Architectural profile lighting designed with precision, premium materials and installation expertise."
                    />

                </div>

                {/* Middle */}

                <div className="grid border-b border-white/10 lg:grid-cols-[280px_1fr_360px]">

                    <div className="py-10 lg:py-14">
                        <Reveal variant="fade">
                            <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                                Our Difference
                            </p>
                        </Reveal>
                    </div>

                    <div className="py-10 lg:py-14">
                        <Reveal variant="blur">
                            <p className="max-w-lg text-xl leading-relaxed text-white/80">
                                We combine technical expertise, premium profile lighting
                                components and thoughtful design to create modern lighting
                                experiences for homes, villas and commercial interiors
                                across Bangalore.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal
                        variant="clip"
                        className="relative min-h-[320px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0"
                    >
                        <Image
                            src="/hero-on.webp"
                            alt="Premium profile lighting installation"
                            fill
                            sizes="(max-width:1024px) 100vw, 360px"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </Reveal>

                </div>

                {/* Bottom */}

                <div className="relative grid lg:grid-cols-[1fr_360px]">

                    <div className="py-12 lg:py-16">

                        <Reveal variant="blur">
                            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                                From luxury residences and modern apartments to offices,
                                showrooms and commercial environments, StraightLine
                                delivers profile lighting installations that enhance
                                aesthetics, functionality and architectural character.
                            </p>
                        </Reveal>

                        <Reveal
                            variant="fade"
                            delay={0.15}
                        >
                            <div className="mt-10">
                                <Button
                                    label="View Projects"
                                    href="/projects"
                                    variant="solid"
                                />
                            </div>
                        </Reveal>

                        <Stagger className="mt-14 grid gap-8 md:grid-cols-3">

                            {WHY_CHOOSE_US.map((item) => (
                                <Reveal
                                    key={item.title}
                                    variant="fade"
                                >
                                    <div>
                                        <h3 className="mb-3 text-2xl font-medium text-white">
                                            {item.title}
                                        </h3>

                                        <p className="text-base leading-relaxed text-white/60">
                                            {item.description}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}

                        </Stagger>

                    </div>

                    {/* Stats */}

                    <div className="border-t border-white/10 lg:border-l lg:border-t-0">

                        <div className="flex h-full flex-col justify-center gap-6 p-8 lg:p-12">

                            <Reveal
                                variant="fade"
                                delay={0.1}
                            >
                                <div>
                                    <h3 className="text-4xl font-medium text-white">
                                        500+
                                    </h3>

                                    <p className="text-white/50">
                                        Completed Installations
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal
                                variant="fade"
                                delay={0.2}
                            >
                                <div>
                                    <h3 className="text-4xl font-medium text-white">
                                        10+
                                    </h3>

                                    <p className="text-white/50">
                                        Years Experience
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal
                                variant="fade"
                                delay={0.3}
                            >
                                <div>
                                    <h3 className="text-4xl font-medium text-white">
                                        Bangalore
                                    </h3>

                                    <p className="text-white/50">
                                        Residential & Commercial Projects
                                    </p>
                                </div>
                            </Reveal>

                        </div>

                    </div>

                    {/* Decorative Curve */}

                    <div
                        className="pointer-events-none absolute bottom-0 right-[360px] hidden h-[280px] w-[500px] border-r border-t border-white/10 lg:block"
                        style={{
                            borderTopRightRadius: "500px",
                        }}
                    />

                </div>

            </Container>
        </Section>
    );
}