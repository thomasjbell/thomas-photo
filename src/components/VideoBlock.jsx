"use client";

export default function VideoBlock({ src, caption }) {
  return (
    <figure className="my-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-black">
        <video
          src={src}
          controls
          className="w-full h-auto"
          preload="metadata"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-mono-300 dark:text-mono-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}