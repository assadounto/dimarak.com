// lib/types/marketplace.ts
export type Product = {
  id: string;
  title: string;
  price: number; // store raw number; format in UI
  image: string;
  href: string;
  badge?: string;
  shop?: { name: string; href: string };
  category?: string;
  rating?: number; // 0-5
};

export type Shop = {
  id: string;
  name: string;
  url: string;
  logo?: string;
  banner?: string;
  category?: string;
  stats?: { products?: number; rating?: number };
};
