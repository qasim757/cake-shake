import React from 'react';
import { Star, Quote, Heart, CheckCircle2, AlertCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/bakeryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#121110] text-white border-b border-amber-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Customer Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Celebrated by <span className="gold-gradient-text italic font-serif">Sweet Lovers</span>
          </h2>
          
          <p className="mt-4 text-zinc-300 text-base sm:text-lg">
            Hear how Cake Shake has helped make weddings, birthdays, and special milestones in Toba Tek Singh truly unforgettable.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#181614] rounded-3xl p-8 border border-amber-500/20 shadow-xl flex flex-col justify-between relative group hover:border-amber-400/50 transition-all duration-300"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-500/30 group-hover:text-amber-500/60 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-base text-white">
                      {review.name}
                    </h4>
                    <p className="text-xs text-amber-400/90 font-medium">
                      {review.event}
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      {review.location}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                    CS
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Transparency Demo Disclaimer as specified in guidelines */}
        <div className="mt-12 max-w-xl mx-auto text-center p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Demonstration Note: The testimonials above are sample showcase placeholders designed to illustrate review layouts for this website proposal.
          </span>
        </div>

      </div>
    </section>
  );
};
