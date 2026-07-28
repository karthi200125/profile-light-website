"use client";

import { X, Check } from "lucide-react";
import { formatFileSize } from "@/lib/upload/upload-utils";
import Image from "next/image";

interface UploadPreviewProps {
    imageUrl: string;
    file?: File;
    dimensions?: { width: number; height: number };
    disabled?: boolean;
    onRemove: () => void;
}

export default function UploadPreview({
    imageUrl,
    file,
    dimensions,
    disabled = false,
    onRemove,
}: UploadPreviewProps) {

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                    src={imageUrl}
                    alt={file?.name ?? "Uploaded image"}
                    fill
                    sizes="100vw"
                    unoptimized
                    className="object-cover"
                />

                {/* Remove button */}
                <button
                    type="button"
                    onClick={onRemove}
                    disabled={disabled}
                    aria-label="Remove image"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-sm transition hover:bg-black disabled:pointer-events-none disabled:opacity-50"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 px-4 py-3">
                <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-800">
                        {file?.name ?? "Uploaded Image"}
                    </p>
                    {(file || dimensions) && (
                        <p className="mt-0.5 text-xs text-slate-400">
                            {file && formatFileSize(file.size)}
                            {file && dimensions && " · "}
                            {dimensions && `${dimensions.width} × ${dimensions.height}`}
                        </p>
                    )}
                </div>

                <div className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-700">Uploaded</span>
                </div>
            </div>

        </div>
    );
}