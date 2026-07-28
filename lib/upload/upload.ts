import { UploadApiResponse } from "cloudinary";

import { cloudinary } from "./cloudinary";

export type UploadResult = {
  url: string;
  publicId: string;
};

type UploadOptions = {
  folder: string;
  resourceType?: "image" | "raw" | "auto";
};

export async function uploadToCloudinary(
  buffer: Buffer,
  {
    folder,
    resourceType = "image",
  }: UploadOptions
): Promise<UploadResult> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,

        resource_type: resourceType,

        use_filename: true,

        unique_filename: true,

        overwrite: false,
      },

      (
        error,
        result?: UploadApiResponse
      ) => {
        if (error || !result) {
          return reject(
            error ??
            new Error(
              "Cloudinary upload failed."
            )
          );
        }

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    stream.end(buffer);
  });
}

export async function deleteFromCloudinary(
  publicId: string
): Promise<void> {
  await cloudinary.uploader.destroy(publicId, {
    invalidate: true,
  });
}