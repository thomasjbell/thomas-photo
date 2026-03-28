"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Button from "./Button";
import { useDarkMode } from "./DarkModeProvider";

const mobilePanels = [
  {
    href: "/projects",
    label: "PROJECTS",
    image: "/images/projects/equalab-equations.png",
  },
  {
    href: "/photography",
    label: "PHOTO",
    image: "/images/background.JPG",
  },
  {
    href: "/about",
    label: "BIO",
    image: "/images/thomas-bell.png",
  },
];

export default function Hero() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {/* ── Desktop — unchanged ── */}
      <div className="relative h-screen hidden md:block">
        <div className="absolute inset-0">
          <Image
            src="/images/background.JPG"
            alt="Background image"
            className="object-cover w-full h-full brightness-80"
            width={2560}
            height={1440}
            priority
          />
        </div>

        <div className="relative z-10 max-w-9/10 mx-auto px-6 sm:px-10 lg:px-14 flex items-start justify-end h-full pt-16">
          <div className="text-white">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold my-4">
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
                <Button href="/photography" prefetch={true} variant="outline" size="medium" className="flex-none w-64">
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

      {/* ── Mobile — full-screen image panels ── */}
      <div className="flex flex-col md:hidden h-screen">
      

        {/* Three equal-height image panels */}
        <div className="flex flex-col flex-1 gap-0.5 overflow-hidden">
          {mobilePanels.map((panel, index) => (
            <motion.div
              key={panel.href}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.08,
                ease: "easeOut",
              }}
              className="relative flex-1 overflow-hidden group"
            >
              <Link href={panel.href} className="block w-full h-full">
                {/* Image */}
                <Image
                  src={panel.image}
                  alt={panel.label}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-active:scale-105"
                  sizes="100vw"
                  priority={index === 0}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent transition-opacity duration-300 group-active:opacity-80" />

                {/* Label */}
                <div className="absolute inset-0 flex items-center px-6">
                  <span className="text-white font-fira text-3xl font-bold tracking-widest drop-shadow-md">
                    {panel.label}
                  </span>
                </div>

                {/* Right-side chevron */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}