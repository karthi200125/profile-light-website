import {
    UploadType,
    UploadTypeConfig,
} from "./upload-types";

const IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
] as const;

export const UPLOAD_CONFIG: Record<
    UploadType,
    UploadTypeConfig
> = {
    "project-image": {
        title: "Upload Project Image",
        helperText: "JPG, PNG or WebP • Maximum file size 5 MB",
        dropzoneLabel: "Drag & drop an image here or click to browse",
        submitLabel: "Upload Image",
        acceptedMimeTypes: [...IMAGE_MIME_TYPES],
        acceptedExtensionLabels: [
            "JPG",
            "PNG",
            "WebP",
        ],
        maxSizeBytes: 5 * 1024 * 1024,
        maxSizeLabel: "5 MB",
        kind: "image",
        folder: "straightline/projects",
        resourceType: "image",
        recommendedDimensions: "1920 × 1080",
        square: false,
    },
} as const;

export function getUploadConfig(
    type: UploadType
): UploadTypeConfig {
    return UPLOAD_CONFIG[type];
}

export function parseUploadType(
    value: unknown
): UploadType | null {
    if (typeof value !== "string") {
        return null;
    }

    return value in UPLOAD_CONFIG
        ? (value as UploadType)
        : null;
}