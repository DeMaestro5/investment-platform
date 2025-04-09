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

// Mock data for major indices
const mockIndices = [
  {
    symbol: '^GSPC',
    name: 'S&P 500',
    price: 5204.34,
    change: 45.23,
    changePercent: 0.88,
    volume: '2.1B',
    high: 5210.45,
    low: 5180.12,
  },
  {
    symbol: '^DJI',
    name: 'Dow Jones Industrial Average',
    price: 38892.8,
    change: 130.15,
    changePercent: 0.34,
    volume: '350.2M',
    high: 38920.45,
    low: 38750.12,
  },
  {
    symbol: '^IXIC',
    name: 'NASDAQ Composite',
    price: 16253.96,
    change: -23.45,
    changePercent: -0.14,
    volume: '3.8B',
    high: 16300.45,
    low: 16200.12,
  },
  {
    symbol: '^FTSE',
    name: 'FTSE 100',
    price: 7935.09,
    change: 12.34,
    changePercent: 0.16,
    volume: '1.2B',
    high: 7945.45,
    low: 7900.12,
  },
  {
    symbol: '^N225',
    name: 'Nikkei 225',
    price: 39773.13,
    change: 201.45,
    changePercent: 0.51,
    volume: '450.2M',
    high: 39800.45,
    low: 39500.12,
  },
  {
    symbol: '^HSI',
    name: 'Hang Seng Index',
    price: 16723.92,
    change: -45.67,
    changePercent: -0.27,
    volume: '1.5B',
    high: 16800.45,
    low: 16600.12,
  },
];

export default function IndicesPage() {
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

  const filteredIndices = mockIndices
    .filter(
      (index) =>
        index.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        index.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          <h1 className='text-4xl font-bold mb-2'>Global Indices</h1>
          <p className='text-gray-400'>
            Track major global market indices in real-time
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
              placeholder='Search indices...'
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

        {/* Indices Table */}
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
                    Index
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
              {filteredIndices.map((index) => (
                <TableRow
                  key={index.symbol}
                  className='border-gray-700 hover:bg-gray-700'
                >
                  <TableCell className='font-medium'>{index.symbol}</TableCell>
                  <TableCell>{index.name}</TableCell>
                  <TableCell className='text-right'>
                    ${index.price.toLocaleString()}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      index.change >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    <div className='flex items-center justify-end gap-1'>
                      {index.change >= 0 ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      {index.change.toFixed(2)} (
                      {index.changePercent.toFixed(2)}%)
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>{index.volume}</TableCell>
                  <TableCell className='text-right text-sm text-gray-400'>
                    ${index.low.toLocaleString()} - $
                    {index.high.toLocaleString()}
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
