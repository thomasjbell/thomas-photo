// src/components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { usePathname } from "next/navigation";
import Logo from "./ui/Logo";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
        />
      </svg>
    ),
  },
  {
    href: "/photography",
    label: "Photography",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "Bio",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();
  // Scroll-hide logic
  const x = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: 500, // was 200 — higher = snappier
    damping: 35, // was 30 — slightly higher to avoid overshoot at speed
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const atTop = currentScrollY < 10;
          const scrollingDown = currentScrollY > lastScrollY;

          if (atTop || !scrollingDown) {
            x.set(0); // slide back in
          } else {
            x.set(-96); // slide out to the left (adjust to match your nav width)
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [x]);

  return (
    <>
      <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
        {/* Desktop Floating Vertical Navbar */}
        <motion.nav
          style={{ x: springX }}
          className="flex flex-col items-center py-6 px-2 gap-3 rounded-2xl backdrop-blur-md bg-mono-500 dark:bg-mono-50 shadow-lg shadow-mono-300/20 dark:shadow-mono-500/40"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="mb-2"
          >
            <Logo className="fill-mono-50 dark:fill-mono-500" />
          </motion.div>

          {/* Divider */}
          <div className="w-8 h-px bg-mono-400/40 dark:bg-mono-200/30 rounded-full mb-1" />

          {/* Nav links */}
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.href}
                className="relative flex items-center"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href} prefetch={true}>
                  <motion.div
                    whileTap={{ scale: 0.93 }}
                    className={`
                    flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-200
                    ${
                      isActive
                        ? "bg-mono-50/20 dark:bg-mono-500/20 text-mono-50 dark:text-mono-500 border border-mono-50/30 dark:border-mono-500/30"
                        : "text-mono-50/60 dark:text-mono-500/60 border border-transparent hover:text-mono-50 dark:hover:text-mono-500 hover:bg-mono-50/10 dark:hover:bg-mono-500/10 hover:border-mono-50/20 dark:hover:border-mono-500/20"
                    }
                  `}
                  >
                    {item.icon}
                  </motion.div>
                </Link>

                {/* Floating label */}
                <AnimatePresence>
                  {hoveredItem === item.href && (
                    <motion.div
                      initial={{ opacity: 0, x: -6, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -6, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-[calc(100%+12px)] pointer-events-none"
                    >
                      <span className="whitespace-nowrap text-md font-semibold px-3 py-1.5 rounded-lg bg-mono-500 dark:bg-mono-50 text-mono-50 dark:text-mono-500 shadow-lg shadow-mono-300/20 dark:shadow-mono-500/30">
                        {item.label}
                      </span>
                      {/* Arrow pointing left */}
                      <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-mono-500 dark:border-r-mono-50" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Divider */}
          <div className="w-8 h-px bg-mono-400/40 dark:bg-mono-200/30 rounded-full mt-1" />

          {/* Social links */}
          <div className="flex flex-col items-center gap-6 mt-2">
            <motion.a
              href="https://instagram.com/thomas.j.bell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono-50/60 dark:text-mono-500/80 hover:text-mono-50 dark:hover:text-mono-500 transition-all duration-200"
              aria-label="Instagram"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono-50/60 dark:text-mono-500/80 hover:text-mono-50 dark:hover:text-mono-500 transition-all duration-200"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Horizontal Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-mono-50/80 dark:bg-mono-500/80 border-b border-mono-200/50 dark:border-mono-400/30 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-2.5">
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Logo className="fill-mono-500 dark:fill-mono-50 h-6 w-6" />
            </motion.div>
            <span className="font-bold font-fira text-lg tracking-widest text-mono-500 dark:text-mono-50">
              THOMAS J BELL
            </span>
          </Link>

          {/* Nav icons */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} prefetch={true}>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`
                flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200
                ${
                  isActive
                    ? "bg-mono-500/10 dark:bg-mono-50/10 text-mono-500 dark:text-mono-50 border border-mono-500/20 dark:border-mono-50/20"
                    : "text-mono-400 dark:text-mono-200 border border-transparent hover:text-mono-500 dark:hover:text-mono-50 hover:bg-mono-500/5 dark:hover:bg-mono-50/5"
                }
              `}
                  >
                    {item.icon}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
