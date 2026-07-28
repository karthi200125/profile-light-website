"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateReferenceId(): string {
    return Math.random().toString(36).slice(2, 10).toUpperCase();
}

function reportError(error: Error & { digest?: string }, referenceId: string) {
    if (process.env.NODE_ENV === "production") {
        // In production: log minimal info, no stack traces to console
        console.error("[ErrorBoundary]", { referenceId, digest: error.digest });
    } else {
        console.error("[ErrorBoundary — dev]", { referenceId, digest: error.digest, error });
    }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    const referenceId = useMemo(() => generateReferenceId(), []);
    const isDev = process.env.NODE_ENV !== "production";

    useEffect(() => {
        reportError(error, referenceId);
    }, [error, referenceId]);

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">

            {/* Ambient glow */}
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[140px]" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-lg -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                    <svg className="h-7 w-7 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                </div>

                {/* Eyebrow */}
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400/70">
                    Something went wrong
                </p>

                {/* Heading */}
                <div className="space-y-3">
                    <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Unexpected Error
                    </h1>
                    <p className="text-sm leading-relaxed text-slate-400">
                        An error occurred while loading this page. Our team has been
                        notified. You can try again or return to the homepage.
                    </p>
                </div>

                {/* Divider */}
                <div aria-hidden className="h-px w-full bg-slate-800" />

                {/* Actions */}
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        type="button"
                        onClick={reset}
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" /><path d="M3 3v5h5" />
                        </svg>
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white sm:w-auto"
                    >
                        Back to Home
                    </Link>
                </div>

                {/* Reference ID */}
                <p className="text-[11px] tabular-nums text-slate-600">
                    Reference: <span className="text-slate-500">{referenceId}</span>
                </p>

                {/* Dev-only digest */}
                {isDev && error.digest && (
                    <div className="w-full rounded-lg border border-red-900/30 bg-red-950/20 px-4 py-3 text-left">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400/60">
                            Digest (dev only)
                        </p>
                        <p className="break-all font-mono text-[11px] text-red-400/80">
                            {error.digest}
                        </p>
                    </div>
                )}

                {/* Dev-only error message */}
                {isDev && error.message && (
                    <div className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-left">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                            Error (dev only)
                        </p>
                        <p className="break-all font-mono text-[11px] text-slate-400">
                            {error.message}
                        </p>
                    </div>
                )}

            </div>
        </main>
    );
}