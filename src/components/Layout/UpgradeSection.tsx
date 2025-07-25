import React from 'react';

interface UpgradeSectionProps {
  onUpgrade?: () => void;
}

export const UpgradeSection: React.FC<UpgradeSectionProps> = ({ onUpgrade }) => {
  const handleUpgrade = () => {
    console.log('Upgrade clicked');
    onUpgrade?.();
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3 mb-3" aria-label="Upgrade to premium section">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs" aria-hidden="true">💎</span>
        </div>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
          Try all benefits with Full Access!
        </span>
      </div>
      <button 
        onClick={handleUpgrade}
        className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium py-2 px-3 rounded-md hover:opacity-90 transition-opacity duration-200"
        aria-label="Upgrade to premium account"
      >
        Upgrade
      </button>
    </div>
  );
};