import { NextRequest, NextResponse } from "next/server";

import {
  getUploadConfig,
  parseUploadType,
} from "@/lib/upload/upload-config";

import { uploadToCloudinary } from "@/lib/upload/upload";

function errorResponse(
  message: string,
  status: number
) {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    {
      status,
    }
  );
}

function successResponse(data: {
  url: string;
  publicId: string;
}) {
  return NextResponse.json({
    success: true,
    message: "File uploaded successfully.",
    data,
  });
}

export async function POST(
  request: NextRequest
) {
  try {
    const formData =
      await request.formData();

    const file =
      formData.get("file");

    const type =
      parseUploadType(
        formData.get("type")
      );

    if (!(file instanceof File)) {
      return errorResponse(
        "File is required.",
        400
      );
    }

    if (!type) {
      return errorResponse(
        "Invalid upload type.",
        400
      );
    }

    const config =
      getUploadConfig(type);

    if (
      !config.acceptedMimeTypes.includes(
        file.type
      )
    ) {
      return errorResponse(
        `Supported formats: ${config.acceptedExtensionLabels.join(
          ", "
        )}.`,
        400
      );
    }

    if (
      file.size >
      config.maxSizeBytes
    ) {
      return errorResponse(
        `Maximum file size is ${config.maxSizeLabel}.`,
        400
      );
    }

    const buffer = Buffer.from(
      await file.arrayBuffer()
    );

    const uploaded =
      await uploadToCloudinary(
        buffer,
        {
          folder:
            config.folder,

          resourceType:
            config.resourceType,
        }
      );

    return successResponse(
      uploaded
    );
  } catch (error) {
    console.error(
      "[UPLOAD_ROUTE]",
      error
    );

    return errorResponse(
      "Failed to upload file.",
      500
    );
  }
}