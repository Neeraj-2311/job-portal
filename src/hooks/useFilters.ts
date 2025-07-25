import { useState } from 'react';
import type { FilterState } from '../types/types';

export const useFilters = (onFilterChange: (filters: FilterState) => void) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({});

  const toggleFilterValue = (filterKey: string, option: string) => {
    setSelectedFilters((prev: FilterState) => {
      const currentSet = prev[filterKey] || new Set<string>();
      const updated = new Set<string>(currentSet);
      
      if (updated.has(option)) {
        updated.delete(option);
      } else {
        updated.add(option);
      }
      
      const newFilters: FilterState = { ...prev, [filterKey]: updated };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilter = (filterKey: string) => {
    setSelectedFilters((prev: FilterState) => {
      const newFilters: FilterState = { ...prev, [filterKey]: new Set<string>() };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const getSelectedCount = (filterKey: string): number => {
    return selectedFilters[filterKey]?.size || 0;
  };

  const isOptionSelected = (filterKey: string, option: string): boolean => {
    return selectedFilters[filterKey]?.has(option) || false;
  };

  return {
    selectedFilters,
    toggleFilterValue,
    clearFilter,
    getSelectedCount,
    isOptionSelected
  };
};