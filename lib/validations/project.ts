import { z } from "zod/v3";
import { ProjectType } from "@prisma/client";

export const PROJECT_CARD_SELECT = {
    id: true,
    title: true,    
    location: true,
    type: true,
    beforeImage: true,
    afterImage: true,
    featured: true,
};

export const ProjectSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Project title must be at least 3 characters.")
        .max(100, "Project title cannot exceed 100 characters."),
    
    description: z
        .string()
        .trim()
        .min(20, "Description must be at least 20 characters.")
        .max(3000, "Description cannot exceed 3000 characters."),

    location: z
        .string()
        .trim()
        .min(2, "Location is required.")
        .max(100, "Location cannot exceed 100 characters."),

    type: z.nativeEnum(ProjectType),

    designFocus: z
        .string()
        .trim()
        .min(10, "Design focus must be at least 10 characters.")
        .max(1000, "Design focus cannot exceed 1000 characters."),

    beforeImage: z
        .string()
        .url("Invalid before image URL."),

    beforeImageId: z
        .string()
        .min(1, "Before image ID is required."),

    afterImage: z
        .string()
        .url("Invalid after image URL."),

    afterImageId: z
        .string()
        .min(1, "After image ID is required."),

    featured: z.boolean(),

    isPublished: z.boolean(),

    displayOrder: z
        .number({
            invalid_type_error: "Display order must be a number.",
        })
        .int()
        .min(0)
        .max(9999),
});

export type ProjectFormValues = z.infer<
    typeof ProjectSchema
>;