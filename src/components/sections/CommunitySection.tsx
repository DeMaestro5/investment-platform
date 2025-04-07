'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import SectionHeading from './sectionHeading';
import { TestimonialProps } from '../../types/P.types';
import cliff from '../../app/public/cliff.jpg';

// Sample community reviews
const communityReviews: TestimonialProps[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Day Trader',
    content:
      'Being part of this trading community has transformed my approach to the markets. The support and insights from fellow traders are invaluable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mark Wilson',
    role: 'Forex Trader',
    content:
      'I have been trading for years, but joining this community has taken my results to new heights. The educational resources are top-notch.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Crypto Enthusiast',
    content:
      'As a beginner, I was overwhelmed by cryptocurrency trading. This community provided the guidance I needed to trade confidently.',
    rating: 4,
  },
];

const CommunitySection: React.FC = () => {
  return (
    <section
      id='section-02'
      className='py-10 sm:py-12 md:py-16 bg-gray-800 w-full overflow-hidden'
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Image Column */}
          <div className='relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] rounded-xl overflow-hidden'>
            <Image
              src={cliff}
              alt='Trading Community'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
              <div className='bg-black bg-opacity-70 p-4 sm:p-6 rounded-lg max-w-sm'>
                <h3 className='text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3'>
                  Join Our Community
                </h3>
                <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4'>
                  Connect with traders from around the world and learn from the
                  best in the industry.
                </p>
                <Button
                  variant='primary'
                  href='/community'
                  className='text-sm sm:text-base'
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <SectionHeading
              title='Be Part of Our Growing Community'
              subtitle='Learn, share, and grow with thousands of traders worldwide'
              alignment='left'
            />

            <div className='mt-6 sm:mt-8 space-y-4 sm:space-y-6'>
              {communityReviews.map((review) => (
                <div
                  key={review.id}
                  className='bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md'
                >
                  <div className='flex items-center mb-3 sm:mb-4'>
                    {/* Rating stars */}
                    <div className='flex mr-4'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 sm:w-5 h-4 sm:h-5 ${
                            i < review.rating!
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
                  </div>

                  <p className='text-sm sm:text-base text-gray-300 italic mb-3 sm:mb-4'>
                    &ldquo;{review.content}&rdquo;
                  </p>

                  <div className='flex items-center'>
                    <div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-sm sm:text-base'>
                      {review.name.charAt(0)}
                    </div>
                    <div className='ml-3'>
                      <p className='text-white font-medium text-sm sm:text-base'>
                        {review.name}
                      </p>
                      <p className='text-gray-400 text-xs sm:text-sm'>
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-6 sm:mt-8'>
              <Button
                variant='outline'
                href='/testimonials'
                className='text-sm sm:text-base'
              >
                View All Testimonials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
