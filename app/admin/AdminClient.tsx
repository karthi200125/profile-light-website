"use client";

import { useMemo, useState } from "react";

import AdminHeader from "./AdminHeader";
import EmptyProjects from "./EmptyProjects";
import ProjectsTable from "./ProjectsTable";
import { Project } from "@prisma/client";

interface AdminClientProps {
    projects: Project[];
}

export default function AdminClient({
    projects,
}: AdminClientProps) {

    const [search, setSearch] = useState("");

    const filteredProjects = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return projects;
        }

        return projects.filter((project) => {
            return (
                project.title.toLowerCase().includes(query) ||                
                project.location.toLowerCase().includes(query)
            );
        });
    }, [projects, search]);

    return (
        <main className="min-h-screen bg-neutral-50 pt-10">

            <div className="mx-auto max-w-7xl px-6 py-10">

                <AdminHeader
                    search={search}
                    onSearchChange={setSearch}
                />

                <div className="mt-10">

                    {filteredProjects.length === 0 ? (
                        <EmptyProjects />
                    ) : (
                        <ProjectsTable
                            projects={filteredProjects}
                        />
                    )}

                </div>

            </div>

        </main>
    );
}