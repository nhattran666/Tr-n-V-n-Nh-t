export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  isTopSale?: boolean;
  carbonFootprint: {
    total: number; // in kg CO2e
    breakdown: {
      manufacturing: number;
      transport: number;
      packaging: number;
      endOfLife: number;
    };
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Page = 'home' | 'product' | 'cart' | 'ecohub';

export interface EcoPost {
  id: number;
  authorName: string;
  authorHandle: string;
  authorAvatarUrl: string;
  content: string;
  imageUrl?: string;
  timestamp: string;
  likes: number;
  comments: number;
  reposts: number;
}
