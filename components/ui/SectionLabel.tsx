import { cn } from "@/lib/utils";

interface SectionLabelProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionLabel({
    children,
    className,
}: SectionLabelProps) {
    return (
        <span
            className={cn(
                "inline-block text-xs uppercase tracking-[0.2em] text-black/50",
                className
            )}
        >
            {children}
        </span>
    );
}