import { notFound } from "next/navigation";
import { projectItems } from "../../../utils/constants";
import Image from "next/image";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { ProjectDetailSchema } from "../../../components/StructuredData";

// Generates static routes at build time for each slug
export async function generateStaticParams() {
  return projectItems
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = projectItems.find((p) => p.slug === params.slug);
  if (!project) return {};
  return generateSEOMetadata({
    title: project.title,
    description: project.description,
    url: `/projects/${project.slug}`,
    image: project.imagePath,
    type: 'article',
    keywords: project.technologies,
  });
}

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
      return (
        <figure className="my-6">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black">
            <video
              src={block.src}
              controls
              className="w-full h-auto"
              preload="metadata"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-mono-300 dark:text-mono-300">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "gallery":
      return (
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {block.images.map((img, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
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

export default function ProjectDetailPage({ params }) {
  const project = projectItems.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: `/projects/${project.slug}`, label: project.title },
  ];

  return (
    <section className="py-8 bg-mono-50 dark:bg-mono-500 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Breadcrumbs crumbs={crumbs} />

        {/* Hero */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/15 text-white border border-white/25 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* External links */}
        {project.links?.length > 0 && (
          <div className="flex gap-3 mb-8">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200
                  ${link.variant === "slate"
                    ? "bg-mono-500 dark:bg-mono-100 text-mono-50 dark:text-mono-500 hover:bg-mono-400"
                    : "border-2 border-mono-300 dark:border-mono-200 text-mono-400 dark:text-mono-200 hover:border-mono-500 hover:text-mono-500 dark:hover:border-mono-50 dark:hover:text-mono-50"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Content blocks */}
        <div className="bg-white dark:bg-mono-500 border border-mono-200 dark:border-mono-400 rounded-2xl p-6 md:p-10 drop-shadow-lg">
          {project.content?.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>

      </div>
    </section>
  );
}