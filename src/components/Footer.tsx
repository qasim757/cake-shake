import React from 'react';
import { Instagram, Phone, MessageCircle, Mail, MapPin, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0d0c] text-white border-t border-amber-950/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-black font-display font-black text-xl tracking-tighter">CS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-1">
                  Cake Shake
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-400/90 font-medium -mt-1">
                  Bakery, Cakes & Desserts
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Toba Tek Singh's destination for luxury customized cakes, gourmet birthday celebrations, artisan French pastries, and our signature decadent Cake Shake.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BAKERY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BAKERY_INFO.phoneRaw}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BAKERY_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400/50 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home Showcase</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Our Signature Menu</a>
              </li>
              <li>
                <a href="#custom-cakes" className="hover:text-amber-400 transition-colors">Custom Cake Studio</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Cake Shake</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Pastry & Cake Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3 text-sm">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Bakery Information
            </h4>
            
            <div className="space-y-2.5 text-zinc-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BAKERY_INFO.phoneRaw}`} className="hover:text-amber-400 transition-colors">
                  {BAKERY_INFO.phone}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`https://wa.me/${BAKERY_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  WhatsApp: {BAKERY_INFO.whatsapp}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BAKERY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {BAKERY_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Cake Shake! I would like to order a cake in Toba Tek Singh.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Demo Proposal Badge Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-zinc-900/90 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
            <span>
              <strong className="text-amber-300">DEMO PROPOSAL WEBSITE:</strong> Custom designed to showcase the Cake Shake brand, artisanal cakes, and streamline online customer ordering in Toba Tek Singh.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black transition-colors shrink-0 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Cake Shake. All rights reserved. Toba Tek Singh, Punjab, Pakistan.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with sweet perfection for</span>
            <span className="text-amber-400 font-semibold">Cake Shake</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
