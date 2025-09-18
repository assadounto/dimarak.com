// app/blog/rss.xml/route.ts
// import { NextResponse } from 'next/server';
// import { fetchJSON, type PostListResponse } from '@/lib/tapi';

// const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
// const API = process.env.API_URL || 'http://localhost:3000/v1';

// export async function GET() {
//   // Pull first N posts (tune page_size)
//   const qs = new URLSearchParams({ page: '1', page_size: '100' });
//   const { data } = await fetchJSON<PostListResponse>(
//     `${API}/posts?${qs.toString()}`
//   );

//   const items = data
//     .filter((p) => p.published !== false)
//     .map(
//       (p) => `
//       <item>
//         <title><![CDATA[${p.title}]]></title>
//         <link>${SITE}/blog/${p.slug}</link>
//         <guid>${SITE}/blog/${p.slug}</guid>
//         <pubDate>${new Date(p.published_at).toUTCString()}</pubDate>
//         ${p.excerpt ? `<description><![CDATA[${p.excerpt}]]></description>` : ''}
//       </item>
//     `
//     )
//     .join('');

//   const xml = `<?xml version="1.0" encoding="UTF-8" ?>
//   <rss version="2.0">
//     <channel>
//       <title>Xonbay Blog</title>
//       <link>${SITE}/blog</link>
//       <description>Guides and stories for sellers and buyers.</description>
//       ${items}
//     </channel>
//   </rss>`;

//   return new NextResponse(xml, {
//     headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
//   });
// }
