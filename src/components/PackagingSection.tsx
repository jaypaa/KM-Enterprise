import React from 'react';
import { Package, ShieldCheck, Box, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PackagingSectionProps {
  onInquirePackaging: () => void;
}

export const PackagingSection: React.FC<PackagingSectionProps> = ({ onInquirePackaging }) => {
  const packagingSolutions = [
    {
      id: 'industrial-materials',
      icon: Box,
      title: 'Industrial Packaging Materials',
      description: 'Custom export packaging equipment, heavy-duty corrugated cartons, VCI anti-rust films, and protective consumables.',
      items: ['VCI Anti-Rust Films & Bags', 'Heavy-Duty Corrugated Boxes', 'Moisture Barrier Foils', 'Custom Cushioning & Foam']
    },
    {
      id: 'palletizing-wrapping',
      icon: Package,
      title: 'Palletizing & Export Wrapping',
      description: 'ISPM-15 certified heat-treated wooden pallets, Euro-pallets, plastic pallets, and automated stretch wrapping.',
      items: ['ISPM-15 Heat-Treated Pallets', 'Heavy-Duty Stretch Wrapping', 'Custom Wooden Crate Packing', 'Corner Edge Protectors']
    },
    {
      id: 'strapping-securing',
      icon: Truck,
      title: 'Strapping & Cargo Securing',
      description: 'High-tensile PET & steel strapping, container dunnage bags, lashing belts, and transit load stabilization.',
      items: ['High-Tensile PET Strapping', 'Steel Strapping & Seals', 'Container Dunnage Airbags', 'Heavy Cargo Lashing Systems']
    },
    {
      id: 'seafreight-protection',
      icon: ShieldCheck,
      title: 'Export Seafreight Protection',
      description: 'Comprehensive sea-freight humidity control, shock absorption, container lining, and export compliance.',
      items: ['Container Desiccants (Dry Packs)', 'Thermal Container Liners', 'Shock & Tilt Indicators', 'Custom Export Wrapping']
    }
  ];

  return (
    <section id="packaging" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 inline-block mb-3">
            Export Grade Protection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Packaging Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light">
            Comprehensive Industrial Packaging, Palletization & Sea-Freight Protection for Global Exports
          </p>
        </div>

        {/* 4 Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagingSolutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display mb-2">
                    {solution.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-slate-200/60 text-xs text-slate-700">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={onInquirePackaging}
                    className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <span>Inquire Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact / Inquire Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold font-display">Need Custom Export Packaging Specifications?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We provide tailored seaworthy packaging, ISPM-15 certified timber crates, and container stuffing supervision for overseas shipments.
            </p>
          </div>
          <button
            onClick={onInquirePackaging}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            Get Packaging Quote
          </button>
        </div>

      </div>
    </section>
  );
};
