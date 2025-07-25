import React from 'react';
import JobPageHeader from '../DynamicHeader';

interface JobListHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  bookmarkedCount?: number;
  appliedCount?: number;
}

export const JobListHeader: React.FC<JobListHeaderProps> = ({
  activeTab,
  onTabChange,
  bookmarkedCount = 2,
  appliedCount = 4
}) => {
  return (
    <div className="fixed top-[64px] lg:top-0 left-0 lg:left-[256px] bg-white dark:bg-gray-800 right-0 z-10">
      <JobPageHeader
        title="Menu"
        helpText="Explore your job tabs"
        tabs={[
          { label: 'Recommended', value: 'recommended' },
          { label: 'Saved', value: 'saved', count: bookmarkedCount },
          { label: 'Applied', value: 'applied', count: appliedCount },
        ]}
        activeTab={activeTab}
        onTabChange={onTabChange}
        aria-label="Job navigation tabs"
      />
    </div>
  );
};