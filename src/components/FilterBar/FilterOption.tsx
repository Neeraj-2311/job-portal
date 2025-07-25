import React from 'react';

interface FilterOptionProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
}

export const FilterOption: React.FC<FilterOptionProps> = ({
  option,
  isSelected,
  onClick
}) => {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between transition-colors duration-150 focus-within:bg-gray-100 dark:focus-within:bg-gray-800 ${
        isSelected 
          ? 'text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20' 
          : 'text-gray-700 dark:text-gray-300'
      }`}
      role="option"
      aria-selected={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span>{option}</span>
      {isSelected && (
        <span 
          className="text-green-600 dark:text-green-400"
          aria-label="Selected"
        >
          ✓
        </span>
      )}
    </li>
  );
};