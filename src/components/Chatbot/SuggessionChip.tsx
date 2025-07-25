import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

interface SuggestionChipsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export const SuggestionChips: React.FC<SuggestionChipsProps> = ({ 
  suggestions, 
  onSuggestionClick 
}) => {
  return (
    <div className="p-4">
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">You can ask me about:</p>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Suggested topics">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => onSuggestionClick(item)}
            className="cursor-pointer flex items-center gap-1 text-sm px-3 py-1 rounded-md border text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
            aria-label={`Ask about ${item}`}
            role="listitem"
          >
            {item}
            <MdArrowOutward className="w-3 h-3" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
};