import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => {
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
      <span className="mr-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 shadow-sm">
        {icon}
      </span>
      {title}
    </h3>
  );
};