"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-bold text-xl text-slate-800 dark:text-slate-50"
            >
              Thomas J Bell
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-300 focus:outline-none"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-slate-600 hover:text-slate-900"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
