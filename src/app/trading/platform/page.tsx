'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data for the chart
const mockData = [
  { time: '00:00', price: 50000 },
  { time: '04:00', price: 51000 },
  { time: '08:00', price: 49500 },
  { time: '12:00', price: 50500 },
  { time: '16:00', price: 51500 },
  { time: '20:00', price: 52000 },
];

// Mock trading pairs data
const tradingPairs = [
  { pair: 'BTC/USD', price: '52,000.00', change: '+2.5%', volume: '1.2B' },
  { pair: 'ETH/USD', price: '3,200.00', change: '+1.8%', volume: '800M' },
  { pair: 'SOL/USD', price: '120.00', change: '-0.5%', volume: '500M' },
  { pair: 'ADA/USD', price: '0.45', change: '+0.8%', volume: '300M' },
  { pair: 'DOT/USD', price: '7.20', change: '-1.2%', volume: '200M' },
];

// Mock market overview data
const marketOverview = {
  totalMarketCap: '2.1T',
  marketCapChange: '+3.2%',
  volume24h: '120B',
  btcDominance: '42.5%',
};

export default function TradingPlatform() {
  const [selectedPair, setSelectedPair] = useState('BTC/USD');

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow p-6'>
        <div className='max-w-7xl mx-auto mt-20'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold'>Trading Platform</h1>
            <div className='flex items-center space-x-4'>
              <div className='bg-gray-800 rounded-lg p-3'>
                <span className='text-gray-400 text-sm'>24h Volume</span>
                <p className='text-xl font-semibold'>
                  ${marketOverview.volume24h}
                </p>
              </div>
              <div className='bg-gray-800 rounded-lg p-3'>
                <span className='text-gray-400 text-sm'>Market Cap</span>
                <p className='text-xl font-semibold'>
                  ${marketOverview.totalMarketCap}
                </p>
              </div>
              <div className='bg-gray-800 rounded-lg p-3'>
                <span className='text-gray-400 text-sm'>BTC Dominance</span>
                <p className='text-xl font-semibold'>
                  {marketOverview.btcDominance}
                </p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Price Chart */}
            <div className='lg:col-span-2 bg-gray-800 rounded-lg p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold'>
                  {selectedPair} Price Chart
                </h2>
                <div className='flex space-x-2'>
                  <button className='px-3 py-1 bg-gray-700 rounded-lg text-sm'>
                    1D
                  </button>
                  <button className='px-3 py-1 bg-gray-700 rounded-lg text-sm'>
                    1W
                  </button>
                  <button className='px-3 py-1 bg-gray-700 rounded-lg text-sm'>
                    1M
                  </button>
                  <button className='px-3 py-1 bg-gray-700 rounded-lg text-sm'>
                    1Y
                  </button>
                </div>
              </div>
              <div className='h-[400px]'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='time' stroke='#9CA3AF' />
                    <YAxis stroke='#9CA3AF' />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                      }}
                      labelStyle={{ color: '#9CA3AF' }}
                    />
                    <Line
                      type='monotone'
                      dataKey='price'
                      stroke='#3B82F6'
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Trading Pairs */}
            <div className='bg-gray-800 rounded-lg p-6'>
              <h2 className='text-xl font-semibold mb-4'>Trading Pairs</h2>
              <div className='space-y-2'>
                {tradingPairs.map((pair) => (
                  <div
                    key={pair.pair}
                    className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedPair === pair.pair
                        ? 'bg-gray-700'
                        : 'hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedPair(pair.pair)}
                  >
                    <div>
                      <p className='font-medium'>{pair.pair}</p>
                      <p className='text-sm text-gray-400'>
                        Vol: ${pair.volume}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='font-medium'>${pair.price}</p>
                      <p
                        className={`text-sm ${
                          pair.change.startsWith('+')
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {pair.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Overview */}
          <div className='mt-6 bg-gray-800 rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-4'>Market Overview</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div className='bg-gray-700 rounded-lg p-4'>
                <h3 className='text-gray-400 text-sm'>Total Market Cap</h3>
                <p className='text-2xl font-bold'>
                  ${marketOverview.totalMarketCap}
                </p>
                <p className='text-green-500 text-sm'>
                  +{marketOverview.marketCapChange}
                </p>
              </div>
              <div className='bg-gray-700 rounded-lg p-4'>
                <h3 className='text-gray-400 text-sm'>24h Volume</h3>
                <p className='text-2xl font-bold'>
                  ${marketOverview.volume24h}
                </p>
                <p className='text-green-500 text-sm'>+5.2%</p>
              </div>
              <div className='bg-gray-700 rounded-lg p-4'>
                <h3 className='text-gray-400 text-sm'>BTC Dominance</h3>
                <p className='text-2xl font-bold'>
                  {marketOverview.btcDominance}
                </p>
                <p className='text-green-500 text-sm'>+0.5%</p>
              </div>
              <div className='bg-gray-700 rounded-lg p-4'>
                <h3 className='text-gray-400 text-sm'>Active Markets</h3>
                <p className='text-2xl font-bold'>250+</p>
                <p className='text-green-500 text-sm'>+10 new</p>
              </div>
            </div>
          </div>

          {/* Order Book */}
          <div className='mt-6 bg-gray-800 rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-4'>Order Book</h2>
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
