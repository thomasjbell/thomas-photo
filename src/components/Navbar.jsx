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
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5 12 3l9 7.5M5.25 9.75V19a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 011-1h1a1 1 0 011 1v4a1 1 0 001 1h4a1 1 0 001-1V9.75"
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
        strokeWidth={1.5}
      >
        <rect x="3.75" y="3.75" width="7" height="7" rx="1.5" />
        <rect x="13.25" y="3.75" width="7" height="7" rx="1.5" />
        <rect x="3.75" y="13.25" width="7" height="7" rx="1.5" />
        <rect x="13.25" y="13.25" width="7" height="7" rx="1.5" />
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
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"
        />
        <circle cx="12" cy="13" r="3.25" />
      </svg>
    ),
  },
  {
    href: "/bio",
    label: "Bio",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="8" r="3.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"
        />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();

  // Scroll-hide logic
  const x = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: 500,
    damping: 35,
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
            x.set(0);
          } else {
            x.set(-96);
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
      {/* Desktop Floating Vertical Navbar */}
      <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <motion.nav
          style={{ x: springX }}
          className="flex flex-col items-center py-6 px-2 gap-3 rounded-2xl backdrop-blur-md bg-mono-50 shadow-lg shadow-mono-300/50 dark:shadow-mono-500/40"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="mb-2"
          >
            <Logo className="fill-mono-500" />
          </motion.div>

          {/* Divider */}
          <div className="w-8 h-px bg-mono-200/30 rounded-full mb-1" />

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
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center w-12 h-12 rounded-xl"
                  >
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-mono-500"
                          : "text-mono-500/45 hover:text-mono-500/80"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="nav-dot-desktop"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 38,
                          mass: 0.6,
                        }}
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-mono-500"
                      />
                    )}
                  </motion.div>
                </Link>

                {/* Floating label */}
                <AnimatePresence>
                  {hoveredItem === item.href && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-[calc(100%+12px)] pointer-events-none"
                    >
                      <span className="whitespace-nowrap text-md font-semibold px-3 py-1.5 rounded-lg bg-mono-50 text-mono-500 shadow-lg shadow-mono-500/30">
                        {item.label}
                      </span>
                      <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-mono-50" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Divider */}
          <div className="w-8 h-px bg-mono-200/60 rounded-full mt-1" />

          {/* Social links */}
          <div className="flex flex-col items-center gap-6 mt-2">
            <motion.a
              href="https://instagram.com/thomas.j.bell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono-500/80 hover:text-mono-500 transition-all duration-200"
              aria-label="Instagram"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/thomasbell2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono-500/80 hover:text-mono-500 transition-all duration-200"
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
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-mono-500/80 border-b border-mono-400/30 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Logo className="fill-mono-50 h-6 w-6" />
            </motion.div>
            <span className="font-bold font-fira text-lg tracking-widest text-mono-50">
              THOMAS J BELL
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} prefetch={true}>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="relative flex flex-col items-center justify-center w-10 h-10 rounded-xl"
                  >
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-mono-50"
                          : "text-mono-400 dark:text-mono-200"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="nav-dot-mobile"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 38,
                          mass: 0.6,
                        }}
                        className="absolute bottom-0.5 w-1 h-1 rounded-full bg-mono-50"
                      />
                    )}
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