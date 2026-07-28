export const UPLOAD_TYPES = {
    PROJECT_IMAGE: "project-image",
} as const;

export type UploadType =
    (typeof UPLOAD_TYPES)[keyof typeof UPLOAD_TYPES];

export type UploadKind =
    | "image"
    | "pdf"
    | "file";

export type UploadResourceType =
    | "image"
    | "raw"
    | "auto";

export type UploadTypeConfig = {
    title: string;
    description?: string;

    helperText: string;

    dropzoneLabel: string;
    dropzoneSubtext?: string;

    submitLabel: string;

    acceptedMimeTypes: readonly string[];
    acceptedExtensionLabels: readonly string[];

    maxSizeBytes: number;
    maxSizeLabel: string;

    kind: UploadKind;

    folder: string;
    resourceType: UploadResourceType;

    recommendedDimensions?: string;

    square?: boolean;

    multiple?: boolean;
};

export type ValidationErrorCode =
    | "INVALID_TYPE"
    | "TOO_LARGE"
    | "MULTIPLE_FILES";

export type ValidationResult = {
    valid: boolean;

    errorCode?: ValidationErrorCode;

    message?: string;
};

export type ImageDimensions = {
    width: number;
    height: number;
};