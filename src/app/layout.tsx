// app/layout.tsx
import { auth } from '@/lib/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import HelpFab from '@/components/help/HelpFab';

import { AnalyticsLoader } from '@/components/common/analytics-loader';
import { CookieConsentBanner } from '@/components/common/cookie-consent';
import SiteHeader from '@/components/navigation/site-header';
import { SiteFooter } from '@/components/navigation/site-footer';

export const metadata: Metadata = {
  title: 'XONBAY: Ecommerce excellence',
  description: 'All in one customer friendly platform'
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log(session, 'session');

  return (
    <html lang="en" className={`${lato.className}`} suppressHydrationWarning>
      <body className={""}>
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <Providers session={session}>
            <Toaster />
            <div className="bg-gray-50 dark:bg-black">
              <div className="fixed left-0 right-0 top-0 z-50">
                <SiteHeader />
              </div>
              <main className="max-w-8xl mx-auto w-full pt-[60px] md:px-0">
                {children}
              </main>
            </div>
            <SiteFooter />
            <AnalyticsLoader />
            <CookieConsentBanner />
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
