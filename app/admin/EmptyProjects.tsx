"use client";

import { FolderOpen } from "lucide-react";

export default function EmptyProjects() {
    return (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-6 text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
                <FolderOpen className="h-10 w-10 text-neutral-400" />
            </div>

            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-900">
                No projects yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                Create your first project to showcase completed profile
                lighting installations. Once added, your projects will
                automatically appear here.
            </p>

        </div>
    );
}