import { useMemo } from "react";

interface Item {
  name: string;
}

export const useSortedItems = (items: Item[], sortOrder: "asc" | "desc") => {
  return useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [items, sortOrder]);
};
