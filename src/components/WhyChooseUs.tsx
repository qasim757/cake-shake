import React from 'react';
import { Sparkles, Palette, PartyPopper, Coffee, ShieldCheck, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/bakeryData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-amber-500" />;
      case 'PartyPopper':
        return <PartyPopper className="w-6 h-6 text-amber-500" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#FAF7F2] text-zinc-900 border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The Cake Shake Standard</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-900 tracking-tight">
            Why Choose Cake Shake?
          </h2>
          
          <p className="mt-4 text-zinc-600 text-base sm:text-lg">
            We blend timeless European pastry craft with local warmth to create the finest celebration centerpieces in Toba Tek Singh.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#181614] border border-amber-500/30 flex items-center justify-center mb-6 shadow-md shadow-amber-500/10 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                  {getIcon(item.icon)}
                </div>

                <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">
                  0{index + 1}. Quality Pillar
                </div>

                <h3 className="font-display font-bold text-xl text-zinc-900 group-hover:text-amber-600 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-semibold text-zinc-400 group-hover:text-amber-600 transition-colors">
                <span>Handcrafted with Passion</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Heritage Banner */}
        <div className="mt-16 bg-[#181614] rounded-3xl p-8 sm:p-10 border border-amber-500/30 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Proudly Serving Toba Tek Singh
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Every Cake Tells a Story of Sweet Memories
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl">
              From our ovens to your party table, we uphold hygiene, freshness, and artful detail so your family events are celebrated in style.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#custom-cakes"
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-sm px-6 py-3.5 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              Order Custom Cake
            </a>
            <a
              href="#menu"
              className="bg-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-700 text-sm font-medium px-6 py-3.5 rounded-xl transition-all"
            >
              Browse Menu
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
