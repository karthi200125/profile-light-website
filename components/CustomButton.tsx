import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "solid" | "solidBlack" | "ghost";
  className?: string;
  target?: "_blank" | "_self";
};

export default function CustomButton({
  label,
  href,
  variant = "solid",
  className = "",
  target = "_self",
}: ButtonProps) {
  const isExternal =
    href?.startsWith("http") ||
    href?.startsWith("mailto:") ||
    href?.startsWith("tel:");

  const base =
    `
        group inline-flex items-center gap-3
        rounded-full
        px-6 py-3
        text-sm font-medium
        transition-all duration-300
        hover:gap-4
        focus-visible:outline
        focus-visible:outline-2
    `;

  const styles = {
    solid: `
            ${base}
            bg-white
            text-black
            hover:bg-neutral-100
            focus-visible:outline-white/40
        `,

    solidBlack: `
            ${base}
            bg-black
            text-white
            hover:bg-neutral-800
            focus-visible:outline-black/40
        `,

    ghost: `
            group relative inline-flex items-center gap-2
            pb-1
            text-sm
            text-white/70
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
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        ↗
      </span>

      {variant === "ghost" && (
        <>
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full bg-white/20"
          />

          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"
          />
        </>
      )}
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        className={`${styles[variant]} ${className}`}
      >
        {content}
      </button>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={
          target === "_blank"
            ? "noopener noreferrer"
            : undefined
        }
        className={`${styles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${styles[variant]} ${className}`}
    >
      {content}
    </Link>
  );
}