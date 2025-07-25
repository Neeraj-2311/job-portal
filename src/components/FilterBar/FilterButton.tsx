import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface FilterButtonProps {
  label: string;
  selectedCount: number;
  isOpen: boolean;
  onClick: () => void;
  onClearFilter: (e: React.MouseEvent) => void;
  buttonRef: React.RefCallback<HTMLButtonElement>;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  selectedCount,
  isOpen,
  onClick,
  onClearFilter,
  buttonRef
}) => {
  const hasSelections = selectedCount > 0;

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`cursor-pointer flex items-center gap-1 text-sm rounded-full px-3 py-1.5 border transition-colors duration-200 whitespace-nowrap ${
        hasSelections
          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
      aria-label={`Filter by ${label}${hasSelections ? ` (${selectedCount} selected)` : ''}`}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      {label}
      {hasSelections && (
        <>
          <span className="text-xs px-1.5 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300">
            {selectedCount}
          </span>
          <button
            onClick={onClearFilter}
            className="cursor-pointer ml-1 text-green-600 hover:text-green-800 dark:hover:text-green-400 text-xs p-0.5 rounded-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-green-500"
            aria-label={`Clear ${label} filters`}
            tabIndex={-1}
          >
            ×
          </button>
        </>
      )}
      <MdKeyboardArrowDown 
        className={`text-gray-400 dark:text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        aria-hidden="true"
      />
    </button>
  );
};