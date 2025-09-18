// components/help/HelpFab.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HelpFab() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  // Hide on help pages themselves
  useEffect(() => {
    setHidden(pathname?.startsWith('/help') ?? false);
  }, [pathname]);

  if (hidden) return null;

  return (
    <div className='fixed bottom-5 right-5 z-[60]'>
      <Link
        href='/help'
        className='shadow-lg hover:shadow-xl focus-visible:outline-none'
        aria-label='Open Help Center'
      >
        <div className='rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500'>
          Help
        </div>
      </Link>
    </div>
  );
}
