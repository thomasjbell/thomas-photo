// components/Navbar.jsx
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className="bg-primary-50 dark:bg-primary-800 shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-bold text-xl text-primary-800 dark:text-primary-50"
            >
              Thomas J Bell
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-900 dark:text-primary-50 dark:hover:text-primary-300"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-primary-600 hover:text-primary-900 dark:text-primary-50 dark:hover:text-primary-300"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-primary-600 hover:text-primary-900 dark:text-primary-50 dark:hover:text-primary-300"
            >
              About
            </Link>
            
            {/* Dark mode toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary-200 dark:hover:bg-primary-700"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 
                <Sun className="h-5 w-5 text-primary-50" /> : 
                <Moon className="h-5 w-5 text-primary-800" />
              }
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary-200 dark:hover:bg-primary-700"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 
                <Sun className="h-5 w-5 text-primary-50" /> : 
                <Moon className="h-5 w-5 text-primary-800" />
              }
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-600 hover:text-primary-900 dark:text-primary-50 dark:hover:text-primary-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-50 dark:bg-primary-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-primary-600 hover:text-primary-900 dark:text-primary-50 dark:hover:text-primary-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-primary-600 hover:text-primary-900 dark:text-primary-50 dark:hover:text-primary-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-primary-600 hover:text-primary-900 dark:text-primary-50 dark:hover:text-primary-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}