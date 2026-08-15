import React, { useState } from 'react';
import { CORE_SERVICES, CONSULTING_INSPECTION_SERVICES } from '../data/servicesData';
import { Globe, Search, Truck, Users, FileCheck, Ship, Check, ArrowRight, ShieldAlert, Award, FileText } from 'lucide-react';

interface ServicesSectionProps {
  onServiceInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceInquiry }) => {
  const [activeTab, setActiveTab] = useState<'core' | 'consulting'>('core');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Search': return <Search className="w-6 h-6 text-emerald-600" />;
      case 'Truck': return <Truck className="w-6 h-6 text-indigo-600" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-600" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-sky-600" />;
      case 'Ship': return <Ship className="w-6 h-6 text-purple-600" />;
      default: return <Globe className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 inline-block mb-3">
            B2B Solutions & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Our Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light">
            Comprehensive International Trading, Technical Inspection, Global Sourcing & Project Consulting.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'core'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Core Import & Export Services
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'consulting'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Inspection & Consulting Solutions
            </button>
          </div>
        </div>

        {/* Core Services Grid */}
        {activeTab === 'core' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white p-3 border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {service.benefitsOrScope && (
                    <ul className="space-y-1.5 pt-2 text-xs text-slate-700 border-t border-slate-200/80">
                      {service.benefitsOrScope.map((b) => (
                        <li key={b} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <button
                    onClick={() => onServiceInquiry(service.title)}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-blue-700 hover:text-blue-900 group/btn"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Inspection & Consulting Detailed View */}
        {activeTab === 'consulting' && (
          <div className="space-y-8">
            {CONSULTING_INSPECTION_SERVICES.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md uppercase">
                      Technical Service
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 font-display">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.shortDesc}</p>
                    <button
                      onClick={() => onServiceInquiry(item.title)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-sm mt-2"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>Scope of Work & Key Deliverables</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
