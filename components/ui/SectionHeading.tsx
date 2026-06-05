import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    description?: string;
    className?: string;
    centered?: boolean;
}

export default function SectionHeading({
    title,
    description,
    className,
    centered = false,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "max-w-4xl",
                centered && "mx-auto text-center",
                className
            )}
        >
            <h2 className="text-balance text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-[3.5rem]">
                {title}
            </h2>

            {description && (
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
                    {description}
                </p>
            )}
        </div>
    );
}