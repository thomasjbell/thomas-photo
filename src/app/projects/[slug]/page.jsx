import { notFound } from "next/navigation";
import { projectItems } from "../../../utils/constants";
import Image from "next/image";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ContentBlocks from "../../../components/ContentBlocks";
import { generateMetadata as generateSEOMetadata } from "../../../utils/seo";

export async function generateStaticParams() {
  return projectItems.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectItems.find((p) => p.slug === slug);
  if (!project) return {};
  return generateSEOMetadata({
    title: project.title,
    description: project.description,
    url: `/projects/${project.slug}`,
    image: project.imagePath,
    type: "article",
    keywords: project.technologies,
  });
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectItems.find((p) => p.slug === slug);
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
                  ${
                    link.variant === "slate"
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
          <ContentBlocks blocks={project.content} />
        </div>
      </div>
    </section>
  );
}
