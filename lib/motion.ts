import { Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [
    0.22,
    1,
    0.36,
    1,
];

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: easeOut
        },
    },
};

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        },
    },
};

export const fadeDown: Variants = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        },
    },
};

export const scaleReveal: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: easeOut
        },
    },
};

export const imageReveal: Variants = {
    hidden: {
        opacity: 0,
        scale: 1.08,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: easeOut
        },
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const staggerFast: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const slideLeft: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        },
    },
};

export const slideRight: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        },
    },
};

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const dividerVariants: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
    },
  },
};

export const navbarVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const mobilePanelVariants: Variants = {
  hidden: {
    x: "-100%",
  },

  visible: {
    x: 0,

    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    x: "-100%",

    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
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
      ease: [0.22, 1, 0.36, 1],
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
      ease: "easeOut",
      delay: 0.45,
    },
  },
};