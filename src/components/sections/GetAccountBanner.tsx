'use client';

import React from 'react';
import Button from '../ui/Button';
import { useUser } from '@clerk/nextjs';

const GetAccountBanner: React.FC = () => {
  const { user, isLoaded } = useUser();
  const isLoggedIn = isLoaded && user;

  return (
    <section className='py-8 sm:py-10 md:py-12 bg-gradient-to-r from-yellow-500 to-yellow-600 w-full overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='mb-4 sm:mb-6 md:mb-0'>
            <h2 className='text-2xl sm:text-3xl font-bold text-black mb-2'>
              {isLoggedIn
                ? 'Manage Your Trading Account'
                : 'Ready to Start Trading?'}
            </h2>
            <p className='text-base sm:text-lg text-gray-800'>
              {isLoggedIn
                ? 'Access your account dashboard to view your balance, profit, and trading history'
                : 'Open a live trading account in minutes and access global markets 24/7'}
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <Button
              variant='secondary'
              size='lg'
              href={isLoggedIn ? '/accounts' : '/register'}
              className='text-sm sm:text-base'
            >
              {isLoggedIn ? 'View My Account' : 'Open Live Account'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAccountBanner;
