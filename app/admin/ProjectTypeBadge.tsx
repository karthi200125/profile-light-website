import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProjectType =
    | "RESIDENTIAL"
    | "COMMERCIAL"
    | "RETAIL";

interface ProjectTypeBadgeProps {
    type: ProjectType;
}

const TYPE_CONFIG: Record<
    ProjectType,
    {
        label: string;
        className: string;
    }
> = {
    RESIDENTIAL: {
        label: "Residential",
        className:
            "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },

    COMMERCIAL: {
        label: "Commercial",
        className:
            "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },

    RETAIL: {
        label: "Retail",
        className:
            "bg-violet-500/10 text-violet-600 border-violet-500/20",
    },
};

export default function ProjectTypeBadge({
    type,
}: ProjectTypeBadgeProps) {
    const config = TYPE_CONFIG[type];

    return (
        <Badge
            variant="outline"
            className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium",
                config.className
            )}
        >
            {config.label}
        </Badge>
    );
}