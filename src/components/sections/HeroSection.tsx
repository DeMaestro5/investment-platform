'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { HeroSlide } from '../../types/P.types';
import TestHeroImage1 from '../../app/public/cryptoHero1.jpg';
import TestHeroImage2 from '../../app/public/cryptoHero2.jpg';
import TestHeroImage3 from '../../app/public/pexels-tima-miroshnichenko-7567535.jpg';

const SLIDE_DURATION = 5000; // 5 seconds per slide

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: TestHeroImage1,
    title: 'Trade With Confidence',
    subtitle: 'Access global markets with advanced tools and real-time data',
    ctaText: 'Start Trading',
    ctaLink: '/register',
  },
  {
    id: 2,
    image: TestHeroImage2,
    title: 'Secure & Reliable Platform',
    subtitle: 'Your trusted partner for cryptocurrency and forex trading',
    ctaText: 'Explore Markets',
    ctaLink: '/markets',
  },
  {
    id: 3,
    image: TestHeroImage3,
    title: 'Join Thousands of Traders',
    subtitle: 'Be part of a growing community of successful traders',
    ctaText: 'Open Account',
    ctaLink: '/signup',
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id='hero'
      className='relative h-[70vh] sm:h-[80vh] md:h-screen w-full overflow-hidden'
    >
      {/* Slides */}
      <div className='relative h-full w-full overflow-hidden'>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Image with overlay */}
            <div className='relative h-full w-full'>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50' />
            </div>

            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='container mx-auto px-4 text-center text-white max-w-full'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4'>
                  {slide.title}
                </h1>
                <p className='text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 max-w-2xl mx-auto'>
                  {slide.subtitle}
                </p>
                {slide.ctaText && (
                  <Button
                    variant='primary'
                    size='lg'
                    href={slide.ctaLink}
                    className='text-sm sm:text-base'
                  >
                    {slide.ctaText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots/indicators */}
      <div className='absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center space-x-2'>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-yellow-500 w-6 sm:w-8'
                : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
