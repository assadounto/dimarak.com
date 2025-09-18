'use client';

import { FC, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ChevronRight, X } from 'lucide-react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../layout/ThemeToggle/theme-toggle';

// Types
interface Subcategory {
  name: string;
  link: string;
  items?: string[];
}

interface Category {
  name: string;
  image?: string; // optional image for left list
  subcategories?: Subcategory[];
}

interface CategoriesMenuProps {
  categories: Category[];
}

// Helpers
const cn = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(' ');
const slugify = (s: string) => s.toLowerCase().trim().replace(/\s+/g, '-');

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 }
};

const sheetVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
};

const panelVariants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 }
};

const CategoriesMenu: FC<CategoriesMenuProps> = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(
    categories[0]?.name ?? null
  );
  const [isMobile, setIsMobile] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const firstFocusable = useRef<HTMLButtonElement | null>(null);

  // Responsive check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Click outside to close (desktop)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!open || isMobile) return;
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, isMobile]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // When opening, ensure selected is valid & focus the first control (mobile)
  useEffect(() => {
    if (open) {
      if (!selected && categories.length) setSelected(categories[0].name);
      if (isMobile) firstFocusable.current?.focus();
    }
  }, [open, selected, categories, isMobile]);

  const selectedCategory = useMemo(
    () => categories.find((c) => c.name === selected) ?? null,
    [categories, selected]
  );

  const toggle = useCallback(() => {
    if (!open && !selected && categories.length)
      setSelected(categories[0].name);
    setOpen((v) => !v);
  }, [open, selected, categories]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <div className='relative' ref={rootRef}>
      {/* Top bar (compact) */}
      <div className='mx-auto rounded-md border-b bg-white/90 px-2 py-2 backdrop-blur dark:bg-gray-900/90 md:px-4'>
        <div className='flex items-center gap-3'>
          <button
            ref={firstFocusable as any}
            onClick={toggle}
            aria-expanded={open}
            aria-controls='categories-menu'
            className={cn(
              'inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold',
              'text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
            )}
          >
            <GiHamburgerMenu className='h-4 w-4' />
            <span>Categories</span>
          </button>

          <div className='scrollbar-hide flex-1 overflow-x-auto'>
            <div className='whitespace-nowrap text-xs font-medium text-gray-600 dark:text-gray-300'>
              {[
                '✨ New arrivals',
                "50% Off Women's Wear",
                'Afro Inspired Designs',
                'Limited Drops',
                'Shop Now!'
              ].map((text, i) => (
                <span key={i} className='mx-4 inline-block'>
                  {text}
                </span>
              ))}
            </div>
          </div>

          <ThemeToggle />
        </div>
      </div>

      {/* Overlay (mobile) */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            className='fixed inset-0 z-40 bg-black/40'
            initial='hidden'
            animate='show'
            exit='exit'
            variants={overlayVariants}
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Menu container */}
      <AnimatePresence>
        {open && (
          <motion.div
            id='categories-menu'
            initial='hidden'
            animate='show'
            exit='exit'
            variants={isMobile ? sheetVariants : panelVariants}
            transition={{ duration: 0.18 }}
            className={cn(
              'absolute left-0 z-50 w-full rounded-md border bg-white shadow-xl dark:bg-gray-900',
              isMobile ? 'top-[3.25rem]' : 'top-[2.7rem] md:top-[3.5rem]'
            )}
          >
            {isMobile ? (
              // MOBILE: Sheet with sticky tabs + close
              <div className='relative max-h-[80vh] overflow-hidden rounded-md'>
                <div className='sticky top-0 z-10 flex items-center justify-between border-b bg-white px-3 py-2 dark:bg-gray-900'>
                  <div className='scrollbar-hide flex gap-4 overflow-x-auto'>
                    {categories.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelected(c.name)}
                        className={cn(
                          'flex-shrink-0 pb-2 text-[0.9rem] font-medium capitalize',
                          selected === c.name
                            ? 'border-b-2 border-black text-black dark:border-white dark:text-white'
                            : 'text-gray-500 dark:text-gray-400'
                        )}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={close}
                    aria-label='Close menu'
                    className='ml-2 rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
                    <X className='h-5 w-5' />
                  </button>
                </div>

                <div className='max-h-[70vh] overflow-y-auto p-4'>
                  {selectedCategory && (
                    <div className='grid grid-cols-1 gap-5'>
                      {(selectedCategory.subcategories ?? []).map((sc) => (
                        <div key={sc.name} className='space-y-2'>
                          <Link
                            href={sc.link}
                            onClick={close}
                            className='block text-base font-semibold text-gray-900 hover:opacity-80 dark:text-gray-100'
                          >
                            {sc.name}
                          </Link>
                          {(sc.items ?? []).length > 0 && (
                            <ul className='space-y-1 text-sm text-gray-600 dark:text-gray-400'>
                              {(sc.items ?? []).map((it) => (
                                <li key={it}>
                                  <Link
                                    href={`${sc.link}/${slugify(it)}`}
                                    onClick={close}
                                    className='hover:underline'
                                  >
                                    {it}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // DESKTOP: Compact side-by-side mega menu
              <div className='flex max-h-[28rem] overflow-hidden rounded-md'>
                {/* Left: category list */}
                <ul className='w-64 border-r p-2'>
                  {categories.map((c) => {
                    const active = selected === c.name;
                    return (
                      <li
                        key={c.name}
                        className={cn(
                          'flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800',
                          active && 'bg-gray-50 dark:bg-gray-800'
                        )}
                        onClick={() => setSelected(c.name)}
                      >
                        <div className='flex items-center gap-2'>
                          <Image
                            src={c.image || '/placeholder.png'}
                            alt={c.name}
                            width={22}
                            height={22}
                            className='h-5 w-5 rounded object-cover'
                          />
                          <span className='capitalize text-gray-900 dark:text-gray-100'>
                            {c.name}
                          </span>
                        </div>
                        {(c.subcategories?.length ?? 0) > 0 && (
                          <ChevronRight
                            className={cn(
                              'h-4 w-4 text-gray-400 transition-transform',
                              active && 'rotate-90'
                            )}
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* Right: subcategories */}
                <div className='flex-1 overflow-y-auto p-4'>
                  {selectedCategory && (
                    <>
                      <h3 className='mb-3 text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300'>
                        {selectedCategory.name}
                      </h3>
                      <div className='grid grid-cols-2 gap-5'>
                        {(selectedCategory.subcategories ?? []).map((sc) => (
                          <div key={sc.name} className='space-y-2'>
                            <Link
                              href={sc.link}
                              className='block text-[0.95rem] font-semibold text-gray-900 hover:opacity-80 dark:text-gray-100'
                            >
                              {sc.name}
                            </Link>
                            {(sc.items ?? []).length > 0 && (
                              <ul className='space-y-1.5 text-xs text-gray-600 dark:text-gray-400'>
                                {(sc.items ?? []).map((it) => (
                                  <li key={it}>
                                    <Link
                                      href={`${sc.link}/${slugify(it)}`}
                                      className='hover:underline'
                                    >
                                      {it}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoriesMenu;
