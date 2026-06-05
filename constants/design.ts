export const DESIGN = {
    container:
        "mx-auto w-full max-w-screen-2xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12",

    section: {
        sm: "py-16 md:py-20 lg:py-24",
        md: "py-20 md:py-28 lg:py-40",
        lg: "py-24 md:py-32 lg:py-48",
    },

    typography: {
        sectionLabel:
            "text-xs uppercase tracking-[0.2em] text-black/50",

        heading:
            "text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-[3.5rem]",

        description:
            "mt-6 max-w-2xl text-lg leading-relaxed text-black/60",

        body:
            "text-base leading-relaxed text-black/70",

        bodyLarge:
            "text-lg leading-relaxed text-black/70",
    },

    colors: {
        background: "#F5F5F3",
        foreground: "#111111",

        dark: "#111111",
        darkCard: "#0B0B0B",

        border: "border-black/10",
        borderDark: "border-white/10",

        muted: "text-black/60",
        mutedDark: "text-white/60",
    },
} as const;