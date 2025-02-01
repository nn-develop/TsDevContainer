import { useState, useCallback, useMemo } from "react";

interface Item {
  id: number;
  name: string;
}

// items by měli přijít jako props, tím pádem by se odstranil useState

const SortableList = () => {
  const [items] = useState<Item[]>([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [items, sortOrder]);

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }, []);

  // setSortOrder by mohl mít jiné hodnoty než prevOrder
  // důležité je používat předešlou hodnotu ve volání pro zamezení řetězení volání
  // nesmí se používat jako klíč index, protože by se to nepřekreslilo

  return (
    <div>
      <button onClick={toggleSortOrder}>
        Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
      </button>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// sortedItems.map((item, index) => {}) - špatně a nepoužívat
// (<li key={index} ... />) - špatně a nepoužívat
export default SortableList;
