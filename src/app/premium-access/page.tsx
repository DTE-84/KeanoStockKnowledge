import { Lock, MessageSquare, Bell, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PremiumAccess() {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="max-w-7xl mx-auto py-6 flex justify-between items-center mb-8 border-b border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Lock className="text-kinetic w-6 h-6" />
          The Inner Circle Dashboard
        </h1>
        <Link href="/" className="text-sm text-foreground/70 hover:text-white transition-colors">
          Return Home
        </Link>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-160px)] min-h-[600px]">
        {/* Left Column - Live Alerts */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-card rounded-2xl p-6 border border-white/5 flex-1 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="w-5 h-5 text-kinetic" /> Live Signals
              </h2>
              <span className="text-xs bg-kinetic/20 text-kinetic px-2 py-1 rounded-full animate-pulse">
                System Active
              </span>
            </div>
            
            <div className="space-y-4">
              {[
                { time: "09:32 AM", ticker: "NVDA", action: "BUY", price: "$726.13", note: "Breakout on 5m chart, heavy volume." },
                { time: "10:15 AM", ticker: "SPY", action: "SELL", price: "$508.90", note: "Hitting resistance, taking 50% off." },
                { time: "11:45 AM", ticker: "AMD", action: "BUY", price: "$172.50", note: "Pullback to VWAP, stop below $170." },
              ].map((signal, i) => (
                <div key={i} className="p-4 rounded-xl bg-background/50 border border-white/5 hover:border-kinetic/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`font-bold ${signal.action === 'BUY' ? 'text-kinetic' : 'text-red-400'}`}>
                        {signal.action}
                      </span>
                      <span className="text-lg font-mono">{signal.ticker}</span>
                    </div>
                    <span className="text-xs text-foreground/50">{signal.time}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-sm text-foreground/70">{signal.note}</p>
                    <span className="font-mono text-white">{signal.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Mock Discord Embed */}
        <div className="bg-[#313338] rounded-2xl border border-white/10 flex flex-col overflow-hidden">
          <div className="bg-[#2B2D31] p-4 flex items-center justify-between border-b border-[#1E1F22]">
            <h3 className="font-semibold flex items-center gap-2 text-white">
              <MessageSquare className="w-5 h-5" />
              #live-trading-floor
            </h3>
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          
          <div className="flex-1 p-4 overflow-auto space-y-4 text-sm text-[#DBDEE1]">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-kinetic flex items-center justify-center font-bold text-background shrink-0">KW</div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-white">Keano</span>
                  <span className="text-xs text-[#949BA4]">Today at 9:30 AM</span>
                </div>
                <p>Market open. Watch the semi-conductors closely today.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1E1F22] flex items-center justify-center shrink-0">TM</div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-white">TraderMike</span>
                  <span className="text-xs text-[#949BA4]">Today at 9:32 AM</span>
                </div>
                <p>Got my orders in for NVDA.</p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-kinetic flex items-center justify-center font-bold text-background shrink-0">KW</div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-white">Keano</span>
                  <span className="text-xs text-[#949BA4]">Today at 9:35 AM</span>
                </div>
                <p>Nice entry, just pushed the signal out. Stick to the stops.</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-[#313338]">
            <div className="bg-[#383A40] rounded-lg p-3 text-[#949BA4] text-sm flex justify-between items-center cursor-not-allowed">
              Message #live-trading-floor...
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
