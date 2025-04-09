'use client';

import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

interface CandlestickChartProps {
  timeframe: string;
}

export default function CandlestickChart({ timeframe }: CandlestickChartProps) {
  // Sample data - in a real app, this would come from an API
  const data = [
    { name: 'Jan 1', open: 100, close: 105, high: 110, low: 95 },
    { name: 'Jan 2', open: 105, close: 110, high: 115, low: 100 },
    { name: 'Jan 3', open: 110, close: 115, high: 120, low: 105 },
    { name: 'Jan 4', open: 115, close: 120, high: 125, low: 110 },
    { name: 'Jan 5', open: 120, close: 125, high: 130, low: 115 },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ComposedChart data={data}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        {data.map((entry, index) => (
          <g key={index}>
            <line
              x1={index * 100 + 50}
              y1={entry.low}
              x2={index * 100 + 50}
              y2={entry.high}
              stroke='#26a69a'
              strokeWidth={2}
            />
            <rect
              x={index * 100 + 30}
              y={Math.min(entry.open, entry.close)}
              width={40}
              height={Math.abs(entry.close - entry.open)}
              fill={entry.close >= entry.open ? '#26a69a' : '#ef5350'}
              stroke={entry.close >= entry.open ? '#26a69a' : '#ef5350'}
              strokeWidth={2}
            />
          </g>
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
