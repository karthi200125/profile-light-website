"use client";

import Image from "next/image";
import { format } from "date-fns";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import type { Project } from "@prisma/client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ProjectDialog from "./ProjectDialog";
import DeleteProjectDialog from "./DeleteProjectDialog";
import ProjectStatusBadge from "./ProjectStatusBadge";
import ProjectTypeBadge from "./ProjectTypeBadge";

export type ProjectRowData = Project;

interface ProjectRowProps {
    project: Project;
    isLast?: boolean;
}

export default function ProjectRow({ project, isLast }: ProjectRowProps) {
    // ── Lift dialog state here so Radix dropdown doesn't swallow the events ──
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <>
            <tr className={`group transition-colors hover:bg-slate-50/70 ${!isLast ? "border-b border-slate-100" : ""}`}>

                {/* Thumbnail */}
                <td className="py-3.5 pl-5">
                    <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-100">
                        <Image
                            src={project.beforeImage}
                            alt={project.title}
                            fill
                            sizes="80px"
                            className="object-cover transition duration-300 group-hover:scale-105"
                        />
                    </div>
                </td>

                {/* Project */}
                <td className="py-3.5 pr-6">
                    <div className="flex flex-col gap-0.5">
                        <span className="line-clamp-1 text-sm font-semibold text-slate-800">{project.title}</span>
                        <span className="text-xs text-slate-400">/projects/{project.slug}</span>
                    </div>
                </td>

                {/* Type */}
                <td className="py-3.5 pr-6">
                    <ProjectTypeBadge type={project.type} />
                </td>

                {/* Location */}
                <td className="py-3.5 pr-6">
                    <div className="flex items-center gap-1.5">
                        <svg className="h-3 w-3 flex-shrink-0 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-sm text-slate-500">{project.location}</span>
                    </div>
                </td>

                {/* Status */}
                <td className="py-3.5 pr-6">
                    <ProjectStatusBadge isPublished={project.isPublished} />
                </td>

                {/* Updated */}
                <td className="py-3.5 pr-6">
                    <span className="text-sm tabular-nums text-slate-400">
                        {format(project.updatedAt, "dd MMM yyyy")}
                    </span>
                </td>

                {/* Actions */}
                <td className="py-3.5 pr-5 text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open actions</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-44 rounded-xl border-slate-200 shadow-lg">

                            {/* Edit — sets editOpen, dropdown closes naturally */}
                            <DropdownMenuItem
                                className="cursor-pointer gap-2"
                                onSelect={() => setEditOpen(true)}
                            >
                                <Pencil className="h-4 w-4" />
                                Edit Project
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            {/* Delete — sets deleteOpen, dropdown closes naturally */}
                            <DropdownMenuItem
                                className="cursor-pointer gap-2 text-red-600 focus:bg-red-50 focus:text-red-700"
                                onSelect={() => setDeleteOpen(true)}
                            >
                                <Trash2 className="h-4 w-4" />
                                Delete Project
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </td>
            </tr>

            {/* ── Dialogs live OUTSIDE the dropdown so Radix doesn't swallow events ── */}
            <ProjectDialog
                project={project}
                open={editOpen}
                onOpenChange={setEditOpen}
            />
            <DeleteProjectDialog
                project={project}
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
            />
        </>
    );
}