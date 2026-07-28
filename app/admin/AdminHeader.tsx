"use client";

import CreateProjectButton from "@/components/CreateProjectButton";
import SearchProjects from "./SearchProjects";

interface AdminHeaderProps {
    search: string;
    onSearchChange: (value: string) => void;
}

export default function AdminHeader({
    search,
    onSearchChange,
}: AdminHeaderProps) {
    return (
        <header className="flex flex-col gap-6 border-b border-neutral-200 pb-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div>

                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
                    Projects
                </h1>

                <p className="mt-2 text-sm text-neutral-500">
                    Create, edit and manage your profile lighting projects.
                </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                <SearchProjects
                    value={search}
                    onChange={onSearchChange}
                />

                <CreateProjectButton />
            </div>

        </header>
    );
}