"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
}

export default function Reveal({
    children,
    className,
}: RevealProps) {
    return (
        <motion.div
            className={className}
            variants={fadeUp}
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