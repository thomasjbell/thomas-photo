// src/components/Hero.jsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useDarkMode } from "./DarkModeProvider";
import { motion } from "motion/react";

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
        className={`absolute inset-0 transition-opacity duration-300 ease-out ${
          isMobile ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/images/background.JPG"
          alt="Background image"
          className="relative inset-0 object-cover w-full h-full brightness-80"
          width={2560}
          height={100}
          priority
        />
      </div>

      {/* Background image - mobile */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-out ${
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

      <div className="relative z-10 max-w-9/10 mx-auto px-6 sm:px-10 lg:px-14 flex items-start justify-end h-full pt-8 md:pt-16">
        <div className="text-white">
          <div className="max-w-2xl">
            <motion.div
             
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1 className="items-center text-5xl sm:text-6xl md:text-7xl font-bold my-4">
                THOMAS J BELL
              </h1>
            </motion.div>
          </div>
          <div className="max-w-md ml-auto">
            <motion.div
              className="flex flex-col gap-16 mt-16 items-end"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              <Button href="/projects" variant="outline" size="medium" className="flex-none w-80">
                PROJECTS
              </Button>
              <Button
                href="/photography"
                prefetch={true}
                variant="outline"
                size="medium"
                className="flex-none w-64"
              >
                PHOTO
              </Button>
              <Button href="/about" variant="outline" size="medium" className="flex-none w-48">
                BIO
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
