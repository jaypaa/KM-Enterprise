import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ContactFormData } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Building, Globe, MessageSquare, Package } from 'lucide-react';

interface ContactSectionProps {
  initialRequirement?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialRequirement = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    productRequirement: initialRequirement,
    quantity: '',
    message: '',
    inquiryType: 'sales'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');

  // Update requirement if passed from parent prop
  React.useEffect(() => {
    if (initialRequirement) {
      setFormData((prev) => ({ ...prev, productRequirement: initialRequirement }));
    }
  }, [initialRequirement]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = `New B2B Inquiry: ${formData.productRequirement} (${formData.companyName})`;
    const emailBody = `New Business Inquiry to KM Enterprise\n\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.companyName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Country: ${formData.country}\n` +
      `Department: ${formData.inquiryType.toUpperCase()}\n` +
      `Product Requirement: ${formData.productRequirement}\n` +
      `Quantity: ${formData.quantity || 'N/A'}\n` +
      `Message: ${formData.message || 'N/A'}`;

    const mailLink = `mailto:${COMPANY_DETAILS.salesEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setMailtoUrl(mailLink);

    const messageText = `*New Business Inquiry to KM Enterprise*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.companyName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Country:* ${formData.country}\n` +
      `*Department:* ${formData.inquiryType.toUpperCase()}\n` +
      `*Product Requirement:* ${formData.productRequirement}\n` +
      `*Quantity:* ${formData.quantity || 'N/A'}\n` +
      `*Message:* ${formData.message || 'N/A'}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsapp.raw}?text=${encodeURIComponent(messageText)}`;
    setWhatsappUrl(waUrl);

    try {
      await fetch(`https://formsubmit.co/ajax/${COMPANY_DETAILS.salesEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _captcha: 'false',
          name: formData.name,
          company: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          inquiry_type: formData.inquiryType,
          product_requirement: formData.productRequirement,
          quantity: formData.quantity,
          message: formData.message
        })
      });
    } catch (err) {
      console.warn('FormSubmit notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Contact KM Enterprise
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light">
            Reach out to our Sales, Purchase, or Sourcing desks. We respond promptly to all global business inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl border border-slate-800 space-y-6">
              <div>
                <span className="text-xs text-blue-400 font-bold uppercase tracking-widest block mb-1">
                  Corporate Headquarters
                </span>
                <h3 className="text-2xl font-extrabold text-white font-display">
                  {COMPANY_DETAILS.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Import & Export | International Trading | Industrial Products
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                {/* Sales Email */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Sales Desk</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.salesEmail}`}
                      className="text-white hover:text-blue-300 font-semibold text-sm transition-colors"
                    >
                      {COMPANY_DETAILS.salesEmail}
                    </a>
                  </div>
                </div>

                {/* Purchase Email */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Purchase & Vendor Desk</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.purchaseEmail}`}
                      className="text-white hover:text-blue-300 font-semibold text-sm transition-colors"
                    >
                      {COMPANY_DETAILS.purchaseEmail}
                    </a>
                  </div>
                </div>

                {/* Mobile Contact Persons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_DETAILS.mobile1.raw}`}
                    className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-colors block"
                  >
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{COMPANY_DETAILS.mobile1.person}</span>
                    <span className="text-white font-semibold text-xs block mt-0.5">{COMPANY_DETAILS.mobile1.number}</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_DETAILS.mobile2.raw}`}
                    className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-colors block"
                  >
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{COMPANY_DETAILS.mobile2.person}</span>
                    <span className="text-white font-semibold text-xs block mt-0.5">{COMPANY_DETAILS.mobile2.number}</span>
                  </a>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={COMPANY_DETAILS.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat on WhatsApp (+91 95863 07407)</span>
                </a>

                {/* Address */}
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Registered Address</span>
                    <p className="text-slate-200 text-xs leading-relaxed mt-0.5 font-normal">
                      {COMPANY_DETAILS.address.full}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps Visual Box */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-slate-100 p-4 text-center space-y-2">
              <div className="flex items-center justify-center space-x-2 text-slate-700 font-bold text-xs">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Kadi, Mahesana, Gujarat – 384440</span>
              </div>
              <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                Strategically positioned in Gujarat's vibrant industrial corridor with easy access to major western ports (Mundra, Kandla, Pipavav).
              </p>
            </div>

          </div>

          {/* Right Column - B2B Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Submit Business Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in your product requirement or sourcing request. Our trade experts will send a detailed response.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-5 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <div>
                  <h4 className="text-2xl font-extrabold text-emerald-900 font-display">
                    Inquiry Prepared & Transmitted!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto mt-2">
                    Thank you for contacting <strong>KM Enterprise</strong>. Your business inquiry has been processed for <strong>{COMPANY_DETAILS.salesEmail}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm max-w-md mx-auto space-y-3">
                  <p className="text-xs font-bold text-slate-800">Send Copy Instantly via Your Preferred App:</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-1/2 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>
                    )}

                    {mailtoUrl && (
                      <a
                        href={mailtoUrl}
                        className="w-full sm:w-1/2 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open Email App</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-left max-w-md mx-auto">
                  <p className="text-[11px] text-amber-900 leading-relaxed">
                    <strong>📧 Note for Website Owner:</strong> FormSubmit sends an activation link to <strong>{COMPANY_DETAILS.salesEmail}</strong> on the first submission. Please check your inbox and click <em>"Activate Form"</em> once to enable automatic email delivery for all future submissions!
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        country: 'India',
                        productRequirement: '',
                        quantity: '',
                        message: '',
                        inquiryType: 'sales'
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Inquiry Type Radio */}
                <div className="flex items-center space-x-4 pb-2 border-b border-slate-200">
                  <label className="text-xs font-bold text-slate-700">Inquiry Department:</label>
                  <div className="flex items-center space-x-3">
                    <label className="flex items-center space-x-1 font-semibold text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="sales"
                        checked={formData.inquiryType === 'sales'}
                        onChange={() => setFormData({ ...formData, inquiryType: 'sales' })}
                        className="text-blue-600"
                      />
                      <span>Sales & Export</span>
                    </label>
                    <label className="flex items-center space-x-1 font-semibold text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="purchase"
                        checked={formData.inquiryType === 'purchase'}
                        onChange={() => setFormData({ ...formData, inquiryType: 'purchase' })}
                        className="text-blue-600"
                      />
                      <span>Purchase & Supply</span>
                    </label>
                  </div>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Smith / Rajesh Patel"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Company Name *</label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Global Industrial Corp"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Business Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Phone / WhatsApp Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Country / Region *</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. India, UAE, Germany, USA"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* Product Requirement & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-slate-700 font-bold mb-1">Product Requirement / Category *</label>
                    <div className="relative">
                      <Package className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.productRequirement}
                        onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                        placeholder="e.g. Borescope, Gear Oil, Hex Bolts, ZLD Systems"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Target Quantity</label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 500 pcs, 20 tons"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Additional Specification / Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide detailed technical parameters, material grade, destination port, or specific delivery timeframe..."
                    className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Business Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
