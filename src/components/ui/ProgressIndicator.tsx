'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define ProgressStep type
export interface ProgressStep {
  id: number;
  label: string;
  active: boolean;
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
}

export default function ProgressIndicator({
  steps: initialSteps,
}: ProgressIndicatorProps) {
  const [steps, setSteps] = useState(initialSteps);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active step based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Get all section elements
      const sections = [
        document.getElementById('hero'), // Add id="hero" to HeroSection
        document.getElementById('section-01'),
        document.getElementById('section-02'),
        document.getElementById('section-03'),
      ];

      // Find which section is currently in view
      let currentSectionIndex = 0;
      sections.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        // const sectionBottom = sectionTop + section.offsetHeight;

        // Check if section is in viewport (with some buffer)
        if (scrollPosition >= sectionTop - windowHeight / 3) {
          currentSectionIndex = index;
        }
      });

      // Update active step if changed
      if (currentSectionIndex !== activeIndex) {
        setActiveIndex(currentSectionIndex);

        // Update steps with new active state
        setSteps((prev) =>
          prev.map((step, idx) => ({
            ...step,
            active: idx === currentSectionIndex,
          }))
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div className='fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block'>
      <div className='flex flex-col items-center'>
        {steps.map((step, index) => (
          <div key={step.id} className='flex flex-col items-center mb-6'>
            {/* Step Label */}
            <Link
              href={index === 0 ? '#hero' : `#section-0${index}`}
              className={`text-xs mb-2 px-2 py-1 rounded transition-colors duration-300 ${
                step.active
                  ? 'text-white font-medium'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {step.label}
            </Link>

            {/* Step Indicator Line */}
            <div
              className={`h-8 w-1 rounded-full transition-all duration-300 ${
                step.active ? 'bg-yellow-400' : 'bg-gray-700 h-6'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
