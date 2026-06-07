// components/ui/CtaButton.tsx

import { type ReactNode } from "react";

export type HeroCTA = {
    label: string;
    href: string;
    variant?: "ghost" | "solid";
};

type CtaButtonProps = HeroCTA & { children?: ReactNode };

export default function CtaButton({ href, children, label, variant = "ghost" }: CtaButtonProps) {
    const content = children ?? label;

    if (variant === "solid") {
        return (
            <a
                href={href}
                className="group inline-flex items-center gap-3 rounded-full bg-amber-300
                   px-7 py-3.5 text-sm font-medium text-neutral-900
                   transition-all duration-300 hover:bg-amber-200 hover:gap-4
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
            >
                {content}
                <span
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                >
                    ↗
                </span>
            </a>
        );
    }

    return (
        <a
            href={href}
            className="group relative inline-flex items-center gap-2 pb-1 text-sm text-white/80
                 transition-colors duration-300 hover:text-white
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
        >
            {content}
            <span
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
            >
                ↗
            </span>
            {/* Underline track */}
            <span className="absolute bottom-0 left-0 h-px w-full bg-white/20" aria-hidden="true" />
            {/* Underline fill on hover */}
            <span
                className="absolute bottom-0 left-0 h-px w-0 bg-white/70
                   transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
            />
        </a>
    );
}