"use client";
import { useState, useEffect } from "react";
import { projectItems } from "../../utils/constants";
import Image from "next/image";
import { motion } from "motion/react";
import LoadingScreen from "../../components/LoadingScreen";
import Button from "../../components/Button";
export default function ProjectsClient() {
  // Renamed for clarity: items are now ordered, not randomized
  const [orderedItems, setOrderedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Sort the items by ID in descending order (highest ID first)
    const sorted = [...projectItems].sort((a, b) => b.id - a.id);
    setOrderedItems(sorted);

    const preload = async () => {
      const critical = sorted.slice(0, 3);
      const promises = critical.map(
        (item) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = item.imagePath;
          }),
      );
      await Promise.race([
        Promise.all(promises),
        new Promise((r) => setTimeout(r, 800)),
      ]);
      setTimeout(() => setIsLoading(false), 100);
    };

    if (sorted.length > 0) preload();
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <section className="py-8 bg-mono-50 dark:bg-mono-500" id="projects">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-8 md:mb-12 bg-white dark:bg-mono-500 border dark:border-mono-400 border-mono-200 p-6 md:p-8 drop-shadow-lg rounded-2xl"
          >
            <h1 className="text-4xl font-black text-slate-900 dark:text-mono-200 mb-4">
              PROJECTS
            </h1>
            <p className="text-lg text-mono-500 dark:text-mono-300 max-w-2xl mx-auto">
              A showcase of my creations, from websites to Blender projects.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-mono-200 dark:border-mono-400 p-4 md:p-6 bg-white dark:bg-mono-500 drop-shadow-lg rounded-2xl">
            {/* 2. Change randomizedItems.map to orderedItems.map */}
            {orderedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="flex flex-col overflow-hidden bg-mono-50 border border-mono-200 dark:border-0 dark:bg-mono-400 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* ... existing card content ... */}
                {item.slug ? (
                  <a
                    href={`/projects/${item.slug}`}
                    className="block relative w-full aspect-video overflow-hidden group"
                  >
                    <Image
                      src={item.imagePath}
                      alt={`${item.title} — project by Thomas J Bell`}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </a>
                ) : (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={item.imagePath}
                      alt={`${item.title} — project by Thomas J Bell`}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-xl font-bold text-mono-500 dark:text-mono-50">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mono-400 dark:text-mono-200 line-clamp-2 flex-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-mono-100 dark:bg-mono-500 text-mono-400 dark:text-mono-200 border border-mono-200 dark:border-mono-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.links?.map((link) => (
                      <Button
                        key={link.href}
                        href={link.href}
                        variant={
                          link.variant === "slate" ? "mono" : "mono-outline"
                        }
                        size="card"
                        className="flex-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </Button>
                    ))}
                    {item.slug && (
                      <Button
                        href={`/projects/${item.slug}`}
                        variant="mono-outline"
                        size="card"
                        className="flex-1"
                      >
                        Read More
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
