"use client";

import { create } from "zustand";

export type CartItem = {
  id: string; // productId + (variant?) as unique key
  productId: string;
  title: string;
  price: number;
  image?: string;
  variant?: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;

  add: (item: Omit<CartItem, "id">) => void;
  remove: (id: string) => void;
  setQty: (id: string, q: number) => void;
  clear: () => void;

  subtotal: () => number;
  count: () => number;
};

function key(item: Omit<CartItem, "id">) {
  return `${item.productId}${item.variant ? `__${item.variant}` : ""}`;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),

  add: (item) =>
    set((state) => {
      const id = key(item);
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + item.quantity } : i,
          ),
          isOpen: true,
        };
      }
      return {
        items: [...state.items, { ...item, id }],
        isOpen: true,
      };
    }),

  remove: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

  setQty: (id, q) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, q) } : i,
      ),
    })),

  clear: () => set({ items: [] }),

  subtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  count: () => get().items.reduce((n, i) => n + i.quantity, 0),
}));
