import type { ProjectType } from "@prisma/client";

interface ProjectMetaProps {
    type: ProjectType;
    location: string;
    designFocus: string;
}

export default function ProjectMeta({
    type,
    location,
    designFocus,
}: ProjectMetaProps) {
    return (
        <div className="mt-10 py-10 grid gap-8 border-b border-black/10  md:grid-cols-3">

            {/* Type */}

            <div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-black/40">
                    Project Type
                </p>

                <p className="text-base font-medium text-[#111111]">
                    {formatProjectType(type)}
                </p>

            </div>

            {/* Location */}

            <div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-black/40">
                    Location
                </p>

                <p className="text-base font-medium text-[#111111]">
                    {location}
                </p>

            </div>

            {/* Design Focus */}

            <div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-black/40">
                    Design Focus
                </p>

                <p className="text-base leading-relaxed text-black/70">
                    {designFocus}
                </p>

            </div>

        </div>
    );
}

function formatProjectType(type: ProjectType) {
    switch (type) {
        case "RESIDENTIAL":
            return "Residential";

        case "COMMERCIAL":
            return "Commercial";

        case "RETAIL":
            return "Retail";

        default:
            return type;
    }
}