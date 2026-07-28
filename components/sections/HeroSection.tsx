import Image from "next/image";
import HeroContent from "./HeroContent";
import LightSwitchController from "../LightSwitchController";

export type HeroSectionProps = {
    headline: string | [string, string];
    description: string;
    eyebrow?: string;
};

export default function HeroSection({ headline, description, eyebrow }: HeroSectionProps) {
    const headlineLines = Array.isArray(headline) ? headline : [headline];

    return (
        <section
            aria-label="Hero"
            className="relative h-screen min-h-[600px] overflow-hidden bg-neutral-950"
        >            
            <div className="absolute inset-0" aria-hidden>         
                <Image
                    src="/hero-off.webp"
                    alt="Premium profile lighting installation"
                    fill
                    priority
                    draggable={false}
                    sizes="100vw"
                    className="object-cover"
                    id="hero-off-image"
                />
            </div>
            
            <LightSwitchController />

            <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            <div className="relative z-20 mx-auto flex h-full w-full max-w-screen-2xl flex-col justify-end px-5 pb-5 sm:px-6 md:px-8 md:pb-0 lg:px-10 xl:px-12">
                <div className="w-full">
                    <HeroContent
                        eyebrow={eyebrow}
                        headlineLines={headlineLines}
                        description={description}
                    />
                </div>
            </div>
        </section>
    );
}