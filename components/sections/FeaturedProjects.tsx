import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitReveal from "@/components/ui/Splitreveal";

import Button from "../CustomButton";
import FeaturedProjectCard from "../FeaturedProjectCard";

import { getFeaturedProjects } from "@/action/project/queries";

export default async function FeaturedProjects() {
    const projects = await getFeaturedProjects();

    if (projects.length === 0) {
        return null;
    }

    return (
        <Section
            id="projects"
            className="bg-white"
        >
            <Container>

                {/* Section Header */}

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

                    {/* <Reveal
                        variant="blur"
                        delay={0.15}
                    >

                        <p className="max-w-md text-lg leading-relaxed text-black/60">
                            Explore selected projects showcasing premium
                            profile lighting installations across Bangalore
                            and Tamil Nadu.
                        </p>

                    </Reveal> */}

                </div>

                {/* Featured Projects */}

                <div className="mt-20 space-y-24">

                    {projects.map((project, index) => (

                        <FeaturedProjectCard
                            key={project.id}
                            project={project}
                            priority={index === 0}
                            reverse={index % 2 === 1}
                        />

                    ))}

                </div>

                {/* CTA */}

                <Reveal
                    variant="fade"
                    delay={0.2}
                >

                    <div className="mt-20 flex justify-center">

                        <Button
                            label="Explore All Projects"
                            href="/projects"
                            variant="solidBlack"
                        />

                    </div>

                </Reveal>

            </Container>
        </Section>
    );
}