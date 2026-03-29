"use client";
import { useState, useEffect } from "react";
import { projectItems } from "../../utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import LoadingScreen from "../../components/LoadingScreen";

export default function ProjectsPage() {
  const [randomizedItems, setRandomizedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shuffle = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const shuffled = shuffle(projectItems);
    setRandomizedItems(shuffled);

    const preload = async () => {
      const critical = shuffled.slice(0, 3);
      const promises = critical.map(
        (item) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = item.imagePath;
          })
      );
      await Promise.race([
        Promise.all(promises),
        new Promise((r) => setTimeout(r, 800)),
      ]);
      setTimeout(() => setIsLoading(false), 100);
    };

    if (shuffled.length > 0) preload();
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
            {randomizedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="flex flex-col overflow-hidden bg-mono-50 dark:bg-mono-400 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={item.imagePath}
                    alt={`${item.title} — project by Thomas J Bell`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh6MVLzNkCGlLbCZELTkuBhXOj/dLi0adqKDJh8qjFElQNLhUPnb2WTRy8llnhwTBmQgO5UjWrW4c8/8AKWHmR5/WvEALGJB/+RBvUH1YnHNJNFNNB3mIjnFG8NqTOuQgZPPWOhJ4WOtDFQq9IrR3lq5c/lZKq6zIcktq3rLmhOgLUjl9kqwSQfubnb7O4QjIe3G7qe4YnAYnJcJbsV4K7Q5PLj2qqtD1xjZgMoGjNaJ8Cp7q7V4oTznD8/XQHY8DNWGMY3p49V7Bs+wXmX3Pp2CpH/B5V3iXcFRLPdPnpqiQHj39e3lq4QNqFrxDOZe4pBCYVpkVKHlJjD4CqLjWTrAVEd8KdLfGE9HQ4Ot6OzB6u3I2nCGlS2Eg/TGJS2G1Nh2jdNhRIH+qJEKhGNzlKF+6LjALlh1iYEqF2Kb+QqlLa1w7qsAgFVrBL5UdBlMJjMrW9J4K2pKEkJPgI="
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-xl font-bold text-mono-500 dark:text-mono-50">
                    {item.title}
                  </h3>

                  <p className="text-sm text-mono-300 dark:text-mono-200 line-clamp-2 flex-1">
                    {item.description}
                  </p>

                  {/* Tech tags */}
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

                  {/* Buttons */}
                  {item.links?.length > 0 && (
                    <div className="flex gap-2 pt-1">
                      {item.links.map((link) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            y: -2,
                            scale: 1.03,
                            boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)",
                          }}
                          whileTap={{ y: 1, scale: 0.97 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                          className={`
                            flex-1 text-center text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-200
                            ${link.variant === "slate"
                              ? "bg-mono-500 dark:bg-mono-100 text-mono-50 dark:text-mono-500 hover:bg-mono-400 dark:hover:bg-mono-50"
                              : "border-2 border-mono-300 dark:border-mono-200 text-mono-400 dark:text-mono-200 hover:border-mono-500 dark:hover:border-mono-50 hover:text-mono-500 dark:hover:text-mono-50"
                            }
                          `}
                        >
                          {link.label}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}