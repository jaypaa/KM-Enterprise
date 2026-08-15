import React, { useState } from 'react';
import { Droplets, ShieldCheck, Check, ArrowRight, RefreshCw, Zap, DollarSign } from 'lucide-react';

export const ZldInteractiveSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const zldSteps = [
    {
      step: '01',
      title: 'Screening',
      desc: 'Removal of large suspended solids, trash, and floating materials from raw industrial effluent.',
      detail: 'Protects pumps and downstream treatment units from mechanical damage.'
    },
    {
      step: '02',
      title: 'Equalization Tank',
      desc: 'Homogenization of wastewater flow rate, temperature, pH, and organic load variations.',
      detail: 'Ensures steady-state hydraulic and biological loading for optimal plant operation.'
    },
    {
      step: '03',
      title: 'Primary Treatment',
      desc: 'Coagulation, flocculation, and primary clarification for TSS and heavy metal precipitation.',
      detail: 'Chemical dosing removes colloidal impurities and suspended solids.'
    },
    {
      step: '04',
      title: 'Biological Treatment',
      desc: 'MBBR / MBR / ASP bioreactors for COD and BOD biodegradation.',
      detail: 'Advanced aerobic microbial digestion reduces organic pollutants significantly.'
    },
    {
      step: '05',
      title: 'Tertiary Treatment',
      desc: 'Pressure Sand Filter, Activated Carbon Filter, and Ultrafiltration (UF).',
      detail: 'Fine filtration produces crystal clear permeate suited for Reverse Osmosis.'
    },
    {
      step: '06',
      title: 'RO System',
      desc: 'High-Pressure Reverse Osmosis membrane filtration.',
      detail: 'Recovers 75–85% pure water permeate directly back into factory process loops.'
    },
    {
      step: '07',
      title: 'MEE System',
      desc: 'Multi-Effect Evaporator for concentrating RO reject brine.',
      detail: 'Thermal evaporation reduces brine volume down to near-saturation slurries.'
    },
    {
      step: '08',
      title: 'ATFD & Salt Recovery',
      desc: 'Agitated Thin Film Dryer (ATFD) producing dry crystallized salt solids.',
      detail: 'Achieves 100% Zero Liquid Discharge with complete environmental compliance.'
    }
  ];

  const zldBenefits = [
    { title: 'Zero Liquid Discharge', desc: 'Eliminates 100% of liquid effluent discharge to water bodies.' },
    { title: 'Water Conservation', desc: 'Recovers > 95% of industrial process water for reuse.' },
    { title: 'Pollution Control', desc: 'Guarantees strict compliance with CPCB / GPCB environmental norms.' },
    { title: 'Regulatory Compliance', desc: 'Prevents plant shutdown risks from environmental regulatory audits.' },
    { title: 'Long-Term Cost Savings', desc: 'Substantially reduces freshwater intake costs and haulage fees.' }
  ];

  const industriesServed = [
    'Textile & Dyeing', 'Chemical & Petrochemical', 'Pharmaceuticals', 
    'Food & Beverage', 'Power Plants', 'Steel & Metallurgy', 
    'Electroplating', 'Oil & Gas', 'Pulp & Paper'
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span>SPECIALIZED WATER & WASTEWATER TREATMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Zero Liquid Discharge (ZLD) Systems
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light">
            Turnkey ETP / STP / ZLD Engineering, Design Support, Reverse Osmosis & Evaporator Solutions.
          </p>
        </div>

        {/* Interactive Process Flow Diagram */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-display">
              ZLD Process Flow Pipeline (Click Stage to Inspect)
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              8 Continuous Treatment Phases
            </span>
          </div>

          {/* Flow Steps Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {zldSteps.map((s, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                  onClickCapture={() => setActiveStepIndex(idx)}
                >
                  <span className="text-[10px] font-extrabold block opacity-80 font-mono">
                    Phase {s.step}
                  </span>
                  <span className="text-xs font-bold font-display line-clamp-1 mt-0.5">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Detail Card */}
          <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="px-2.5 py-1 bg-blue-600/30 text-blue-300 text-xs font-bold rounded">
                Phase {zldSteps[activeStepIndex].step}: {zldSteps[activeStepIndex].title}
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                {zldSteps[activeStepIndex].title} Operation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {zldSteps[activeStepIndex].desc}
              </p>
              <p className="text-xs text-blue-400 font-medium">
                • {zldSteps[activeStepIndex].detail}
              </p>
            </div>

            <div className="shrink-0 flex items-center space-x-2">
              <button
                onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : zldSteps.length - 1))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStepIndex((prev) => (prev < zldSteps.length - 1 ? prev + 1 : 0))}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center space-x-1"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ZLD Benefits & Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Benefits */}
          <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-display text-blue-400">
              Key ZLD Benefits for Industrial Plants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {zldBenefits.map((b) => (
                <div key={b.title} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-bold text-white flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{b.title}</span>
                  </span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-display text-emerald-400">
              Industries We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {industriesServed.map((ind) => (
                <span
                  key={ind}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
