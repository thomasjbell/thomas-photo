"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const VideoBlock = dynamic(() => import("./VideoBlock"), {
  ssr: false,
  loading: () => (
    <div className="my-6 w-full aspect-video rounded-2xl bg-mono-100 dark:bg-mono-400 animate-pulse" />
  ),
});

function ContentBlock({ block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-2xl font-bold text-mono-500 dark:text-mono-50 mt-10 mb-3">
          {block.text}
        </h2>
      );

    case "text":
      return (
        <p className="text-base text-mono-400 dark:text-mono-200 leading-relaxed mb-4">
          {block.text}
        </p>
      );

    case "image":
      return (
        <figure className="my-6">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-mono-300 dark:text-mono-300">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "video":
      return <VideoBlock src={block.src} caption={block.caption} />;

    case "gallery":
      return (
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {block.images.map((img, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden">
              <div className="relative aspect-video">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
              {img.caption && (
                <figcaption className="mt-1.5 text-center text-xs text-mono-300 dark:text-mono-300">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function ContentBlocks({ blocks }) {
  return (
    <>
      {blocks?.map((block, i) => (
        <ContentBlock key={i} block={block} />
      ))}
    </>
  );
}