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
  { time: '00:00', price: 1.085 },
  { time: '04:00', price: 1.0875 },
  { time: '08:00', price: 1.09 },
  { time: '12:00', price: 1.0925 },
  { time: '16:00', price: 1.095 },
  { time: '20:00', price: 1.0975 },
  { time: '24:00', price: 1.1 },
];

const forexPairs = [
  {
    pair: 'EUR/USD',
    bid: '1.0950',
    ask: '1.0952',
    change: '+0.25%',
    high: '1.0975',
    low: '1.0925',
  },
  {
    pair: 'GBP/USD',
    bid: '1.2750',
    ask: '1.2752',
    change: '+0.15%',
    high: '1.2775',
    low: '1.2725',
  },
  {
    pair: 'USD/JPY',
    bid: '151.25',
    ask: '151.27',
    change: '-0.10%',
    high: '151.50',
    low: '151.00',
  },
  {
    pair: 'AUD/USD',
    bid: '0.6550',
    ask: '0.6552',
    change: '+0.35%',
    high: '0.6575',
    low: '0.6525',
  },
];

export default function ForexPage() {
  const [timeframe, setTimeframe] = useState('1D');

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow pt-20'>
        <div className='container mx-auto p-4 space-y-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Forex Markets</h1>
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
                <CardTitle>EUR/USD</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='text-2xl font-bold'>1.0950</div>
                  <div className='flex items-center text-green-500'>
                    <ArrowUp className='w-4 h-4 mr-1' />
                    +0.25% (24h)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='text-2xl font-bold'>$6.6T</div>
                  <div className='text-muted-foreground'>24h Volume: $7.5T</div>
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
                    Risk-On
                  </div>
                  <div className='text-muted-foreground'>DXY: 104.25</div>
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
              <CardTitle>Major Currency Pairs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='border-b'>
                      <th className='text-left py-2'>Pair</th>
                      <th className='text-right py-2'>Bid</th>
                      <th className='text-right py-2'>Ask</th>
                      <th className='text-right py-2'>24h Change</th>
                      <th className='text-right py-2'>High</th>
                      <th className='text-right py-2'>Low</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forexPairs.map((pair) => (
                      <tr key={pair.pair} className='border-b'>
                        <td className='py-2 font-medium'>{pair.pair}</td>
                        <td className='text-right py-2'>{pair.bid}</td>
                        <td className='text-right py-2'>{pair.ask}</td>
                        <td
                          className={`text-right py-2 ${
                            pair.change.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}
                        >
                          {pair.change}
                        </td>
                        <td className='text-right py-2'>{pair.high}</td>
                        <td className='text-right py-2'>{pair.low}</td>
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
