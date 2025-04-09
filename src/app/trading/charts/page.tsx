'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const data = [
  { name: 'Jan', value: 400, volume: 2400 },
  { name: 'Feb', value: 300, volume: 1398 },
  { name: 'Mar', value: 200, volume: 9800 },
  { name: 'Apr', value: 278, volume: 3908 },
  { name: 'May', value: 189, volume: 4800 },
  { name: 'Jun', value: 239, volume: 3800 },
  { name: 'Jul', value: 349, volume: 4300 },
];

const pieData = [
  { name: 'Stocks', value: 400 },
  { name: 'Bonds', value: 300 },
  { name: 'Crypto', value: 300 },
  { name: 'Real Estate', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ChartsPage() {
  const [activeTab, setActiveTab] = useState('line');

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <main className='container mx-auto px-4 py-8 mt-20'>
        <h1 className='text-3xl font-bold mb-8'>Market Analysis</h1>

        <div className='mb-6'>
          <div className='flex space-x-4'>
            <button
              onClick={() => setActiveTab('line')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'line'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              Line Chart
            </button>
            <button
              onClick={() => setActiveTab('bar')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'bar'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              Bar Chart
            </button>
            <button
              onClick={() => setActiveTab('pie')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'pie'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              Pie Chart
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700'>
            <h2 className='text-xl font-semibold mb-4 text-gray-300'>
              Price Movement
            </h2>
            <div className='h-[400px]'>
              <ResponsiveContainer width='100%' height='100%'>
                {activeTab === 'line' ? (
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='name' stroke='#9CA3AF' />
                    <YAxis stroke='#9CA3AF' />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        color: '#F3F4F6',
                      }}
                    />
                    <Legend />
                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke='#EAB308'
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                ) : activeTab === 'bar' ? (
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='name' stroke='#9CA3AF' />
                    <YAxis stroke='#9CA3AF' />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        color: '#F3F4F6',
                      }}
                    />
                    <Legend />
                    <Bar dataKey='volume' fill='#EAB308' />
                  </BarChart>
                ) : (
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx='50%'
                      cy='50%'
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={150}
                      fill='#EAB308'
                      dataKey='value'
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        color: '#F3F4F6',
                      }}
                    />
                    <Legend />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700'>
            <h2 className='text-xl font-semibold mb-4 text-gray-300'>
              Market Overview
            </h2>
            <div className='space-y-4'>
              <div className='p-4 bg-gray-700/50 rounded-lg border border-gray-600'>
                <h3 className='font-medium text-gray-300'>
                  Total Portfolio Value
                </h3>
                <p className='text-2xl font-bold text-yellow-500'>
                  $125,432.89
                </p>
                <p className='text-green-500'>+2.4% from last month</p>
              </div>
              <div className='p-4 bg-gray-700/50 rounded-lg border border-gray-600'>
                <h3 className='font-medium text-gray-300'>
                  Best Performing Asset
                </h3>
                <p className='text-2xl font-bold text-yellow-500'>AAPL</p>
                <p className='text-green-500'>+5.2% this week</p>
              </div>
              <div className='p-4 bg-gray-700/50 rounded-lg border border-gray-600'>
                <h3 className='font-medium text-gray-300'>Market Sentiment</h3>
                <p className='text-2xl font-bold text-yellow-500'>Bullish</p>
                <p className='text-gray-400'>Based on 24h trading volume</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
