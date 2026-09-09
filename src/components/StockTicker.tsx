'use client';

import { motion } from 'framer-motion';

const MOCK_STOCKS = [
  { symbol: 'AAPL', price: '185.92', change: '+1.2%', up: true },
  { symbol: 'TSLA', price: '212.50', change: '-0.8%', up: false },
  { symbol: 'NVDA', price: '726.13', change: '+3.4%', up: true },
  { symbol: 'MSFT', price: '405.57', change: '+0.5%', up: true },
  { symbol: 'AMZN', price: '174.45', change: '-1.1%', up: false },
  { symbol: 'META', price: '468.11', change: '+2.1%', up: true },
  { symbol: 'GOOGL', price: '142.38', change: '+0.3%', up: true },
  { symbol: 'NFLX', price: '584.95', change: '-0.2%', up: false },
  { symbol: 'AMD', price: '173.87', change: '+4.5%', up: true },
  { symbol: 'SPY', price: '508.08', change: '+0.8%', up: true },
];

export default function StockTicker() {
  return (
    <div className="w-full bg-card overflow-hidden py-3 border-y border-white/10 flex whitespace-nowrap relative">
      {/* Gradient fades for the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />

      <motion.div
        className="flex space-x-12 px-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 30,
          repeat: Infinity,
        }}
      >
        {/* We double the items to create a seamless loop */}
        {[...MOCK_STOCKS, ...MOCK_STOCKS].map((stock, i) => (
          <div key={i} className="flex items-center space-x-2 text-sm font-mono">
            <span className="font-semibold text-foreground/80">{stock.symbol}</span>
            <span className="text-foreground">${stock.price}</span>
            <span className={stock.up ? 'text-kinetic' : 'text-red-500'}>
              {stock.up ? '▲' : '▼'} {stock.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
