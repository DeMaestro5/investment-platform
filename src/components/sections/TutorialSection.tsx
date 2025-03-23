'use client';

import React from 'react';
import SectionHeading from './sectionHeading';
import Button from '../ui/Button';
import Image, { StaticImageData } from 'next/image';
import Binance from '../../app/public/binance.jpg';
import Bitcoin from '../../app/public/bitcoin.webp';
import changelly from '../../app/public/changelly.jpg';
import coinbase from '../../app/public/coinbase-logo.png';

// Platform data
interface PlatformData {
  id: number;
  name: string;
  logo: string | StaticImageData;
  description: string;
  features: string[];
  ctaLink: string;
  rating: number;
  fees: string;
}

const platforms: PlatformData[] = [
  {
    id: 1,
    name: 'Coinbase',
    logo: coinbase,
    description:
      'One of the most trusted cryptocurrency exchanges globally, ideal for beginners.',
    features: [
      'User-friendly interface',
      'Strong security measures',
      'Wide variety of cryptocurrencies',
    ],
    ctaLink: 'https://coinbase.com',
    rating: 4.5,
    fees: 'Medium',
  },
  {
    id: 2,
    name: 'Binance',
    logo: Binance,
    description:
      'Global crypto exchange with advanced trading features and low fees.',
    features: ['Low trading fees', 'High liquidity', 'Advanced trading tools'],
    ctaLink: 'https://binance.com',
    rating: 4.7,
    fees: 'Low',
  },
  {
    id: 3,
    name: 'Bitcoin.com',
    logo: Bitcoin,
    description:
      'All-in-one platform for buying, selling, and managing Bitcoin and Bitcoin Cash.',
    features: [
      'Non-custodial wallet included',
      'Instant exchanges',
      'Educational resources',
    ],
    ctaLink: 'https://bitcoin.com',
    rating: 4.4,
    fees: 'Medium',
  },
  {
    id: 4,
    name: 'Changelly',
    logo: changelly,
    description:
      'Instant cryptocurrency exchange service with competitive rates.',
    features: [
      'No registration required',
      'Fast transactions',
      'Support for 150+ cryptocurrencies',
    ],
    ctaLink: 'https://changelly.com',
    rating: 4.3,
    fees: 'Medium',
  },
];

// Star Rating Component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className='flex items-center'>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-500'
          } ${
            i === Math.floor(rating) && rating % 1 > 0 ? 'text-yellow-500' : ''
          }`}
          fill={
            i < Math.floor(rating) ||
            (i === Math.floor(rating) && rating % 1 > 0)
              ? 'currentColor'
              : 'none'
          }
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          />
        </svg>
      ))}
      <span className='ml-2 text-white text-sm'>{rating.toFixed(1)}</span>
    </div>
  );
};

// Platform Card
const PlatformCard: React.FC<{ platform: PlatformData }> = ({ platform }) => {
  return (
    <div className='bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-4'>
          <div className='h-12 w-12 relative bg-white rounded-full p-2 flex items-center justify-center'>
            <Image
              src={platform.logo}
              alt={`${platform.name} logo`}
              width={40}
              height={40}
              className='object-contain'
            />
          </div>
          <StarRating rating={platform.rating} />
        </div>

        <h3 className='text-xl font-bold text-white mb-2'>{platform.name}</h3>
        <p className='text-gray-300 mb-4'>{platform.description}</p>

        <div className='mb-4'>
          <h4 className='text-sm font-medium uppercase tracking-wider text-gray-400 mb-2'>
            Key Features
          </h4>
          <ul className='space-y-1'>
            {platform.features.map((feature, index) => (
              <li key={index} className='flex items-center text-gray-300'>
                <svg
                  className='w-4 h-4 text-green-500 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'
                  ></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex justify-between items-center text-sm text-gray-400 mb-4'>
          <div>
            <span className='font-medium'>Fees:</span> {platform.fees}
          </div>
        </div>

        <Button variant='primary' href={platform.ctaLink} fullWidth>
          Visit {platform.name}
        </Button>
      </div>
    </div>
  );
};

const BuyingPlatformsSection: React.FC = () => {
  return (
    <section id='section-03' className='py-16 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <SectionHeading
          title='Where to Buy Bitcoin'
          subtitle='Explore trusted cryptocurrency exchanges to buy and sell Bitcoin securely'
          alignment='center'
        />

        <div className='mt-12'>
          {/* Featured Platform Description */}
          <div className='bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-12 shadow-xl'>
            <div className='flex flex-col lg:flex-row items-center'>
              <div className='lg:w-2/3 mb-6 lg:mb-0 lg:pr-8'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Find Your Ideal Bitcoin Exchange
                </h3>
                <p className='text-gray-300 mb-4'>
                  Choosing the right platform is essential for your
                  cryptocurrency journey. Each exchange offers different
                  features, fees, and security measures. We have analyzed the
                  top platforms to help you make an informed decision.
                </p>
                <div className='flex flex-wrap gap-4'>
                  <div className='flex items-center'>
                    <svg
                      className='w-5 h-5 text-yellow-500 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                      />
                    </svg>
                    <span className='text-gray-300'>Security</span>
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='w-5 h-5 text-yellow-500 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                    <span className='text-gray-300'>Low Fees</span>
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='w-5 h-5 text-yellow-500 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                      />
                    </svg>
                    <span className='text-gray-300'>Trading Tools</span>
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='w-5 h-5 text-yellow-500 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                      />
                    </svg>
                    <span className='text-gray-300'>Regulations</span>
                  </div>
                </div>
              </div>
              <div className='lg:w-1/3'>
                <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
                  <h4 className='text-xl font-bold text-white mb-3'>
                    Ready to Trade?
                  </h4>
                  <p className='text-gray-300 mb-4'>
                    Create an account on one of these platforms and start your
                    cryptocurrency investment journey today.
                  </p>
                  <Button variant='primary' href='/register' fullWidth>
                    Get Started Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>

          {/* Call to Action */}
          <div className='text-center mt-12'>
            <p className='text-gray-300 mb-6'>
              Need more guidance on choosing the right platform for your needs?
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button variant='outline' href='/learn/platforms-comparison'>
                Compare All Platforms
              </Button>
              <Button variant='secondary' href='/learn/buying-guide'>
                Read Our Buying Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyingPlatformsSection;
