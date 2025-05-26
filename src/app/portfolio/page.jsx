// app/portfolio/page.jsx
'use client';

import { useState, useEffect } from "react";
import { portfolioItems } from "../../utils/constants";
import Image from "next/image";

export default function PortfolioPage() {
  const [randomizedItems, setRandomizedItems] = useState([]);
  
  useEffect(() => {
    // Create a shuffled copy of the portfolio items
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    
    setRandomizedItems(shuffleArray(portfolioItems));
  }, []);

  return (
    <section className="py-12 bg-primary-50 dark:bg-primary-900" id="portfolio">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-50 mb-4">
            P O R T F O L I O
          </h1>
          <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            Explore a selection of my best work across different photography
            categories
          </p>
        </div>

        {/* Mosaic Portfolio Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-3 space-y-3">
          {randomizedItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden break-inside-avoid group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
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
  );
}