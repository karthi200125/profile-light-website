import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import SplitReveal from "@/components/ui/Splitreveal";

import { PROJECTS } from "@/data/projects";

export default function Projects() {
    return (
        <Section
            id="projects"
            className="bg-white"
        >
            <Container>

                <Reveal variant="fade">
                    <SectionLabel>
                        Recent Projects
                    </SectionLabel>
                </Reveal>

                <div className="mt-8 flex flex-col gap-6 border-t border-black/10 pt-8 lg:flex-row lg:items-end lg:justify-between">

                    <SplitReveal
                        as="h2"
                        split="words"
                        stagger={0.03}
                        duration={0.75}
                        className="max-w-4xl text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-[3.5rem]"
                        text="Profile lighting projects crafted for homes, offices and commercial interiors."
                    />

                    <Reveal
                        variant="blur"
                        delay={0.15}
                    >
                        <p className="max-w-md text-lg leading-relaxed text-black/60">
                            Explore selected projects showcasing premium profile lighting installations across Bangalore.
                        </p>
                    </Reveal>

                </div>

                <Stagger className="mt-16">

                    {PROJECTS.map((project) => (
                        <Reveal
                            key={project.title}
                            variant="fade"
                        >
                            <article className="group border-b border-black/10 py-8 lg:py-10">

                                <div className="grid gap-8 lg:grid-cols-[48%_52%] lg:gap-12">

                                    {/* Image */}
                                    <Reveal variant="clip">
                                        <div className="overflow-hidden">
                                            <div className="relative aspect-[16/10] overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    quality={90}
                                                    draggable={false}
                                                    sizes="(max-width:1024px) 100vw, 48vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </Reveal>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between">

                                        <div>
                                            <h3 className="text-3xl font-medium tracking-[-0.03em] text-[#111111] lg:text-[2.75rem]">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div className="mt-10 grid gap-8 md:grid-cols-2">

                                            <div>
                                                <p className="mb-3 text-sm uppercase tracking-[0.12em] text-black/40">
                                                    Project Type
                                                </p>

                                                <p className="text-base text-[#111111]">
                                                    {project.type}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="mb-3 text-sm uppercase tracking-[0.12em] text-black/40">
                                                    Design Focus
                                                </p>

                                                <p className="text-base leading-relaxed text-black/70">
                                                    {project.focus}
                                                </p>
                                            </div>

                                        </div>

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