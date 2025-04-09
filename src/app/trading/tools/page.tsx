'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { ProgressStep } from '../../../types/P.types';
import ProgressIndicator from '../../../components/ui/ProgressIndicator';
import ToolModal from '../../../components/ui/ToolModal';
import QuickAccessModal from '../../../components/ui/QuickAccessModal';

interface ToolData {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export default function AnalysisToolsPage() {
  const [selectedTool, setSelectedTool] = useState<ToolData | null>(null);
  const [selectedQuickTool, setSelectedQuickTool] = useState<
    'currency' | 'pip' | 'margin' | 'profit' | null
  >(null);

  const progressSteps: ProgressStep[] = [
    { id: 1, label: 'Home', active: false },
    { id: 2, label: 'Trading', active: true },
    { id: 3, label: 'Analysis Tools', active: true },
  ];

  const tools: ToolData[] = [
    {
      id: 'technical-analysis',
      title: 'Technical Analysis',
      description:
        'Advanced charting tools with multiple indicators and drawing tools.',
      content: (
        <div className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold mb-2'>Moving Averages</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>SMA 20</span>
                  <span className='text-green-400'>↑ 1.2345</span>
                </div>
                <div className='flex justify-between'>
                  <span>SMA 50</span>
                  <span className='text-green-400'>↑ 1.2340</span>
                </div>
                <div className='flex justify-between'>
                  <span>SMA 200</span>
                  <span className='text-red-400'>↓ 1.2335</span>
                </div>
              </div>
            </div>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold mb-2'>RSI</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Current RSI</span>
                  <span className='text-yellow-400'>65.4</span>
                </div>
                <div className='w-full bg-gray-600 rounded-full h-2'>
                  <div
                    className='bg-yellow-400 h-2 rounded-full'
                    style={{ width: '65.4%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-700 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold mb-2'>Chart</h3>
            <div className='h-64 bg-gray-600 rounded flex items-center justify-center'>
              <span className='text-gray-400'>Interactive Chart Component</span>
            </div>
          </div>
        </div>
      ),
      icon: (
        <svg
          className='w-24 h-24 text-blue-400'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 3V21H21'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7 14L11 10L15 13L21 7'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='7' cy='14' r='1' fill='currentColor' />
          <circle cx='11' cy='10' r='1' fill='currentColor' />
          <circle cx='15' cy='13' r='1' fill='currentColor' />
          <circle cx='21' cy='7' r='1' fill='currentColor' />
        </svg>
      ),
    },
    {
      id: 'market-sentiment',
      title: 'Market Sentiment',
      description: 'Real-time sentiment analysis and social media trends.',
      content: (
        <div className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold mb-2'>
                Social Media Sentiment
              </h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Twitter</span>
                  <span className='text-green-400'>72% Positive</span>
                </div>
                <div className='flex justify-between'>
                  <span>Reddit</span>
                  <span className='text-yellow-400'>55% Positive</span>
                </div>
                <div className='flex justify-between'>
                  <span>News</span>
                  <span className='text-red-400'>38% Positive</span>
                </div>
              </div>
            </div>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold mb-2'>Market Indicators</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Fear & Greed Index</span>
                  <span className='text-yellow-400'>Neutral</span>
                </div>
                <div className='flex justify-between'>
                  <span>Volatility</span>
                  <span className='text-green-400'>Low</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: (
        <svg
          className='w-24 h-24 text-green-400'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 6V12L16 14'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: 'portfolio-analyzer',
      title: 'Portfolio Analyzer',
      description: 'Comprehensive portfolio analysis and risk assessment.',
      content: (
        <div className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold mb-2'>
                Portfolio Performance
              </h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Total Value</span>
                  <span className='text-green-400'>$125,432.45</span>
                </div>
                <div className='flex justify-between'>
                  <span>24h Change</span>
                  <span className='text-green-400'>+2.34%</span>
                </div>
                <div className='flex justify-between'>
                  <span>7d Change</span>
                  <span className='text-red-400'>-1.23%</span>
                </div>
              </div>
            </div>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold mb-2'>Risk Metrics</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Sharpe Ratio</span>
                  <span className='text-green-400'>1.45</span>
                </div>
                <div className='flex justify-between'>
                  <span>Beta</span>
                  <span className='text-yellow-400'>0.89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: (
        <svg
          className='w-24 h-24 text-purple-400'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 2L2 7L12 12L22 7L12 2Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2 17L12 22L22 17'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2 12L12 17L22 12'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: 'economic-calendar',
      title: 'Economic Calendar',
      description: 'Track important economic events and their market impact.',
      content: (
        <div className='space-y-4'>
          <div className='bg-gray-700 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold mb-4'>Upcoming Events</h3>
            <div className='space-y-4'>
              <div className='border-b border-gray-600 pb-4'>
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>US Non-Farm Payrolls</span>
                  <span className='text-yellow-400'>High Impact</span>
                </div>
                <div className='text-sm text-gray-400'>Today, 8:30 AM EST</div>
              </div>
              <div className='border-b border-gray-600 pb-4'>
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>FOMC Meeting Minutes</span>
                  <span className='text-red-400'>Critical</span>
                </div>
                <div className='text-sm text-gray-400'>
                  Tomorrow, 2:00 PM EST
                </div>
              </div>
              <div>
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>CPI Data Release</span>
                  <span className='text-yellow-400'>High Impact</span>
                </div>
                <div className='text-sm text-gray-400'>Friday, 8:30 AM EST</div>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: (
        <svg
          className='w-24 h-24 text-yellow-400'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='3'
            y='4'
            width='18'
            height='18'
            rx='2'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16 2V6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8 2V6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 10H21'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8 14H8.01'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 14H12.01'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16 14H16.01'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8 18H8.01'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 18H12.01'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16 18H16.01'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: 'risk-calculator',
      title: 'Risk Calculator',
      description: 'Calculate position sizes and risk parameters.',
      content: (
        <div className='space-y-4'>
          <div className='bg-gray-700 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold mb-4'>Position Calculator</h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Account Balance
                </label>
                <input
                  type='number'
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                  placeholder='Enter account balance'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Risk Percentage
                </label>
                <input
                  type='number'
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                  placeholder='Enter risk percentage'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Stop Loss (pips)
                </label>
                <input
                  type='number'
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                  placeholder='Enter stop loss in pips'
                />
              </div>
              <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors'>
                Calculate Position Size
              </button>
            </div>
          </div>
        </div>
      ),
      icon: (
        <svg
          className='w-24 h-24 text-red-400'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 8V12'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 16H12.01'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: 'market-scanner',
      title: 'Market Scanner',
      description:
        'Scan markets for trading opportunities based on your criteria.',
      content: (
        <div className='space-y-4'>
          <div className='bg-gray-700 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold mb-4'>Scan Results</h3>
            <div className='space-y-4'>
              <div className='border-b border-gray-600 pb-4'>
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>EUR/USD</span>
                  <span className='text-green-400'>Strong Buy</span>
                </div>
                <div className='text-sm text-gray-400'>
                  RSI: 30, MACD: Bullish
                </div>
              </div>
              <div className='border-b border-gray-600 pb-4'>
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>GBP/JPY</span>
                  <span className='text-red-400'>Strong Sell</span>
                </div>
                <div className='text-sm text-gray-400'>
                  RSI: 75, MACD: Bearish
                </div>
              </div>
              <div>
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>USD/CAD</span>
                  <span className='text-yellow-400'>Neutral</span>
                </div>
                <div className='text-sm text-gray-400'>
                  RSI: 45, MACD: Neutral
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: (
        <svg
          className='w-24 h-24 text-indigo-400'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 21L15 15'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10 7V10L12 11'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
  ];

  return (
    <div className='min-h-screen bg-gray-900 text-white overflow-x-hidden'>
      <Navbar />

      {/* Progress Indicator - Hide on mobile */}
      <div className='hidden md:block'>
        <ProgressIndicator steps={progressSteps} />
      </div>

      {/* Main Content */}
      <main className='w-full max-w-7xl mx-auto px-4 py-8 mt-12'>
        <h1 className='text-4xl font-bold mb-8'>Trading Analysis Tools</h1>

        {/* Tools Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {tools.map((tool) => (
            <div
              key={tool.id}
              className='bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors'
            >
              <h2 className='text-2xl font-semibold mb-4'>{tool.title}</h2>
              <p className='text-gray-300 mb-4'>{tool.description}</p>
              <div className='h-64 bg-gray-700 rounded mb-4 flex items-center justify-center'>
                {tool.icon}
              </div>
              <button
                onClick={() => setSelectedTool(tool)}
                className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors'
              >
                Open Tool
              </button>
            </div>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-semibold mb-6'>Quick Access Tools</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <button
              onClick={() => setSelectedQuickTool('currency')}
              className='bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors'
            >
              <span className='block text-center'>Currency Converter</span>
            </button>
            <button
              onClick={() => setSelectedQuickTool('pip')}
              className='bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors'
            >
              <span className='block text-center'>Pip Calculator</span>
            </button>
            <button
              onClick={() => setSelectedQuickTool('margin')}
              className='bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors'
            >
              <span className='block text-center'>Margin Calculator</span>
            </button>
            <button
              onClick={() => setSelectedQuickTool('profit')}
              className='bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors'
            >
              <span className='block text-center'>Profit Calculator</span>
            </button>
          </div>
        </div>
      </main>

      {/* Main Tools Modal */}
      {selectedTool && (
        <ToolModal
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          title={selectedTool.title}
        >
          {selectedTool.content}
        </ToolModal>
      )}

      {/* Quick Access Tools Modal */}
      <QuickAccessModal
        isOpen={!!selectedQuickTool}
        onClose={() => setSelectedQuickTool(null)}
        toolType={selectedQuickTool}
      />

      <Footer />
    </div>
  );
}
