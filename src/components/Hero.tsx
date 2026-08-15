import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, Ship, Box, Layers } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="relative bg-slate-950 text-white min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Dark Blue / Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-port.jpg"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80';
          }}
          alt="Container ship being loaded at an international port"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Small Trust Line Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest"
            >
              <span className="w-8 h-px bg-amber-400"></span>
              <span>Import · Export · International Trading</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-display"
            >
              Your Trusted Partner in Global Trade
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              Reliable Import & Export Solutions Connecting Quality Products, Trusted Suppliers and Global Markets.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-all group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur-sm transition-all"
              >
                <span>Contact Us</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-md transition-all"
              >
                <span>Request Fast Quote</span>
              </button>
            </motion.div>

            {/* Quick Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80"
            >
              <div className="flex items-center space-x-2 text-slate-300">
                <Ship className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium">Export Freight</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Box className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium">Industrial Sourcing</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium">Strict Quality Control</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs font-medium">B2B Trade Network</span>
              </div>
            </motion.div>

          </div>

          {/* Right Floating Card / Visual Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 border border-slate-800 shadow-2xl backdrop-blur-xl">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
                Mahesana, Gujarat
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold font-display text-lg">
                    KM
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">KM Enterprise</h3>
                    <p className="text-xs text-slate-400">Gujarat Based Global Trading Hub</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start space-x-3">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                    <div>
                      <span className="font-semibold text-white block">Active Export Commodities</span>
                      <span className="text-slate-400">Industrial Fasteners, Valves, Lubricants, Inspection Tools, ZLD Systems</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start space-x-3">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-blue-400 shrink-0"></span>
                    <div>
                      <span className="font-semibold text-white block">Verified Operations</span>
                      <span className="text-slate-400">Export Documentation, QA Inspection, Factory Sourcing & Port Logistics</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start space-x-3">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <div>
                      <span className="font-semibold text-white block">Fast Direct Communication</span>
                      <span className="text-slate-400">Direct response via Sales & Purchase email desks and WhatsApp</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_DETAILS.mobile1.raw}`}
                    className="block text-center py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
                  >
                    Direct Contact: {COMPANY_DETAILS.mobile1.number}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
