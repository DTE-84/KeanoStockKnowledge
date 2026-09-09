'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Jan', value: 100000 },
  { name: 'Feb', value: 112000 },
  { name: 'Mar', value: 108000 },
  { name: 'Apr', value: 125000 },
  { name: 'May', value: 132000 },
  { name: 'Jun', value: 128000 },
  { name: 'Jul', value: 145000 },
  { name: 'Aug', value: 152000 },
  { name: 'Sep', value: 168000 },
  { name: 'Oct', value: 164000 },
  { name: 'Nov', value: 182000 },
  { name: 'Dec', value: 195000 },
];

export default function PerformanceChart() {
  return (
    <div className="w-full h-[400px] bg-card/50 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-6 text-foreground">YTD Performance Portfolio</h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#ffffff50" 
              tick={{ fill: '#ffffff50', fontSize: 12 }} 
              tickLine={false} 
              axisLine={false}
            />
            <YAxis 
              stroke="#ffffff50" 
              tick={{ fill: '#ffffff50', fontSize: 12 }} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '8px' }}
              itemStyle={{ color: '#10B981' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8, fill: '#10B981', stroke: '#0F172A', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
