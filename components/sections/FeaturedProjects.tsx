import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
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


                <div className="mt-20 space-y-24">
                    {PROJECTS.map((project) => (
                        <article
                            key={project.title}
                            className="border-b border-black/10 pb-20 last:border-none"
                        >
                            {/* Heading */}

                            <div className="mb-10">
                                <h3 className="text-3xl font-medium tracking-[-0.03em] text-[#111111] md:text-5xl">
                                    {project.title}
                                </h3>

                                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/60">
                                    {project.description}
                                </p>
                            </div>

                            {/* Before After Images */}

                            <div className="grid gap-4 lg:grid-cols-2">
                                <div className="relative overflow-hidden">
                                    <div className="absolute left-4 top-4 z-10 bg-black px-4 py-2 text-xs font-medium tracking-wider text-white">
                                        BEFORE
                                    </div>

                                    <div className="relative aspect-[16/10]">
                                        <Image
                                            src={project.beforeImage}
                                            alt={`${project.title} Before`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <div className="absolute left-4 top-4 z-10 bg-black px-4 py-2 text-xs font-medium tracking-wider text-white">
                                        AFTER
                                    </div>

                                    <div className="relative aspect-[16/10]">
                                        <Image
                                            src={project.afterImage}
                                            alt={`${project.title} After`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}

                            <div className="mt-8 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-3">
                                <div>
                                    <p className="mb-2 text-xs uppercase tracking-[0.14em] text-black/40">
                                        Project Type
                                    </p>

                                    <p className="text-base text-[#111111]">
                                        {project.type}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-2 text-xs uppercase tracking-[0.14em] text-black/40">
                                        Location
                                    </p>

                                    <p className="text-base text-[#111111]">
                                        {project.location}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-2 text-xs uppercase tracking-[0.14em] text-black/40">
                                        Design Focus
                                    </p>

                                    <p className="text-base leading-relaxed text-black/70">
                                        {project.focus}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </Section>
    );
}