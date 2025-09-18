// app/sitemap.ts
import type { MetadataRoute } from 'next';

/**
 * IMPORTANT: set your canonical site URL (no trailing slash).
 * e.g. NEXT_PUBLIC_SITE_URL=https://www.xonbay.com
 */
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * Replace these with real API fetches.
 * Keep them server-side only (no client imports here).
 */
async function fetchProducts(): Promise<
  { slug: string; updatedAt?: string }[]
> {
  // const res = await fetch(`${process.env.API_URL}/v1/products?limit=5000`, { cache: 'no-store' });
  // return await res.json();
  return [
    { slug: 'kente-scarf', updatedAt: '2025-08-15' },
    { slug: 'batik-tote', updatedAt: '2025-08-08' }
    // ...
  ];
}

async function fetchShops(): Promise<{ slug: string; updatedAt?: string }[]> {
  // const res = await fetch(`${process.env.API_URL}/v1/shops?limit=5000`, { next: { revalidate: 3600 } });
  // return await res.json();
  return [
    { slug: 'kente-co', updatedAt: '2025-08-25' },
    { slug: 'afro-artworks', updatedAt: '2025-08-20' }
    // ...
  ];
}

async function fetchCategories(): Promise<
  { name: string; updatedAt?: string }[]
> {
  // const res = await fetch(`${process.env.API_URL}/v1/categories`, { next: { revalidate: 86400 } });
  // return await res.json();
  return [
    { name: 'Fashion', updatedAt: '2025-08-01' },
    { name: 'Electronics', updatedAt: '2025-07-28' },
    { name: 'Home%20%26%20Arts', updatedAt: '2025-07-28' } // if your route uses encoded names
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1) Static routes (marketing/legal/etc.)
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/marketplace',
    '/pricing',
    '/contact',
    '/about',
    '/privacy',
    '/terms',
    '/cookies'
  ].map((path) => ({
    url: `${SITE}${path ? path : ''}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.6
  }));

  // 2) Dynamic — products
  const products = await fetchProducts();
  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE}/product/${encodeURIComponent(p.slug)}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
    changeFrequency: 'daily',
    priority: 0.8
  }));

  // 3) Dynamic — shops
  const shops = await fetchShops();
  const shopRoutes: MetadataRoute.Sitemap = shops.map((s) => ({
    url: `${SITE}/shop/${encodeURIComponent(s.slug)}`,
    lastModified: s.updatedAt ? new Date(s.updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  // 4) Dynamic — categories
  const cats = await fetchCategories();
  const categoryRoutes: MetadataRoute.Sitemap = cats.map((c) => ({
    url: `${SITE}/category/${c.name}`, // if your category route expects encoded name already, don’t double-encode
    lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  // Combine (stay under 50k URLs in a single sitemap)
  return [...staticRoutes, ...productRoutes, ...shopRoutes, ...categoryRoutes];
}
