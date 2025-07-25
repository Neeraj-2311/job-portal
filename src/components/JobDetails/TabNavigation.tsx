import React from 'react';

interface TabNavigationProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="border-b w-fit border-gray-200 dark:border-gray-600 ml-4">
      <div className="flex relative" role="tablist" aria-label="Job details sections">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
            className={`cursor-pointer px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-sm font-medium transition-colors duration-200 relative ${
              activeTab === index
                ? 'text-green-600 bg-green-50 dark:bg-green-900 dark:text-green-300'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
            aria-label={`Switch to ${tab} tab`}
          >
            {tab}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};