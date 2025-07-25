import React from 'react';

interface BulletListProps {
  items: string[];
  className?: string;
}

export const BulletList: React.FC<BulletListProps> = ({ items, className = "" }) => {
  return (
    <ul className={`space-y-3 text-gray-700 dark:text-gray-300 text-sm ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  );
};