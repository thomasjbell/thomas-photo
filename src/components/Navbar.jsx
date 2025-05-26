// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-slate-200/50 dark:bg-slate-900/60 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-bold text-xl text-slate-800 dark:text-slate-50"
            >
              T H O M A S &nbsp; J &nbsp; B E L L
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
            >
              H O M E
            </Link>
            <Link
              href="/portfolio"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
            >
              P O R T F O L I O
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
            >
              A B O U T
            </Link>

            {/* Dark mode toggle component */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Dark mode toggle for mobile */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300 focus:outline-none"
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
        <div className="md:hidden backdrop-blur-md bg-slate-100/50 dark:bg-slate-900/60">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
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
