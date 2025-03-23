'use client';

import React from 'react';
import { SectionHeadingProps } from '../../types/P.types';

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[alignment]} ${className}`}>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
        {title}
      </h2>
      {subtitle && <p className='text-lg text-gray-300'>{subtitle}</p>}
      <div
        className={`h-1 w-24 bg-yellow-500 mt-6 ${
          alignment === 'center'
            ? 'mx-auto'
            : alignment === 'right'
            ? 'ml-auto'
            : ''
        }`}
      ></div>
    </div>
  );
};

export default SectionHeading;
