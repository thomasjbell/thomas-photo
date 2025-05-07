'use client';

import React from 'react';
import Link from 'next/link';

const variants = {
  primary: 'bg-primary-900 text-primary-50 hover:bg-primary-800 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-200',
  secondary: 'bg-primary-200 text-primary-800 hover:bg-primary-300 dark:bg-primary-700 dark:text-primary-50 dark:hover:bg-primary-600',
  accent: 'bg-accent text-white hover:bg-accent/90',
  outline: 'bg-transparent border border-primary-700 text-primary-800 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-50 dark:hover:bg-primary-800/30',
  ghost: 'bg-transparent text-primary-700 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800/50',
  hero: 'bg-primary-700/60 text-primary-100 hover:bg-primary-800/80 backdrop-blur-sm',
  disabled: 'bg-primary-200 text-primary-500 dark:bg-primary-800 dark:text-primary-600 cursor-not-allowed',
};

const sizes = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-5 text-base',
  lg: 'py-3 px-8 text-lg',
};

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  // Determine styles based on variant and size
  const variantStyle = disabled ? variants.disabled : variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyle} ${sizeStyle} ${className}`;
  
  // If href is provided, render a Link, otherwise render a button
  if (href && !disabled) {
    return (
      <Link href={href} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={buttonStyles} 
      disabled={disabled} 
      type={props.type || 'button'} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;