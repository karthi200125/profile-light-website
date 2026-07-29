
import type { Project } from "@prisma/client";

import Reveal from "@/components/ui/Reveal";

import BeforeAfter from "./BeforeAfter";
import Button from "./CustomButton";
import ProjectMeta from "./ProjectMeta";

interface FeaturedProjectCardProps {
    project: Project;
    priority?: boolean;
    reverse?: boolean;
}

export default function FeaturedProjectCard({
    project,
    priority = false,
    reverse = false,
}: FeaturedProjectCardProps) {
    return (
        <article className="">

            {/* Header */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-4xl">
                    <Reveal variant="fade">
                        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/45">
                            <span>{project.type}</span>
                            <span className="h-1 w-1 rounded-full bg-black/20" />
                            <span>{project.location}</span>
                        </div>
                    </Reveal>
                    <Reveal variant="blur">
                        <h3 className="text-4xl font-medium leading-none tracking-[-0.04em] text-[#111111] md:text-5xl">
                            {project.title}
                        </h3>
                    </Reveal>
                </div>


                <div className="max-w-sm">
                    <Reveal
                        variant="blur"
                        delay={0.1}
                    >
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black/60">
                            {project.description}
                        </p>
                    </Reveal>
                </div>

            </div>

            {/* Before / After */}

            <BeforeAfter
                title={project.title}
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                priority={priority}
                reverse={reverse}
                className="mt-14"
            />

            {/* Metadata */}

            <ProjectMeta
                type={project.type}
                location={project.location}
                designFocus={project.designFocus}
            />

        </article>
    );
}