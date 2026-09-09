import Image from "next/image";
import Link from "next/link";
import StockTicker from "@/components/StockTicker";
import PerformanceChart from "@/components/PerformanceChart";
import { ArrowRight, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/KEANO SYSTEM_files/keylandingsignature.png"
            alt="Keano Wallis"
            fill
            className="object-cover object-[-25%_center] scale-125 opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="z-10 text-left max-w-3xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Master the Market with <span className="text-kinetic">Precision</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-xl">
            Join Keano Wallis in navigating high-volatility setups. Proven metrics, transparent strategies, direct access.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/memberships"
              className="px-8 py-4 bg-kinetic text-background font-semibold rounded-full hover:bg-kinetic/90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Memberships <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/premium-access"
              className="px-8 py-4 bg-card/80 backdrop-blur-md border border-white/10 text-foreground font-semibold rounded-full hover:bg-card transition-all w-full sm:w-auto text-center"
            >
              The Inner Circle
            </Link>
          </div>
        </div>

        {/* Ticker at the bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <StockTicker />
        </div>
      </section>

      {/* Stats & Performance Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Credibility Backed by Data</h2>
              <p className="text-foreground/70">
                It's not just talk. The system is built on rigorous analysis, strict risk management, and capitalizing on asymmetrical opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-kinetic/10 text-kinetic rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">95% YTD Return</h4>
                  <p className="text-sm text-foreground/60">Outpacing standard indices continuously.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-kinetic/10 text-kinetic rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Strict Risk Params</h4>
                  <p className="text-sm text-foreground/60">Capital preservation is the first rule of the system.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-kinetic/10 text-kinetic rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Direct Mentorship</h4>
                  <p className="text-sm text-foreground/60">Premium members get 1-on-1 strategy sessions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
        </div>
      </section>
    </main>
  );
}
