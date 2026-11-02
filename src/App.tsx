/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CustomCakeSection } from './components/CustomCakeSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuItem } from './data/bakeryData';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestCustomCake = () => {
    const el = document.getElementById('custom-cakes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-zinc-900 selection:bg-amber-400 selection:text-black">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        onExploreMenu={handleExploreMenu}
        onRequestCustomCake={handleRequestCustomCake}
      />

      {/* Our Menu Section */}
      <MenuSection onSelectItem={(item) => setSelectedMenuItem(item)} />

      {/* Custom Cake Studio Section */}
      <CustomCakeSection />

      {/* Why Choose Cake Shake */}
      <WhyChooseUs />

      {/* Confectionery & Pastry Gallery */}
      <GallerySection />

      {/* Instagram Community Section */}
      <InstagramSection />

      {/* Customer Reviews Section */}
      <ReviewsSection />

      {/* Contact & Map Section */}
      <ContactSection />

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Product Quick-View & Customization Modal */}
      <ProductDetailModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
