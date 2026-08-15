import React, { useState } from 'react';
import { INFOGRAPHIC_CATEGORIES } from '../data/productsData';
import { InfographicCategory, SubCategory, DetailedProduct } from '../types';
import { Check, Plus, Layers, ShieldCheck, ChevronRight, Send, Search } from 'lucide-react';

interface InfographicCatalogSectionProps {
  onQuickInquiryItem: (itemName: string, categoryTitle: string) => void;
}

export const InfographicCatalogSection: React.FC<InfographicCatalogSectionProps> = ({
  onQuickInquiryItem
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(INFOGRAPHIC_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = INFOGRAPHIC_CATEGORIES.find((c) => c.id === activeTabId) || INFOGRAPHIC_CATEGORIES[0];

  return (
    <section id="range" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>EXPORT CATEGORIES • ONE STOP SOLUTION FOR INDUSTRIES WORLDWIDE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Our Complete Export Product Range
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-light">
            Comprehensive B2B product spectrum covering mechanical hardware, precision QA/QC meters, heavy industrial lubricants, automation systems, and export consulting.
          </p>
        </div>

        {/* Search Input across all categories */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search complete range (e.g., Valves, Borescope, Gear Oil)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
          </div>
        </div>

        {/* 5 Main Category Nav Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-slate-800 pb-6">
          {INFOGRAPHIC_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTabId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 scale-102 border border-blue-400'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${isActive ? 'bg-white text-blue-900' : 'bg-slate-700 text-slate-300'}`}>
                  {cat.number}
                </span>
                <span className="font-display tracking-tight uppercase">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border border-slate-800 p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 bg-blue-600/30 border border-blue-400/30 text-blue-300 text-xs font-bold rounded-md">
                {currentCategory.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Explore subcategories and specific products below. Click any item to send an instant inquiry to KM Enterprise.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <div className="text-right hidden sm:block">
                <span className="text-xs text-slate-400 block">Subcategories</span>
                <span className="text-lg font-bold text-blue-400">{currentCategory.subcategories.length} Groups</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.subcategories.map((subCat) => {
            // Filter subcategory items if search query exists
            const filteredItems = searchQuery
              ? subCat.items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
              : subCat.items;

            if (searchQuery && filteredItems.length === 0) return null;

            return (
              <div
                key={subCat.id}
                className="rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 p-5 shadow-lg flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                    <h4 className="text-sm font-bold text-blue-400 font-display">
                      {subCat.title}
                    </h4>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                      {subCat.items.length} items
                    </span>
                  </div>

                  <ul className="space-y-1.5 max-h-72 overflow-y-auto pr-1 text-xs">
                    {filteredItems.map((item) => {
                      const detailedItem = subCat.detailedItems?.find(
                        (d) => d.name.toLowerCase() === item.toLowerCase() || item.toLowerCase().includes(d.name.toLowerCase())
                      );
                      return (
                        <li
                          key={item}
                          className="group/item flex items-start justify-between text-slate-300 hover:text-white p-1.5 rounded hover:bg-slate-800/80 cursor-pointer transition-colors"
                          onClick={() => onQuickInquiryItem(item, subCat.title)}
                          title={`Click to inquire about ${item}`}
                        >
                          <div className="flex items-start space-x-2 min-w-0 pr-2">
                            <ChevronRight className="w-3 h-3 text-blue-500 opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                            <div className="min-w-0">
                              <span className="font-medium text-[11px] sm:text-xs block leading-tight">{item}</span>
                              {detailedItem?.useOrSize && (
                                <span className="text-[10px] text-slate-400 font-normal block leading-tight mt-0.5">
                                  {detailedItem.useOrSize}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="opacity-0 group-hover/item:opacity-100 text-[10px] text-blue-400 font-semibold flex items-center space-x-1 shrink-0 mt-0.5">
                            <span>Inquire</span>
                            <Send className="w-2.5 h-2.5" />
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 text-[10px] text-slate-500 flex justify-between items-center">
                  <span>Export Grade Standard</span>
                  <button
                    onClick={() => onQuickInquiryItem(subCat.title, currentCategory.title)}
                    className="text-blue-400 hover:text-blue-300 font-bold flex items-center space-x-1"
                  >
                    <span>Request Group Quote</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Trade Commitment Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">OUR COMMITMENT</h4>
              <p className="text-xs text-slate-300 mt-0.5 max-w-xl">
                We are committed to provide Best Quality Products, Reliable Services & Long Term Business Partnerships Worldwide.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Quality</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Reliability</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Innovation</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Commitment</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Partnership</span>
          </div>
        </div>

      </div>
    </section>
  );
};
