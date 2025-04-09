'use client';

import { useState } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { ArrowUp, TrendingUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data for demonstration
const priceData = [
  { time: '00:00', price: 45000 },
  { time: '04:00', price: 45500 },
  { time: '08:00', price: 46000 },
  { time: '12:00', price: 46500 },
  { time: '16:00', price: 47000 },
  { time: '20:00', price: 47500 },
  { time: '24:00', price: 48000 },
];

const marketData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$48,000',
    change: '+2.5%',
    volume: '$24.5B',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$3,200',
    change: '+1.8%',
    volume: '$12.3B',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: '$120',
    change: '-0.5%',
    volume: '$2.1B',
  },
];

export default function CryptocurrencyPage() {
  const [timeframe, setTimeframe] = useState('1D');

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow pt-20'>
        <div className='container mx-auto p-4 space-y-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Cryptocurrency Markets</h1>
            <div className='flex gap-2'>
              {['1D', '1W', '1M', '3M', '1Y'].map((tf) => (
                <Button
                  key={tf}
                  variant={timeframe === tf ? 'primary' : 'outline'}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </Button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Card>
              <CardHeader>
                <CardTitle>Bitcoin (BTC)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='text-2xl font-bold'>$48,000</div>
                  <div className='flex items-center text-green-500'>
                    <ArrowUp className='w-4 h-4 mr-1' />
                    +2.5% (24h)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Cap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='text-2xl font-bold'>$900B</div>
                  <div className='text-muted-foreground'>
                    24h Volume: $24.5B
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex items-center text-green-500'>
                    <TrendingUp className='w-4 h-4 mr-1' />
                    Bullish
                  </div>
                  <div className='text-muted-foreground'>
                    Fear & Greed Index: 75
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Price Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-[400px]'>
                <ResponsiveContainer width='100%' height='100%'>
                  <AreaChart data={priceData}>
                    <defs>
                      <linearGradient
                        id='colorPrice'
                        x1='0'
                        y1='0'
                        x2='0'
                        y2='1'
                      >
                        <stop
                          offset='5%'
                          stopColor='#8884d8'
                          stopOpacity={0.8}
                        />
                        <stop
                          offset='95%'
                          stopColor='#8884d8'
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='time' />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type='monotone'
                      dataKey='price'
                      stroke='#8884d8'
                      fillOpacity={1}
                      fill='url(#colorPrice)'
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Cryptocurrencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='border-b'>
                      <th className='text-left py-2'>Name</th>
                      <th className='text-right py-2'>Price</th>
                      <th className='text-right py-2'>24h Change</th>
                      <th className='text-right py-2'>24h Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketData.map((coin) => (
                      <tr key={coin.symbol} className='border-b'>
                        <td className='py-2'>
                          <div className='font-medium'>{coin.name}</div>
                          <div className='text-sm text-muted-foreground'>
                            {coin.symbol}
                          </div>
                        </td>
                        <td className='text-right py-2'>{coin.price}</td>
                        <td
                          className={`text-right py-2 ${
                            coin.change.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}
                        >
                          {coin.change}
                        </td>
                        <td className='text-right py-2'>{coin.volume}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
