'use client';

import React, { useState, useEffect } from 'react';
import { TestimonialProps } from '../../types/P.types';
import SectionHeading from './sectionHeading';
import Image from 'next/image';
import reviewImage1 from '../../app/public/tman1.jpg';
import reviewImage2 from '../../app/public/twoman1.jpg';
import reviewImage3 from '../../app/public/tman2.jpg';
import reviewImage4 from '../../app/public/twoman2.jpg';
import reviewImage5 from '../../app/public/guy1.jpg';
import reviewImage6 from '../../app/public/twoman3.jpg';

// Sample testimonial data
const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: 'James Rodriguez',
    role: 'Professional Trader',
    image: reviewImage1,
    content:
      'This platform has completely changed how I approach trading. The real-time data and intuitive interface make executing trades simple and efficient.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emma Chen',
    role: 'Crypto Investor',
    image: reviewImage2,
    content:
      'As someone new to cryptocurrency, I found the educational resources and user-friendly platform incredibly helpful. The customer support team is also very responsive.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Thompson',
    role: 'Day Trader',
    image: reviewImage3,
    content:
      'The advanced charting tools and technical indicators are top-notch. I have tried many platforms, but this one offers the best combination of features and usability.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Sophia Miller',
    role: 'Forex Trader',
    image: reviewImage4,
    content:
      'The speed of execution and reliability during high volatility periods is impressive. I have never experienced downtime during critical trading moments.',
    rating: 5,
  },
  {
    id: 5,
    name: 'David Kumar',
    role: 'Long-term Investor',
    image: reviewImage5,
    content:
      'The security features give me peace of mind when trading significant amounts. Two-factor authentication and cold storage for cryptocurrencies are must-haves.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Olivia Williams',
    role: 'Swing Trader',
    image: reviewImage6,
    content:
      'The mobile app is fantastic for trading on the go. All the functionality of the desktop platform is available right at my fingertips.',
    rating: 4,
  },
];

const ReviewSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = 3; // Number of testimonials visible at once

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - visibleTestimonials ? 0 : prev + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className='py-16 bg-gray-800'>
      <div className='container mx-auto px-4'>
        <SectionHeading
          title='What Our Traders Say'
          subtitle='Trusted by thousands of traders worldwide'
          alignment='center'
        />

        <div className='mt-12 relative'>
          {/* Testimonial Cards */}
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${
                  activeIndex * (100 / visibleTestimonials)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4'
                >
                  <div className='bg-gray-700 rounded-lg p-6 h-full shadow-lg'>
                    {/* Rating */}
                    <div className='flex mb-4'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating!
                              ? 'text-yellow-500'
                              : 'text-gray-400'
                          }`}
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                      ))}
                    </div>

                    {/* Content */}
                    <p className='text-gray-300 mb-6 italic'>
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* User */}
                    <div className='flex items-center'>
                      <div className='h-12 w-12 relative rounded-full overflow-hidden mr-4'>
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className='object-cover'
                          />
                        ) : (
                          <div className='h-full w-full bg-gray-600 flex items-center justify-center text-white'>
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className='text-white font-medium'>
                          {testimonial.name}
                        </h4>
                        <p className='text-gray-400 text-sm'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className='flex justify-center mt-8'>
            {Array.from({
              length: testimonials.length - visibleTestimonials + 1,
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-3 w-3 rounded-full mx-1 transition-all ${
                  i === activeIndex ? 'bg-yellow-500 w-6' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
