import Link from "next/link";

type ButtonProps = {
    label: string;
    href: string;
    variant?: "solid" | "ghost";
    className?: string;
    target?: "_blank" | "_self";
};

export default function Button({
    label,
    href,
    variant = "solid",
    className,
    target = "_self",
}: ButtonProps) {
    const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");

    const styles = {
        solid: `
      group inline-flex items-center gap-3
      rounded-full      
      bg-white
      px-6 py-3
      text-sm font-medium text-black
      transition-all duration-300            
      hover:gap-4
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-white/40
    `,

        ghost: `
      group relative inline-flex items-center gap-2
      pb-1
      text-sm text-white/70
      transition-colors duration-300
      hover:text-white
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-white/40
    `,
    };

    const content = (
        <>
            <span>{label}</span>

            <span
                className="
          transition-transform duration-300
          group-hover:translate-x-0.5
        "
                aria-hidden="true"
            >
                ↗
            </span>

            {variant === "ghost" && (
                <>
                    <span
                        className="absolute bottom-0 left-0 h-px w-full bg-white/20"
                        aria-hidden="true"
                    />

                    <span
                        className="
              absolute bottom-0 left-0 h-px w-0
              bg-white
              transition-all duration-300
              group-hover:w-full
            "
                        aria-hidden="true"
                    />
                </>
            )}
        </>
    );

    if (isExternal) {
        return (
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className={`${styles[variant]} ${className ?? ""}`}
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={`${styles[variant]} ${className ?? ""}`}
        >
            {content}
        </Link>
    );
}