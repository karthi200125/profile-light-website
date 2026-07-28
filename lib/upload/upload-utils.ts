import {
    ImageDimensions,
    UploadTypeConfig,
    ValidationResult,
} from "./upload-types";

const FILE_SIZE_UNITS = [
    "B",
    "KB",
    "MB",
    "GB",
    "TB",
] as const;

export function formatFileSize(
    bytes: number
): string {
    if (bytes <= 0) {
        return "0 B";
    }

    const exponent = Math.min(
        Math.floor(Math.log(bytes) / Math.log(1024)),
        FILE_SIZE_UNITS.length - 1
    );

    const value = bytes / Math.pow(1024, exponent);

    return `${value.toFixed(exponent === 0 ? 0 : 2)} ${FILE_SIZE_UNITS[exponent]
        }`;
}

export function getFileExtension(
    fileName: string
): string {
    const extension = fileName.split(".").pop();

    return extension?.toUpperCase() ?? "FILE";
}

export function truncateFileName(
    fileName: string,
    maxLength = 30
): string {
    if (fileName.length <= maxLength) {
        return fileName;
    }

    const lastDot = fileName.lastIndexOf(".");

    if (lastDot === -1) {
        return `${fileName.slice(0, maxLength)}...`;
    }

    const name = fileName.slice(0, lastDot);
    const extension = fileName.slice(lastDot);

    return `${name.slice(
        0,
        Math.max(maxLength - extension.length - 3, 1)
    )}...${extension}`;
}

export function validateFile(
    file: File,
    config: UploadTypeConfig
): ValidationResult {
    if (
        !config.acceptedMimeTypes.includes(file.type)
    ) {
        return {
            valid: false,
            errorCode: "INVALID_TYPE",
            message: `Supported formats: ${config.acceptedExtensionLabels.join(
                ", "
            )}.`,
        };
    }

    if (file.size > config.maxSizeBytes) {
        return {
            valid: false,
            errorCode: "TOO_LARGE",
            message: `Maximum file size is ${config.maxSizeLabel}.`,
        };
    }

    return {
        valid: true,
    };
}

export function validateFileList(
    files: File[],
    config: UploadTypeConfig
): ValidationResult {
    if (!config.multiple && files.length > 1) {
        return {
            valid: false,
            errorCode: "MULTIPLE_FILES",
            message: "Only one file can be uploaded.",
        };
    }

    for (const file of files) {
        const validation = validateFile(
            file,
            config
        );

        if (!validation.valid) {
            return validation;
        }
    }

    return {
        valid: true,
    };
}

export function readImageDimensions(
    file: File
): Promise<ImageDimensions> {
    return new Promise(
        (
            resolve,
            reject
        ) => {
            const objectUrl =
                URL.createObjectURL(file);

            const image = new Image();

            image.onload = () => {
                URL.revokeObjectURL(objectUrl);

                resolve({
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                });
            };

            image.onerror = () => {
                URL.revokeObjectURL(objectUrl);

                reject(
                    new Error(
                        "Unable to read image dimensions."
                    )
                );
            };

            image.src = objectUrl;
        }
    );
}