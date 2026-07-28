"use client";

interface UploadProgressProps {
  progress: number;
  status?: string;
  onCancel?: () => void;
  showCancel?: boolean;
}

export default function UploadProgress({
  progress,
  status = "Uploading image...",
  onCancel,
  showCancel = true,
}: UploadProgressProps) {
  const percentage = Math.min(
    100,
    Math.max(0, Math.round(progress))
  );

  return (
    <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-sm font-semibold text-neutral-900">
            Uploading
          </h3>

          <p className="mt-1 text-sm text-neutral-500">
            {status}
          </p>
        </div>

        <span className="text-sm font-semibold text-neutral-900">
          {percentage}%
        </span>

      </div>

      {/* Progress */}

      <div
        className="h-2 w-full overflow-hidden rounded-full bg-neutral-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-label="Upload Progress"
      >
        <div
          className="h-full rounded-full bg-black transition-all duration-300 ease-out"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      {/* Footer */}

      {showCancel && onCancel && (
        <div className="flex justify-end">

          <button
            type="button"
            onClick={onCancel}
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
          >
            Cancel Upload
          </button>

        </div>
      )}

    </div>
  );
}