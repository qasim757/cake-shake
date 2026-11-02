import React from 'react';
import { ArrowRight, Sparkles, Star, Award, Heart, Cake, CheckCircle2 } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import heroCakeImg from '/src/assets/images/hero_chocolate_cake_1793639566273.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onRequestCustomCake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onRequestCustomCake }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#121110] text-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-amber-950/40">
      {/* Subtle luxury ambient backdrops */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left">
            
            {/* Tagline / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Toba Tek Singh's Premier Bakery & Café</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.12] tracking-tight text-white max-w-2xl">
              Every Celebration Deserves a <span className="gold-gradient-text italic font-serif">Sweet Moment</span>
            </h1>

            {/* Subheadline */}
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
              Discover delicious cakes, irresistible desserts, and beautifully customized creations made to sweeten your special moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-black font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/25 active:scale-95 group cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onRequestCustomCake}
                className="inline-flex items-center justify-center gap-2.5 bg-zinc-900/90 text-amber-300 border border-amber-500/40 hover:border-amber-400 hover:bg-zinc-800 font-medium text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                <Cake className="w-4 h-4 text-amber-400" />
                <span>Order Your Custom Cake</span>
              </button>
            </div>

            {/* Trust and Feature Micro-Badges */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-3 gap-3 max-w-lg text-zinc-300">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom Fondant Art</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Doorstep Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with floating accents */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer golden halo */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Cake Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-zinc-900 to-black p-2.5 shadow-2xl shadow-amber-950/60 group">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-950">
                  <img
                    src={heroCakeImg}
                    alt="Cake Shake signature Belgian chocolate fudge celebration cake with chocolate drip and gold dust"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Signature Belgian Truffle</span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div>
                      <p className="font-display font-semibold text-sm text-white">Royal Truffle Fudge Cake</p>
                      <p className="text-amber-300/90 text-[11px]">Handcrafted Fresh Daily in Toba</p>
                    </div>
                    <span className="bg-amber-500 text-black font-bold px-2.5 py-1 rounded-lg text-[11px]">
                      Price on Request
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Dessert Element 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#1f1c18]/95 backdrop-blur-md border border-amber-500/40 p-3 rounded-2xl shadow-xl shadow-black/60 hidden sm:flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">#1 in Toba Tek Singh</p>
                  <p className="text-[10px] text-zinc-400">Pure Butter & Belgian Cocoa</p>
                </div>
              </div>

              {/* Floating Dessert Element 2: Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#1f1c18]/95 backdrop-blur-md border border-amber-500/40 p-3.5 rounded-2xl shadow-xl shadow-black/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold">
                  <Heart className="w-5 h-5 fill-black" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">5,000+ Celebrations</p>
                  <p className="text-[10px] text-amber-400/90 font-medium">Sweetening Birthdays & Weddings</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
