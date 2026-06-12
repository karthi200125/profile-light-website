import type { Variants } from "framer-motion";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const EASE_EXPO = [0.22, 1, 0.36, 1] as const;

export const EASE_QUART = [0.76, 0, 0.24, 1] as const;

export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
export const EASE_FAST = [0.16, 1, 0.3, 1] as const;
export const EASE_SHARP = [0.76, 0, 0.24, 1] as const;


export const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// FADE ANIMATIONS
// ─────────────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASE_SMOOTH,
    },
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASE_SMOOTH,
    },
  },
};

export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: EASE_SMOOTH,
    },
  },
};


export const dividerVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: EASE_EXPO,
      delay: 0.2,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// ADVANCED TEXT REVEALS
// ─────────────────────────────────────────────────────────────

export const maskRevealVariants: Variants = {
  hidden: {
    y: "105%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.85,
      ease: EASE_EXPO,
    },
  },
};

export const blurUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: EASE_SMOOTH,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// IMAGES
// ─────────────────────────────────────────────────────────────

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: EASE_SMOOTH,
    },
  },
};


export const clipRevealVariants: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1,
      ease: EASE_QUART,
    },
  },
};

export const clipRevealHorizontalVariants: Variants = {
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: EASE_EXPO,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// CARDS
// ─────────────────────────────────────────────────────────────

export const scaleReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: EASE_SMOOTH,
    },
  },
};

export const scaleFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE_SMOOTH,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE_SMOOTH,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────

export const navbarVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_SMOOTH,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────────────────────

export const mobilePanelVariants: Variants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.48,
      ease: EASE_EXPO,
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.38,
      ease: EASE_EXPO,
    },
  },
};

export const mobileListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.18,
    },
  },
};

export const mobileItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: EASE_EXPO,
    },
  },
};

export const mobileFooterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE_OUT,
      delay: 0.45,
    },
  },
};


export function buildVariants(duration: number, ease: readonly number[]): {
  container: Variants;
  unit: Variants;
} {
  return {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0 } },
    },
    unit: {
      hidden: { y: "110%", rotateX: 8 },
      visible: {
        y: 0,
        rotateX: 0,
        transition: { duration, ease: EASE_OUT },
      },
    },
  };
}
