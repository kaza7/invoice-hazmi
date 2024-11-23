// utils/sorting.ts

import { InventoryItem } from "@/types/InventoryItem";

export interface SortConfig {
  key: keyof InventoryItem;
  direction: "asc" | "desc";
}

export const sortItems = (
  items: InventoryItem[],
  sortConfig: SortConfig[]
): InventoryItem[] => {
  return [...items].sort((a, b) => {
    for (let sort of sortConfig) {
      const aValue = a[sort.key];
      const bValue = b[sort.key];

      if (aValue === undefined || bValue === undefined) continue;

      if (typeof aValue === "number" && typeof bValue === "number") {
        if (aValue !== bValue) {
          return sort.direction === "asc" ? aValue - bValue : bValue - aValue;
        }
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue);
        if (comparison !== 0) {
          return sort.direction === "asc" ? comparison : -comparison;
        }
      }

      if (aValue instanceof Date && bValue instanceof Date) {
        if (aValue.getTime() !== bValue.getTime()) {
          return sort.direction === "asc"
            ? aValue.getTime() - bValue.getTime()
            : bValue.getTime() - aValue.getTime();
        }
      }

      // إضافة أنواع أخرى إذا لزم الأمر
    }
    return 0;
  });
};
