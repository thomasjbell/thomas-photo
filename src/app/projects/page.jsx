// src/app/projects/page.jsx
"use client";
import { useState, useEffect } from "react";
import { projectItems } from "../../utils/constants";
import Image from "next/image";
import LoadingScreen from "../../components/LoadingScreen";

export default function ProjectsPage() {
  const [randomizedItems, setRandomizedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const shuffled = shuffleArray(projectItems);
    setRandomizedItems(shuffled);

    const preloadCriticalImages = async () => {
      const criticalImages = shuffled.slice(0, 2);

      const imagePromises = criticalImages.map((item) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = item.imagePath;
        });
      });

      try {
        await Promise.race([
          Promise.all(imagePromises),
          new Promise((resolve) => setTimeout(resolve, 800)),
        ]);
      } catch (error) {
        console.error("Error loading critical images:", error);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };

    if (shuffled.length > 0) {
      preloadCriticalImages();
    }
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <section className="py-8 bg-mono-50 dark:bg-mono-500" id="projects">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 bg-white dark:bg-mono-500 border dark:border-mono-400 border-mono-200 p-6 md:p-8 drop-shadow-lg">
            <h1 className="text-4xl font-black text-slate-900 dark:text-mono-200 mb-4">
              PROJECTS
            </h1>
            <p className="text-lg text-mono-500 dark:text-mono-300 max-w-2xl mx-auto">
              A showcase of websites, applications, and digital projects I've
              created using modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-mono-200 dark:border-mono-400 p-6 md:p-8 bg-white dark:bg-mono-500 drop-shadow-lg">
            {randomizedItems.map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ease-out bg-mono-50 dark:bg-mono-600 border border-mono-200 dark:border-mono-400"
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={item.imagePath}
                    alt={`${item.title} - Project by Thomas J Bell`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh6MVLzNkCGlLbCZELTkuBhXOj/dLi0adqKDJh8qjFElQNLhUPnb2WTRy8llnhwTBmQgO5UjWrW4c8/8AKWHmR5/WvEALGJB/+RBvUH1YnHNJNFNNB3mIjnFG8NqTOuQgZPPWOhJ4WOtDFQq9IrR3lq5c/lZKq6zIcktq3rLmhOgLUjl9kqwSQfubnb7O4QjIe3G7qe4YnAYnJcJbsV4K7Q5PLj2qqtD1xjZgMoGjNaJ8Cp7q7V4oTznD8/XQHY8DNWGMY3p49V7Bs+wXmX3Pp2CpH/B5V3iXcFRLPdPnpqiQHj39e3lq4QNqFrxDOZe4pBCYVpkVKHlJjD4CqLjWTrAVEd8KdLfGE9HQ4Ot6OzB6u3I2nCGlS2Eg/TGJS2G1Nh2jdNhRIH+qJEKhGNzlKF+6LjALlh1iYEqF2Kb+QqlLa1w7qsAgFVrBL5UdBlMJjMrW9J4K2pKEkJPgI="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-mono-200 mb-2 group-hover:text-slate-700 dark:group-hover:text-mono-100 transition-colours">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mono-500 dark:text-mono-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-mono-200 dark:bg-mono-500 text-mono-700 dark:text-mono-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-slate-900 dark:bg-mono-200 text-white dark:text-mono-900 font-semibold hover:bg-slate-700 dark:hover:bg-mono-100 transition-colours duration-200"
                      >
                        View Live
                      </a>
                    )}
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border-2 border-slate-900 dark:border-mono-200 text-slate-900 dark:text-mono-200 font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-mono-200 dark:hover:text-mono-900 transition-all duration-200"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
