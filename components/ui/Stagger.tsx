"use client";

import { motion } from "framer-motion";

import { staggerContainer } from "@/lib/motion";

interface StaggerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Stagger({
    children,
    className,
}: StaggerProps) {
    return (
        <motion.div
            className={className}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.15,
            }}
        >
            {children}
        </motion.div>
    );
}