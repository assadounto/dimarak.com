// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';

const { auth } = NextAuth(authConfig);

export default auth((req: NextRequest) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const host = nextUrl.hostname; // Netlify passes the real host here (incl. subdomain)

  // --- 0) Skip internals/auth to avoid breaking NextAuth & assets ---
  const isSkipped =
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/.netlify') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.webmanifest';
  if (isSkipped) return NextResponse.next();

  // --- 1) Subdomain → path rewrite (no redirect) ---
  // e.g. kent.xonbay.com  ->  /tenant/kent
  const apex = 'xonbay.com';
  const isApex = host === apex || host === `www.${apex}`;
  const isSubOfApex = host.endsWith(`.${apex}`);

  if (!isApex && isSubOfApex) {
    const sub = host.slice(0, -`.${apex}`.length).split('.')[0]; // first label only
    if (sub && sub !== 'www' && !pathname.startsWith(`/tenant/${sub}`)) {
      const url = nextUrl.clone();
      url.pathname = `/tenant/${sub}${pathname === '/' ? '' : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // --- 2) Protect /dashboard & /account on apex (adjust if you want subdomains protected too) ---
  const needsAuth =
    pathname.startsWith('/dashboard') || pathname.startsWith('/account');

  if (isApex && needsAuth && !req.auth) {
    const url = nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('next', pathname + nextUrl.search);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

// Make middleware run for “everything” except static/internal we skip above.
// Keeping this broad ensures subdomain requests go through middleware.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|api/auth).*)'
  ]
};
