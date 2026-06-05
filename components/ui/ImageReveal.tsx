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
        <motion.div
            className={className}
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
        >
            {children}
        </motion.div>
    );
}