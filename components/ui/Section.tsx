import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    size?: "sm" | "md" | "lg";
}

export default function Section({
    children,
    className,
    id,
    size = "md",
}: SectionProps) {
    const sizes = {
        sm: "py-16 md:py-20 lg:py-24",
        md: "py-20 md:py-28 lg:py-40",
        lg: "py-24 md:py-32 lg:py-48",
    };

    return (
        <section
            id={id}
            className={cn(
                sizes[size],
                className
            )}
        >
            {children}
        </section>
    );
}