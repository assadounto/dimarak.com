// components/help/ArticleTOC.tsx
export default function ArticleTOC({
  items
}: {
  items: { level: 2 | 3; id: string; title: string }[];
}) {
  if (!items.length) return null;
  return (
    <nav className='rounded-xl border p-3 text-sm dark:border-gray-800'>
      <div className='mb-2 text-xs font-semibold uppercase text-gray-500'>
        On this page
      </div>
      <ul className='space-y-1'>
        {items.map((it) => (
          <li key={it.id} className={it.level === 3 ? 'ml-3' : ''}>
            <a href={`#${it.id}`} className='hover:underline'>
              {it.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
