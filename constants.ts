import { Product, EcoPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 7,
    name: 'All-Weather Recycled Backpack',
    price: 75.00,
    description: 'A durable, waterproof backpack made from 30 recycled plastic bottles. Perfect for commuting or hiking.',
    imageUrl: 'https://picsum.photos/seed/backpack/600/600',
    isTopSale: true,
    carbonFootprint: {
      total: 6.5,
      breakdown: { manufacturing: 4.5, transport: 0.8, packaging: 0.4, endOfLife: 0.8 },
    },
  },
  {
    id: 1,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    description: 'Made from 100% GOTS certified organic cotton. Soft, breathable, and kind to your skin and the planet.',
    imageUrl: 'https://picsum.photos/seed/tshirt/600/600',
    carbonFootprint: {
      total: 2.7,
      breakdown: { manufacturing: 1.5, transport: 0.5, packaging: 0.2, endOfLife: 0.5 },
    },
  },
  {
    id: 2,
    name: 'Recycled Glass Tumbler Set',
    price: 32.50,
    description: 'Set of four elegant drinking glasses made from 100% recycled post-consumer glass. Each piece is unique.',
    imageUrl: 'https://picsum.photos/seed/glass/600/600',
    carbonFootprint: {
      total: 3.8,
      breakdown: { manufacturing: 2.8, transport: 0.4, packaging: 0.3, endOfLife: 0.3 },
    },
  },
  {
    id: 3,
    name: 'Bamboo Toothbrush Family Pack',
    price: 12.99,
    description: 'A set of four biodegradable bamboo toothbrushes with different colored bristles. A perfect plastic-free alternative.',
    imageUrl: 'https://picsum.photos/seed/toothbrush/600/600',
    carbonFootprint: {
      total: 0.9,
      breakdown: { manufacturing: 0.4, transport: 0.2, packaging: 0.1, endOfLife: 0.2 },
    },
  },
  {
    id: 4,
    name: 'Portable Solar-Powered Charger',
    price: 49.95,
    description: 'Charge your devices on the go with this compact and efficient 10,000mAh solar-powered charger.',
    imageUrl: 'https://picsum.photos/seed/charger/600/600',
    carbonFootprint: {
      total: 5.1,
      breakdown: { manufacturing: 4.0, transport: 0.6, packaging: 0.3, endOfLife: 0.2 },
    },
  },
   {
    id: 5,
    name: 'Reusable Beeswax Wraps (Set of 3)',
    price: 18.75,
    description: 'A sustainable alternative to plastic wrap for food storage. Includes small, medium, and large wraps.',
    imageUrl: 'https://picsum.photos/seed/wraps/600/600',
    carbonFootprint: {
      total: 0.8,
      breakdown: { manufacturing: 0.4, transport: 0.2, packaging: 0.1, endOfLife: 0.1 },
    },
  },
  {
    id: 6,
    name: 'Stainless Steel Water Bottle',
    price: 24.95,
    description: 'Durable, 24oz double-walled insulated water bottle to keep your drinks hot or cold for hours.',
    imageUrl: 'https://picsum.photos/seed/bottle/600/600',
    carbonFootprint: {
      total: 4.2,
      breakdown: { manufacturing: 3.0, transport: 0.5, packaging: 0.2, endOfLife: 0.5 },
    },
  },
   {
    id: 8,
    name: 'Compostable Phone Case',
    price: 22.00,
    description: 'A sleek and protective phone case made from plant-based materials. Fully compostable after use.',
    imageUrl: 'https://picsum.photos/seed/phonecase/600/600',
    carbonFootprint: {
      total: 1.1,
      breakdown: { manufacturing: 0.7, transport: 0.2, packaging: 0.1, endOfLife: 0.1 },
    },
  },
];

export const ECO_POSTS: EcoPost[] = [
  {
    id: 1,
    authorName: 'Dr. Anya Sharma',
    authorHandle: '@AnyaSci',
    authorAvatarUrl: 'https://picsum.photos/seed/speaker1/200/200',
    content: "Did you know that fast fashion is a major contributor to global carbon emissions? Choosing durable, sustainably sourced clothing, like organic cotton, can make a huge difference. It's not just about buying eco-friendly, it's about buying less and making it last. #SustainableFashion",
    timestamp: '2h ago',
    likes: 120,
    comments: 15,
    reposts: 32,
  },
  {
    id: 2,
    authorName: 'GreenTech Inc.',
    authorHandle: '@GreenTechOfficial',
    authorAvatarUrl: 'https://picsum.photos/seed/speaker2/200/200',
    content: "We're thrilled to announce our new portable solar charger is now made with 50% recycled plastics! Innovation in sustainability is at the core of what we do. Every step towards a circular economy matters.",
    imageUrl: 'https://picsum.photos/seed/charger/800/400',
    timestamp: '5h ago',
    likes: 450,
    comments: 42,
    reposts: 110,
  },
  {
    id: 3,
    authorName: 'Leo Chen',
    authorHandle: '@CircularLeo',
    authorAvatarUrl: 'https://picsum.photos/seed/speaker4/200/200',
    content: "A simple tip for reducing your household waste: start a compost bin! It's amazing how much you can divert from landfills. Fruit and veggie scraps, coffee grounds, and eggshells can all become nutrient-rich soil for your garden. What are your favorite composting tips?",
    timestamp: '1d ago',
    likes: 280,
    comments: 68,
    reposts: 75,
  },
    {
    id: 4,
    authorName: 'Maria Rodriguez',
    authorHandle: '@EthicalSupply',
    authorAvatarUrl: 'https://picsum.photos/seed/speaker3/200/200',
    content: "When we talk about a product's 'footprint', we must remember it includes more than just carbon. It's about water usage, fair labor practices, and community impact. True sustainability is intersectional. Look for certifications like Fair Trade alongside carbon labels.",
    timestamp: '2d ago',
    likes: 315,
    comments: 33,
    reposts: 98,
  }
];
