import React from 'react';
import { MajorCategory, DetailedProduct } from '../types';
import { FEATURED_PRODUCTS, INFOGRAPHIC_CATEGORIES } from '../data/productsData';
import { X, ArrowRight, Eye, PlusCircle, Check, Package, Shield } from 'lucide-react';

interface CategoryModalProps {
  category: MajorCategory | null;
  onClose: () => void;
  onSelectProduct: (product: DetailedProduct) => void;
  onAddToCart: (product: DetailedProduct) => void;
  cartProductIds: string[];
  onQuickInquiry: (topic: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  onClose,
  onSelectProduct,
  onAddToCart,
  cartProductIds,
  onQuickInquiry
}) => {
  if (!category) return null;

  // Match infographic subcategories for this major category by number
  const categoryNum = parseInt(category.number, 10);
  const infographicMatch = INFOGRAPHIC_CATEGORIES.find((ic) => ic.number === categoryNum) || 
    INFOGRAPHIC_CATEGORIES.find((ic) => ic.id === category.id) || 
    INFOGRAPHIC_CATEGORIES[0];

  // Match specific products
  const categoryProducts = FEATURED_PRODUCTS.filter((p) => 
    p.categoryNumber === category.number ||
    p.infographicCategoryId === infographicMatch.id ||
    p.categoryTitle.toLowerCase() === category.title.toLowerCase()
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-6">
        
        {/* Banner Header */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
          <img
            src={category.image}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80';
            }}
            alt={category.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="px-3 py-1 bg-blue-600 text-xs font-extrabold uppercase rounded tracking-wider">
              Category {category.number}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">{category.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">{category.fullDesc}</p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-8">
          
          {/* Detailed Item Spectrum from Infographic */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center space-x-2">
              <Package className="w-4 h-4 text-blue-700" />
              <span>Full Export Range & Subcategories ({infographicMatch.subcategories.length} Groups)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infographicMatch.subcategories.map((sub) => (
                <div key={sub.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                    <h4 className="text-xs font-bold text-blue-900 font-display">{sub.title}</h4>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono font-semibold">
                      {sub.items.length} items
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sub.items.map((item) => {
                      const detailedItem = sub.detailedItems?.find(
                        (d) => d.name.toLowerCase() === item.toLowerCase() || item.toLowerCase().includes(d.name.toLowerCase())
                      );
                      return (
                        <button
                          key={item}
                          onClick={() => onQuickInquiry(`${item} (${sub.title})`)}
                          className="text-[11px] bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-900 px-2.5 py-1 rounded-lg border border-slate-200 transition-all font-medium text-left shadow-2xs group flex flex-col"
                          title={detailedItem?.useOrSize ? `${item}: ${detailedItem.useOrSize}` : `Click to inquire about ${item}`}
                        >
                          <span className="font-semibold text-slate-900 group-hover:text-blue-700">+ {item}</span>
                          {detailedItem?.useOrSize && (
                            <span className="text-[10px] text-slate-500 font-normal mt-0.5">{detailedItem.useOrSize}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Specific Products in this Category */}
          {categoryProducts.length > 0 && (
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Featured Ready-to-Ship Products
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categoryProducts.map((prod) => {
                  const inCart = cartProductIds.includes(prod.id);
                  return (
                    <div key={prod.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-3">
                      <div className="flex items-start space-x-3">
                        <img
                          src={prod.image}
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80';
                          }}
                          alt={prod.name}
                          className="w-16 h-16 rounded-lg object-cover shrink-0 border border-slate-200"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 font-display">{prod.name}</h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">{prod.shortDesc}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectProduct(prod);
                          }}
                          className="flex-1 py-1.5 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-semibold flex items-center justify-center space-x-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Details</span>
                        </button>

                        <button
                          onClick={() => onAddToCart(prod)}
                          className={`py-1.5 px-3 rounded text-[11px] font-semibold flex items-center space-x-1 ${
                            inCart
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-blue-700 hover:bg-blue-800 text-white'
                          }`}
                        >
                          {inCart ? <Check className="w-3 h-3" /> : <PlusCircle className="w-3 h-3" />}
                          <span>{inCart ? 'In Quote Cart' : '+ Add Quote'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onQuickInquiry(`Category Inquiry: ${category.title}`);
            }}
            className="px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold flex items-center space-x-2 shadow-sm"
          >
            <span>Inquire About Entire Category</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
