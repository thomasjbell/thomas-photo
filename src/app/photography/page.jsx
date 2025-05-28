// app/photography/page.jsx
"use client";

import { useState, useEffect } from "react";
import { photographyItems } from "../../utils/constants";
import Image from "next/image";

export default function photographyPage() {
  const [randomizedItems, setRandomizedItems] = useState([]);

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

    setRandomizedItems(shuffleArray(photographyItems));
  }, []);

  return (
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
          {randomizedItems.map((item) => (
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
                  className="w-full h-auto object-cover transition-transform duration-250 ease-in-out group-hover:scale-105"
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
