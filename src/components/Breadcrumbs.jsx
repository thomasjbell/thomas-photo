"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Breadcrumbs({ crumbs }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-mono-400 dark:text-mono-200 mb-8 flex-wrap"
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <span key={crumb.href} className="flex items-center gap-1.5">
            {isLast ? (
              <span className="text-mono-500 dark:text-mono-50 font-semibold truncate max-w-[200px]">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-mono-500 dark:hover:text-mono-50 transition-colors duration-200"
              >
                {crumb.label}
              </Link>
            )}
            {!isLast && (
              <svg
                className="h-3.5 w-3.5 shrink-0 text-mono-300 dark:text-mono-300/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </span>
        );
      })}
    </motion.nav>
  );
}
