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
} from 'lucide-react';

// Mock data for stocks
const mockStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.34,
    change: 2.45,
    changePercent: 1.42,
    volume: '45.2M',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 420.72,
    change: -1.23,
    changePercent: -0.29,
    volume: '32.1M',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 152.45,
    change: 3.12,
    changePercent: 2.09,
    volume: '28.7M',
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 185.25,
    change: -0.45,
    changePercent: -0.24,
    volume: '35.8M',
  },
  {
    symbol: 'META',
    name: 'Meta Platforms',
    price: 485.96,
    change: 5.67,
    changePercent: 1.18,
    volume: '18.9M',
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 175.22,
    change: -2.34,
    changePercent: -1.32,
    volume: '112.5M',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: 950.02,
    change: 15.45,
    changePercent: 1.65,
    volume: '45.3M',
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase',
    price: 198.45,
    change: 1.23,
    changePercent: 0.62,
    volume: '12.8M',
  },
];

export default function StocksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: 'symbol',
    direction: 'asc',
  });

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredStocks = mockStocks
    .filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          <h1 className='text-4xl font-bold mb-2'>Stock Market</h1>
          <p className='text-gray-400'>
            Real-time stock market data and trading
          </p>
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
              placeholder='Search stocks...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='pl-10 bg-gray-800 border-gray-700 text-white'
            />
          </div>
          <Button variant='outline' className='bg-gray-800 border-gray-700'>
            Filters
          </Button>
        </div>

        {/* Stocks Table */}
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
                    Company
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
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStocks.map((stock) => (
                <TableRow
                  key={stock.symbol}
                  className='border-gray-700 hover:bg-gray-700'
                >
                  <TableCell className='font-medium'>{stock.symbol}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell className='text-right'>
                    ${stock.price.toFixed(2)}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      stock.change >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    <div className='flex items-center justify-end gap-1'>
                      {stock.change >= 0 ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      {stock.change.toFixed(2)} (
                      {stock.changePercent.toFixed(2)}%)
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>{stock.volume}</TableCell>
                  <TableCell className='text-right'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='bg-blue-600 border-blue-600 hover:bg-blue-700'
                    >
                      Trade
                    </Button>
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
