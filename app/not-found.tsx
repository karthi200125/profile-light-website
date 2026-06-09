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
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-white
                       px-7 py-3.5 text-sm font-medium text-neutral-900
                       transition-all duration-300 hover:bg-amber-200 hover:gap-4
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Back to Home
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
              ↗
            </span>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 pb-1 text-sm
                       text-white/70 transition-colors duration-300 hover:text-white
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
          >
            Contact Us
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
              ↗
            </span>
            <span className="absolute bottom-0 left-0 h-px w-full bg-white/20" aria-hidden="true" />
            <span className="absolute bottom-0 left-0 h-px w-0 bg-white/60
                             transition-all duration-300 group-hover:w-full" aria-hidden="true" />
          </Link>
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