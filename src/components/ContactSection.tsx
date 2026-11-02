import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

export const ContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry / Order',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);

    const whatsappText = 
      `*MESSAGE FROM WEBSITE - CAKE SHAKE*\n` +
      `👤 *Name:* ${contactForm.name}\n` +
      `📞 *Phone:* ${contactForm.phone}\n` +
      `✉️ *Email:* ${contactForm.email || 'N/A'}\n` +
      `📌 *Subject:* ${contactForm.subject}\n` +
      `💬 *Message:* ${contactForm.message}`;

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappText)}`, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] text-zinc-900 border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Visit Us or Order Direct</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-900 tracking-tight">
            Get in Touch with Cake Shake
          </h2>
          
          <p className="mt-4 text-zinc-600 text-base sm:text-lg">
            Have a celebration question or want to order a custom cake? Call, WhatsApp, email, or visit our store in Toba Tek Singh.
          </p>
        </div>

        {/* 3 Quick Action Cards: Call Now, WhatsApp Order, Email */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Phone */}
          <a
            href={`tel:${BAKERY_INFO.phoneRaw}`}
            className="group bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Direct Phone</p>
              <h3 className="text-xl font-bold text-zinc-900 mt-1">{BAKERY_INFO.phone}</h3>
              <p className="text-xs text-zinc-500 mt-1">Available for quick queries and immediate cake pick-up orders.</p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 group-hover:text-amber-700">
              <span>Call Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 2: WhatsApp (Highlighted Primary) */}
          <a
            href={`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Cake Shake! I would like to place an order or ask a question.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#181614] rounded-2xl p-6 border border-amber-500/40 text-white shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black flex items-center justify-center mb-4 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Fastest Response</p>
              <h3 className="text-xl font-bold text-white mt-1">{BAKERY_INFO.whatsapp}</h3>
              <p className="text-xs text-zinc-300 mt-1">Send photos, discuss custom designs, and receive price quotes directly.</p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>WhatsApp Order</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${BAKERY_INFO.email}`}
            className="group bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</p>
              <h3 className="text-lg font-bold text-zinc-900 mt-1 truncate">{BAKERY_INFO.email}</h3>
              <p className="text-xs text-zinc-500 mt-1">For corporate bookings, supplier inquiries, and detailed proposals.</p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 group-hover:text-amber-700">
              <span>Send Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Lower Grid: Interactive Map & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location & Google Map Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 text-amber-400 flex items-center justify-center font-bold">
                  CS
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900">
                    {BAKERY_INFO.name}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Bakery, Cakes, Desserts & Café
                  </p>
                </div>
              </div>

              {/* Info Rows */}
              <div className="space-y-4 mb-6 text-sm text-zinc-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 block">Bakery Location</span>
                    <span>Toba Tek Singh, Punjab, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 block">Baking & Service Hours</span>
                    <span>{BAKERY_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 block">Delivery Coverage</span>
                    <span>{BAKERY_INFO.deliveryNote}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Responsive Google Map Centered on Toba Tek Singh */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200 relative aspect-[16/10] bg-zinc-100 shadow-inner">
              <iframe
                title="Cake Shake Location in Toba Tek Singh"
                src="https://maps.google.com/maps?q=Toba%20Tek%20Singh%2C%20Punjab%2C%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute bottom-3 right-3">
                <a
                  href="https://maps.google.com/?q=Toba+Tek+Singh,+Punjab,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-1.5 hover:bg-black transition-colors"
                >
                  <Navigation className="w-3 h-3 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#181614] rounded-3xl p-6 sm:p-8 border border-amber-500/30 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Send Us a Quick Message
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Have a question about large event catering, custom designs, or same-day orders? Send a note and our team will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fatima Zahra"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0325 2513335"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Subject
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Cake Order & Sizing">Cake Order & Sizing</option>
                      <option value="Wedding Tier Cake Consultation">Wedding Tier Cake Consultation</option>
                      <option value="Corporate / Party Treat Box">Corporate / Party Treat Box</option>
                      <option value="Bakery Timings & Delivery">Bakery Timings & Delivery</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you'd like to ask or discuss..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-black font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp / Inquiry</span>
                </button>

                {formSent && (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Message formatted! WhatsApp is opening so you can chat directly with Cake Shake.</span>
                  </div>
                )}
              </form>
            </div>

            <p className="text-[11px] text-zinc-500 text-center mt-4">
              Direct Phone: <a href={`tel:${BAKERY_INFO.phoneRaw}`} className="text-amber-400 underline">{BAKERY_INFO.phone}</a> • WhatsApp: <a href={`https://wa.me/${BAKERY_INFO.whatsappRaw}`} className="text-amber-400 underline">{BAKERY_INFO.whatsapp}</a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
