'use client';

import React, { useEffect, useRef } from 'react';
import { TraderViewChartProps } from '../../types/P.types';
import SectionHeading from './sectionHeading';

// TradingView Widget
export const TraderViewChart: React.FC<TraderViewChartProps> = ({
  height = '500px',
  symbol = 'BITSTAMP:BTCUSD',
  interval = '1D',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing widgets
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Create the script element for TradingView Widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined') {
        /* eslint-disable no-new */
        new window.TradingView.widget({
          autosize: true,
          symbol,
          interval,
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current?.id,
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [symbol, interval]);

  return (
    <div
      id={`tradingview_${Math.random().toString(36).substring(2, 9)}`}
      ref={containerRef}
      className={`w-full ${className}`}
      style={{ height }}
    />
  );
};

// TradingView Section Component
export const TraderViewSection: React.FC = () => {
  return (
    <section id='section-01' className='py-16 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <SectionHeading
          title='Real-Time Market Data'
          subtitle='Stay up-to-date with live market movements and make informed trading decisions'
          alignment='center'
        />

        <div className='mt-10 rounded-lg overflow-hidden shadow-xl'>
          <TraderViewChart />
        </div>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-white mb-2'>
              Cryptocurrency
            </h3>
            <p className='text-gray-300 mb-4'>
              Track major cryptocurrencies like Bitcoin, Ethereum, and more
            </p>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-white mb-2'>Forex</h3>
            <p className='text-gray-300 mb-4'>
              Monitor currency pairs and exchange rates in real-time
            </p>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-white mb-2'>Stocks</h3>
            <p className='text-gray-300 mb-4'>
              Follow stock market performance across global exchanges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add TradingView type for TypeScript
declare global {
  interface Window {
    TradingView: {
      widget: new (config: {
        autosize: boolean;
        symbol: string;
        interval: string;
        timezone: string;
        theme: string;
        style: string;
        locale: string;
        toolbar_bg: string;
        enable_publishing: boolean;
        allow_symbol_change: boolean;
        container_id: string | undefined;
      }) => void;
    };
  }
}

export default TraderViewSection;
