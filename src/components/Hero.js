import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <div className="h-full w-full relative">
          {/* Use a placeholder image - in production you'd use your own images */}
          <div className="absolute inset-0 bg-gray-800">
            {/* This will be replaced with your actual hero image */}
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Capturing Moments, Creating Memories
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Professional photography services for weddings, portraits, events,
            and commercial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-md font-medium text-center"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 py-3 px-8 rounded-md font-medium text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
