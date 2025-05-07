// components/Hero.jsx
"use client";

import Image from "next/image";
import { Caveat } from "next/font/google";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./Button"; // Import the Button component

const caveat = Caveat({ subsets: ["latin"] });

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.getItem("darkMode") === "true" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
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
          className="relative inset-0 object-cover w-full h-full brightness-80"
          width={2560}
          height={100}
          priority
        />
      </div>

      {/* Dark mode toggle button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center content-center h-full">
        <div className="text-white max-w-2xl">
          <div className={caveat.className}>
            <h1 className="items-centre text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              THOMAS J BELL
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            P H O T O G R A P H Y
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Replace Links with Button components using outline variant */}
            <Button href="/portfolio" variant="outline" size="medium">
              View Portfolio
            </Button>
            <Button href="/about" variant="outline" size="medium">
              About Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
