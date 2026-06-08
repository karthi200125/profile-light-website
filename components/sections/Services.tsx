import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import SplitReveal from "@/components/ui/Splitreveal";

import { SERVICES } from "@/data/services";

export default function Services() {
    return (
        <Section
            id="services"
            className="bg-white"
        >
            <Container>

                <Reveal variant="fade">
                    <SectionLabel>
                        Profile Lighting Services
                    </SectionLabel>
                </Reveal>

                <div className="mt-8 flex flex-col gap-6 border-t border-black/10 pt-8 lg:flex-row lg:items-end lg:justify-between">

                    <SplitReveal
                        as="h2"
                        split="words"
                        stagger={0.03}
                        duration={0.75}
                        className="max-w-4xl text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-[3.5rem]"
                        text="Premium profile lighting installation services for homes, villas and commercial spaces in Bangalore."
                    />

                    <Reveal
                        variant="blur"
                        delay={0.15}
                    >
                        <p className="max-w-md text-lg leading-relaxed text-black/60">
                            From luxury residences and modern villas to offices, showrooms and commercial interiors, we create seamless architectural lighting solutions that elevate every space.
                        </p>
                    </Reveal>

                </div>

                <Stagger className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                    {SERVICES.map((service) => (
                        <Reveal
                            key={service.id}
                            variant="fade"
                        >
                            <article className="group relative h-[520px] overflow-hidden bg-black">

                                {/* Background Image */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="scale-110 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Base Overlay */}
                                <div className="absolute inset-0 bg-black transition-all duration-500 group-hover:bg-black/55" />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Content */}
                                <div className="relative z-10 flex h-full flex-col justify-between p-8">

                                    <span className="text-3xl font-light text-white">
                                        {service.id}
                                    </span>

                                    <div>

                                        <h3 className="mb-4 text-3xl font-medium leading-tight text-white">
                                            {service.title}
                                        </h3>

                                        <p className="max-w-sm text-base leading-relaxed text-white/80">
                                            {service.description}
                                        </p>

                                    </div>

                                </div>

                            </article>
                        </Reveal>
                    ))}

                </Stagger>

            </Container>
        </Section>
    );
}