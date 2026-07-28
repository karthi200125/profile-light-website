import { prisma } from "@/lib/prisma";

function slugify(text: string) {
    return text
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export async function generateProjectSlug(
    title: string
): Promise<string> {
    const baseSlug = slugify(title);

    let slug = baseSlug;

    let counter = 1;

    while (true) {
        const existing =
            await prisma.project.findUnique({
                where: {
                    slug,
                },
                select: {
                    id: true,
                },
            });

        if (!existing) {
            return slug;
        }

        counter++;

        slug = `${baseSlug}-${counter}`;
    }
}