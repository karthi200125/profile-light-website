import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { PROCESS_STEPS } from "@/data/process";

export default function Process() {
    return (
        <Section
            id="process"
            className="bg-slate-50"
        >
            <Container>
                <SectionHeading
                    title="Our Installation Process"
                    description="A simple and transparent process designed to deliver high-quality profile lighting installations with minimal hassle."
                />

                <div className="mt-14">
                    <div className="grid gap-6 lg:grid-cols-5">
                        {PROCESS_STEPS.map((step) => (
                            <article
                                key={step.step}
                                className="
                  relative
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
                            >
                                <span
                                    className="
                    inline-flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-amber-500
                    text-lg
                    font-bold
                    text-white
                  "
                                >
                                    {step.step}
                                </span>

                                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-3 leading-relaxed text-slate-600">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}