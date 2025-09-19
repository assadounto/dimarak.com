// lib/orders.ts
export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export type OrderItem = {
  title: string;
  image?: string;
  qty: number;
  price: number;
};

export type ShipmentEvent = {
  code: OrderStatus | "label_created" | "in_transit" | "out_for_delivery";
  label: string;
  at: string; // ISO
  note?: string;
  location?: string;
};

export type OrderTrack = {
  id: string;
  number: string;
  status: OrderStatus;
  placed_at: string; // ISO
  total: number;
  currency: "GHS" | "USD";
  shipping: {
    name: string;
    address: string;
    phone?: string;
  };
  carrier?: {
    name: string;
    tracking_number?: string;
    tracking_url?: string;
  };
  items: OrderItem[];
  events: ShipmentEvent[]; // newest last
};

const SAMPLE_ORDERS: Record<string, OrderTrack> = {
  o_1001: {
    id: "o_1001",
    number: "1001",
    status: "shipped",
    placed_at: "2025-09-01T12:20:00Z",
    total: 540,
    currency: "GHS",
    shipping: {
      name: "John Doe",
      address: "Ring Road, Accra",
      phone: "+233 55 000 0000",
    },
    carrier: {
      name: "DHL",
      tracking_number: "DHL123456789",
      tracking_url:
        "https://www.dhl.com/gh-en/home/tracking.html?tracking-id=DHL123456789",
    },
    items: [
      {
        title: "Handwoven Kente Scarf",
        image: "/images/demo/product-1.jpg",
        qty: 1,
        price: 120,
      },
      {
        title: "Beaded Bracelet",
        image: "/images/demo/product-2.jpg",
        qty: 2,
        price: 60,
      },
    ],
    events: [
      { code: "pending", label: "Order placed", at: "2025-09-01T12:20:00Z" },
      { code: "paid", label: "Payment confirmed", at: "2025-09-01T12:21:00Z" },
      {
        code: "processing",
        label: "Seller is preparing your order",
        at: "2025-09-02T09:00:00Z",
      },
      {
        code: "label_created",
        label: "Shipping label created",
        at: "2025-09-03T10:30:00Z",
      },
      {
        code: "shipped",
        label: "Package handed to carrier",
        at: "2025-09-03T18:10:00Z",
        location: "Accra Hub",
      },
      { code: "in_transit", label: "In transit", at: "2025-09-04T08:25:00Z" },
    ],
  },
};

export async function getOrderTrack(id: string): Promise<OrderTrack | null> {
  // Replace with your API call:
  // const res = await fetch(`${process.env.API_URL}/v1/orders/${id}/track`, { cache: 'no-store' });
  // if (!res.ok) return null;
  // return res.json();
  return SAMPLE_ORDERS[id] || null;
}

export function statusToStep(s: OrderStatus): number {
  const order = [
    "pending",
    "paid",
    "processing",
    "shipped",
    "delivered",
  ] as const;
  const i = order.indexOf(s as any);
  return i === -1 ? 0 : i;
}

export const ORDER_STEPS: { key: OrderStatus; label: string }[] = [
  { key: "pending", label: "Order placed" },
  { key: "paid", label: "Payment confirmed" },
  { key: "processing", label: "Processing" },
  { key: "shipped", label: "Shipped" },
  { key: "delivered", label: "Delivered" },
];
