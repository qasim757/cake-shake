import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, Check, Heart, ShieldCheck, Scale } from 'lucide-react';
import { MenuItem, BAKERY_INFO, CAKE_SIZES } from '../data/bakeryData';

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const [selectedWeight, setSelectedWeight] = useState('2 lbs (8 - 10 people)');
  const [dedicationText, setDedicationText] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleWhatsAppOrder = () => {
    let message = `*CAKE SHAKE ORDER INQUIRY*\n`;
    message += `--------------------------------\n`;
    message += `🎂 *Item:* ${item.name}\n`;
    message += `🏷️ *Category:* ${item.categoryLabel}\n`;
    message += `⚖️ *Selected Size:* ${selectedWeight}\n`;
    if (deliveryDate) {
      message += `📅 *Date Needed:* ${deliveryDate}\n`;
    }
    if (dedicationText) {
      message += `✍️ *Dedication Text:* "${dedicationText}"\n`;
    }
    message += `--------------------------------\n`;
    message += `📍 *Destination:* Toba Tek Singh, Punjab\n`;
    message += `Please confirm pricing & availability!`;

    window.open(`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#181614] border border-amber-500/40 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:text-amber-400 hover:bg-black flex items-center justify-center border border-zinc-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-zinc-950 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
            
            <div className="absolute top-4 left-4">
              <span className="bg-black/75 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30">
                {item.categoryLabel}
              </span>
            </div>
          </div>

          {/* Details & Customization */}
          <div className="p-6 md:p-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flavor: {item.flavor}</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                {item.name}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                {item.description}
              </p>

              {/* Size Selector */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Choose Size / Weight:</span>
                </label>
                <select
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                  className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="2 lbs (8 - 10 people)">2 lbs (8 - 10 people)</option>
                  <option value="3 lbs (12 - 15 people)">3 lbs (12 - 15 people)</option>
                  <option value="4 lbs (18 - 22 people)">4 lbs (18 - 22 people)</option>
                  <option value="5+ lbs (Custom Grand Size)">5+ lbs (Custom Grand Size)</option>
                  <option value="Tiered Wedding / Event Cake">Tiered Wedding / Event Cake</option>
                </select>
              </div>

              {/* Dedication Text */}
              <div className="mt-3">
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Message on Cake (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Happy Birthday Ayan!"
                  value={dedicationText}
                  onChange={(e) => setDedicationText(e.target.value)}
                  className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Date */}
              <div className="mt-3">
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Required Date:
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Pricing:</span>
                <span className="font-bold text-amber-400">{item.priceNote}</span>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-black font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm & Order on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
