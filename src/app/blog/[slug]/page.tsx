// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { SAMPLE_POSTS } from '@/lib/data/blog';
import Image from 'next/image';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const post = SAMPLE_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} · Xonbay`,
    description: post.excerpt,
    openGraph: {
      images: post.cover_url ? [post.cover_url] : []
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = SAMPLE_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className='mx-auto max-w-3xl px-4 py-10'>
      <article>
        <header className='mb-6'>
          <div className='text-xs text-gray-500'>
            {new Date(post.published_at).toLocaleDateString()}
            {post.category ? ` • ${post.category}` : ''}
          </div>
          <h1 className='mt-1 text-3xl font-extrabold tracking-tight dark:text-white'>
            {post.title}
          </h1>
          {post.excerpt && (
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              {post.excerpt}
            </p>
          )}
        </header>

        {post.cover_url && (
          <div className='relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border dark:border-gray-800'>
            <Image
              src={post.cover_url}
              alt={post.title}
              fill
              className='object-cover'
            />
          </div>
        )}

        <div className='prose prose-sm dark:prose-invert max-w-none'>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, '<br/>')
            }}
          />
        </div>

        {post.tags?.length ? (
          <div className='mt-6 flex flex-wrap gap-2'>
            {post.tags.map((t) => (
              <span
                key={t}
                className='rounded-full border px-2 py-0.5 text-xs dark:border-gray-800'
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
      </article>
    </main>
  );
}
