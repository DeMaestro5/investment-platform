'use client';

import React, { useState, ChangeEvent } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import {
  ChevronUp,
  ChevronDown,
  Search,
  TrendingUp,
  TrendingDown,
  BarChart2,
} from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

// Mock data for commodities
const mockCommodities = [
  {
    symbol: 'GC',
    name: 'Gold',
    price: 2150.45,
    change: 12.34,
    changePercent: 0.58,
    volume: '125.2K',
    high: 2160.5,
    low: 2140.3,
    unit: 'oz',
  },
  {
    symbol: 'SI',
    name: 'Silver',
    price: 24.15,
    change: -0.25,
    changePercent: -1.02,
    volume: '45.8K',
    high: 24.5,
    low: 24.0,
    unit: 'oz',
  },
  {
    symbol: 'CL',
    name: 'Crude Oil',
    price: 82.45,
    change: 1.25,
    changePercent: 1.54,
    volume: '350.2K',
    high: 83.0,
    low: 81.5,
    unit: 'bbl',
  },
  {
    symbol: 'NG',
    name: 'Natural Gas',
    price: 1.85,
    change: -0.05,
    changePercent: -2.63,
    volume: '125.5K',
    high: 1.9,
    low: 1.8,
    unit: 'mmBtu',
  },
  {
    symbol: 'ZC',
    name: 'Corn',
    price: 425.75,
    change: 2.25,
    changePercent: 0.53,
    volume: '85.2K',
    high: 427.0,
    low: 424.5,
    unit: 'bushel',
  },
  {
    symbol: 'ZS',
    name: 'Soybeans',
    price: 1185.25,
    change: -5.75,
    changePercent: -0.48,
    volume: '45.8K',
    high: 1190.0,
    low: 1180.0,
    unit: 'bushel',
  },
];

// Mock price data for chart
const priceData = [
  { time: '00:00', price: 2140 },
  { time: '04:00', price: 2145 },
  { time: '08:00', price: 2150 },
  { time: '12:00', price: 2155 },
  { time: '16:00', price: 2150 },
  { time: '20:00', price: 2155 },
  { time: '24:00', price: 2150 },
];

export default function CommoditiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: 'symbol',
    direction: 'asc',
  });
  const [timeframe, setTimeframe] = useState('1D');

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCommodities = mockCommodities
    .filter(
      (commodity) =>
        commodity.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        commodity.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];

      if (sortConfig.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />

      <main className='container mx-auto px-4 py-8'>
        <div className='mb-8 mt-12'>
          <h1 className='text-4xl font-bold mb-2'>Commodities Market</h1>
          <p className='text-gray-400'>
            Track real-time commodity prices and market movements
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className='flex justify-end mb-4'>
          <div className='flex gap-2'>
            {['1D', '1W', '1M', '3M', '1Y'].map((tf) => (
              <Button
                key={tf}
                variant={timeframe === tf ? 'primary' : 'outline'}
                onClick={() => setTimeframe(tf)}
                className='bg-gray-800 border-gray-700'
              >
                {tf}
              </Button>
            ))}
          </div>
        </div>

        {/* Market Overview Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <div className='bg-gray-800 rounded-lg p-4'>
            <h3 className='text-gray-400 mb-2'>Gold (GC)</h3>
            <div className='text-2xl font-bold'>$2,150.45</div>
            <div className='flex items-center text-green-500 mt-2'>
              <TrendingUp className='w-4 h-4 mr-1' />
              +0.58%
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg p-4'>
            <h3 className='text-gray-400 mb-2'>Crude Oil (CL)</h3>
            <div className='text-2xl font-bold'>$82.45</div>
            <div className='flex items-center text-green-500 mt-2'>
              <TrendingUp className='w-4 h-4 mr-1' />
              +1.54%
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg p-4'>
            <h3 className='text-gray-400 mb-2'>Market Sentiment</h3>
            <div className='text-2xl font-bold'>Bullish</div>
            <div className='text-gray-400 mt-2'>Commodity Index: 125.5</div>
          </div>
        </div>

        {/* Price Chart */}
        <div className='bg-gray-800 rounded-lg p-4 mb-6'>
          <h3 className='text-xl font-semibold mb-4'>Gold Price Chart</h3>
          <div className='h-[300px]'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={priceData}>
                <defs>
                  <linearGradient id='colorPrice' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                    <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis dataKey='time' stroke='#9CA3AF' />
                <YAxis stroke='#9CA3AF' />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    color: '#F3F4F6',
                  }}
                />
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
        </div>

        {/* Search and Filter Section */}
        <div className='mb-6 flex items-center gap-4'>
          <div className='relative flex-1'>
            <Search
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={20}
            />
            <Input
              type='text'
              placeholder='Search commodities...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='pl-10 bg-gray-800 border-gray-700 text-white'
            />
          </div>
          <Button variant='outline' className='bg-gray-800 border-gray-700'>
            <BarChart2 className='mr-2 h-4 w-4' />
            Market Overview
          </Button>
        </div>

        {/* Commodities Table */}
        <div className='bg-gray-800 rounded-lg overflow-hidden'>
          <Table>
            <TableHeader>
              <TableRow className='border-gray-700'>
                <TableHead
                  className='cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('symbol')}
                >
                  <div className='flex items-center gap-1'>
                    Symbol
                    {sortConfig.key === 'symbol' &&
                      (sortConfig.direction === 'asc' ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </TableHead>
                <TableHead
                  className='cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('name')}
                >
                  <div className='flex items-center gap-1'>
                    Commodity
                    {sortConfig.key === 'name' &&
                      (sortConfig.direction === 'asc' ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </TableHead>
                <TableHead
                  className='text-right cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('price')}
                >
                  <div className='flex items-center justify-end gap-1'>
                    Price
                    {sortConfig.key === 'price' &&
                      (sortConfig.direction === 'asc' ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </TableHead>
                <TableHead
                  className='text-right cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('change')}
                >
                  <div className='flex items-center justify-end gap-1'>
                    Change
                    {sortConfig.key === 'change' &&
                      (sortConfig.direction === 'asc' ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </TableHead>
                <TableHead
                  className='text-right cursor-pointer hover:bg-gray-700'
                  onClick={() => handleSort('volume')}
                >
                  <div className='flex items-center justify-end gap-1'>
                    Volume
                    {sortConfig.key === 'volume' &&
                      (sortConfig.direction === 'asc' ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </TableHead>
                <TableHead className='text-right'>Range</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCommodities.map((commodity) => (
                <TableRow
                  key={commodity.symbol}
                  className='border-gray-700 hover:bg-gray-700'
                >
                  <TableCell className='font-medium'>
                    {commodity.symbol}
                  </TableCell>
                  <TableCell>
                    {commodity.name}
                    <div className='text-sm text-gray-400'>
                      {commodity.unit}
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>
                    ${commodity.price.toFixed(2)}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      commodity.change >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    <div className='flex items-center justify-end gap-1'>
                      {commodity.change >= 0 ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      {commodity.change.toFixed(2)} (
                      {commodity.changePercent.toFixed(2)}%)
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>
                    {commodity.volume}
                  </TableCell>
                  <TableCell className='text-right text-sm text-gray-400'>
                    ${commodity.low.toFixed(2)} - ${commodity.high.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
