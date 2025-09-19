// lib/notifications.ts
export type Notification = {
  id: string;
  kind: "order" | "shipping" | "review" | "payout" | "system";
  title: string;
  body?: string;
  href?: string;
  at: string; // ISO
  unread?: boolean;
};

export const NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    kind: "order",
    title: "Order #1001 confirmed",
    body: "Paid • ₵540",
    href: "/orders/1001/track",
    at: "2025-09-05T14:22:00Z",
    unread: true,
  },
  {
    id: "n2",
    kind: "shipping",
    title: "Order #1001 shipped",
    body: "DHL • In transit",
    href: "/orders/1001/track",
    at: "2025-09-05T18:10:00Z",
  },
  {
    id: "n3",
    kind: "review",
    title: "New review on your product",
    body: "5★ 'Great quality!'",
    href: "/account/reviews",
    at: "2025-09-04T10:20:00Z",
  },
];

export async function listNotifications(): Promise<Notification[]> {
  return NOTIFICATIONS.sort((a, b) => (a.at < b.at ? 1 : -1));
}
