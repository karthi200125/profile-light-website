import Link from "next/link";

import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
}

export default function Button({
    children,
    href,
    variant = "primary",
    className,
}: ButtonProps) {
    const variants = {
        primary:
            "rounded-full bg-[#111111] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black",

        secondary:
            "rounded-full border border-black/10 px-8 py-4 text-sm font-medium text-[#111111] transition-all duration-300 hover:bg-black hover:text-white",

        ghost:
            "rounded-full px-6 py-3 text-sm font-medium text-[#111111] transition-colors duration-300 hover:text-black/60",
    };

    if (href) {
        return (
            <Link
                href={href}
                className={cn(
                    variants[variant],
                    className
                )}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={cn(
                variants[variant],
                className
            )}
        >
            {children}
        </button>
    );
}