export interface MenuItem {
  id: string;
  name: string;
  category: 'birthday' | 'chocolate' | 'customized' | 'wedding' | 'cupcakes' | 'pastries' | 'desserts' | 'boxes' | 'shakes';
  categoryLabel: string;
  description: string;
  flavor: string;
  image: string;
  isBestseller?: boolean;
  isSignature?: boolean;
  servings?: string;
  priceNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}

export const BAKERY_INFO = {
  name: "Cake Shake",
  tagline: "Every Celebration Deserves a Sweet Moment",
  address: "Main Commercial Area, Toba Tek Singh, Punjab, Pakistan",
  city: "Toba Tek Singh",
  province: "Punjab",
  country: "Pakistan",
  phone: "046-2513335",
  phoneRaw: "0462513335",
  whatsapp: "+92 325 2513335",
  whatsappRaw: "923252513335",
  email: "mwamiq59@gmail.com",
  instagram: "https://www.instagram.com/cake___shake/",
  instagramHandle: "@cake___shake",
  hours: "Monday – Sunday: 10:00 AM – 11:30 PM",
  deliveryNote: "Fresh daily pickup & doorstep delivery across Toba Tek Singh & surrounding areas",
};

// High-fidelity image assets generated for Cake Shake
import heroCakeImg from '/src/assets/images/hero_chocolate_cake_1793639566273.jpg';
import weddingCakeImg from '/src/assets/images/wedding_tiered_cake_1793639566670.jpg';
import birthdayCakeImg from '/src/assets/images/custom_birthday_cake_1793639568543.jpg';
import dessertBoxImg from '/src/assets/images/cupcakes_dessert_box_1793639569964.jpg';
import lotusCheesecakeImg from '/src/assets/images/lotus_cheesecake_dessert_1793639568429.jpg';
import cakeShakeDrinkImg from '/src/assets/images/signature_cake_shake_1793639586564.jpg';
import redVelvetImg from '/src/assets/images/red_velvet_cake_1793639588695.jpg';
import frenchPastriesImg from '/src/assets/images/french_pastries_selection_1793639588524.jpg';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "royal-belgian-truffle",
    name: "Royal Belgian Truffle Fudge Cake",
    category: "chocolate",
    categoryLabel: "Chocolate Cakes",
    description: "Multi-layered moist chocolate sponge soaked with rich cocoa ganache, glossy dark chocolate drip, and hand-rolled gold-dusted truffles.",
    flavor: "Dark Chocolate & Cocoa",
    image: heroCakeImg,
    isSignature: true,
    isBestseller: true,
    servings: "2 - 6 lbs available",
    priceNote: "Price on Request"
  },
  {
    id: "grand-ivory-wedding-tier",
    name: "Grand Ivory & Gold Wedding Tier",
    category: "wedding",
    categoryLabel: "Wedding Cakes",
    description: "Three-tiered architectural celebration masterpiece with delicate ivory buttercream texture, handmade sugar blooms, and edible 24k gold leaf flakes.",
    flavor: "Vanilla Bean & White Chocolate Raspberry",
    image: weddingCakeImg,
    isSignature: true,
    servings: "30 - 60+ guests",
    priceNote: "Price on Request"
  },
  {
    id: "pastel-celebration-macaron",
    name: "Celebration Macaron Drip Cake",
    category: "birthday",
    categoryLabel: "Birthday Cakes",
    description: "Vibrant tiered celebration cake adorned with artisanal French macarons, rich chocolate ganache drips, and custom birthday lettering.",
    flavor: "Pastel Berry & Belgian Chocolate",
    image: birthdayCakeImg,
    isBestseller: true,
    servings: "8 - 18 servings (2 - 4 lbs)",
    priceNote: "Price on Request"
  },
  {
    id: "signature-cake-shake-frappe",
    name: "Cake Shake Masterpiece Shake",
    category: "shakes",
    categoryLabel: "Signature Shakes",
    description: "Our namesake drink: premium chocolate fudge cake blended into rich velvety gelato, crowned with fresh whipped cream, brownie chunks, and cocoa drizzle.",
    flavor: "Decadent Chocolate Cake Shake",
    image: cakeShakeDrinkImg,
    isSignature: true,
    isBestseller: true,
    servings: "Single Serving Tall Glass",
    priceNote: "Price on Request"
  },
  {
    id: "velvet-cream-cheese-deluxe",
    name: "Velvet Cream Cheese Rosette Cake",
    category: "customized",
    categoryLabel: "Customized Cakes",
    description: "Signature moist crimson sponge layered with smooth silky Philadelphia cream cheese frosting, finished with piped floral rosettes and gold leaf.",
    flavor: "Classic Red Velvet & Cream Cheese",
    image: redVelvetImg,
    isBestseller: true,
    servings: "8 - 14 servings (2 - 3 lbs)",
    priceNote: "Price on Request"
  },
  {
    id: "lotus-biscoff-cheesecake",
    name: "Gourmet Lotus Biscoff Cheesecake",
    category: "desserts",
    categoryLabel: "Desserts",
    description: "Silky New York style baked cheesecake infused with Lotus cookie butter, spiced speculoos crust, warm caramel drizzle, and golden biscuit crumb.",
    flavor: "Spiced Caramel & Lotus Speculoos",
    image: lotusCheesecakeImg,
    isBestseller: true,
    servings: "Whole cake or individual slices",
    priceNote: "Price on Request"
  },
  {
    id: "luxury-patisserie-gift-box",
    name: "Signature Dessert & Cupcake Box",
    category: "boxes",
    categoryLabel: "Dessert Boxes",
    description: "Elegantly packaged gold-embossed gift box filled with 12 gourmet cupcakes, French macarons, chocolate tarts, and salted caramel mini treats.",
    flavor: "Assorted Chef Flavors",
    image: dessertBoxImg,
    isSignature: true,
    servings: "Box of 12 artisan treats",
    priceNote: "Price on Request"
  },
  {
    id: "parisian-pastry-selection",
    name: "Artisanal Parisian Pastries & Tarts",
    category: "pastries",
    categoryLabel: "Pastries",
    description: "Crispy handcrafted eclairs, fruit tarts with fresh raspberries, delicate mille-feuille, and layered chocolate opera slices prepared daily.",
    flavor: "Raspberry, Chocolate Ganache & Pistachio",
    image: frenchPastriesImg,
    servings: "Per piece or assorted platters",
    priceNote: "Price on Request"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Belgian Chocolate Decadence",
    category: "Chocolate Cakes",
    image: heroCakeImg,
    description: "Rich dark chocolate with drip ganache and edible gold flakes."
  },
  {
    id: "g2",
    title: "Three-Tier Royal Wedding Cake",
    category: "Wedding Cakes",
    image: weddingCakeImg,
    description: "Custom textured ivory tiers decorated with edible gold leaf and sugar floristry."
  },
  {
    id: "g3",
    title: "Macaron Celebration Drip Cake",
    category: "Birthday Cakes",
    image: birthdayCakeImg,
    description: "Handcrafted birthday centerpiece with colorful French macarons and chocolate drips."
  },
  {
    id: "g4",
    title: "Signature Cake Shake",
    category: "Dessert Drinks",
    image: cakeShakeDrinkImg,
    description: "Freshly blended cake shake with brownie slice and rich whipped cream."
  },
  {
    id: "g5",
    title: "Red Velvet Cream Cheese Rosettes",
    category: "Customized Cakes",
    image: redVelvetImg,
    description: "Classic red velvet with velvety piped rosettes and luxurious gold detailing."
  },
  {
    id: "g6",
    title: "Lotus Biscoff Spiced Cheesecake",
    category: "Desserts",
    image: lotusCheesecakeImg,
    description: "Baked cheesecake drenched in molten Biscoff cookie spread."
  },
  {
    id: "g7",
    title: "Luxury Cupcake & Tart Gift Box",
    category: "Dessert Boxes",
    image: dessertBoxImg,
    description: "Artisan assorted treat collection in custom luxury packaging."
  },
  {
    id: "g8",
    title: "Fresh Parisian Pastry Tier",
    category: "Pastries",
    image: frenchPastriesImg,
    description: "Morning baked eclairs, fruit tarts, and layered French opera pastries."
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: "Sparkles",
    title: "Freshly Prepared Cakes",
    description: "Baked fresh daily in our Toba Tek Singh bakery using pure dairy butter, premium cocoa, and farm-fresh ingredients."
  },
  {
    icon: "Palette",
    title: "Beautiful Custom Designs",
    description: "From intricate fondant characters to romantic floral tiered wedding cakes, we turn your unique dream theme into edible art."
  },
  {
    icon: "PartyPopper",
    title: "Perfect for Every Celebration",
    description: "Birthdays, weddings, anniversaries, graduations, baby showers, or spontaneous sweet cravings—we elevate every milestone."
  },
  {
    icon: "Coffee",
    title: "Delicious Desserts & Shakes",
    description: "Explore our famous signature Cake Shake, artisanal cheesecakes, authentic French pastries, and mouth-watering cupcakes."
  },
  {
    icon: "ShieldCheck",
    title: "Finest Quality Ingredients",
    description: "Zero compromises on quality. We utilize imported Belgian chocolates, real dairy cream, pure vanilla, and wholesome nuts."
  },
  {
    icon: "HeartHandshake",
    title: "Customer Satisfaction",
    description: "Loved by families across Toba Tek Singh. We deliver friendly, reliable service with punctual event-ready timing."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Ayesha & Farooq",
    event: "Wedding Reception Cake",
    location: "Toba Tek Singh",
    comment: "The 3-tier wedding cake Cake Shake crafted for our big day was breathtaking! It was the star of our stage photos, and the chocolate fudge flavor was moist and heavenly.",
    rating: 5,
    date: "Recent Wedding Event"
  },
  {
    id: "t2",
    name: "Hamza Malik",
    event: "25th Birthday Celebration",
    location: "Canal Road, Toba Tek Singh",
    comment: "Best cake in Toba Tek Singh hands down. Ordered a custom Macaron Drip Cake on WhatsApp; the design was exactly like the reference picture and delivered right on time!",
    rating: 5,
    date: "Birthday Celebration"
  },
  {
    id: "t3",
    name: "Sana Tariq",
    event: "Anniversary & Lotus Cheesecake",
    location: "Toba Tek Singh",
    comment: "Their Lotus Biscoff cheesecake and signature Cake Shake are unbeatable. The presentation feels like a 5-star bakery in Lahore or Islamabad right here in our city.",
    rating: 5,
    date: "Anniversary Surprise"
  }
];

export const CAKE_SIZES = [
  { size: "2 lbs", serves: "8 - 10 people", idealFor: "Small family gatherings & intimate birthdays" },
  { size: "3 lbs", serves: "12 - 15 people", idealFor: "Medium birthday parties & dinner celebrations" },
  { size: "4 lbs", serves: "18 - 22 people", idealFor: "Large family celebrations & friend get-togethers" },
  { size: "5 lbs+", serves: "25 - 35 people", idealFor: "Grand parties, graduations & engagements" },
  { size: "2-Tier / 3-Tier", serves: "40 - 80+ guests", idealFor: "Weddings, receptions & landmark anniversaries" }
];

export const POPULAR_FLAVORS = [
  "Belgian Chocolate Fudge (House Specialty)",
  "Lotus Biscoff Crunch",
  "Classic Red Velvet Cream Cheese",
  "Ferrero Rocher Hazelnut",
  "Vanilla Bean & French Buttercream",
  "Coffee Mocha Truffle",
  "Cadbury Dairy Milk Caramel",
  "Mango & Passionfruit (Seasonal)"
];
