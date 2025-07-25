import { useState } from 'react';

export const useJobTabs = (initialTab: string = 'applied') => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tab: string) => {
    console.log('Switched to tab:', tab);
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabChange
  };
};