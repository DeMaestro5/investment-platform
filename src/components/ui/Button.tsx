'use client';

import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '../../types/P.types';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  href,
  fullWidth = false,
}: ButtonProps) => {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant styles
  const variantStyles = {
    primary:
      'bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-500',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-800',
    outline:
      'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black focus:ring-yellow-500',
  };

  // Size styles
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-8 text-lg',
  };

  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${fullWidth ? 'w-full' : ''} ${className}`;

  // Render as link if href is provided, otherwise as button
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick} type='button'>
      {children}
    </button>
  );
};

export default Button;
