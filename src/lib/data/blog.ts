// lib/blog.ts
export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  cover_url?: string;
  author: string;
  category?: string;
  tags?: string[];
  published: boolean;
  published_at: string;
  content: string; // simple markdown or plain text
};

export const SAMPLE_POSTS: Post[] = [
  {
    id: 1,
    slug: 'launch-your-shop-10-mins',
    title: 'How to launch your shop in 10 minutes',
    excerpt: 'A fast checklist to go from zero to first sale.',
    cover_url: '/images/blog/launch.jpg',
    author: 'Team Xonbay',
    category: 'Guides',
    tags: ['onboarding', 'growth'],
    published: true,
    published_at: '2025-08-25T10:00:00Z',
    content: `# Launching your shop

It takes just **10 minutes** to open a shop. Steps:

1. Sign up
2. Add your first product
3. Set your payout details
4. Go live 🚀`
  },
  {
    id: 2,
    slug: 'why-sellers-love-xonbay',
    title: 'Why sellers love Xonbay',
    excerpt: 'Hear from early adopters on how they grew faster.',
    cover_url: '/images/blog/sellers.jpg',
    author: 'Ama Boateng',
    category: 'Stories',
    tags: ['sellers', 'community'],
    published: true,
    published_at: '2025-08-22T09:00:00Z',
    content: `# Seller Stories

Our community is thriving because:

- Easy onboarding
- Secure payments
- Reliable buyers`
  }
];
