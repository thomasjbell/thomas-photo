// src/app/photography/page.jsx
"use client";
import { useState, useEffect } from "react";
import { photographyItems } from "../../utils/constants";
import Image from "next/image";
import LoadingScreen from "../../components/LoadingScreen";
import { PhotographyPortfolioSchema } from "../../components/StructuredData";

export default function PhotographyPage() {
  const [randomizedItems, setRandomizedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Your existing logic here...
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    
    const shuffled = shuffleArray(photographyItems);
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
          new Promise(resolve => setTimeout(resolve, 800))
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
      <PhotographyPortfolioSchema photos={photographyItems} />
      <LoadingScreen isLoading={isLoading} />
      
      <section className="py-8 bg-slate-50 dark:bg-slate-900" id="photography">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 bg-white dark:bg-slate-800 border dark:border-slate-700 border-slate-200 rounded-2xl p-6 md:p-8 drop-shadow-lg">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Photography Portfolio
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore a selection of my best work across different photography categories including landscapes, wildlife, and automotive photography.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-3 space-y-3 border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800 drop-shadow-lg">
            {randomizedItems.map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden break-inside-avoid group shadow-sm hover:shadow-md transition-all duration-200 ease-out rounded-md"
              >
                <div className="relative w-full">
                  <Image
                    src={item.imagePath}
                    alt={`${item.title} - Professional photography by Thomas J Bell`}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-200 ease-out group-hover:scale-105 rounded-md"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh6MVLzNkCGlLbCZELTkuBhXOj/dLi0adqKDJh8qjFElQNLhUPnb2WTRy8llnhwTBmQgO5UjWrW4c8/8AKWHmR5/WvEALGJB/+RBvUH1YnHNJNFNNB3mIjnFG8NqTOuQgZPPWOhJ4WOtDFQq9IrR3lq5c/lZKq6zIcktq3rLmhOgLUjl9kqwSQfubnb7O4QjIe3G7qe4YnAYnJcJbsV4K7Q5PLj2qqtD1xjZgMoGjNaJ8Cp7q7V4oTznD8/XQHY8DNWGMY3p49V7Bs+wXmX3Pp2CpH/B5V3iXcFRLPdPnpqiQHj39e3lq4QNqFrxDOZe4pBCYVpkVKHlJjD4CqLjWTrAVEd8KdLfGE9HQ4Ot6OzB6u3I2nCGlS2Eg/TGJS2G1Nh2jdNhRIH+qJEKhGNzlKF+6LjALlh1iYEqF2Kb+QqlLa1w7qsAgFVrBL5UdBlMJjMrW9J4K2pKEkJPgI="
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center touch-manipulation">
                    <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-4">
                      {item.title}
                    </h3>
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