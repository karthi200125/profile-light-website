"use server";

import { prisma } from "@/lib/prisma";

export async function getProjects() {
    return prisma.project.findMany({
        orderBy: [
            {
                displayOrder: "asc",
            },
            {
                createdAt: "desc",
            },
        ],
    });
}

export async function getPublishedProjects() {
    return prisma.project.findMany({
        where: {
            isPublished: true,
        },
        orderBy: [
            {
                displayOrder: "asc",
            },
            {
                createdAt: "desc",
            },
        ],
    });
}

export async function getFeaturedProjects() {
    const publishedProjects = await prisma.project.findMany({
        where: {
            isPublished: true,
        },
        orderBy: [
            {
                displayOrder: "asc",
            },
            {
                createdAt: "desc",
            },
        ],
    });
    
    if (publishedProjects.length === 0) {
        return [];
    }

    if (publishedProjects.length <= 3) {
        return publishedProjects;
    }

    const featuredProjects = publishedProjects.filter(
        (project) => project.featured
    );

    if (featuredProjects.length >= 3) {
        return featuredProjects.slice(0, 3);
    }

    const featuredIds = new Set(
        featuredProjects.map((project) => project.id)
    );

    const nonFeaturedProjects = publishedProjects.filter(
        (project) => !featuredIds.has(project.id)
    );

    return [
        ...featuredProjects,
        ...nonFeaturedProjects,
    ].slice(0, 3);
}


export async function getProject(
    id: string
) {
    return prisma.project.findUnique({
        where: {
            id,
        },
    });
}

export async function getProjectBySlug(
    slug: string
) {
    return prisma.project.findUnique({
        where: {
            slug,
        },
    });
}


