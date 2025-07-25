import React from 'react';
import type { FilterState, Job } from '../types/types';
import { useFilters } from '../hooks/useFilters';
import { useFilterDropdown } from '../hooks/useFilterDropdown';
import { RecommendedButton } from './FilterBar/RecommendedButton';
import { FILTER_FIELDS, getFilterOptions } from '../utils/filterUtils';
import { FilterButton } from './FilterBar/FilterButton';
import { FilterDropdown } from './FilterBar/FilterDropdown';

interface FilterBarProps {
  jobs: Job[];
  onFilterChange: (filters: FilterState) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ jobs, onFilterChange }) => {
  const {
    toggleFilterValue,
    clearFilter,
    getSelectedCount,
    isOptionSelected
  } = useFilters(onFilterChange);

  const {
    openFilter,
    dropdownPos,
    dropdownRef,
    openDropdown,
    getRefCallback
  } = useFilterDropdown();

  const handleClearFilter = (filterKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    clearFilter(filterKey);
  };

  const handleToggleOption = (filterKey: string, option: string) => {
    toggleFilterValue(filterKey, option);
  };

  return (
    <div className="relative w-full flex items-center gap-2 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-2 pr-4">
        <RecommendedButton />

        {FILTER_FIELDS.map(({ label, key }) => {
          const keyStr = String(key);
          const selectedCount = getSelectedCount(keyStr);
          const isOpen = openFilter === keyStr;
          
          return (
            <div key={keyStr} className="relative">
              <FilterButton
                label={label}
                selectedCount={selectedCount}
                isOpen={isOpen}
                onClick={() => openDropdown(keyStr)}
                onClearFilter={(e) => handleClearFilter(keyStr, e)}
                buttonRef={getRefCallback(keyStr)}
              />
            </div>
          );
        })}
      </div>

      <FilterDropdown
        isOpen={!!openFilter}
        position={dropdownPos}
        options={openFilter ? getFilterOptions(jobs, openFilter) : []}
        filterKey={openFilter || ''}
        isOptionSelected={(option) => openFilter ? isOptionSelected(openFilter, option) : false}
        onToggleOption={(option) => openFilter && handleToggleOption(openFilter, option)}
        dropdownRef={dropdownRef}
      />
    </div>
  );
};

export default FilterBar;