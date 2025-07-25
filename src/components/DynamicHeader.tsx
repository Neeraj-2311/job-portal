import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

interface Tab {
  label: string;
  value: string;
  count?: number;
}

interface JobPageHeaderProps {
  className?: string;
  title: string;
  helpText?: string;
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

const DynamicPageHeader: React.FC<JobPageHeaderProps> = ({
  className = '',
  title = 'Menu',
  helpText = 'More info about this section',
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <header className={`w-full ${className}`} role="banner" aria-label={`${title} section header`}>
      <div className="flex no-wrap items-center gap-4 px-4 sm:px-6 h-[50px] lg:h-[74px]">
        {/* Title + Help Icon */}
        <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          <span>{title}</span>
          <button
            aria-label={helpText}
            title={helpText}
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FiHelpCircle className="text-base" />
          </button>
          <span className="text-gray-400 dark:text-gray-500">›</span>
        </div>

        {/* Tabs */}
        <nav className="flex items-center gap-2 overflow-x-auto scrollbar-hide" aria-label="Job section filters">
          {tabs?.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => onTabChange ? onTabChange(tab.value) : undefined}
                className={`flex items-center gap-2 px-4 py-1 rounded-full font-medium text-sm transition-colors whitespace-nowrap
                  ${isActive
                    ? 'bg-green-900 text-white dark:bg-green-700 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Tab: ${tab.label}${tab.count ? ` (${tab.count})` : ''}`}
              >
                <span>{tab.label}</span>
                {typeof tab.count === 'number' && (
                  <span
                    className={`min-w-[20px] h-[20px] px-1.5 text-xs rounded-full font-semibold flex items-center justify-center 
                      ${isActive
                        ? 'bg-white text-green-900 dark:bg-white dark:text-green-800'
                        : 'bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
                      }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default DynamicPageHeader;