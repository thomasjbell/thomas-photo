"use client";
import Image from "next/image";
import { portfolioItems } from "../utils/constants";

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my best work across different photography
            categories.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative w-full">
                <Image 
                  src={item.imagePath} 
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
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