import React from 'react';
import { Instagram, Heart, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

// Image imports
import heroCakeImg from '/src/assets/images/hero_chocolate_cake_1793639566273.jpg';
import weddingCakeImg from '/src/assets/images/wedding_tiered_cake_1793639566670.jpg';
import birthdayCakeImg from '/src/assets/images/custom_birthday_cake_1793639568543.jpg';
import cakeShakeDrinkImg from '/src/assets/images/signature_cake_shake_1793639586564.jpg';
import lotusCheesecakeImg from '/src/assets/images/lotus_cheesecake_dessert_1793639568429.jpg';
import dessertBoxImg from '/src/assets/images/cupcakes_dessert_box_1793639569964.jpg';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      id: 'ig-1',
      image: heroCakeImg,
      caption: 'Pure Belgian Truffle goodness dripping in luxury. Freshly made in Toba Tek Singh! ✨🍫 #CakeShake #TobaTekSingh #ChocolateLover',
      likes: '482',
      comments: '39'
    },
    {
      id: 'ig-2',
      image: weddingCakeImg,
      caption: 'A 3-tier dream wedding cake for an unforgettable night. 24k edible gold flakes on textured ivory buttercream 🤍🕊️ #WeddingCake',
      likes: '624',
      comments: '58'
    },
    {
      id: 'ig-3',
      image: cakeShakeDrinkImg,
      caption: 'Meet our signature Cake Shake! Rich chocolate gelato, fudge brownie crown, whipped cream. Must try! 🥤🍨 #SignatureShake',
      likes: '815',
      comments: '94'
    },
    {
      id: 'ig-4',
      image: birthdayCakeImg,
      caption: 'Celebrations made vibrant! French macarons, chocolate drizzle and pastel tiers for Amelia’s 30th 🎂🎉 #CustomCakes',
      likes: '519',
      comments: '42'
    },
    {
      id: 'ig-5',
      image: lotusCheesecakeImg,
      caption: 'Lotus Biscoff cheesecake with warm melted speculoos cookie butter. Melt-in-mouth perfection! 🍯🤤 #BiscoffLove',
      likes: '730',
      comments: '67'
    },
    {
      id: 'ig-6',
      image: dessertBoxImg,
      caption: 'Gold luxury gift boxes filled with assorted cupcakes and French eclairs. The sweetest gift for your loved ones 🎁✨',
      likes: '395',
      comments: '28'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] text-zinc-900 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Instagram className="w-3.5 h-3.5 text-amber-600" />
              <span>Connect on Social Media</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-900 tracking-tight">
              Sweet Moments on Instagram
            </h2>
            
            <p className="mt-3 text-zinc-600 text-base">
              Follow our daily bakery adventures, behind-the-scenes cake decorations, and customer celebrations across Toba Tek Singh.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={BAKERY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 group"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow {BAKERY_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Instagram Visual Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={BAKERY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-zinc-900 block shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt="Cake Shake Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Hover Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-amber-400" />
                </div>

                <p className="text-[11px] text-zinc-200 line-clamp-3 leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-xs text-amber-300 pt-1 border-t border-zinc-700/60 font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Community Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500">
            Tag <span className="font-semibold text-zinc-800">#CakeShakeToba</span> in your celebrations to be featured on our feed!
          </p>
        </div>

      </div>
    </section>
  );
};
