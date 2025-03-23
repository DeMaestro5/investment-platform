'use client';

import React from 'react';
import SectionHeading from './sectionHeading';
import Button from '../ui/Button';

// Import the TraderViewChart component from TraderViewSection
import { TraderViewChart } from './TraderViewSection';

const markets = [
  {
    id: 1,
    name: 'BTC/USD',
    change: '+2.45%',
    isPositive: true,
    symbol: 'BITSTAMP:BTCUSD',
  },
  {
    id: 2,
    name: 'ETH/USD',
    change: '+3.12%',
    isPositive: true,
    symbol: 'BITSTAMP:ETHUSD',
  },
  {
    id: 3,
    name: 'EUR/USD',
    change: '-0.32%',
    isPositive: false,
    symbol: 'FX:EURUSD',
  },
  {
    id: 4,
    name: 'Gold',
    change: '+0.78%',
    isPositive: true,
    symbol: 'COMEX:GC1!',
  },
];

const SecondTraderViewSection: React.FC = () => {
  return (
    <section className='py-16 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <SectionHeading
          title='Popular Markets'
          subtitle='Track performance of the most traded assets'
          alignment='center'
        />

        <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Market Selection */}
          <div className='bg-gray-800 rounded-lg p-6 shadow-lg order-2 lg:order-1'>
            <h3 className='text-xl font-bold text-white mb-4'>Top Markets</h3>

            <div className='space-y-4'>
              {markets.map((market) => (
                <button
                  key={market.id}
                  className='w-full flex items-center justify-between p-3 rounded transition-colors hover:bg-gray-700'
                >
                  <span className='text-white font-medium'>{market.name}</span>
                  <span
                    className={`${
                      market.isPositive ? 'text-green-500' : 'text-red-500'
                    } font-medium`}
                  >
                    {market.change}
                  </span>
                </button>
              ))}
            </div>

            <div className='mt-6'>
              <Button variant='outline' fullWidth href='/markets'>
                View All Markets
              </Button>
            </div>
          </div>

          {/* Main Chart */}
          <div className='lg:col-span-2 rounded-lg overflow-hidden shadow-lg order-1 lg:order-2'>
            <div className='bg-gray-800 p-4'>
              <h3 className='text-xl font-bold text-white mb-2'>
                Bitcoin (BTC/USD)
              </h3>
              <div className='flex items-center space-x-4'>
                <span className='text-2xl font-bold text-white'>
                  $48,235.60
                </span>
                <span className='text-green-500 font-medium'>+2.45%</span>
              </div>
            </div>
            <TraderViewChart height='400px' />
          </div>
        </div>

        <div className='mt-10 text-center'>
          <Button variant='primary' size='lg' href='/register'>
            Start Trading Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecondTraderViewSection;
