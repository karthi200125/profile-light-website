"use client";

import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

import { getUploadConfig } from "@/lib/upload/upload-config";
import type { UploadType } from "@/lib/upload/upload-types";

interface UploadDropzoneProps {
    type: UploadType;
    disabled?: boolean;
    onSelect: (file: File) => void;
}

export default function UploadDropzone({
    type,
    disabled = false,
    onSelect,
}: UploadDropzoneProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isDragging, setIsDragging] =
        useState(false);

    const config =
        getUploadConfig(type);

    function handleFiles(
        files: FileList | null
    ) {
        if (!files?.length) return;

        onSelect(files[0]);
    }

    function openFilePicker() {
        if (disabled) return;

        inputRef.current?.click();
    }

    return (
        <>
            <div
                role="button"
                tabIndex={disabled ? -1 : 0}
                onClick={openFilePicker}
                onKeyDown={(event) => {
                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {
                        event.preventDefault();

                        openFilePicker();
                    }
                }}
                onDragOver={(event) => {
                    event.preventDefault();

                    if (!disabled) {
                        setIsDragging(true);
                    }
                }}
                onDragLeave={(event) => {
                    event.preventDefault();

                    setIsDragging(false);
                }}
                onDrop={(event) => {
                    event.preventDefault();

                    setIsDragging(false);

                    if (disabled) return;

                    handleFiles(
                        event.dataTransfer.files
                    );
                }}
                className={`
                    group
                    flex
                    min-h-[340px]
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-dashed
                    transition-all
                    duration-300

                    ${isDragging
                        ? "border-black bg-neutral-100"
                        : "border-neutral-300 bg-white hover:border-black hover:bg-neutral-50"
                    }

                    ${disabled
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                `}
            >
                {/* Icon */}

                <div
                    className={`
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${isDragging
                            ? "border-black bg-black text-white"
                            : "border-neutral-300 bg-neutral-100 text-neutral-700 group-hover:border-black group-hover:bg-black group-hover:text-white"
                        }
                    `}
                >
                    <ImagePlus className="h-9 w-9" />
                </div>

                {/* Heading */}

                <h3 className="mt-8 text-xl font-semibold text-neutral-900">
                    Drag & Drop Image
                </h3>

                <p className="mt-3 max-w-sm text-center text-sm leading-7 text-neutral-500">
                    or{" "}
                    <span className="font-medium text-black">
                        browse your computer
                    </span>
                </p>

                <div className="mt-8 space-y-1 text-center text-sm text-neutral-400">

                    <p>
                        {config.helperText}
                    </p>

                    {config.recommendedDimensions && (
                        <p>
                            Recommended{" "}
                            {
                                config.recommendedDimensions
                            }
                        </p>
                    )}

                </div>
            </div>

            <input
                ref={inputRef}
                hidden
                type="file"
                disabled={disabled}
                accept={config.acceptedMimeTypes.join(",")}
                onChange={(event) =>
                    handleFiles(
                        event.target.files
                    )
                }
            />
        </>
    );
}