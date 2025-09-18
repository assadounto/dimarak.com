'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';

export default function HeaderSearch({ initial = '' }: { initial?: string }) {
  const [q, setQ] = useState(initial);
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/search?q=${encodeURIComponent(query)}` : '/search');
  };

  return (
    <form onSubmit={onSubmit} className='hidden md:block'>
      <div className='relative'>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder='Search products…'
          className='h-10 w-[320px] rounded-md border px-3 pr-9 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-950'
          aria-label='Search products'
        />
        <button
          type='submit'
          className='absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:text-gray-900 dark:hover:text-white'
          aria-label='Search'
        >
          <Search className='h-4 w-4' />
        </button>
      </div>
    </form>
  );
}
