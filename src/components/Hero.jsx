// components/Hero.jsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const caveat = Caveat({ subsets: ["latin"] });

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true' || 
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.png"
          alt="Background image"
          className="inset-0 object-cover w-full h-full opacity-80 dark:opacity-60"
          width={2560}
          height={100}
          priority
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/50"></div>
      </div>
      
  

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center content-center h-full">
        <div className="text-white max-w-2xl">
          <div className={caveat.className}>
            <h1 className="items-centre text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              THOMAS J BELL
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-8">P H O T O G R A P H Y</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="bg-primary-700/60 text-primary-100 hover:bg-primary-800/80 py-3 px-8 rounded-md font-medium text-center transition-all duration-300"
            >
              View Portfolio
            </Link>
            <Link
              href="/about"
              className="bg-primary-700/60 text-primary-100 hover:bg-primary-800/80 py-3 px-8 rounded-md font-medium text-center transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}