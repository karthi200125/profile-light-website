import Button from "@/components/ui/Button";
import { NAV_LINKS_LEFT } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `404 — Page Not Found | ${siteConfig.name}`,
  robots: { index: false, follow: false },
};


export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center
                 overflow-hidden bg-neutral-950 px-6 text-center"
    >


      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2
                   h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-white/5 blur-[120px]"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* Large 404 */}
        <p
          className="select-none font-display font-light uppercase leading-none
                     text-white/[0.04]"
          style={{ fontSize: "clamp(120px, 25vw, 280px)", letterSpacing: "-0.05em" }}
          aria-hidden="true"
        >
          404
        </p>

        {/* Eyebrow */}
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white">
          Page Not Found
        </p>

        {/* Headline */}
        <div className="-mt-4 flex flex-col items-center gap-4">
          <h1
            className="font-display font-light uppercase text-white"
            style={{ fontSize: "clamp(28px, 5vw, 56px)", letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            Lights Out.
          </h1>

          <p className="max-w-sm text-sm leading-7 text-white/50">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-24 bg-white/10" aria-hidden="true" />

        {/* Primary CTA */}
        <div className="flex flex-wrap justify-center gap-4">

          <Button
            label="Back to Home"
            href="/"
            variant="solid"
          />

          <Button
            label="View Projects"
            href="/#contact"
            variant="ghost"
          />

        </div>

        {/* Secondary nav */}
        <nav aria-label="Helpful links" className="mt-2">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS_LEFT.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/30 transition-colors duration-200
                             hover:text-white/70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </main>
  );
}