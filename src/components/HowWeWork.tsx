import React from 'react';
import { WORKFLOW_STEPS } from '../data/companyData';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 inline-block mb-3">
            Structured Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            How We Work
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light">
            A Transparent 5-Step International Trading & Order Management Process.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative py-8">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-300 group-hover:border-blue-600 text-slate-900 group-hover:text-blue-700 shadow-md flex items-center justify-center text-lg font-extrabold font-display transition-all duration-300 mb-6 group-hover:scale-110">
                  {step.step}
                </div>
                
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 group-hover:border-blue-300 group-hover:bg-white transition-all shadow-sm w-full min-h-[160px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 text-[10px] text-blue-600 font-bold flex items-center justify-center space-x-1">
                    <span>Step {step.step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-blue-600 ml-4">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.step} className="relative pl-6 space-y-2">
              <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                {step.step}
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 font-display">{step.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
