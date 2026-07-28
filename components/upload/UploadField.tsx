"use client";

import { useEffect, useRef, useState } from "react";

import UploadDropzone from "./UploadDropzone";
import UploadPreview from "./UploadPreview";
import UploadProgress from "./UploadProgress";

import { getUploadConfig } from "@/lib/upload/upload-config";
import { readImageDimensions, validateFile } from "@/lib/upload/upload-utils";

import type { ImageDimensions, UploadType } from "@/lib/upload/upload-types";
import { type UploadResponse, useUpload } from "@/lib/upload/useUpload";

// ─── Types ────────────────────────────────────────────────────────────────────

interface UploadFieldProps {
    type: UploadType;
    value?: UploadResponse | null;
    disabled?: boolean;
    onChange?: (value: UploadResponse | null) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function UploadField({
    type,
    value,
    disabled = false,
    onChange,
}: UploadFieldProps) {
    const config = getUploadConfig(type);

    const { upload, progress, error, isUploading, cancelUpload, reset } = useUpload();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);

    const objectUrlRef = useRef<string | null>(null);

    // Revoke object URL on unmount to prevent memory leaks
    useEffect(() => {
        return () => {
            if (objectUrlRef.current) {
                URL.revokeObjectURL(objectUrlRef.current);
            }
        };
    }, []);

    // Auto-upload whenever a new file is selected
    useEffect(() => {
        if (!selectedFile) return;
        void handleUpload();
    }, [selectedFile]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─── Handlers ─────────────────────────────────────────────────────────────

    async function handleFileSelect(file: File) {
        setValidationError(null);

        const result = validateFile(file, config);
        if (!result.valid) {
            setValidationError(result.message ?? "Invalid file.");
            return;
        }

        // Revoke previous object URL before creating a new one
        if (objectUrlRef.current) {
            URL.revokeObjectURL(objectUrlRef.current);
        }

        const url = URL.createObjectURL(file);
        objectUrlRef.current = url;

        setPreviewUrl(url);
        setSelectedFile(file);

        try {
            const imageDimensions = await readImageDimensions(file);
            setDimensions(imageDimensions);
        } catch {
            setDimensions(null);
        }
    }

    async function handleUpload() {
        if (!selectedFile) return;

        try {
            const response = await upload({ file: selectedFile, type });
            onChange?.(response);
        } catch {
            // Error state is exposed via the useUpload hook's `error` field
        }
    }

    function handleRemove() {
        if (objectUrlRef.current) {
            URL.revokeObjectURL(objectUrlRef.current);
            objectUrlRef.current = null;
        }

        reset();
        setSelectedFile(null);
        setPreviewUrl("");
        setDimensions(null);
        setValidationError(null);
        onChange?.(null);
    }

    // ─── Derived state ────────────────────────────────────────────────────────

    const hasUploadedImage = Boolean(value?.url);
    const currentPreview = value?.url ?? previewUrl;
    const currentFileName = selectedFile?.name ?? value?.url.split("/").pop() ?? "Image";
    const isBusy = disabled || isUploading;

    // ─── Render ───────────────────────────────────────────────────────────────

    return (
        <div className="space-y-6">
            {validationError && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {validationError}
                </p>
            )}

            {!hasUploadedImage && !selectedFile && (
                <UploadDropzone
                    type={type}
                    disabled={isBusy}
                    onSelect={handleFileSelect}
                />
            )}

            {isUploading && (
                <UploadProgress
                    progress={progress}
                    status="Uploading image..."
                    onCancel={cancelUpload}
                />
            )}


            <UploadPreview
                imageUrl={currentPreview}
                file={selectedFile ?? undefined}
                dimensions={dimensions ?? undefined}
                disabled={isBusy}
                onRemove={handleRemove}
            />

        </div>
    );
}