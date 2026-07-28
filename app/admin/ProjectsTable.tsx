"use client";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EmptyProjects from "./EmptyProjects";
import ProjectRow, { type ProjectRowData } from "./ProjectRow";

interface ProjectsTableProps {
    projects: ProjectRowData[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
    if (projects.length === 0) return <EmptyProjects />;

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="border-slate-100 bg-slate-50 hover:bg-slate-50">
                            <TableHead className="w-[100px] py-3.5 pl-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Image
                            </TableHead>
                            <TableHead className="py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Project
                            </TableHead>
                            <TableHead className="py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Type
                            </TableHead>
                            <TableHead className="py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Location
                            </TableHead>
                            <TableHead className="py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Status
                            </TableHead>
                            <TableHead className="py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Updated
                            </TableHead>
                            <TableHead className="w-[60px] py-3.5 pr-5 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project, index) => (
                            <ProjectRow key={project.id} project={project} isLast={index === projects.length - 1} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}