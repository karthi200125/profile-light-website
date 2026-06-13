'use client'

import Button from "@/components/ui/Button"
import Link from "next/link";
import { useEffect, useId } from "react";
type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

function reportError(error: Error & { digest?: string }, referenceId: string) {
    if (process.env.NODE_ENV === "production") {
        console.error("[ErrorBoundary]", referenceId, error);
    } else {
        console.error("[ErrorBoundary — dev]", { referenceId, digest: error.digest, error });
    }
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
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
                    <Button
                        label="Try Again"
                        href="/#contact"
                        variant="solid"
                    />

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