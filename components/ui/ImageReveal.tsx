"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function ImageReveal({
    children,
    className,
    delay = 0,
}: ImageRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
    });

    return (
        
        <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
            
            <motion.div
                initial={{ scale: 1.08 }}
                animate={isInView ? { scale: 1 } : { scale: 1.08 }}
                transition={{
                    duration: 1.4,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full"
            >
                {children}
            </motion.div>

            <motion.div
                initial={{ y: "0%" }}
                animate={isInView ? { y: "-101%" } : { y: "0%" }}
                transition={{
                    duration: 0.9,
                    delay,
                    ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-0 z-10 bg-[#111111]"
                aria-hidden="true"
            />

        </div>
    );
}