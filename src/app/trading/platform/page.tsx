'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock trading pairs data
const tradingPairs = [
  {
    pair: 'BTC/USD',
    price: '52,000.00',
    change: '+2.5%',
    volume: '1.2B',
    high: '52,500.00',
    low: '51,200.00',
  },
  {
    pair: 'ETH/USD',
    price: '3,200.00',
    change: '+1.8%',
    volume: '800M',
    high: '3,250.00',
    low: '3,150.00',
  },
  {
    pair: 'SOL/USD',
    price: '120.00',
    change: '-0.5%',
    volume: '500M',
    high: '122.00',
    low: '118.00',
  },
  {
    pair: 'ADA/USD',
    price: '0.45',
    change: '+0.8%',
    volume: '300M',
    high: '0.46',
    low: '0.44',
  },
  {
    pair: 'DOT/USD',
    price: '7.20',
    change: '-1.2%',
    volume: '200M',
    high: '7.30',
    low: '7.10',
  },
  {
    pair: 'AVAX/USD',
    price: '40.50',
    change: '+3.2%',
    volume: '400M',
    high: '41.00',
    low: '39.50',
  },
  {
    pair: 'MATIC/USD',
    price: '1.20',
    change: '+0.5%',
    volume: '250M',
    high: '1.22',
    low: '1.18',
  },
  {
    pair: 'LINK/USD',
    price: '18.50',
    change: '-0.8%',
    volume: '180M',
    high: '18.80',
    low: '18.20',
  },
];

// Mock market overview data
const marketOverview = {
  totalMarketCap: '2.1T',
  marketCapChange: '+3.2%',
  volume24h: '120B',
  btcDominance: '42.5%',
  activeMarkets: '250+',
  totalCryptocurrencies: '12,000+',
};

export default function TradingPlatform() {
  const [selectedPair, setSelectedPair] = useState('BTC/USD');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPairs = tradingPairs.filter((pair) =>
    pair.pair.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow p-6'>
        <div className='max-w-7xl mx-auto mt-20'>
          {/* Market Overview Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
            <div className='bg-gray-800 rounded-lg p-4'>
              <h3 className='text-gray-400 text-sm'>Total Market Cap</h3>
              <p className='text-2xl font-bold'>
                ${marketOverview.totalMarketCap}
              </p>
              <p className='text-green-500 text-sm'>
                +{marketOverview.marketCapChange}
              </p>
            </div>
            <div className='bg-gray-800 rounded-lg p-4'>
              <h3 className='text-gray-400 text-sm'>24h Volume</h3>
              <p className='text-2xl font-bold'>${marketOverview.volume24h}</p>
              <p className='text-green-500 text-sm'>+5.2%</p>
            </div>
            <div className='bg-gray-800 rounded-lg p-4'>
              <h3 className='text-gray-400 text-sm'>BTC Dominance</h3>
              <p className='text-2xl font-bold'>
                {marketOverview.btcDominance}
              </p>
              <p className='text-green-500 text-sm'>+0.5%</p>
            </div>
            <div className='bg-gray-800 rounded-lg p-4'>
              <h3 className='text-gray-400 text-sm'>Active Markets</h3>
              <p className='text-2xl font-bold'>
                {marketOverview.activeMarkets}
              </p>
              <p className='text-green-500 text-sm'>
                {marketOverview.totalCryptocurrencies} assets
              </p>
            </div>
          </div>

          {/* Trading Pairs Section */}
          <div className='bg-gray-800 rounded-lg p-6'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-xl font-semibold'>Trading Pairs</h2>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search pairs...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='bg-gray-700 rounded-lg px-4 py-2 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <svg
                  className='absolute left-3 top-2.5 h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>

            {/* Trading Pairs Table */}
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='text-left text-gray-400 text-sm'>
                    <th className='pb-4'>Pair</th>
                    <th className='pb-4'>Price</th>
                    <th className='pb-4'>24h Change</th>
                    <th className='pb-4'>24h Volume</th>
                    <th className='pb-4'>24h High</th>
                    <th className='pb-4'>24h Low</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                  {filteredPairs.map((pair) => (
                    <tr
                      key={pair.pair}
                      className={`cursor-pointer hover:bg-gray-700 ${
                        selectedPair === pair.pair ? 'bg-gray-700' : ''
                      }`}
                      onClick={() => setSelectedPair(pair.pair)}
                    >
                      <td className='py-4'>
                        <div className='font-medium'>{pair.pair}</div>
                      </td>
                      <td className='py-4'>
                        <div className='font-medium'>${pair.price}</div>
                      </td>
                      <td className='py-4'>
                        <div
                          className={`${
                            pair.change.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}
                        >
                          {pair.change}
                        </div>
                      </td>
                      <td className='py-4'>
                        <div className='text-gray-400'>${pair.volume}</div>
                      </td>
                      <td className='py-4'>
                        <div className='text-gray-400'>${pair.high}</div>
                      </td>
                      <td className='py-4'>
                        <div className='text-gray-400'>${pair.low}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Book */}
          <div className='mt-6 bg-gray-800 rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-4'>
              Order Book - {selectedPair}
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h3 className='text-green-500 font-medium mb-2'>Bids</h3>
                <div className='space-y-1'>
                  {[52000, 51900, 51800].map((price) => (
                    <div
                      key={price}
                      className='flex justify-between text-sm bg-gray-700 p-2 rounded'
                    >
                      <span>{price.toLocaleString()}</span>
                      <span>0.5 BTC</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='text-red-500 font-medium mb-2'>Asks</h3>
                <div className='space-y-1'>
                  {[52100, 52200, 52300].map((price) => (
                    <div
                      key={price}
                      className='flex justify-between text-sm bg-gray-700 p-2 rounded'
                    >
                      <span>{price.toLocaleString()}</span>
                      <span>0.5 BTC</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
