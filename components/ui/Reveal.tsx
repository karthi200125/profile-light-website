"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import {
    EASE_EXPO,
    EASE_OUT,
    EASE_QUART,
} from "@/lib/motion";

export type RevealVariant =
    | "mask"
    | "blur"
    | "clip"
    | "fade";

type RevealProps = {
    children: ReactNode;
    className?: string;
    variant?: RevealVariant;
    delay?: number;
    amount?: number;
};

export default function Reveal({
    children,
    className,
    variant = "fade",
    delay = 0,
    amount = 0.15,
}: RevealProps) {
    if (variant === "mask") {
        return (
            <div
                className={`overflow-hidden ${className ?? ""}`}
            >
                <motion.div
                    initial={{
                        y: "105%",
                    }}
                    whileInView={{
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount,
                    }}
                    transition={{
                        duration: 0.85,
                        ease: EASE_EXPO,
                        delay,
                    }}
                >
                    {children}
                </motion.div>
            </div>
        );
    }

    if (variant === "blur") {
        return (
            <motion.div
                className={className}
                initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(8px)",
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{
                    once: true,
                    amount,
                }}
                transition={{
                    duration: 0.8,
                    ease: EASE_OUT,
                    delay,
                }}
            >
                {children}
            </motion.div>
        );
    }

    if (variant === "clip") {
        return (
            <motion.div
                className={className}
                initial={{
                    clipPath:
                        "inset(100% 0% 0% 0%)",
                }}
                whileInView={{
                    clipPath:
                        "inset(0% 0% 0% 0%)",
                }}
                viewport={{
                    once: true,
                    amount,
                }}
                transition={{
                    duration: 0.95,
                    ease: EASE_QUART,
                    delay,
                }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: 32,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount,
            }}
            transition={{
                duration: 0.8,
                ease: EASE_OUT,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}