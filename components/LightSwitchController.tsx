"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LightSwitch from "./ui/LightSwitch";

export default function LightSwitchController() {
    const [lightsOn, setLightsOn] = useState(false);

    return (
        <>
            <LightSwitch
                lightsOn={lightsOn}
                onToggle={() => setLightsOn((prev) => !prev)}
            />

            <AnimatePresence>
                {lightsOn && (
                    <motion.div
                        key="hero-on"
                        className="absolute inset-0 z-[1]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        aria-hidden
                    >
                        <Image
                            src="/hero-on.webp"
                            alt=""
                            fill
                            draggable={false}
                            sizes="100vw"
                            className="object-cover"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}