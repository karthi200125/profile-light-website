"use client";

import { Search, X } from "lucide-react";

interface SearchProjectsProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function SearchProjects({
    value,
    onChange,
    placeholder = "Search projects...",
}: SearchProjectsProps) {
    return (
        <div className="relative w-full sm:w-80">

            {/* Search Icon */}

            <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
            />

            {/* Input */}

            <input
                type="text"
                value={value}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                aria-label="Search projects"
                placeholder={placeholder}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="
                    h-10
                    w-full
                    rounded-lg
                    border
                    border-neutral-300
                    bg-white
                    pl-10
                    pr-10
                    text-sm
                    text-neutral-900
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-black
                    focus:ring-2
                    focus:ring-black/5
                "
            />

            {/* Clear */}

            {value?.length > 0 && (

                <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => onChange("")}
                    className="
                        absolute
                        right-2.5
                        top-1/2
                        flex
                        h-6
                        w-6
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        text-neutral-400
                        transition
                        hover:bg-neutral-100
                        hover:text-neutral-700
                    "
                >
                    <X className="h-3.5 w-3.5" />
                </button>

            )}

        </div>
    );
}