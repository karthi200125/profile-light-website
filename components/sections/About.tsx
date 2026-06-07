import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function AboutSection() {
    return (
        <Section id="about" className="bg-white" size="sm">
            <Container>
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
                    <Reveal className="lg:col-span-4">
                        <SectionLabel>
                            About StraightLine
                        </SectionLabel>
                    </Reveal>

                    <div className="space-y-8 lg:col-span-8">
                        <Reveal>
                            <h2 className="max-w-5xl text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-[3.5rem]">
                                Creating seamless profile lighting experiences for modern homes, villas and commercial interiors.
                            </h2>
                        </Reveal>

                        <Reveal>
                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60">
                                StraightLine specializes in premium profile lighting installation services across Bangalore, helping homeowners, architects, interior designers and businesses transform spaces with clean, modern and architectural lighting solutions.
                            </p>
                        </Reveal>

                        <Reveal>
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
                                From residential living rooms and luxury villas to offices, retail showrooms and commercial environments, we combine quality materials, precision installation and thoughtful design to create lighting that enhances both aesthetics and functionality.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>
    );
}