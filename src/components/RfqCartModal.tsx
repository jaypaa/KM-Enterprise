import React, { useState } from 'react';
import { DetailedProduct, RfqItem } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { X, Trash2, Send, Mail, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

interface RfqCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: DetailedProduct[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenContactWithProducts: (summary: string) => void;
}

export const RfqCartModal: React.FC<RfqCartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  onOpenContactWithProducts
}) => {
  const [quantities, setQuantities] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleQuantityChange = (productId: string, val: string) => {
    setQuantities((prev) => ({ ...prev, [productId]: val }));
  };

  const generateInquirySummary = () => {
    if (cartItems.length === 0) return '';
    return cartItems
      .map((item) => {
        const qty = quantities[item.id] || 'Standard Export Lot';
        return `• ${item.name} (${item.categoryTitle}) - Qty/Requirement: ${qty}`;
      })
      .join('\n');
  };

  const handleSendWhatsApp = () => {
    const summary = generateInquirySummary();
    const text = encodeURIComponent(
      `Hello KM Enterprise, I would like to request a commercial RFQ / quote for the following product list:\n\n${summary}\n\nPlease share export pricing, lead time, and technical data sheets.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp.raw}?text=${text}`, '_blank');
  };

  const handleSendEmailForm = () => {
    const summary = generateInquirySummary();
    onClose();
    onOpenContactWithProducts(summary);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <ShoppingBag className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold font-display">Inquiry / RFQ Cart</h3>
            <span className="text-xs bg-blue-600 px-2 py-0.5 rounded font-mono">
              {cartItems.length} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-slate-300" />
              <p className="text-sm font-semibold text-slate-700">Your Inquiry List is Empty</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Browse our product catalogue and click "+ Add to RFQ Cart" to compile a bulk inquiry list.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Selected Industrial Products
                </span>
                <button
                  onClick={onClearCart}
                  className="text-xs text-rose-600 hover:text-rose-800 font-semibold"
                >
                  Clear All
                </button>
              </div>

              {cartItems.map((product) => (
                <div key={product.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-200"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 font-display">{product.name}</h4>
                        <span className="text-[10px] text-blue-700 font-medium bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 inline-block mt-0.5">
                          {product.categoryTitle}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="text-slate-400 hover:text-rose-600 p-1"
                      title="Remove product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pt-2 flex items-center space-x-2">
                    <label className="text-[10px] text-slate-600 font-semibold">Requirement/Qty:</label>
                    <input
                      type="text"
                      placeholder="e.g. 500 pcs, 20 drums"
                      value={quantities[product.id] || ''}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      className="flex-1 px-2.5 py-1 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer Actions */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
            <div className="text-xs text-slate-600 flex justify-between font-medium">
              <span>Total Products in RFQ:</span>
              <span className="font-bold text-slate-900">{cartItems.length} Products</span>
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Send RFQ List via WhatsApp</span>
            </button>

            <button
              onClick={handleSendEmailForm}
              className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Submit RFQ via Email Form</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
