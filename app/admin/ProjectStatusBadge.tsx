import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectStatusBadgeProps {
    isPublished: boolean;
}

const STATUS_CONFIG = {
    true: {
        label: "Published",
        className:
            "border-emerald-500/20 bg-emerald-500/10 text-emerald-600",
    },

    false: {
        label: "Draft",
        className:
            "border-neutral-500/20 bg-neutral-500/10 text-neutral-600",
    },
} as const;

export default function ProjectStatusBadge({
    isPublished,
}: ProjectStatusBadgeProps) {
    const config = STATUS_CONFIG[String(isPublished) as "true" | "false"];

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