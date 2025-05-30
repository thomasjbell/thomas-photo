// app/photography/page.jsx
"use client";
import { useState, useEffect } from "react";
import { photographyItems } from "../../utils/constants";
import Image from "next/image";
import LoadingScreen from "../../components/LoadingScreen";

export default function PhotographyPage() {
  const [randomizedItems, setRandomizedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    // Create a shuffled copy of the photography items
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
    
    // Check if mobile device
    const isMobile = () => {
      return window.innerWidth <= 768 || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Preload images with mobile optimization
    const preloadImages = async () => {
      const mobile = isMobile();
      
      if (mobile) {
        // On mobile: Load only first few images, then show content
        const priorityImages = shuffled.slice(0, 4); // Load first 4 images only
        
        const imagePromises = priorityImages.map((item) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.onload = () => {
              setLoadedImages(prev => prev + 1);
              resolve();
            };
            img.onerror = () => resolve(); // Don't fail on error, just continue
            img.src = item.imagePath;
          });
        });

        try {
          await Promise.all(imagePromises);
          // Show content quickly on mobile
          setTimeout(() => {
            setIsLoading(false);
          }, 100);
        } catch (error) {
          console.error("Error loading priority images:", error);
          // Show content after short delay even if images fail
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      } else {
        // Desktop: Load all images or use timeout
        const imagePromises = shuffled.map((item) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.onload = () => {
              setLoadedImages(prev => prev + 1);
              resolve();
            };
            img.onerror = () => resolve();
            img.src = item.imagePath;
          });
        });

        // Race between loading all images and a timeout
        const loadingPromise = Promise.all(imagePromises);
        const timeoutPromise = new Promise(resolve => 
          setTimeout(resolve, 3000) // 3 second max wait
        );

        try {
          await Promise.race([loadingPromise, timeoutPromise]);
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        } catch (error) {
          console.error("Error loading images:", error);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      }
    };

    if (shuffled.length > 0) {
      preloadImages();
    }
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <section className="py-8 bg-slate-50 dark:bg-slate-900" id="photography">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 bg-white dark:bg-slate-800 border dark:border-slate-700 border-slate-200 rounded-2xl p-6 md:p-8 drop-shadow-lg">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Photography
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore a selection of my best work across different photography
              categories
            </p>
          </div>

          {/* Mosaic photography Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-3 space-y-3 border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800 drop-shadow-lg">
            {randomizedItems.map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden break-inside-avoid group shadow-sm hover:shadow-md transition-all duration-250 ease-in-out rounded-md"
              >
                <div className="relative w-full">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-250 ease-in-out group-hover:scale-105 rounded-md"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    priority={index < 4} // Prioritize first 4 images
                    loading={index < 4 ? "eager" : "lazy"} // Lazy load images after first 4
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center touch-manipulation">
                    <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
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