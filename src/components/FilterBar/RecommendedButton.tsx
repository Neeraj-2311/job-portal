import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const RecommendedButton: React.FC = () => {
  return (
    <button 
      className="cursor-pointer flex items-center gap-1 text-sm rounded-md px-3 py-1.5 border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Filter by recommended jobs"
    >
      Recommended
      <MdKeyboardArrowDown className="text-gray-400 dark:text-gray-500" aria-hidden="true" />
    </button>
  );
};