import React, { useState } from 'react';
import { Cake, Sparkles, MessageCircle, Calendar, CheckCircle2, Upload, HelpCircle } from 'lucide-react';
import { BAKERY_INFO, CAKE_SIZES, POPULAR_FLAVORS } from '../data/bakeryData';
import weddingCakeImg from '/src/assets/images/wedding_tiered_cake_1793639566670.jpg';
import birthdayCakeImg from '/src/assets/images/custom_birthday_cake_1793639568543.jpg';

export const CustomCakeSection: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    cakeType: 'Fondant Theme Cake',
    cakeSize: '3 lbs (12 - 15 people)',
    occasion: 'Birthday Celebration',
    requiredDate: '',
    flavor: 'Belgian Chocolate Fudge (House Specialty)',
    designDescription: '',
  });

  const [simulatedFile, setSimulatedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const cakeTypes = [
    'Fondant Theme Cake',
    'Buttercream Floral Design',
    'Multi-Tier Wedding Cake',
    'Chocolate Fudge Drip Cake',
    'Cartoon / Kids Fantasy Theme',
    'Vintage Lambeth Ribbon Cake',
    'Anniversary Heart Cake',
    'Photo Print Cake',
    'Other Custom Design'
  ];

  const occasions = [
    'Birthday Celebration',
    'Wedding / Reception',
    'Anniversary',
    'Bridal Shower / Engagement',
    'Baby Shower / Gender Reveal',
    'Graduation / Milestone',
    'Corporate Event',
    'Family Get-Together'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSimulatedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format neat WhatsApp inquiry string
    const text = 
      `*CUSTOM CAKE INQUIRY - CAKE SHAKE*\n` +
      `----------------------------------------\n` +
      `👤 *Name:* ${formData.customerName || 'Valued Customer'}\n` +
      `📞 *Phone:* ${formData.phoneNumber || 'Not provided'}\n` +
      `🎂 *Cake Type:* ${formData.cakeType}\n` +
      `⚖️ *Size:* ${formData.cakeSize}\n` +
      `🎉 *Occasion:* ${formData.occasion}\n` +
      `📅 *Date Needed:* ${formData.requiredDate || 'Flexible'}\n` +
      `🍫 *Preferred Flavor:* ${formData.flavor}\n` +
      `📝 *Design Details:* ${formData.designDescription || 'Reference design as discussed'}\n` +
      (simulatedFile ? `📷 *Reference Image:* Attached "${simulatedFile}"\n` : '') +
      `----------------------------------------\n` +
      `*Location:* Toba Tek Singh, Punjab\n` +
      `Please let me know pricing and confirmation. Thank you!`;

    // Set demo success state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage("Inquiry prepared! Click below to send directly via WhatsApp to Cake Shake Toba Tek Singh.");
      // Open WhatsApp link
      window.open(`https://wa.me/${BAKERY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
    }, 400);
  };

  return (
    <section id="custom-cakes" className="py-20 bg-[#121110] text-white relative overflow-hidden border-b border-amber-950/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Cake className="w-3.5 h-3.5 text-amber-400" />
            <span>Bespoke Confectionery Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Your Dream Cake, <span className="gold-gradient-text italic font-serif">Made Just for You</span>
          </h2>
          
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            From birthdays to anniversaries and unforgettable celebrations, let us create a cake that matches your imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Showcase & Size Calculator */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-900 group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={weddingCakeImg}
                    alt="Custom tiered wedding cake with gold leaf"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-amber-400 text-xs font-semibold">Wedding Tiers</span>
                    <p className="text-white text-[11px] leading-tight">Edible 24k gold leaf & sugar petals</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-900 group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={birthdayCakeImg}
                    alt="Custom macaron celebration cake"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-amber-400 text-xs font-semibold">Birthday Spectacles</span>
                    <p className="text-white text-[11px] leading-tight">Handmade macarons & custom themes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Sizing Guide Box */}
            <div className="bg-[#181614] border border-amber-500/20 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-amber-300 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span>Cake Sizing Reference</span>
                </h4>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-xs text-amber-400 hover:underline cursor-pointer"
                >
                  {showSizeGuide ? 'Hide details' : 'View servings'}
                </button>
              </div>

              <p className="text-xs text-zinc-400 mb-3">
                Not sure how many pounds to order? Standard guideline: 1 pound serves 4–5 guests comfortably.
              </p>

              {showSizeGuide && (
                <div className="space-y-2 pt-2 border-t border-zinc-800 text-xs">
                  {CAKE_SIZES.map((s) => (
                    <div key={s.size} className="flex justify-between items-center py-1 border-b border-zinc-800/50">
                      <span className="font-semibold text-white">{s.size}</span>
                      <span className="text-amber-400">{s.serves}</span>
                      <span className="text-zinc-500 text-[11px] hidden sm:inline">{s.idealFor}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quality Commitment Card */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 space-y-1.5">
              <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Notice for Custom Orders:</span>
              </p>
              <p className="text-zinc-300 leading-relaxed">
                For complex 3D fondant designs and multi-tier wedding cakes, please book at least 24–48 hours in advance to guarantee meticulous handcrafting.
              </p>
            </div>

          </div>

          {/* Right Column: Custom Cake Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#181614] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Custom Cake Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill in your celebration specifications below. This form directly generates a pre-formatted WhatsApp inquiry to Cake Shake Toba Tek Singh.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      required
                      placeholder="e.g. Usman Ali"
                      value={formData.customerName}
                      onChange={handleChange}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="e.g. 0321 1234567"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Cake Type & Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Cake Type *
                    </label>
                    <select
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleChange}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {cakeTypes.map((type) => (
                        <option key={type} value={type} className="bg-zinc-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Cake Size / Weight *
                    </label>
                    <select
                      name="cakeSize"
                      value={formData.cakeSize}
                      onChange={handleChange}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="2 lbs (8 - 10 people)">2 lbs (8 - 10 people)</option>
                      <option value="3 lbs (12 - 15 people)">3 lbs (12 - 15 people)</option>
                      <option value="4 lbs (18 - 22 people)">4 lbs (18 - 22 people)</option>
                      <option value="5 lbs+ (25+ people)">5 lbs+ (25+ people)</option>
                      <option value="2-Tier Wedding Cake (35 - 50 guests)">2-Tier Wedding Cake (35 - 50 guests)</option>
                      <option value="3-Tier Grand Wedding (50 - 80+ guests)">3-Tier Grand Wedding (50 - 80+ guests)</option>
                    </select>
                  </div>
                </div>

                {/* Occasion & Required Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Occasion *
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {occasions.map((occ) => (
                        <option key={occ} value={occ} className="bg-zinc-900 text-white">
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Required Date *
                    </label>
                    <input
                      type="date"
                      name="requiredDate"
                      required
                      value={formData.requiredDate}
                      onChange={handleChange}
                      className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Flavor Preference */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Cake Flavor Preference
                  </label>
                  <select
                    name="flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {POPULAR_FLAVORS.map((flavor) => (
                      <option key={flavor} value={flavor} className="bg-zinc-900 text-white">
                        {flavor}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Design Description */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Design Description / Special Text / Dedication
                  </label>
                  <textarea
                    name="designDescription"
                    rows={3}
                    placeholder="Describe color palette, theme characters, name/text to write on cake, or any custom wishes..."
                    value={formData.designDescription}
                    onChange={handleChange}
                    className="w-full bg-[#121110] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Reference Picture simulated upload */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Reference Photo (Optional)
                  </label>
                  <div className="relative border border-dashed border-zinc-700 hover:border-amber-500/60 rounded-xl p-3 text-center transition-colors cursor-pointer bg-[#121110]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSimulateUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span>{simulatedFile ? `Selected: ${simulatedFile}` : 'Click to select reference design photo or send on WhatsApp'}</span>
                    </div>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-black font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing WhatsApp Inquiry...' : 'Request Your Custom Cake on WhatsApp'}</span>
                </button>

                {submittedMessage && (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{submittedMessage}</span>
                  </div>
                )}

                <p className="text-[11px] text-zinc-500 text-center">
                  * Note: This is an interactive demo showcasing how customers can submit inquiries directly to Cake Shake Toba Tek Singh via WhatsApp.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
