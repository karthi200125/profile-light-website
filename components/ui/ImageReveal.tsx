"use client";

import { motion } from "framer-motion";

import { imageReveal } from "@/lib/motion";

interface ImageRevealProps {
    children: React.ReactNode;
    className?: string;
}

export default function ImageReveal({
    children,
    className,
}: ImageRevealProps) {
    return (
        <div
            className={`overflow-hidden ${className ?? ""}`}
        >
            <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </div>
    );
}