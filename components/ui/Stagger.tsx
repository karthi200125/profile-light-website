"use client";

import { motion } from "framer-motion";

import {
    containerVariants,
    staggerContainer,
} from "@/lib/motion";

type StaggerProps = {
    children: React.ReactNode;
    className?: string;
    fast?: boolean;
    once?: boolean;
    amount?: number;
};

export default function Stagger({
    children,
    className,
    fast = false,
    once = true,
    amount = 0.15,
}: StaggerProps) {
    return (
        <motion.div
            className={className}
            variants={
                fast
                    ? staggerContainer
                    : containerVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
                once,
                amount,
            }}
        >
            {children}
        </motion.div>
    );
}