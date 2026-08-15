import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { MessageSquare, ShieldCheck, DollarSign, Briefcase, FileCheck2, Handshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <MessageSquare className="w-6 h-6 text-blue-600" />;
      case 1: return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 2: return <DollarSign className="w-6 h-6 text-indigo-600" />;
      case 3: return <Briefcase className="w-6 h-6 text-amber-600" />;
      case 4: return <FileCheck2 className="w-6 h-6 text-purple-600" />;
      case 5: return <Handshake className="w-6 h-6 text-sky-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 inline-block mb-3">
            Core Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Choose KM Enterprise?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light">
            Built on Integrity, Quality Sourcing, Transparent Coordination & Long-Term B2B Relationships.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 p-3 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(idx)}
              </div>

              <div>
                <span className="text-[10px] font-extrabold text-slate-400 font-mono uppercase tracking-wider block mb-1">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
