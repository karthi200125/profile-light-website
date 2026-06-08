"use client";

import { AnimatePresence, motion } from "framer-motion";

type LightSwitchProps = {
    lightsOn: boolean;
    onToggle: () => void;
};

export default function LightSwitch({
    lightsOn,
    onToggle,
}: LightSwitchProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        >
            <button
                type="button"
                onClick={onToggle}
                aria-label={
                    lightsOn
                        ? "Turn lights off"
                        : "Turn lights on"
                }
                aria-pressed={lightsOn}
                className="group relative flex flex-col items-center"
            >
                <motion.div
                    animate={{
                        opacity: lightsOn ? 1 : 0,
                        scale: lightsOn ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-[-24px] rounded-full bg-white/20 blur-3xl"
                />

                <motion.div
                    animate={{
                        backgroundColor: lightsOn
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(0,0,0,0.45)",
                        borderColor: lightsOn
                            ? "rgba(255,255,255,0.35)"
                            : "rgba(255,255,255,0.12)",
                    }}
                    className="relative flex h-16 w-32 items-center rounded-full border backdrop-blur-md"
                >
                    <motion.div
                        animate={{
                            x: lightsOn ? 62 : 4,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 22,
                        }}
                        className="relative flex h-12 w-12 items-center justify-center rounded-full"
                    >
                        <motion.div
                            animate={{
                                backgroundColor: lightsOn
                                    ? "#ffffff"
                                    : "rgba(255,255,255,0.18)",
                            }}
                            className="absolute inset-0 rounded-full"
                        />

                        <motion.div
                            animate={{
                                backgroundColor: lightsOn
                                    ? "#0a0a0a"
                                    : "#ffffff",
                            }}
                            className="relative z-10 h-2 w-2 rounded-full"
                        />
                    </motion.div>
                </motion.div>

                <div className="relative mt-4 h-4 w-32 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={lightsOn ? "on" : "off"}
                            initial={{
                                opacity: 0,
                                y: 8,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -8,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.25em] text-white/60"
                        >
                            {lightsOn
                                ? "Lights On"
                                : "Turn On Lights"}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </button>
        </motion.div>
    );
}