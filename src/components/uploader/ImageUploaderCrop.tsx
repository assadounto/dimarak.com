'use client';

import { useCallback, useMemo, useState } from 'react';
import Cropper from 'react-easy-crop';
import { useDropzone } from 'react-dropzone';

type Props = {
  label: string;
  aspect: number; // e.g. 1 for logo, 16/9 for banner
  value?: File | null; // current file
  previewUrl?: string; // existing URL (edit mode)
  onChange: (file: File | null) => void;
  accept?: string; // e.g. 'image/*'
  roundPreview?: boolean; // circle preview for logos
};

export default function ImageUploaderCrop({
  label,
  aspect,
  value,
  previewUrl,
  onChange,
  accept = 'image/*',
  roundPreview = false
}: Props) {
  const [rawSrc, setRawSrc] = useState<string | null>(null); // src to crop
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);
  const [busy, setBusy] = useState(false);

  // read current preview (from value or fallback)
  const currentPreview = useMemo(() => {
    if (rawSrc) return rawSrc; // while cropping, show the selected image
    if (value) return URL.createObjectURL(value);
    return previewUrl || null;
  }, [value, previewUrl, rawSrc]);

  const onDrop = useCallback((accepted: File[]) => {
    const f = accepted?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setRawSrc(String(reader.result));
    reader.readAsDataURL(f);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    multiple: false,
    onDrop
  });

  const onCropComplete = useCallback((_: any, areaPixels: any) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  async function createImage(src: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', (e) => reject(e));
      img.crossOrigin = 'anonymous';
      img.src = src;
    });
  }

  async function getCroppedFile(
    imageSrc: string,
    cropPx: { x: number; y: number; width: number; height: number },
    fileName = 'image.webp',
    mime = 'image/webp'
  ): Promise<File> {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = cropPx.width;
    canvas.height = cropPx.height;
    ctx.drawImage(
      image,
      cropPx.x,
      cropPx.y,
      cropPx.width,
      cropPx.height,
      0,
      0,
      cropPx.width,
      cropPx.height
    );
    const blob: Blob = await new Promise((resolve) =>
      canvas.toBlob((b) => resolve(b as Blob), mime, 0.92)
    );
    return new File([blob], fileName, { type: mime });
  }

  const confirmCrop = async () => {
    if (!rawSrc || !croppedAreaPixels) return;
    setBusy(true);
    try {
      const file = await getCroppedFile(
        rawSrc,
        croppedAreaPixels,
        `upload_${Math.random().toString(36).slice(2)}.webp`
      );
      onChange(file);
      setRawSrc(null); // close cropper
    } finally {
      setBusy(false);
    }
  };

  const remove = () => {
    onChange(null);
    setRawSrc(null);
  };

  return (
    <div className='space-y-2'>
      <label className='text-xs font-medium'>{label}</label>

      {/* Display: either chosen preview + change/remove, or dropzone */}
      {currentPreview ? (
        <div className='flex items-center gap-3'>
          <div
            className={[
              'relative overflow-hidden border bg-gray-100 dark:border-gray-800 dark:bg-gray-900',
              roundPreview ? 'h-16 w-16 rounded-full' : 'h-24 w-40 rounded-md'
            ].join(' ')}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentPreview}
              alt='preview'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='h-9 rounded-md border px-3 text-sm dark:border-gray-800'
              onClick={() => setRawSrc(currentPreview)} // re-crop
            >
              Re-crop
            </button>
            <button
              type='button'
              className='h-9 rounded-md border px-3 text-sm text-rose-600 dark:border-gray-800'
              onClick={remove}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={[
            'flex h-28 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center text-xs transition',
            isDragActive
              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
              : 'dark:border-gray-800'
          ].join(' ')}
        >
          <input {...getInputProps()} accept={accept} />
          <p className='px-4'>
            <strong>Click to upload</strong> or drag & drop
            <br />
            (PNG, JPG, WebP)
          </p>
        </div>
      )}

      {/* Cropper Modal */}
      {rawSrc && (
        <div className='fixed inset-0 z-50 grid place-items-center bg-black/60 p-4'>
          <div className='w-full max-w-lg rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-950'>
            <h3 className='mb-2 text-sm font-semibold'>Crop image</h3>
            <div className='relative h-80 w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-900'>
              <Cropper
                image={rawSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                showGrid={false}
                restrictPosition
              />
            </div>
            <div className='mt-3 flex items-center justify-between'>
              <input
                type='range'
                min={1}
                max={3}
                step={0.05}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className='w-40'
                aria-label='Zoom'
              />
              <div className='flex gap-2'>
                <button
                  type='button'
                  className='h-10 rounded-md border px-4 text-sm dark:border-gray-800'
                  onClick={() => setRawSrc(null)}
                  disabled={busy}
                >
                  Cancel
                </button>
                <button
                  type='button'
                  className='h-10 rounded-md bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60'
                  onClick={confirmCrop}
                  disabled={busy}
                >
                  {busy ? 'Saving…' : 'Use image'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
