"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface ImageRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    once?: boolean;
    amount?: number;
    overflowHidden?: boolean;
}

export default function ImageReveal({
    children,
    className,
    delay = 0,
    once = true,
    amount = 0.2,
    overflowHidden = true,
}: ImageRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, {
        once,
        amount,
    });

    return (
        <div
            ref={ref}
            className={cn(
                "relative",
                overflowHidden && "overflow-hidden",
                className
            )}
        >
            <motion.div
                initial={{ scale: 1.08 }}
                animate={{
                    scale: isInView ? 1 : 1.08,
                }}
                transition={{
                    duration: 1.4,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-full w-full"
            >
                {children}
            </motion.div>

            <motion.div
                initial={{ y: "0%" }}
                animate={{
                    y: isInView ? "-101%" : "0%",
                }}
                transition={{
                    duration: 0.9,
                    delay,
                    ease: [0.76, 0, 0.24, 1],
                }}
                className="pointer-events-none absolute inset-0 z-10 bg-[#111111]"
                aria-hidden="true"
            />
        </div>
    );
}