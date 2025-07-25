import React from 'react';
import { createPortal } from 'react-dom';
import { FilterOption } from './FilterOption';

interface FilterDropdownProps {
  isOpen: boolean;
  position: { top: number; left: number } | null;
  options: string[];
  filterKey: string;
  isOptionSelected: (option: string) => boolean;
  onToggleOption: (option: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  isOpen,
  position,
  options,
  filterKey,
  isOptionSelected,
  onToggleOption,
  dropdownRef
}) => {
  if (!isOpen || !position) return null;

  return createPortal(
    <div
      ref={dropdownRef}
      className="absolute z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-64 overflow-auto w-52"
      style={{ 
        top: position.top, 
        left: position.left, 
        position: 'absolute' 
      }}
      role="listbox"
      aria-label={`${filterKey} filter options`}
    >
      <ul className="divide-y divide-gray-100 dark:divide-gray-700">
        {options.length === 0 ? (
          <li 
            className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400"
            role="option"
            aria-disabled="true"
          >
            No options available
          </li>
        ) : (
          options.map((option) => (
            <FilterOption
              key={option}
              option={option}
              isSelected={isOptionSelected(option)}
              onClick={() => onToggleOption(option)}
            />
          ))
        )}
      </ul>
    </div>,
    document.body
  );
};