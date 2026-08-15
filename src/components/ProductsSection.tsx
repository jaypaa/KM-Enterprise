import React, { useState } from 'react';
import { MAJOR_PRODUCT_CATEGORIES, FEATURED_PRODUCTS } from '../data/productsData';
import { MajorCategory, DetailedProduct } from '../types';
import { ArrowRight, Search, Eye, PlusCircle, Check } from 'lucide-react';

interface ProductsSectionProps {
  onSelectCategory: (category: MajorCategory) => void;
  onSelectProduct: (product: DetailedProduct) => void;
  onAddToCart: (product: DetailedProduct) => void;
  cartProductIds: string[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  cartProductIds
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFeaturedProducts = FEATURED_PRODUCTS.filter((prod) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      prod.name.toLowerCase().includes(term) ||
      prod.shortDesc.toLowerCase().includes(term) ||
      prod.categoryTitle.toLowerCase().includes(term) ||
      prod.subCategoryTitle.toLowerCase().includes(term)
    );
  });

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 inline-block mb-3">
            Product Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Our Products
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light">
            Quality Products for Global Markets • Sourced, Inspected & Exported with Excellence
          </p>
        </div>

        {/* 6 Major Product Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAJOR_PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={cat.image}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
                  }}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Category Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-white text-xs font-extrabold rounded-lg border border-white/10 font-display">
                  {cat.number}
                </div>

                {/* Highlight items pill */}
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                  {cat.highlightItems.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-medium bg-black/60 text-slate-200 backdrop-blur-md px-2 py-0.5 rounded border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {cat.itemCount}+ Product Items
                  </span>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-xs font-bold transition-all shadow-sm group/btn"
                  >
                    <span>View Products</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
