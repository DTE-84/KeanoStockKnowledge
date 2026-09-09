import Link from "next/link";
import { Check } from "lucide-react";

export default function Memberships() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Access Level</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          Join the community and get the exact data insights that power Keano's daily strategies.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Tier */}
        <div className="bg-card border border-white/5 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Data Insight Tier</h3>
          <p className="text-foreground/60 mb-6">For the independent trader looking for an edge.</p>
          <div className="text-4xl font-bold mb-8">$49<span className="text-xl text-foreground/50 font-normal">/mo</span></div>
          
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span>Daily Pre-Market Watchlists</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span>End-of-day Performance Reviews</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span>Access to Historical Trade Data</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span>Weekly Market Recap Newsletter</span>
            </li>
          </ul>

          <Link
            href="/signup?tier=basic"
            className="w-full py-4 text-center border border-white/10 hover:bg-white/5 transition-colors rounded-xl font-semibold"
          >
            Start Basic
          </Link>
        </div>

        {/* Premium Tier */}
        <div className="bg-card border-2 border-kinetic rounded-2xl p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-kinetic text-background px-4 py-1 text-sm font-bold rounded-bl-lg">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2">The Inner Circle</h3>
          <p className="text-foreground/60 mb-6">Direct access to Keano and the elite Discord community.</p>
          <div className="text-4xl font-bold mb-8">$149<span className="text-xl text-foreground/50 font-normal">/mo</span></div>
          
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span className="font-semibold text-white">Everything in Data Insight</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span>Live Discord Trading Floor Access</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span>Real-time Buy/Sell Alerts</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-kinetic w-5 h-5" />
              <span>Monthly 1-on-1 Q&A with Keano</span>
            </li>
          </ul>

          <Link
            href="/signup?tier=premium"
            className="w-full py-4 text-center bg-kinetic text-background hover:bg-kinetic/90 transition-colors rounded-xl font-semibold"
          >
            Join The Inner Circle
          </Link>
        </div>
      </div>
    </div>
  );
}
