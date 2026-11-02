import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Menu as MenuIcon, X, Sparkles, Clock, MapPin } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Custom Cakes', href: '#custom-cakes' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#141210] border-b border-amber-900/30 text-xs py-2 px-4 text-amber-200/90 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Toba Tek Singh, Punjab</span>
            </span>
            <span className="hidden sm:inline text-zinc-500">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-amber-400/80" />
              <span>Open Daily: 10:00 AM – 11:30 PM</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BAKERY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BAKERY_INFO.phone}</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a 
              href={`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Cake Shake! I would like to place an order.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden md:inline">WhatsApp:</span>
              <span>{BAKERY_INFO.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#121110]/95 backdrop-blur-md shadow-xl py-3 border-b border-amber-500/20' 
            : 'bg-[#181614] py-4 border-b border-amber-950/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-3 shrink-0"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <span className="text-black font-display font-black text-xl tracking-tighter">CS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-1">
                  Cake Shake
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-400/90 font-medium -mt-1">
                  Bakery & Dessert Café
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (single-line, clean typography) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="whitespace-nowrap hover:text-amber-400 transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={BAKERY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                aria-label="Follow Cake Shake on Instagram"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Cake Shake! I would like to order a fresh cake/dessert in Toba Tek Singh.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-black font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 active:scale-95 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Order Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181614] border-b border-amber-900/40 px-4 pt-3 pb-6 mt-3 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-zinc-200 hover:bg-amber-950/40 hover:text-amber-400 rounded-lg text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800 grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${BAKERY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-zinc-800 text-zinc-200 py-2.5 rounded-lg font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Bakery</span>
              </a>
              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 text-black py-2.5 rounded-lg font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
