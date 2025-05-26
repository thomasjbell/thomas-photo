// components/Button.jsx
import Link from "next/link";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      className = "",
      variant = "slate",
      size = "medium",
      href,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyle = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.375rem",
      fontWeight: "500",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
    };

    // Variant styles
    const variantStyles = {
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
        // No border
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--color-foreground)",
      },
    };

    // Size classes
    const sizeClasses = {
      small: "py-2 px-4 text-sm",
      medium: "py-3 px-6 text-base",
      large: "py-4 px-8 text-lg",
    };

    // Combined styles
    const styles = {
      ...baseStyle,
      ...variantStyles[variant],
    };

    // Hover effect
    const handleMouseEnter = (e) => {
      if (e.currentTarget) {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
      }
    };

    const handleMouseLeave = (e) => {
      if (e.currentTarget) {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }
    };

    // Frosted glass effect style - always present
    const frostStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)", // For Safari support
      zIndex: -1,
    };

    // Render as Link or button
    if (href) {
      return (
        <Link
          href={href}
          className={`${sizeClasses[size]} ${className}`}
          style={styles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={ref}
          {...props}
        >
          <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
          <div style={frostStyle} />
        </Link>
      );
    }

    return (
      <button
        className={`${sizeClasses[size]} ${className}`}
        style={styles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
        {...props}
      >
        <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
        <div style={frostStyle} />
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
