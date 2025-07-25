import React from 'react';
import { useJobDetails } from '../../hooks/useJobDetails';
import { TabNavigation } from './TabNavigation';
import { TabContent } from './TabContent';
import type { JobDetailsData } from '../../types/types';


export interface TabConfig {
  label: string;
  value: string;
}

interface props {
  jobData: JobDetailsData
}

const DynamicJobDetailsCard: React.FC<props> = ({jobData}) => {
  const {
    activeTab,
    isBookmarked,
    handleTabChange,
    handleBookmark,
    handleShare,
    handleMoreOptions,
  } = useJobDetails();

  const tabs = ['Overview', 'Company Detail', 'Company Insight'];

  return (
    <div>
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <TabContent
        activeTab={activeTab}
        jobData={jobData}
        isBookmarked={isBookmarked}
        onBookmark={handleBookmark}
        onShare={handleShare}
        onMoreOptions={handleMoreOptions}
      />
    </div>
  );
};

export default DynamicJobDetailsCard;