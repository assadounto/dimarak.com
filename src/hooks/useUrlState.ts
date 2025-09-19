"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export type QueryState = {
  q?: string;
  cat?: string;
  min?: number;
  max?: number;
  sort?: string;
  page?: number;
};

export function useUrlState() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  // read from URL
  const read = (): QueryState => {
    const obj: QueryState = {};
    const get = (k: string) => sp.get(k) || undefined;
    obj.q = get("q");
    obj.cat = get("cat");
    obj.sort = get("sort");
    obj.page = sp.get("page") ? Number(sp.get("page")) || 1 : undefined;
    obj.min = sp.get("min") ? Number(sp.get("min")) : undefined;
    obj.max = sp.get("max") ? Number(sp.get("max")) : undefined;
    return obj;
  };

  // write to URL (and push state)
  const write = useCallback(
    (next: QueryState) => {
      const params = new URLSearchParams(sp.toString());
      const set = (k: keyof QueryState, v?: string | number) => {
        if (v === undefined || v === "" || v === null) params.delete(String(k));
        else params.set(String(k), String(v));
      };
      set("q", next.q);
      set("cat", next.cat);
      set("sort", next.sort);
      set("page", next.page);
      set("min", next.min);
      set("max", next.max);
      // always reset page to 1 when filters change unless page explicitly set
      if (!("page" in next)) params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, sp],
  );

  return { read, write };
}
