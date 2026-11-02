import React, { useState } from 'react';
import { Sparkles, Maximize2, X, MessageCircle, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BAKERY_INFO } from '../data/bakeryData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Chocolate Cakes', 'Wedding Cakes', 'Birthday Cakes', 'Customized Cakes', 'Desserts', 'Pastries'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOrderDesign = (item: GalleryItem) => {
    const text = `Hello Cake Shake! I saw your gallery showcase for *${item.title}* (${item.category}). I would like to inquire about ordering this design for an upcoming celebration in Toba Tek Singh.`;
    window.open(`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-[#141210] text-white border-b border-amber-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Masterpiece Confections</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Our Sweet <span className="gold-gradient-text italic font-serif">Creations Gallery</span>
          </h2>
          
          <p className="mt-4 text-zinc-300 text-base sm:text-lg">
            A glimpse into the artisan cakes, decadent wedding tiers, and mouthwatering desserts prepared by Cake Shake.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-amber-500/20 cursor-pointer shadow-lg hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Corner Category */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-amber-500/30">
                    {item.category}
                  </span>
                </div>

                {/* Hover Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h4 className="font-display font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setActiveLightboxItem(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-[#181614] border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:text-amber-400 hover:bg-black flex items-center justify-center border border-zinc-700 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] bg-black">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#181614] border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    {activeLightboxItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1 max-w-md">
                    {activeLightboxItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleOrderDesign(activeLightboxItem)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order This Design</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
