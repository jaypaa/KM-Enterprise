import React from 'react';
import { CheckCircle2, Shield, Globe, Award, TrendingUp, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    'Quality',
    'Reliability',
    'Transparency',
    'Competitive Sourcing',
    'Timely Communication',
    'Long-term Business Relationships'
  ];

  const statCards = [
    {
      title: 'Global Sourcing',
      desc: 'Connecting suppliers and buyers across markets with precision.',
      icon: Globe,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Quality Focus',
      desc: 'Product and supplier quality-oriented approach at every stage.',
      icon: Shield,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'B2B Solutions',
      desc: 'Professional business-to-business trading and procurement.',
      icon: TrendingUp,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      title: 'Reliable Support',
      desc: 'Dedicated communication and coordination from order to delivery.',
      icon: Clock,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image Stack */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/about-warehouse.jpg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80';
                }}
                alt="KM Enterprise warehouse and B2B export logistics coordination"
                className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-md mb-2 inline-block">
                  Kadi, Mahesana • Gujarat, India
                </span>
                <h3 className="text-xl font-bold font-display">Sourcing, Trading & Supply</h3>
                <p className="text-xs text-slate-300 mt-1">Sourcing, trading and supply from Gujarat, India to global markets.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-blue-50 border border-blue-100 inline-block mb-3">
                About KM Enterprise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Connecting Reliable Suppliers, Quality Products & Global Markets
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">KM Enterprise</strong> is a Gujarat-based B2B import and export company focused on connecting reliable suppliers, quality products and international markets.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              We aim to provide dependable sourcing, trading and supply solutions for businesses looking for professional and long-term international trade partnerships.
            </p>

            {/* Pillars list */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Our Core Approach</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pillars.map((pillar) => (
                  <div key={pillar} className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {statCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div key={card.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5 hover:shadow-md transition-shadow">
                    <div className={`p-2.5 rounded-lg ${card.color} shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{card.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
