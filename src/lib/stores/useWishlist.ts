'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type WishItem = {
  productId: string;
  title: string;
  image?: string;
  price?: number;
  href: string;
};

type WishlistState = {
  items: Record<string, WishItem>;
  add: (item: WishItem) => void;
  remove: (productId: string) => void;
  has: (productId: string) => boolean;
  list: () => WishItem[];
  clear: () => void;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: {},
      add: (item) =>
        set((s) => ({ items: { ...s.items, [item.productId]: item } })),
      remove: (productId) =>
        set((s) => {
          const next = { ...s.items };
          delete next[productId];
          return { items: next };
        }),
      has: (id) => Boolean(get().items[id]),
      list: () => Object.values(get().items),
      clear: () => set({ items: {} })
    }),
    { name: 'wishlist' }
  )
);
