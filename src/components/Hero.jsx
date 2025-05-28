// components/Hero.jsx
"use client";

import Image from "next/image";
import { Caveat } from "next/font/google";
import { Sun, Moon, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useDarkMode } from "./DarkModeProvider";
import { motion } from "motion/react";

const caveat = Caveat({ subsets: ["latin"] });

export default function Hero() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Add event listener for resize
      window.addEventListener("resize", checkMobile);

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background image - desktop */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isMobile ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/images/background.png"
          alt="Background image"
          className="relative inset-0 object-cover w-full h-full brightness-80"
          width={2560}
          height={100}
          priority
        />
      </div>

      {/* Background image - mobile */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isMobile ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/photography/lone-tree.png"
          alt="Mobile background image"
          className="relative inset-0 object-cover w-full h-full brightness-80"
          width={2560}
          height={100}
          priority
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center content-center h-full">
        <div className="text-white max-w-2xl ">
          <div className={caveat.className}>
            <h1 className="items-centre text-5xl sm:text-6xl md:text-7xl font-bold my-4">
              THOMAS J BELL
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl my-6  px-2">
            P&nbsp;H&nbsp;O&nbsp;T&nbsp;O&nbsp;&&nbsp;B&nbsp;I&nbsp;O
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/photography"
              prefetch={true}
              variant="outline"
              size="medium"
            >
              View Photography
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
