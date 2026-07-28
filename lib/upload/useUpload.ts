"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { UploadType } from "@/lib/upload/upload-types";

const UPLOAD_ENDPOINT = "/api/upload";
const UPLOAD_TIMEOUT = 60_000;

export interface UploadResponse {
    url: string;
    publicId: string;
}

interface UploadApiSuccessBody {
    success: true;
    message: string;
    data: UploadResponse;
}

interface UploadApiErrorBody {
    error: string;
}

interface UploadOptions {
    file: File;
    type: UploadType;
    fields?: Record<
        string,
        string | number | boolean
    >;
}

export type UploadErrorReason =
    | "network"
    | "timeout"
    | "cancelled"
    | "server"
    | "invalid-response"
    | "busy";

export class UploadError extends Error {
    readonly reason: UploadErrorReason;
    readonly status?: number;

    constructor(
        message: string,
        reason: UploadErrorReason,
        status?: number
    ) {
        super(message);

        this.name = "UploadError";
        this.reason = reason;
        this.status = status;
    }
}

interface UseUploadReturn {
    upload: (
        options: UploadOptions
    ) => Promise<UploadResponse>;

    cancelUpload: () => void;

    progress: number;

    isUploading: boolean;

    error: string | null;

    reset: () => void;
}

export function useUpload(): UseUploadReturn {
    const xhrRef =
        useRef<XMLHttpRequest | null>(null);

    const mountedRef = useRef(true);

    const [progress, setProgress] =
        useState(0);

    const [isUploading, setIsUploading] =
        useState(false);

    const [error, setError] =
        useState<string | null>(null);

    const safeSetProgress = useCallback(
        (value: number) => {
            if (mountedRef.current) {
                setProgress(value);
            }
        },
        []
    );

    const safeSetUploading =
        useCallback((value: boolean) => {
            if (mountedRef.current) {
                setIsUploading(value);
            }
        }, []);

    const safeSetError = useCallback(
        (value: string | null) => {
            if (mountedRef.current) {
                setError(value);
            }
        },
        []
    );

    const reset = useCallback(() => {
        safeSetProgress(0);
        safeSetUploading(false);
        safeSetError(null);
    }, [
        safeSetProgress,
        safeSetUploading,
        safeSetError,
    ]);

    const cancelUpload =
        useCallback(() => {
            xhrRef.current?.abort();
            xhrRef.current = null;
        }, []);

    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;

            cancelUpload();
        };
    }, [cancelUpload]);

    const upload = useCallback(
        ({
            file,
            type,
            fields,
        }: UploadOptions) => {
            return new Promise<UploadResponse>(
                (resolve, reject) => {
                    if (xhrRef.current) {
                        reject(
                            new UploadError(
                                "Another upload is already in progress.",
                                "busy"
                            )
                        );

                        return;
                    }

                    reset();

                    const xhr =
                        new XMLHttpRequest();

                    xhr.timeout =
                        UPLOAD_TIMEOUT;

                    xhrRef.current = xhr;

                    const formData =
                        new FormData();

                    formData.append(
                        "file",
                        file
                    );

                    formData.append(
                        "type",
                        type
                    );

                    if (fields) {
                        Object.entries(
                            fields
                        ).forEach(
                            ([key, value]) => {
                                formData.append(
                                    key,
                                    String(
                                        value
                                    )
                                );
                            }
                        );
                    }

                    const finish = (
                        err?: UploadError,
                        response?: UploadResponse
                    ) => {
                        xhrRef.current =
                            null;

                        safeSetUploading(
                            false
                        );

                        if (err) {
                            safeSetError(
                                err.message
                            );

                            reject(err);

                            return;
                        }

                        safeSetProgress(
                            100
                        );

                        setTimeout(() => {
                            safeSetProgress(
                                0
                            );
                        }, 500);

                        resolve(
                            response!
                        );
                    };

                    xhr.onloadstart =
                        () => {
                            safeSetUploading(
                                true
                            );
                        };

                    xhr.upload.onprogress =
                        (event) => {
                            if (
                                event.lengthComputable
                            ) {
                                safeSetProgress(
                                    Math.round(
                                        (event.loaded /
                                            event.total) *
                                        100
                                    )
                                );
                            }
                        };

                    xhr.onerror =
                        () => {
                            finish(
                                new UploadError(
                                    "Upload failed. Please check your connection.",
                                    "network"
                                )
                            );
                        };

                    xhr.ontimeout =
                        () => {
                            finish(
                                new UploadError(
                                    "Upload timed out. Please try again.",
                                    "timeout"
                                )
                            );
                        };

                    xhr.onabort =
                        () => {
                            finish(
                                new UploadError(
                                    "Upload cancelled.",
                                    "cancelled"
                                )
                            );
                        };

                    xhr.onload =
                        () => {
                            if (
                                xhr.status <
                                200 ||
                                xhr.status >=
                                300
                            ) {
                                let message = `Upload failed (${xhr.status}).`;

                                try {
                                    const body =
                                        JSON.parse(
                                            xhr.responseText
                                        ) as UploadApiErrorBody;

                                    if (
                                        body.error
                                    ) {
                                        message =
                                            body.error;
                                    }
                                } catch { }

                                finish(
                                    new UploadError(
                                        message,
                                        "server",
                                        xhr.status
                                    )
                                );

                                return;
                            }

                            let body: UploadApiSuccessBody;

                            try {
                                body =
                                    JSON.parse(
                                        xhr.responseText
                                    );
                            } catch {
                                finish(
                                    new UploadError(
                                        "Upload succeeded but the response was invalid.",
                                        "invalid-response"
                                    )
                                );

                                return;
                            }

                            if (
                                !body?.data
                                    ?.url ||
                                !body?.data
                                    ?.publicId
                            ) {
                                finish(
                                    new UploadError(
                                        "Upload succeeded but the response was invalid.",
                                        "invalid-response"
                                    )
                                );

                                return;
                            }

                            finish(
                                undefined,
                                body.data
                            );
                        };

                    xhr.open(
                        "POST",
                        UPLOAD_ENDPOINT
                    );

                    xhr.send(formData);
                }
            );
        },
        [
            reset,
            safeSetError,
            safeSetProgress,
            safeSetUploading,
        ]
    );

    return {
        upload,
        cancelUpload,
        progress,
        isUploading,
        error,
        reset,
    };
}