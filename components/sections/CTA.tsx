import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

import { siteConfig } from "@/constants/site";

export default function CTA() {
    return (
        <Section id="contact" className="bg-[#111111] text-white">
            <Container>
                <div className="">
                    <div className="grid gap-14 lg:grid-cols-[65%_35%] lg:gap-20">
                        <div>
                            <Reveal>
                                <SectionLabel className="text-white/50">
                                    Start Your Project
                                </SectionLabel>
                            </Reveal>

                            <Reveal>
                                <h2 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-6xl lg:text-[6rem]">
                                    Ready to transform your space with premium profile lighting?
                                </h2>
                            </Reveal>
                        </div>

                        <div className="flex flex-col justify-between lg:border-l lg:border-white/10 lg:pl-12">
                            <Reveal>
                                <p className="max-w-sm text-lg leading-relaxed text-white/65">
                                    From modern homes and luxury villas to offices and commercial spaces, we design and install architectural profile lighting solutions across Bangalore.
                                </p>
                            </Reveal>

                            <div className="mt-12 space-y-2">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-b border-white/10 py-5"
                                >
                                    <span className="text-xl">
                                        Get Free Site Visit
                                    </span>

                                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>

                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="group flex items-center justify-between border-b border-white/10 py-5"
                                >
                                    <span className="text-xl">
                                        Call Now
                                    </span>

                                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>

                                <Link
                                    href="/contact"
                                    className="group flex items-center justify-between border-b border-white/10 py-5"
                                >
                                    <span className="text-xl">
                                        Request Free Quote
                                    </span>

                                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}