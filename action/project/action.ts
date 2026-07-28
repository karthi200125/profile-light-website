"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { Project } from "@prisma/client";

import { ProjectFormValues, ProjectSchema, } from "@/lib/validations/project";
import { generateProjectSlug } from "./slug";
import { deleteFromCloudinary } from "@/lib/upload/upload";

export interface ProjectActionResult {
    success: boolean;
    message: string;
    data?: Project;
}

export async function createProject(values: ProjectFormValues): Promise<ProjectActionResult> {
    try {
        const validated = ProjectSchema.parse(values);
        const slug = await generateProjectSlug(validated.title);
        const project = await prisma.project.create({
            data: {
                title: validated.title,
                slug,

                description: validated.description,
                location: validated.location,
                type: validated.type,
                designFocus: validated.designFocus,
                beforeImage: validated.beforeImage,
                beforeImageId: validated.beforeImageId,
                afterImage: validated.afterImage,
                afterImageId: validated.afterImageId,
                featured: validated.featured,
                displayOrder: validated.displayOrder,
                isPublished: validated.isPublished,
            },
        });

        revalidatePath("/admin");
        revalidatePath("/projects");

        return {
            success: true,
            message:
                "Project created successfully.",
            data: project,
        };
    } catch (error) {
        console.error(
            "[CREATE_PROJECT]",
            error
        );

        return {
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Unable to create project.",
        };
    }
}


export async function updateProject(
    id: string,
    values: ProjectFormValues
): Promise<ProjectActionResult> {
    try {
        const validated = ProjectSchema.parse(values);
        const existingProject = await prisma.project.findUnique({
            where: {
                id,
            },
        });

        if (!existingProject) {
            return {
                success: false,
                message: "Project not found.",
            };
        }

        const project = await prisma.project.update({
            where: {
                id,
            },
            data: {
                title: validated.title,
                description:validated.description,
                location:validated.location,
                type:validated.type,
                designFocus:validated.designFocus,
                beforeImage:validated.beforeImage,
                beforeImageId:validated.beforeImageId,
                afterImage:validated.afterImage,
                afterImageId:validated.afterImageId,
                featured:validated.featured,
                displayOrder:validated.displayOrder,
                isPublished:validated.isPublished,
            },
        });

        revalidatePath("/admin");
        revalidatePath("/projects");
        revalidatePath(`/projects/${project.slug}`);

        return {
            success: true,
            message: "Project updated successfully.",
            data: project,
        };
    } catch (error) {
        console.error(
            "[UPDATE_PROJECT]",
            error
        );

        return {
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Unable to update project.",
        };
    }
}

export async function deleteProject(
    id: string
): Promise<ProjectActionResult> {
    try {
        const project =
            await prisma.project.findUnique({
                where: {
                    id,
                },
            });

        if (!project) {
            return {
                success: false,
                message: "Project not found.",
            };
        }

        // Delete Before Image

        if (project.beforeImageId) {
            try {
                await deleteFromCloudinary(
                    project.beforeImageId
                );
            } catch (error) {
                console.error(
                    "[DELETE_BEFORE_IMAGE]",
                    error
                );
            }
        }

        // Delete After Image

        if (project.afterImageId) {
            try {
                await deleteFromCloudinary(
                    project.afterImageId
                );
            } catch (error) {
                console.error(
                    "[DELETE_AFTER_IMAGE]",
                    error
                );
            }
        }

        await prisma.project.delete({
            where: {
                id,
            },
        });

        revalidatePath("/admin");

        revalidatePath("/projects");

        revalidatePath(
            `/projects/${project.slug}`
        );

        return {
            success: true,
            message:
                "Project deleted successfully.",
        };
    } catch (error) {
        console.error(
            "[DELETE_PROJECT]",
            error
        );

        return {
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Unable to delete project.",
        };
    }
}