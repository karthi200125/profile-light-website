import Image from "next/image";

import ImageReveal from "@/components/ui/ImageReveal";

interface BeforeAfterProps {
    title: string;

    beforeImage: string;
    afterImage: string;

    priority?: boolean;

    reverse?: boolean;

    className?: string;
}

export default function BeforeAfter({
    title,
    beforeImage,
    afterImage,
    priority = false,
    reverse = false,
    className = "",
}: BeforeAfterProps) {
    return (
        <div
            className={`grid gap-6 lg:grid-cols-2 ${reverse
                ? "lg:[&>*:first-child]:order-2"
                : ""
                } ${className}`}
        >
            {/* BEFORE */}

            <ImageReveal className="overflow-hidden">

                <div className="relative aspect-[16/10]">

                    <div className="absolute left-5 top-5 z-20 rounded-md bg-black px-4 py-2 text-xs font-medium tracking-[0.18em] text-white">
                        BEFORE
                    </div>

                    <Image
                        src={beforeImage}
                        alt={`${title} before`}
                        fill
                        priority={priority}
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-105"
                    />

                </div>

            </ImageReveal>

            {/* AFTER */}

            <ImageReveal
                delay={0.15}
                className="overflow-hidden"
            >

                <div className="relative aspect-[16/10]">

                    <div className="absolute left-5 top-5 z-20 bg-black px-4 py-2 text-xs font-medium tracking-[0.18em] text-white">
                        AFTER
                    </div>

                    <Image
                        src={afterImage}
                        alt={`${title} after`}
                        fill
                        priority={priority}
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-105"
                    />

                </div>

            </ImageReveal>

        </div>
    );
}