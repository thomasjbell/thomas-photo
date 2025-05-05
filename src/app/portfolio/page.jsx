import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { portfolioItems } from "../../utils/constants";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="">
      <Navbar />
      <section className="py-12 bg-slate-50 dark:bg-slate-900" id="portfolio">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-4">Portfolio</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore a selection of my best work across different photography
              categories.
            </p>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
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
    </div>
  );
}
