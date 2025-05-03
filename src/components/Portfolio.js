"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "portraits", name: "Portraits" },
    { id: "weddings", name: "Weddings" },
    { id: "events", name: "Events" },
    { id: "commercial", name: "Commercial" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "portraits",
      title: "Urban Portrait",
      description: "Urban setting portrait photography",
      // In real implementation, use actual image paths
      imagePath: "/placeholder1.jpg",
    },
    {
      id: 2,
      category: "weddings",
      title: "Beach Wedding",
      description: "Beautiful beach wedding photography",
      imagePath: "/placeholder2.jpg",
    },
    {
      id: 3,
      category: "events",
      title: "Corporate Event",
      description: "Professional event coverage",
      imagePath: "/placeholder3.jpg",
    },
    {
      id: 4,
      category: "commercial",
      title: "Product Shoot",
      description: "High-quality product photography",
      imagePath: "/placeholder4.jpg",
    },
    {
      id: 5,
      category: "portraits",
      title: "Family Portrait",
      description: "Memorable family photography",
      imagePath: "/placeholder5.jpg",
    },
    {
      id: 6,
      category: "weddings",
      title: "Garden Wedding",
      description: "Elegant garden wedding photography",
      imagePath: "/placeholder6.jpg",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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

        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md ${
                activeCategory === category.id
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Replace with actual images in production */}
                {/* <Image src={item.imagePath} alt={item.title} fill style={{ objectFit: 'cover' }} /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
