import React from 'react';
import { DetailedProduct } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { X, CheckCircle2, Box, Truck, ShieldCheck, Send, ShoppingBag } from 'lucide-react';

interface ProductDetailModalProps {
  product: DetailedProduct | null;
  onClose: () => void;
  onAddToCart: (product: DetailedProduct) => void;
  inCart: boolean;
  onDirectQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  inCart,
  onDirectQuote
}) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello KM Enterprise, I am interested in inquiring about "${product.name}" (${product.categoryTitle}). Please share specifications, availability, and export quote.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        
        {/* Modal Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 bg-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">
              {product.categoryTitle}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Ref: {product.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Main Title & Image Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 h-56 sm:h-64 shadow-md">
              <img
                src={product.image}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80';
                }}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-3">
              <h2 className="text-2xl font-extrabold text-slate-900 font-display">
                {product.name}
              </h2>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">
                  Subcategory: {product.subCategoryTitle}
                </span>
                {product.sizeRange && (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                    Size Range: {product.sizeRange}
                  </span>
                )}
                {product.typicalUse && (
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                    Typical Use: {product.typicalUse}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {product.fullDesc || product.shortDesc}
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <Box className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Packaging:</strong> {product.packaging}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Supply Capability:</strong> {product.supplyCapability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Key Applications & Industry Use
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications Table */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Technical Parameters & Specifications
              </h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-slate-200">
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="py-2.5 px-4 font-bold text-slate-800 w-1/3 border-r border-slate-200">
                          {key}
                        </td>
                        <td className="py-2.5 px-4 text-slate-600">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Trust Guarantee Note */}
          <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
            <span>
              All products undergo strict QA verification, chemical/mechanical test certification, and export-compliant packing before dispatch from Gujarat, India.
            </span>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            Close Window
          </button>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => onAddToCart(product)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold flex items-center space-x-2 transition-colors ${
                inCart
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{inCart ? 'Added to Quote Cart' : '+ Add to RFQ Cart'}</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsapp.raw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center space-x-2 shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onDirectQuote(product.name);
              }}
              className="px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors"
            >
              <span>Send Product Inquiry</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
