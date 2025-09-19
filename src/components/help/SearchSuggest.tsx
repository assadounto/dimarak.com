// components/help/SearchSuggest.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { HELP_ARTICLES } from "@/lib/types/help";

export default function SearchSuggest() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return [];
    return HELP_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(qq) ||
        (a.excerpt || "").toLowerCase().includes(qq) ||
        a.content_html.toLowerCase().includes(qq),
    ).slice(0, 6);
  }, [q]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative w-full max-w-lg" ref={boxRef}>
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        placeholder="Search help articles…"
        className="h-10 w-full rounded-md border px-3 text-sm dark:border-gray-800 dark:bg-gray-950"
      />
      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full overflow-hidden rounded-md border bg-white text-sm shadow-lg dark:border-gray-800 dark:bg-gray-900">
          {results.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/help/${a.slug}`}
                className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                <div className="font-medium">{a.title}</div>
                {a.excerpt && (
                  <div className="text-xs text-gray-500">{a.excerpt}</div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
