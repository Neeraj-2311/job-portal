import React from 'react';

interface TagsListProps {
  tags: string[];
  className?: string;
}

export const TagsList: React.FC<TagsListProps> = ({ tags, className = "" }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};