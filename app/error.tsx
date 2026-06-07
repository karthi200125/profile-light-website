"use client";

// app/error.tsx
// ─────────────────────────────────────────────────────────────────────────────
//  ERROR BOUNDARY
//  Next.js App Router · Client Component (required by Next.js)
//
//  Catches runtime errors thrown inside the root layout's children.
//  Must be "use client" — Next.js hard requirement for error.tsx.
//
//  What this does:
//   • Logs the error + sends to your error tracker in prod
//   • Shows a branded recovery UI — never a blank white screen
//   • Reset (retry) button + Home navigation
//   • Error reference ID for support traceability
//   • digest shown in dev only — never exposed to users in prod
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useId } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

// ─── Error reporter ───────────────────────────────────────────────────────────
// Swap console.error for your real error tracker in production.
// e.g. Sentry:  Sentry.captureException(error, { extra: { referenceId } })
// e.g. Datadog: datadogRum.addError(error)

function reportError(error: Error & { digest?: string }, referenceId: string) {
    if (process.env.NODE_ENV === "production") {
        // TODO: replace with your error tracking SDK
        // Sentry.captureException(error, { extra: { referenceId } });
        console.error("[ErrorBoundary]", referenceId, error);
    } else {
        console.error("[ErrorBoundary — dev]", { referenceId, digest: error.digest, error });
    }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    // Stable ID used as a support reference — unique per render
    const referenceId = useId().replace(/:/g, "").slice(0, 8).toUpperCase();
    const isDev = process.env.NODE_ENV === "development";

    useEffect(() => {
        reportError(error, referenceId);
    }, [error, referenceId]);

    return (
        <main
            className="relative flex min-h-screen flex-col items-center justify-center
                 overflow-hidden bg-neutral-950 px-6 text-center"
        >
            {/* ── Ambient wire SVG (static) ── */}
            <svg
                viewBox="0 0 1624 680"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
                preserveAspectRatio="xMidYMid slice"
            >
                <path
                    d="M1271.06 275.978H1233.56L1097.56 349.978L1070.56 362.978V568.978L1204.06 609.478H1236.06L1268.06 618.978V596.478L1554.56 665.478H1613.06M1097.56 349.978H1045.56M1045.56 349.978H873.56L867.56 324.978H525.56L386.56 240.357L1.56 5.97766M386.56 240.357L1206.56 234.978L1045.56 349.978M1045.56 349.978L1554.56 2.47766M1271.06 275.978L1546.56 140.978M1271.06 275.978V547.478"
                    fill="none"
                    stroke="#FFD89A"
                    strokeWidth="1.5"
                />
            </svg>

            {/* ── Radial glow — red tint signals error state ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2
                   h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-red-900/10 blur-[120px]"
            />

            {/* ── Content ── */}
            <div className="relative z-10 flex flex-col items-center gap-8">

                {/* Large background text — decorative */}
                <p
                    className="select-none font-display font-light uppercase leading-none text-white/[0.04]"
                    style={{ fontSize: "clamp(100px, 22vw, 240px)", letterSpacing: "-0.05em" }}
                    aria-hidden="true"
                >
                    Error
                </p>

                {/* Eyebrow */}
                <p className="absolute top-1/2 -translate-y-1/2 text-xs font-medium
                      uppercase tracking-[0.25em] text-red-400/70">
                    Something went wrong
                </p>

                {/* Headline + body */}
                <div className="-mt-4 flex flex-col items-center gap-4">
                    <h1
                        className="font-display font-light uppercase text-white"
                        style={{ fontSize: "clamp(28px, 5vw, 56px)", letterSpacing: "-0.04em", lineHeight: 1 }}
                    >
                        Short Circuit.
                    </h1>

                    <p className="max-w-sm text-sm leading-7 text-white/50">
                        An unexpected error occurred. Our team has been notified.
                        You can try again or return home — your work is safe.
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px w-24 bg-white/10" aria-hidden="true" />

                {/* Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Reset — retries the failed segment render */}
                    <button
                        onClick={reset}
                        className="group inline-flex items-center gap-3 rounded-full bg-amber-300
                       px-7 py-3.5 text-sm font-medium text-neutral-900
                       transition-all duration-300 hover:bg-amber-200 hover:gap-4
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                    >
                        Try Again
                        <span
                            className="transition-transform duration-300 group-hover:rotate-180"
                            aria-hidden="true"
                        >
                            ↺
                        </span>
                    </button>

                    {/* Home */}
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-2 pb-1 text-sm
                       text-white/70 transition-colors duration-300 hover:text-white
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
                    >
                        Back to Home
                        <span
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                        <span className="absolute bottom-0 left-0 h-px w-full bg-white/20" aria-hidden="true" />
                        <span
                            className="absolute bottom-0 left-0 h-px w-0 bg-white/60
                         transition-all duration-300 group-hover:w-full"
                            aria-hidden="true"
                        />
                    </Link>
                </div>

                {/* Reference ID — visible to users so they can quote it when contacting support */}
                <p className="text-[11px] tabular-nums text-white/20">
                    Reference: {referenceId}
                </p>

                {/* Error digest — dev only, never shown in production */}
                {isDev && error.digest && (
                    <p className="rounded border border-red-900/40 bg-red-950/30 px-4 py-2
                        font-mono text-[11px] text-red-400/70">
                        digest: {error.digest}
                    </p>
                )}

            </div>
        </main>
    );
}