"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { Project } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useMemo, useTransition } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadField from "@/components/upload/UploadField";

import { createProject, updateProject } from "@/action/project/action";
import { Select } from "@/components/ui/select";
import { ProjectFormValues, ProjectSchema } from "@/lib/validations/project";

interface ProjectFormProps {
    project?: Project;
    onSuccess?: () => void;
    onCancel?: () => void;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-4">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">{title}</h2>
            </div>
            <div className="p-6">{children}</div>
        </div>
    );
}

export default function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const isEditing = Boolean(project);

    const defaultValues = useMemo<ProjectFormValues>(
        () => ({
            title: project?.title ?? "",
            description: project?.description ?? "",
            location: project?.location ?? "",
            type: (project?.type as ProjectFormValues["type"]) ?? "RESIDENTIAL",
            designFocus: project?.designFocus ?? "",
            beforeImage: project?.beforeImage ?? "",
            beforeImageId: project?.beforeImageId ?? "",
            afterImage: project?.afterImage ?? "",
            afterImageId: project?.afterImageId ?? "",
            featured: project?.featured ?? false,
            isPublished: project?.isPublished ?? true,
            displayOrder: project?.displayOrder ?? 0,
        }),
        [project]
    );

    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(ProjectSchema),
        defaultValues,
        mode: "onSubmit",
    });

    const { control, handleSubmit, setValue, watch, formState: { errors } } = form;
    
    const beforeImage = watch("beforeImage");
    const beforeImageId = watch("beforeImageId");
    const afterImage = watch("afterImage");
    const afterImageId = watch("afterImageId");


    function onSubmit(values: ProjectFormValues) {
        startTransition(async () => {
            const result = isEditing && project
                ? await updateProject(project.id, values)
                : await createProject(values);

            if (result.success) {
                form.reset();
                router.refresh();
                onSuccess?.();
            } else {
                form.setError("root", {
                    message: result.message ?? "Something went wrong. Please try again.",
                });
            }
        });
    }


    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

                {errors.root && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <p className="text-sm text-red-600">{errors.root.message}</p>
                    </div>
                )}

                {/* ── Basic Info ────────────────────────────────────────── */}
                <Section title="Basic Information">
                    <div className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <FormField
                                control={control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-slate-500">Project Title <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Luxury Villa Profile Lighting" className="h-10 rounded-lg border-slate-200 bg-slate-50 text-sm focus:bg-white" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Koramangala, Bangalore" className="h-10 rounded-lg border-slate-200 bg-slate-50 text-sm focus:bg-white" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <FormField
                                control={control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Project Type
                                        </FormLabel>

                                        <Select
                                            value={field.value}
                                            onChange={field.onChange}
                                            placeholder="Select project type"
                                            options={[
                                                {
                                                    label: "Residential",
                                                    value: "RESIDENTIAL",
                                                },
                                                {
                                                    label: "Commercial",
                                                    value: "COMMERCIAL",
                                                },
                                                {
                                                    label: "Retail",
                                                    value: "RETAIL",
                                                },
                                            ]}
                                        />

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="featured"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Featured Project
                                        </FormLabel>

                                        <Select
                                            value={field.value ? "true" : "false"}
                                            onChange={(value) =>
                                                field.onChange(value === "true")
                                            }
                                            placeholder="Featured?"
                                            options={[
                                                {
                                                    label: "No",
                                                    value: "false",
                                                },
                                                {
                                                    label: "Yes",
                                                    value: "true",
                                                },
                                            ]}
                                        />

                                        <p className="mt-1 text-xs text-slate-500">
                                            Featured projects appear on the homepage.
                                        </p>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="displayOrder"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-slate-500">Display Order</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                min={0}
                                                placeholder="0"
                                                className="h-10 rounded-lg border-slate-200 bg-slate-50 text-sm focus:bg-white"
                                                {...field}
                                                onChange={(e) => field.onChange(e.target.value === "" ? 0 : Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <p className="mt-1 text-xs text-slate-400">Lower = shown first.</p>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </Section>

                {/* ── Content ───────────────────────────────────────────── */}
                <Section title="Content">
                    <div className="space-y-5">
                        <FormField
                            control={control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-semibold uppercase tracking-wider text-slate-500">Description <span className="text-red-400">*</span></FormLabel>
                                    <FormControl>
                                        <Textarea rows={5} placeholder="Describe the project scope, outcome, and key highlights..." className="resize-none rounded-lg border-slate-200 bg-slate-50 text-sm focus:bg-white" {...field} />
                                    </FormControl>
                                    <div className="flex items-center justify-between">
                                        <FormMessage className="text-xs" />
                                        <span className="ml-auto text-xs text-slate-400">{field.value.length}/3000</span>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="designFocus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-semibold uppercase tracking-wider text-slate-500">Design Focus <span className="text-red-400">*</span></FormLabel>
                                    <FormControl>
                                        <Textarea rows={4} placeholder="Warm lighting, minimal profile channels, cove ceiling detail..." className="resize-none rounded-lg border-slate-200 bg-slate-50 text-sm focus:bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                    </div>
                </Section>

                {/* ── Images ────────────────────────────────────────────── */}
                <Section title="Before & After Images">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">B</span>
                                <p className="text-sm font-semibold text-slate-700">Before Image</p>
                            </div>
                            <UploadField
                                type="project-image"
                                value={beforeImage ? { url: beforeImage, publicId: beforeImageId } : null}
                                onChange={(image) => {
                                    setValue("beforeImage", image?.url ?? "", {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                        shouldTouch: true,
                                    });
                                    setValue("beforeImageId", image?.publicId ?? "", {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                        shouldTouch: true,
                                    });
                                }}
                            />
                            {errors.beforeImage && <p className="text-xs text-red-500">{errors.beforeImage.message}</p>}
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-white">A</span>
                                <p className="text-sm font-semibold text-slate-700">After Image</p>
                            </div>
                            <UploadField
                                type="project-image"
                                value={afterImage ? { url: afterImage, publicId: afterImageId } : null}
                                onChange={(image) => {
                                    setValue("afterImage", image?.url ?? "", {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                        shouldTouch: true,
                                    });
                                    setValue("afterImageId", image?.publicId ?? "", {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                        shouldTouch: true,
                                    });
                                }}
                            />
                            {errors.afterImage && <p className="text-xs text-red-500">{errors.afterImage.message}</p>}
                        </div>
                    </div>
                </Section>

                {/* ── Actions ───────────────────────────────────────────── */}
                <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-end">
                    <Button type="button" variant="outline" disabled={isPending} onClick={onCancel} className="w-full sm:w-auto">
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                        {isPending ? (
                            <span className="flex items-center gap-2">
                                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                                </svg>
                                Saving...
                            </span>
                        ) : isEditing ? "Update Project" : "Create Project"}
                    </Button>
                </div>

            </form>
        </Form>
    );
}