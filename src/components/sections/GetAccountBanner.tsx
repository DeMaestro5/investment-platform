'use client';

import React from 'react';
import Button from '../ui/Button';

const GetAccountBanner: React.FC = () => {
  return (
    <section className='py-12 bg-gradient-to-r from-yellow-500 to-yellow-600'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-3xl font-bold text-black mb-2'>
              Ready to Start Trading?
            </h2>
            <p className='text-lg text-gray-800'>
              Open a live trading account in minutes and access global markets
              24/7
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Button variant='secondary' size='lg' href='/register'>
              Open Live Account
            </Button>

            <Button variant='outline' size='lg' href='/demo-account'>
              Try Demo Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAccountBanner;
