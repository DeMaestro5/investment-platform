'use client';

import {
  ResponsiveContainer,
  AreaChart as RechartsAreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts';

interface AreaChartProps {
  timeframe: string;
}

export default function AreaChartComponent({ timeframe }: AreaChartProps) {
  // Sample data - in a real app, this would come from an API
  const data = [
    { name: 'Jan 1', value: 100 },
    { name: 'Jan 2', value: 110 },
    { name: 'Jan 3', value: 115 },
    { name: 'Jan 4', value: 120 },
    { name: 'Jan 5', value: 125 },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RechartsAreaChart data={data}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='value'
          stroke='#2962FF'
          fill='url(#colorGradient)'
          strokeWidth={2}
        />
        <defs>
          <linearGradient id='colorGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#2962FF' stopOpacity={0.4} />
            <stop offset='95%' stopColor='#2962FF' stopOpacity={0} />
          </linearGradient>
        </defs>
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
