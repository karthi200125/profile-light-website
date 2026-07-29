import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitReveal from "@/components/ui/Splitreveal";

import Button from "@/components/CustomButton";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

import { getPublishedProjects } from "@/action/project/queries";

export default async function ProjectsPage() {
    const projects = await getPublishedProjects();

    return (
        <main className="bg-white">

            {/* Hero */}
            <Section className="bg-neutral-950 ">
                <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white/50">
                    <Reveal variant="fade">
                        <SectionLabel className="text-white/50">
                            Our Projects
                        </SectionLabel>
                    </Reveal>
                    <div className="mt-8 border-t border-white/10 pt-8">
                        <SplitReveal
                            as="h1"
                            split="words"
                            stagger={0.03}
                            duration={0.75}
                            className="max-w-5xl text-5xl font-medium leading-none tracking-[-0.04em] text-white md:text-6xl lg:text-[5.5rem]"
                            text="Every lighting project tells a different story."
                        />
                        <Reveal
                            variant="blur"
                            delay={0.15}
                        >
                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
                                Explore our collection of completed residential,
                                commercial and retail profile lighting installations
                                across Bangalore and Tamil Nadu. Every project is
                                designed with precision, premium materials and
                                attention to architectural detail.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </Section>

            {/* Projects */}

            <Section className="pt-0">
                <Container>
                    <div className="space-y-10">
                        {projects.map((project, index) => (

                            <FeaturedProjectCard
                                key={project.id}
                                project={project}
                                priority={index === 0}
                                reverse={index % 2 === 1}
                            />

                        ))}

                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="pt-8">
                <Container>
                    <div className="rounded-[32px] bg-[#111111] px-8 py-20 text-center text-white md:px-16">
                        <Reveal variant="fade">
                            <SectionLabel className="justify-center text-white/50">
                                Let's Build Together
                            </SectionLabel>
                        </Reveal>
                        <SplitReveal
                            as="h2"
                            split="words"
                            stagger={0.03}
                            duration={0.75}
                            className="mx-auto mt-8 max-w-4xl text-4xl font-medium leading-none tracking-[-0.04em] md:text-5xl"
                            text="Ready to transform your space with architectural profile lighting?"
                        />
                        <Reveal
                            variant="blur"
                            delay={0.15}
                        >
                            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                                Whether you're building a luxury home,
                                modern office or commercial showroom,
                                we're here to bring your lighting vision
                                to life.
                            </p>
                        </Reveal>
                        <Reveal
                            variant="fade"
                            delay={0.25}
                        >
                            <div className="mt-12 flex justify-center">
                                <Button
                                    label="Get Free Consultation"
                                    href="/contact"
                                    variant="solid"
                                />
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

        </main>
    );
}