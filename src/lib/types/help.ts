// lib/help.ts
export type HelpCategory = {
  slug: string;
  title: string;
  description?: string;
  icon?: string; // optional icon path
};

export type HelpArticle = {
  slug: string;
  title: string;
  excerpt?: string;
  category: string; // category slug
  updated_at: string; // ISO
  read_minutes?: number;
  content_html: string; // (could be markdown later)
  related?: string[]; // other article slugs
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'New to the platform? Start here.'
  },
  {
    slug: 'selling',
    title: 'Selling',
    description: 'Products, listings, pricing, promotions.'
  },
  {
    slug: 'orders-shipping',
    title: 'Orders & Shipping',
    description: 'Fulfill, ship, track, and deliver.'
  },
  {
    slug: 'payments-payouts',
    title: 'Payments & Payouts',
    description: 'Accept payments and receive payouts.'
  },
  {
    slug: 'account-security',
    title: 'Account & Security',
    description: 'Login, verification, privacy, and safety.'
  },
  {
    slug: 'policies',
    title: 'Policies',
    description: 'Terms, returns, disputes and compliance.'
  }
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: 'create-your-shop',
    title: 'Create your shop in minutes',
    excerpt:
      'Open a storefront, upload a logo, and publish your first product.',
    category: 'getting-started',
    updated_at: '2025-08-28T10:00:00Z',
    read_minutes: 4,
    content_html: `
      <h2>Step 1 — Create your shop</h2>
      <p>Go to <code>/create-shop</code>, fill the basics, upload logo/banner, and save.</p>
      <h2>Step 2 — Add your first product</h2>
      <p>Navigate to Dashboard → Products → New. Add images, price, and inventory.</p>
      <h2>Step 3 — Connect payouts</h2>
      <p>Set bank or mobile money in Dashboard → Payouts.</p>
    `,
    related: ['connect-payouts', 'add-products']
  },
  {
    slug: 'add-products',
    title: 'Add and manage products',
    excerpt: 'Photos, pricing, stock, and categories.',
    category: 'selling',
    updated_at: '2025-08-26T10:00:00Z',
    read_minutes: 5,
    content_html: `
      <h2>Product essentials</h2>
      <ul>
        <li>At least 3 clear photos</li>
        <li>Concise title and benefits-forward description</li>
        <li>Accurate price and stock</li>
      </ul>
      <p>Use variants for sizes/colors where applicable.</p>
    `,
    related: ['optimize-listings', 'create-your-shop']
  },
  {
    slug: 'ship-orders',
    title: 'Ship orders like a pro',
    excerpt: 'Packaging, labels, and handoff to carrier.',
    category: 'orders-shipping',
    updated_at: '2025-08-30T10:00:00Z',
    read_minutes: 6,
    content_html: `
      <h2>Fulfillment flow</h2>
      <ol>
        <li>Mark order as processing</li>
        <li>Print label and pack safely</li>
        <li>Hand off to carrier and update tracking</li>
      </ol>
      <p>Keep buyers informed with proactive updates.</p>
    `,
    related: ['order-statuses', 'returns-refunds']
  },
  {
    slug: 'connect-payouts',
    title: 'Connect payouts (Bank or Mobile Money)',
    excerpt: 'Verify your payout details to get paid on time.',
    category: 'payments-payouts',
    updated_at: '2025-08-24T10:00:00Z',
    read_minutes: 3,
    content_html: `
      <h2>Bank transfer</h2>
      <p>Add bank name, account name, and account number. Verify micro-deposit if prompted.</p>
      <h2>Mobile Money</h2>
      <p>Choose provider and add your MoMo number. Verify via OTP.</p>
    `,
    related: ['create-your-shop']
  },
  {
    slug: 'account-safety',
    title: 'Keep your account secure',
    excerpt: '2FA, strong passwords, and safe devices.',
    category: 'account-security',
    updated_at: '2025-08-21T10:00:00Z',
    read_minutes: 3,
    content_html: `
      <h2>Best practices</h2>
      <ul>
        <li>Enable two-factor authentication</li>
        <li>Use a password manager</li>
        <li>Review devices regularly</li>
      </ul>
    `
  },
  {
    slug: 'order-statuses',
    title: 'Order statuses explained',
    excerpt: 'Pending → Paid → Processing → Shipped → Delivered.',
    category: 'orders-shipping',
    updated_at: '2025-08-22T10:00:00Z',
    read_minutes: 2,
    content_html: `
      <p>Each step updates the buyer and seller with clear expectations.</p>
    `,
    related: ['ship-orders']
  }
];

export function getCategories() {
  return HELP_CATEGORIES;
}

export function getArticles({
  q,
  category
}: {
  q?: string;
  category?: string;
}) {
  let list = [...HELP_ARTICLES];
  if (category) list = list.filter((a) => a.category === category);
  if (q) {
    const qq = q.toLowerCase();
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(qq) ||
        (a.excerpt || '').toLowerCase().includes(qq) ||
        a.content_html.toLowerCase().includes(qq)
    );
  }
  // sort by updated desc
  return list.sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
}

export function getArticleBySlug(slug: string) {
  return HELP_ARTICLES.find((a) => a.slug === slug) || null;
}

export function getCategoryBySlug(slug: string) {
  return HELP_CATEGORIES.find((c) => c.slug === slug) || null;
}
