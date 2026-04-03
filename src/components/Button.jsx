"use client";
import Link from "next/link";
import { forwardRef } from "react";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

const Button = forwardRef(
  ({ children, className = "", variant = "slate", size = "medium", href, ...props }, ref) => {

    const baseStyle = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "1.5rem",
      fontWeight: "600",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
    };

    const variantStyles = {
      // Hero buttons
      slate: {
        backgroundColor: "var(--color-foreground)",
        color: "var(--color-background)",
      },
      secondary: {
        backgroundColor: "#fb923c",
        color: "white",
      },
      outline: {
        backgroundColor: "transparent",
        color: "white",
        border: "2px solid white",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--color-foreground)",
      },
      // Card buttons — use className for Tailwind dark mode support
      mono: {},
      "mono-outline": {},
    };

    const variantClassNames = {
      slate: "",
      secondary: "",
      outline: "",
      ghost: "",
      mono: "bg-mono-500 dark:bg-mono-100 text-mono-50 dark:text-mono-500 hover:bg-mono-400 dark:hover:bg-mono-50",
      "mono-outline": "border-2 border-mono-300 dark:border-mono-200 text-mono-400 dark:text-mono-200 hover:border-mono-500 hover:text-mono-500 dark:hover:border-mono-50 dark:hover:text-mono-50",
    };

    const sizeClasses = {
      card: "py-2 px-4 text-md",
      small: "py-4 px-4 text-sm",
      medium: "py-6 px-2 text-3xl font-bold",
      large: "py-8 px-8 text-lg",
    };

    const styles = {
      ...baseStyle,
      ...variantStyles[variant],
    };

    const motionProps = {
      whileHover: {
        y: -2,
        scale: 1.03,
        boxShadow: "0 12px 28px -4px rgba(0,0,0,0.18), 0 4px 8px -2px rgba(0,0,0,0.08)",
      },
      whileTap: {
        y: 1,
        scale: 0.97,
        boxShadow: "0 2px 6px -1px rgba(0,0,0,0.1)",
      },
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    };

    const shimmer = (
      <motion.span
        aria-hidden
        initial={{ x: "-110%", skewX: "-18deg" }}
        whileHover={{ x: "110%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    );

    const inner = (
      <>
        {shimmer}
        <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
      </>
    );

    const combinedClassName = `
      ${sizeClasses[size]}
      ${variantClassNames[variant]}
      transition-colors duration-200
      ${className}
    `.trim();

    if (href) {
      return (
        <MotionLink
          href={href}
          className={combinedClassName}
          style={styles}
          ref={ref}
          {...motionProps}
          {...props}
        >
          {inner}
        </MotionLink>
      );
    }

    return (
      <motion.button
        className={combinedClassName}
        style={styles}
        ref={ref}
        {...motionProps}
        {...props}
      >
        {inner}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;