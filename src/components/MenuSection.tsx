import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowUpRight, Info, Eye } from 'lucide-react';
import { MENU_ITEMS, MenuItem, BAKERY_INFO } from '../data/bakeryData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Delights' },
    { id: 'birthday', label: 'Birthday Cakes' },
    { id: 'chocolate', label: 'Chocolate Cakes' },
    { id: 'customized', label: 'Customized Cakes' },
    { id: 'wedding', label: 'Wedding Cakes' },
    { id: 'cupcakes', label: 'Cupcakes' },
    { id: 'pastries', label: 'Pastries' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'boxes', label: 'Dessert Boxes' },
    { id: 'shakes', label: 'Cake Shakes' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => {
        if (activeCategory === 'cupcakes') {
          return item.category === 'cupcakes' || item.category === 'boxes';
        }
        return item.category === activeCategory;
      });

  const handleWhatsAppOrder = (item: MenuItem) => {
    const message = `Hello Cake Shake! I'm interested in ordering *${item.name}* (${item.categoryLabel}). Can you please let me know pricing and availability in Toba Tek Singh?`;
    window.open(`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF7F2] text-zinc-900 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Handcrafted Daily in Toba Tek Singh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-900 tracking-tight">
            Our Signature Menu
          </h2>
          <p className="mt-3 text-zinc-600 text-base sm:text-lg">
            From multi-tier celebration cakes to artisanal pastries and rich dessert shakes, every creation is baked with perfection.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive segmented buttons) */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 text-amber-400 shadow-md shadow-zinc-900/10'
                    : 'bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 cursor-pointer" onClick={() => onSelectItem(item)}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                  <span className="bg-white/95 text-zinc-900 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-amber-600" />
                    <span>Quick View</span>
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {item.isSignature && (
                    <span className="bg-zinc-950/90 backdrop-blur-sm text-amber-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-500/40">
                      Signature
                    </span>
                  )}
                  {item.isBestseller && !item.isSignature && (
                    <span className="bg-amber-500 text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
                    <span className="font-medium uppercase tracking-wider text-amber-700">
                      {item.categoryLabel}
                    </span>
                    {item.servings && (
                      <span className="text-[11px] text-zinc-500">{item.servings}</span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg text-zinc-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer with Price Placeholder & Order Action */}
                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 font-medium">Pricing</span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900">
                      {item.priceNote}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
                      title="View Details"
                      aria-label="View cake details"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleWhatsAppOrder(item)}
                      className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on Custom Flavors */}
        <div className="mt-12 text-center bg-amber-50/80 border border-amber-200/80 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-amber-950 font-medium">
            ✨ Looking for a specialized cake flavor, eggless preparation, or customized tier size? 
            <a 
              href={`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Cake Shake! I would like to inquire about customized flavors and special dietary requirements.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1.5 text-amber-800 underline font-semibold hover:text-black"
            >
              Chat directly with our head baker on WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
