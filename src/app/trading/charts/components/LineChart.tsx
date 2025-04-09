'use client';

import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';

interface LineChartProps {
  timeframe: string;
}

export default function LineChartComponent({ timeframe }: LineChartProps) {
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
      <RechartsLineChart data={data}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='value'
          stroke='#2962FF'
          strokeWidth={2}
          dot={{ fill: '#2962FF', strokeWidth: 2 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
