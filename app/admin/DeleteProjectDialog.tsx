"use client";

import type { Project } from "@prisma/client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { deleteProject } from "@/action/project/action";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface DeleteProjectDialogProps {
    project: Project;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function DeleteProjectDialog({ project, open, onOpenChange, onSuccess }: DeleteProjectDialogProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    function handleOpenChange(next: boolean) {
        if (isPending) return;
        onOpenChange(next);
        if (!next) setError(null);
    }

    function handleDelete() {
        setError(null);
        startTransition(async () => {
            const result = await deleteProject(project.id);

            if (result.success) {
                onOpenChange(false);
                router.refresh();
                onSuccess?.();
            } else {
                setError(result.message ?? "Failed to delete. Please try again.");
            }
        });
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-md p-0" showCloseButton={!isPending}>

                {/* Header */}
                <DialogHeader className="px-6 pb-5 pt-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                        <Trash2 className="h-5 w-5 text-red-500" />
                    </div>
                    <DialogTitle className="text-lg font-semibold text-slate-900">
                        Delete Project
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm leading-relaxed text-slate-500">
                        You're about to permanently delete{" "}
                        <span className="font-semibold text-slate-800">"{project.title}"</span>.
                        Both images will be removed from Cloudinary. This cannot be undone.
                    </DialogDescription>
                </DialogHeader>

                {/* Inline error */}
                {error && (
                    <div className="mx-6 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <p className="text-sm text-red-600">{error}</p>
                    </div>
                )}

                {/* Footer */}
                <DialogFooter className="px-6 py-4" showCloseButton={false}>
                    <Button type="button" variant="outline" disabled={isPending} onClick={() => handleOpenChange(false)} className="w-full sm:w-auto">
                        Cancel
                    </Button>
                    <Button type="button" disabled={isPending} onClick={handleDelete} className="w-full bg-red-500 hover:bg-red-600 sm:w-auto">
                        {isPending ? (
                            <span className="flex items-center gap-2">
                                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                                </svg>
                                Deleting...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Trash2 className="h-4 w-4" />
                                Delete Project
                            </span>
                        )}
                    </Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}