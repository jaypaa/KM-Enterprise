import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { InfographicCatalogSection } from './components/InfographicCatalogSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CategoryModal } from './components/CategoryModal';
import { RfqCartModal } from './components/RfqCartModal';
import { ServicesSection } from './components/ServicesSection';
import { ZldInteractiveSection } from './components/ZldInteractiveSection';
import { GlobalTradeSection } from './components/GlobalTradeSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowWeWork } from './components/HowWeWork';
import { BusinessInquiryCTA } from './components/BusinessInquiryCTA';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { Footer } from './components/Footer';

import { MajorCategory, DetailedProduct } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<MajorCategory | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<DetailedProduct | null>(null);
  const [cartProducts, setCartProducts] = useState<DetailedProduct[]>([]);
  const [isRfqCartOpen, setIsRfqCartOpen] = useState(false);
  const [contactRequirement, setContactRequirement] = useState('');

  // Cart operations
  const handleAddToCart = (product: DetailedProduct) => {
    setCartProducts((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearCart = () => {
    setCartProducts([]);
  };

  const scrollToContactWithRequirement = (requirement: string) => {
    setContactRequirement(requirement);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickInquiryItem = (itemName: string, categoryTitle: string) => {
    scrollToContactWithRequirement(`${itemName} (${categoryTitle})`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      
      {/* Sticky Header */}
      <Header
        rfqCount={cartProducts.length}
        onOpenRfq={() => setIsRfqCartOpen(true)}
        onOpenQuote={() => scrollToContactWithRequirement('General Commercial Quote')}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => scrollToContactWithRequirement('Fast Sourcing & Export Quote')}
        />

        {/* About KM Enterprise */}
        <AboutSection />

        {/* 6 Major Product Categories & Featured Carousel */}
        <ProductsSection
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
          cartProductIds={cartProducts.map((p) => p.id)}
        />

        {/* Complete Export Range (5 Infographic Branches) */}
        <InfographicCatalogSection
          onQuickInquiryItem={handleQuickInquiryItem}
        />

        {/* Services & Inspection Solutions */}
        <ServicesSection
          onServiceInquiry={(serviceName) => scrollToContactWithRequirement(`Service Inquiry: ${serviceName}`)}
        />

        {/* Zero Liquid Discharge (ZLD) Systems Interactive Diagram */}
        <ZldInteractiveSection />

        {/* Global Trade & Route Map */}
        <GlobalTradeSection />

        {/* Why Choose KM Enterprise */}
        <WhyChooseUs />

        {/* How We Work (5-step timeline) */}
        <HowWeWork />

        {/* Business Inquiry CTA Banner */}
        <BusinessInquiryCTA
          onOpenQuote={() => scrollToContactWithRequirement('Import & Export Business Partnership')}
        />

        {/* Contact Section with Interactive Form */}
        <ContactSection
          initialRequirement={contactRequirement}
        />
      </main>

      {/* Floating WhatsApp Quick Contact */}
      <FloatingWhatsapp />

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        inCart={selectedProduct ? cartProducts.some((p) => p.id === selectedProduct.id) : false}
        onDirectQuote={(productName) => scrollToContactWithRequirement(productName)}
      />

      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onAddToCart={handleAddToCart}
        cartProductIds={cartProducts.map((p) => p.id)}
        onQuickInquiry={(topic) => scrollToContactWithRequirement(topic)}
      />

      <RfqCartModal
        isOpen={isRfqCartOpen}
        onClose={() => setIsRfqCartOpen(false)}
        cartItems={cartProducts}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOpenContactWithProducts={(summary) => scrollToContactWithRequirement(summary)}
      />

    </div>
  );
}
