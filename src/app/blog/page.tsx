// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { SAMPLE_POSTS } from '@/lib/data/blog';

export const metadata = {
  title: 'Blog · Xonbay',
  description: 'Guides and stories for sellers and buyers.'
};

export default function BlogIndex() {
  const posts = SAMPLE_POSTS.filter((p) => p.published);

  return (
    <main className='mx-auto max-w-7xl px-4 py-10'>
      <h1 className='text-2xl font-extrabold tracking-tight dark:text-white'>
        Blog
      </h1>
      <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
        Guides, updates, and marketplace insights.
      </p>

      <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map((meta) => (
          <article
            key={meta.slug}
            className='overflow-hidden rounded-2xl border dark:border-gray-800'
          >
            {meta.cover_url && (
              <div className='relative h-44 w-full'>
                <Image
                  src={meta.cover_url}
                  alt={meta.title}
                  fill
                  className='object-cover'
                />
              </div>
            )}
            <div className='p-4'>
              <div className='text-xs text-gray-500'>
                {new Date(meta.published_at).toLocaleDateString()}
                {meta.category ? ` • ${meta.category}` : ''}
              </div>
              <h2 className='mt-1 line-clamp-2 text-base font-semibold dark:text-white'>
                <Link href={`/blog/${meta.slug}`}>{meta.title}</Link>
              </h2>
              {meta.excerpt && (
                <p className='mt-1 line-clamp-3 text-sm text-gray-600 dark:text-gray-400'>
                  {meta.excerpt}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
