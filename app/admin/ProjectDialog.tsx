"use client";

import type { Project } from "@prisma/client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import ProjectForm from "./ProjectForm";

interface ProjectDialogProps {
    project?: Project;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
    const isEditing = Boolean(project);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90dvh] max-w-3xl overflow-y-auto p-0">

                <DialogHeader className="border-b border-slate-100 px-6 py-5">
                    <DialogTitle className="text-lg font-semibold text-slate-900">
                        {isEditing ? "Edit Project" : "Create Project"}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-slate-500">
                        {isEditing
                            ? "Update your project information, images and display settings."
                            : "Create a new lighting project for your portfolio."}
                    </DialogDescription>
                </DialogHeader>

                <div className="px-6 py-6">
                    <ProjectForm
                        project={project}
                        onSuccess={() => onOpenChange(false)}
                        onCancel={() => onOpenChange(false)}
                    />
                </div>

            </DialogContent>
        </Dialog>
    );
}