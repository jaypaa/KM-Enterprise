import React from 'react';
import { motion } from 'motion/react';
import { GLOBAL_TRADE_REGIONS } from '../data/companyData';
import { Globe, ArrowRight, Anchor, Navigation, ShieldCheck } from 'lucide-react';

export const GlobalTradeSection: React.FC = () => {
  return (
    <section id="global-trade" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 inline-block mb-3">
            International Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Connecting India with Global Markets
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-light">
            From India to the World • Facilitating Seamless Cross-Border B2B Sourcing & Logistics
          </p>
        </div>

        {/* Global Route Visual Canvas */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 lg:p-12 shadow-2xl relative overflow-hidden mb-12">
          
          {/* Animated Connecting Lines Visual */}
          <div className="relative py-12 px-4">
            
            {/* Center Origin Node (India) */}
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-16 h-16 rounded-full bg-blue-600 border-4 border-blue-400/40 text-white flex items-center justify-center font-extrabold text-lg shadow-xl shadow-blue-600/50 z-20"
              >
                <Anchor className="w-8 h-8" />
              </motion.div>
              <div className="mt-3">
                <span className="px-3 py-1 bg-blue-900/90 border border-blue-400/40 text-blue-200 text-xs font-extrabold rounded-full uppercase tracking-wider">
                  Origin Hub • Gujarat, India
                </span>
                <p className="text-xs text-slate-400 mt-1">KM Enterprise Headquarters & QA Logistics</p>
              </div>
            </div>

            {/* Connecting Flow Lines to Regions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {GLOBAL_TRADE_REGIONS.filter(r => r.code !== 'IN').map((region, idx) => (
                <motion.div
                  key={region.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/60 p-5 shadow-lg group transition-all text-center flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-blue-900/40 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                        {region.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {region.label}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-center text-[10px] text-blue-400 font-bold space-x-1">
                    <span>India</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span>{region.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Core Content Box */}
          <div className="pt-8 border-t border-slate-800 max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">From India to the World</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              KM Enterprise works to build reliable international trade connections by sourcing products and supporting B2B buyers and suppliers across markets.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Product Quality</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Port-to-Port Export Delivery</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
