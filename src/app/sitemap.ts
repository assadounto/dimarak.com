// app/sitemap.ts
import type { MetadataRoute } from "next";

// Example: pull dynamic slugs from a local file / DB / CMS
// Replace with your data source.
const caseStudies = [
  { slug: "logistics-vendor-onboarding", updatedAt: "2025-08-01" },
  { slug: "fintech-kyc-risk-controls", updatedAt: "2025-07-18" },
  { slug: "healthcare-telemetry-platform", updatedAt: "2025-06-30" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL ?? "https://www.dimarak.com";
  const now = new Date();

  // Static routes — add/remove to match your site
  const staticPaths: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/leaders`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Brand pages you mentioned
    {
      url: `${base}/brand/boilerplate`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/brand/logos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/brand/guidelines`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/brand/founder-bio`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // Legal
    {
      url: `${base}/legal/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic case studies
  const dynamicCases: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(c.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPaths, ...dynamicCases];
}
