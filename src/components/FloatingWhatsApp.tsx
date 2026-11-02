import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#181614] border border-amber-500/40 text-white text-xs px-3.5 py-2.5 rounded-2xl shadow-xl shadow-black/60 relative animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Order cakes via WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Cake Shake! I would like to order a fresh cake or ask about menu items in Toba Tek Singh.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Chat with Cake Shake on WhatsApp"
        title="WhatsApp Cake Shake (+92 325 2513335)"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
        
        {/* Soft pulse glow */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 -z-10 animate-ping"></span>
      </a>
    </div>
  );
};
