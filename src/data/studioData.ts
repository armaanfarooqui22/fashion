export type PortfolioCategory =
  | 'All'
  | 'Fashion'
  | 'Portraits'
  | 'Model Portfolio'
  | 'Product'
  | 'Events';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  client: string;
  year: string;
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape' | 'wide';
  featured?: boolean;
  specs: string;
  shootTypeValue: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  deliverables: string[];
  shootTypeValue: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  popular?: boolean;
  editedPhotos: string;
  duration: string;
  outfitChanges: string;
  deliveryTime: string;
  highlights: string[];
  budgetRangeValue: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  shootType: string;
  rating: number;
  date: string;
  quote: string;
}

export interface EquipmentHighlight {
  category: string;
  title: string;
  detail: string;
}

export const STUDIO_CONTACT = {
  name: 'Fashion Studio',
  phoneDisplay: '+91 98103 21043',
  phoneHref: 'tel:+919810321043',
  whatsappNumber: '919810321043',
  whatsappBaseUrl: 'https://wa.me/919810321043',
  addressLine1: 'Main Market Road, Malviya Nagar',
  addressLine2: 'New Delhi, Delhi 110017',
  landmark: '4 mins from Malviya Nagar Metro Station (Yellow Line)',
  hours: 'Tue – Sun · 10:00 AM – 8:00 PM',
  instagramHandle: '@fashionstudio.delhi',
  instagramUrl: 'https://instagram.com/fashionstudio.delhi',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Fashion+Studio+Malviya+Nagar+New+Delhi',
};

export const IMAGES = {
  fashionCouture: '/src/assets/images/fashion_editorial_couture_1795762296115.jpg',
  fashionMenswear: '/src/assets/images/fashion_streetwear_campaign_1795762260100.jpg',
  modelCompCard: '/src/assets/images/model_portfolio_compcard_1795762261157.jpg',
  portraitMonochrome: '/src/assets/images/portrait_editorial_executive_1795762298231.jpg',
  modelFullBody: '/src/assets/images/model_portfolio_fullbody_1795762262842.jpg',
  portraitArtist: '/src/assets/images/portrait_creative_artist_1795762263245.jpg',
  productFragrance: '/src/assets/images/product_luxury_fragrance_1795762266519.jpg',
  productFootwear: '/src/assets/images/product_footwear_editorial_1795762266730.jpg',
  eventRunway: '/src/assets/images/event_runway_backstage_1795762265914.jpg',
  studioCyclorama: '/src/assets/images/studio_space_cyclorama_1795762267010.jpg',
  studioBts: '/src/assets/images/studio_bts_lighting_1795762267685.jpg',
};

export const HERO_COLLAGE = [
  {
    src: IMAGES.fashionCouture,
    alt: 'Editorial couture lookbook shoot in sculptural black and coral silk at Fashion Studio New Delhi',
    caption: 'Autumn Couture · 01',
  },
  {
    src: IMAGES.fashionMenswear,
    alt: 'Menswear campaign portrait in oversized charcoal wool tailoring with crisp studio shadows',
    caption: 'Tailoring Campaign · 02',
  },
  {
    src: IMAGES.modelCompCard,
    alt: 'Agency-ready model portfolio beauty headshot shot under studio clamshell lighting',
    caption: 'Agency Comp Card · 03',
  },
  {
    src: IMAGES.portraitMonochrome,
    alt: 'High-contrast black-and-white studio portrait of an Indian film director',
    caption: 'Monochrome Portrait · 04',
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All',
  'Fashion',
  'Portraits',
  'Model Portfolio',
  'Product',
  'Events',
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'couture-drape',
    title: 'Sculptural Coral & Noir',
    category: 'Fashion',
    client: 'Aavya Atelier AW Lookbook',
    year: '2026',
    src: IMAGES.fashionCouture,
    alt: 'South Asian fashion model in avant-garde black and electric-coral structured silk coat photographed in studio',
    aspect: 'portrait',
    featured: true,
    specs: '85mm · f/8 · Profoto D2 + Hard Beauty Dish',
    shootTypeValue: 'Fashion Shoot',
  },
  {
    id: 'menswear-tailoring',
    title: 'Architectural Wool',
    category: 'Fashion',
    client: 'Kora Menswear Campaign',
    year: '2026',
    src: IMAGES.fashionMenswear,
    alt: 'Male model in charcoal double-breasted wool suit with sharp architectural studio shadow',
    aspect: 'portrait',
    specs: '50mm · f/9 · Hard Key + Negative Fill',
    shootTypeValue: 'Fashion Shoot',
  },
  {
    id: 'silk-in-motion',
    title: 'Ivory Silk Velocity',
    category: 'Model Portfolio',
    client: 'Meera Kapoor · Agency Book',
    year: '2026',
    src: IMAGES.modelFullBody,
    alt: 'Full-body dynamic movement portrait of female model in flowing ivory silk against white cyclorama',
    aspect: 'portrait',
    specs: '70mm · 1/1600s · High-Speed Strobe Freeze',
    shootTypeValue: 'Model Portfolio',
  },
  {
    id: 'aura-fragrance',
    title: 'Travertine & Amber',
    category: 'Product',
    client: 'Aura Fine Fragrance & Gold',
    year: '2026',
    src: IMAGES.productFragrance,
    alt: 'Luxury glass perfume bottle and gold jewelry styled on travertine and black stone plinths with crisp shadows',
    aspect: 'landscape',
    specs: '90mm Macro · f/11 · Hard Fresnel & Scrim',
    shootTypeValue: 'Product & E-commerce',
  },
  {
    id: 'monochrome-director',
    title: 'Rembrandt Study No. 4',
    category: 'Portraits',
    client: 'Vikramaditya Sen · Press Kit',
    year: '2025',
    src: IMAGES.portraitMonochrome,
    alt: 'Black-and-white editorial portrait of Indian creative director in tailored black jacket',
    aspect: 'landscape',
    specs: '50mm · f/2.8 · Octabox + Feather Grid',
    shootTypeValue: 'Portraits & Headshots',
  },
  {
    id: 'agency-comp-card',
    title: 'Clean Slate Comp Card',
    category: 'Model Portfolio',
    client: 'Rhea Nair · Casting Digitals',
    year: '2026',
    src: IMAGES.modelCompCard,
    alt: 'Close-up agency model portfolio portrait in black turtleneck with natural skin finish',
    aspect: 'portrait',
    specs: '85mm · f/5.6 · Dual Clamshell Softboxes',
    shootTypeValue: 'Model Portfolio',
  },
  {
    id: 'architect-portrait',
    title: 'Linen & Studio Light',
    category: 'Portraits',
    client: 'Ananya Verma · Founder Profile',
    year: '2026',
    src: IMAGES.portraitArtist,
    alt: 'Editorial portrait of Indian female architect in ivory linen seated on black studio box',
    aspect: 'portrait',
    specs: '85mm · f/3.2 · Diffused Parabolic Key',
    shootTypeValue: 'Portraits & Headshots',
  },
  {
    id: 'monochrome-leather',
    title: 'Form & Calfskin',
    category: 'Product',
    client: 'Noor Leather Goods E-Com',
    year: '2026',
    src: IMAGES.productFootwear,
    alt: 'Minimalist black leather ankle boots and structured designer handbag on white studio plinths',
    aspect: 'landscape',
    specs: '85mm · f/11 · Dual Strip Rim Lights',
    shootTypeValue: 'Product & E-commerce',
  },
  {
    id: 'delhi-runway-night',
    title: 'Spotlight Finale, New Delhi',
    category: 'Events',
    client: 'Couture Preview Night',
    year: '2025',
    src: IMAGES.eventRunway,
    alt: 'Editorial fashion runway photograph of model walking under crisp overhead spotlights in New Delhi',
    aspect: 'wide',
    specs: '70-200mm · f/2.8 · Available Stage Light',
    shootTypeValue: 'Event Coverage',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Fashion Shoots',
    description:
      'Campaign lookbooks, designer collections, and editorial spreads crafted to command attention across print, billboards, and Instagram.',
    deliverables: ['Creative direction', 'Editorial lighting', 'High-end skin & fabric retouching'],
    shootTypeValue: 'Fashion Shoot',
  },
  {
    number: '02',
    title: 'Model Portfolios',
    description:
      'Casting-ready books and agency digitals built to get you shortlisted. Directed posing, crisp close-ups, and dynamic full-length frames.',
    deliverables: ['Agency comp cards', 'Guided posing', 'Multiple backdrop setups'],
    shootTypeValue: 'Model Portfolio',
  },
  {
    number: '03',
    title: 'Portraits & Headshots',
    description:
      'Sharp, confident portraits for actors, founders, authors, and creatives who want imagery with real presence—never stiff corporate stock.',
    deliverables: ['Natural & studio looks', 'Live tethered review', 'LinkedIn & press crops'],
    shootTypeValue: 'Portraits & Headshots',
  },
  {
    number: '04',
    title: 'Product & E-commerce',
    description:
      'Clean catalog frames and tactile still-life campaigns for apparel, jewelry, beauty, footwear, and D2C brands selling on Myntra, Ajio, and Shopify.',
    deliverables: ['Styled set design', 'True-to-life color grading', 'Web & print exports'],
    shootTypeValue: 'Product & E-commerce',
  },
  {
    number: '05',
    title: 'Event Coverage',
    description:
      'Editorial documentary coverage for runway presentations, brand launches, trunk shows, and private luxury gatherings across Delhi NCR.',
    deliverables: ['Same-night press selects', 'Candid & VIP portraits', 'Full curated gallery'],
    shootTypeValue: 'Event Coverage',
  },
  {
    number: '06',
    title: 'Studio Rental',
    subtitle: 'Confirm Availability',
    description:
      'Hire our Malviya Nagar shooting floor equipped with a white cyclorama, seamless paper rolls, studio strobes, and private styling bay.',
    deliverables: ['Half-day & full-day slots', 'Lighting & grip included', 'On-site floor assistant'],
    shootTypeValue: 'Studio Rental',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Focused session for sharp portraits, headshots, or fresh casting digitals.',
    price: '₹X,XXX',
    editedPhotos: '12 Edited High-Res Photos',
    duration: '1.5 Hours Studio Time',
    outfitChanges: 'Up to 2 Outfit Changes',
    deliveryTime: '72 Hours Delivery',
    highlights: [
      '2 studio lighting & backdrop setups',
      'Live tethered frame selection on set',
      'Natural skin & color retouching',
      'Web + print-ready export formats',
    ],
    budgetRangeValue: 'Under ₹10,000',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Our most booked package for model portfolios, lookbooks, and personal brands.',
    price: '₹X,XXX',
    popular: true,
    editedPhotos: '25 Edited High-Res Photos',
    duration: '3 Hours Studio Time',
    outfitChanges: 'Up to 4 Outfit Changes',
    deliveryTime: '48 Hours Priority Delivery',
    highlights: [
      '4 editorial lighting & backdrop moods',
      'Pre-shoot moodboard & posing direction',
      'Magazine-grade frequency retouching',
      'All unedited proof thumbnails included',
    ],
    budgetRangeValue: '₹10,000 – ₹25,000',
  },
  {
    id: 'complete',
    name: 'Complete',
    tagline: 'Full-production editorial or commercial campaign for designers and D2C labels.',
    price: '₹X,XXX',
    editedPhotos: '50+ Edited High-Res Photos',
    duration: 'Full Day (6–8 Hours)',
    outfitChanges: 'Unlimited Outfit / SKU Changes',
    deliveryTime: '48 Hours Rush + Same-Day Selects',
    highlights: [
      'Custom set styling & cyclorama access',
      'Dedicated lighting assistant on floor',
      'Commercial usage rights & color profiling',
      'Hair & makeup coordination on request',
    ],
    budgetRangeValue: '₹25,000 – ₹50,000',
  },
];

export const EQUIPMENT_HIGHLIGHTS: EquipmentHighlight[] = [
  {
    category: 'Lighting',
    title: 'Profoto & Broncolor Strobes',
    detail: 'High-speed freeze strobes, parabolic octaboxes, hard beauty dishes, and strip rim modifiers.',
  },
  {
    category: 'Capture',
    title: 'Full-Frame Prime Optics',
    detail: 'High-megapixel mirrorless systems paired with 50mm, 85mm portrait, and 90mm macro glass.',
  },
  {
    category: 'Workflow',
    title: 'Color-Calibrated Tethering',
    detail: 'Instant Capture One live preview on a calibrated studio monitor so every frame is approved on set.',
  },
  {
    category: 'Floor',
    title: 'Cyclorama & Styling Bay',
    detail: 'White infinity wall, 12+ Savage seamless paper colors, garment steamer, and dedicated vanity station.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rhea Malhotra',
    role: 'Fashion Model · Delhi NCR',
    shootType: 'Model Portfolio',
    rating: 5,
    date: 'Google Review',
    quote:
      'I walked into Fashion Studio nervous about my first portfolio and walked out with frames that landed me two agency callbacks within a week. The lighting direction and posing cues made all the difference.',
  },
  {
    id: 'rev-2',
    name: 'Kabir Sethi',
    role: 'Founder · Kora Menswear',
    shootType: 'Fashion Shoot',
    rating: 5,
    date: 'Google Review',
    quote:
      'We shot our entire 28-piece autumn lookbook in Malviya Nagar. Zero wasted time, razor-sharp fabric detail, and every single edited file hit our inbox in 48 hours ready for launch.',
  },
  {
    id: 'rev-3',
    name: 'Dr. Niharika Joshi',
    role: 'Architect & Author',
    shootType: 'Portraits & Headshots',
    rating: 5,
    date: 'Google Review',
    quote:
      'Best portrait experience in South Delhi. Seeing the tethered frames live on screen let us dial in the exact editorial look for my book jacket and press features—natural, confident, never over-retouched.',
  },
  {
    id: 'rev-4',
    name: 'Simran Kaur',
    role: 'Brand Manager · Aura Botanicals',
    shootType: 'Product & E-commerce',
    rating: 5,
    date: 'Google Review',
    quote:
      'Our glass bottles and metallic caps used to be a nightmare to photograph cleanly. Their studio team nailed the reflections and stone plinth styling on the first shoot. Conversion rate jumped right after updating our store.',
  },
  {
    id: 'rev-5',
    name: 'Aarav Khanna',
    role: 'Actor & Theatre Artist',
    shootType: 'Portraits & Headshots',
    rating: 5,
    date: 'Google Review',
    quote:
      'Hands down the cleanest studio vibe in Malviya Nagar. Super professional setup, punctual delivery, and the monochrome headshots still get compliments from casting directors.',
  },
];

export const SHOOT_TYPE_OPTIONS = [
  'Fashion Shoot',
  'Model Portfolio',
  'Portraits & Headshots',
  'Product & E-commerce',
  'Event Coverage',
  'Studio Rental',
];

export const BUDGET_RANGE_OPTIONS = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000+',
  'Flexible / Custom Quote',
];
