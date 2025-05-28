// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "motion/react";

const navPages = {
  class: {
    classname:
      "bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-300 transition-colors duration-250 text-slate-700 dark:text-slate-300 px-4 py-1 rounded-full border border-slate-100 hover:border-slate-200 dark:border-slate-700 dark:hover:border-slate-600",
  },
  home: { href: "/", label: "Home" },
  photography: { href: "/photography", label: "Photography" },
  about: { href: "/about", label: "About" },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-slate-200/50 dark:bg-slate-900/60 sticky top-0 z-50 shadow-lg shadow-slate-300/20 dark:shadow-slate-900/40">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-bold text-xl text-slate-800 dark:text-slate-50"
            >
              T&nbsp;H&nbsp;O&nbsp;M&nbsp;A&nbsp;S &nbsp; J &nbsp;
              B&nbsp;E&nbsp;L&nbsp;L
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={navPages.home.href}
              className={navPages.class.classname}
            >
              {navPages.home.label}
            </Link>
            <Link
              href={navPages.photography.href}
              prefetch={true}
              className={navPages.class.classname}
            >
              {navPages.photography.label}
            </Link>
            <Link
              href={navPages.about.href}
              className={navPages.class.classname}
            >
              {navPages.about.label}
            </Link>


          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300 focus:outline-none p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ 
                  rotate: isMenuOpen ? 180 : 0,
                  scale: isMenuOpen ? 1.1 : 1
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="h-6 w-6 relative"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.svg
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      transition={{ 
                        duration: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="h-6 w-6 absolute inset-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      transition={{ 
                        duration: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="h-6 w-6 absolute inset-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M4 6h16"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M4 12h16"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                      />
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M4 18h16"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
              height: { duration: 0.25 }
            }}
            className="md:hidden backdrop-blur-md bg-slate-100/95 dark:bg-slate-900/95 border-t border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-300/10 dark:shadow-slate-900/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: 0.05, duration: 0.25 }}
              >
                <Link
                  href="/"
                  className="block px-3 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300 transition-colors duration-200 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: 0.1, duration: 0.25 }}
              >
                <Link
                  href="/photography"
                  className="block px-3 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300 transition-colors duration-200 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Photography
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: 0.15, duration: 0.25 }}
              >
                <Link
                  href="/about"
                  className="block px-3 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300 transition-colors duration-200 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              
              {/* Social Links - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="pt-4 border-t border-slate-300/50 dark:border-slate-600/50 mt-4"
              >
                <div className="flex justify-center space-x-8 pb-2">
                  <motion.a
                    href="https://instagram.com/thomas.j.bell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all duration-200 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                    aria-label="Instagram"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
            
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all duration-200 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}