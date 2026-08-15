import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Globe, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="KM Enterprise logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-extrabold text-white font-display tracking-tight block">
                  KM ENTERPRISE
                </span>
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block">
                  Import & Export • Global Trading
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              "{COMPANY_DETAILS.tagline}"
            </p>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Gujarat-based international trading company supplying industrial hardware, inspection meters, lubricants, fasteners, and water treatment systems worldwide.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#range" className="hover:text-white transition-colors">Export Range</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#global-trade" className="hover:text-white transition-colors">Global Trade</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Business Divisions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Business
            </h4>
            <ul className="space-y-2">
              <li><span className="text-slate-300">Sales Desk</span></li>
              <li><span className="text-slate-300">Purchase Desk</span></li>
              <li><span className="text-slate-300">Import Trading</span></li>
              <li><span className="text-slate-300">Export Sourcing</span></li>
              <li><span className="text-slate-300">B2B Product Supply</span></li>
              <li><span className="text-slate-300">Inspection & QA/QC</span></li>
            </ul>
          </div>

          {/* Col 4: Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Contact Us
            </h4>
            
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.mobile1.raw}`} className="hover:text-white">
                  {COMPANY_DETAILS.mobile1.person}: {COMPANY_DETAILS.mobile1.number}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.mobile2.raw}`} className="hover:text-white">
                  {COMPANY_DETAILS.mobile2.person}: {COMPANY_DETAILS.mobile2.number}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.salesEmail}`} className="hover:text-white">
                  Sales: {COMPANY_DETAILS.salesEmail}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.purchaseEmail}`} className="hover:text-white">
                  Purchase: {COMPANY_DETAILS.purchaseEmail}
                </a>
              </div>

              <div className="flex items-start space-x-2 pt-1 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address.full}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 KM Enterprise. All Rights Reserved. • Gujarat, India.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
