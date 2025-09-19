"use client";

export const createOptions = <T extends string>(items: readonly T[]) => {
  return items.map((item) => ({
    value: item.toUpperCase().replace(/\s+/g, "_"),
    label: item,
  }));
};
