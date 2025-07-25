import { useState } from 'react';

export const useJobDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (jobId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Sharing job:', jobId);
  };

  const handleMoreOptions = (jobId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('More options for job:', jobId);
  };

  return {
    activeTab,
    isBookmarked,
    handleTabChange,
    handleBookmark,
    handleShare,
    handleMoreOptions
  };
};