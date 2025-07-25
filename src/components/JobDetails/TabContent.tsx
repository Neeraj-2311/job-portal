import React from 'react';
import type { JobDetailsData } from '../../types/types';
import { OverviewContent } from './OverviewContent';
import { CompanyInsightContent } from './CompanyInsightsContent';
import { CompanyDetailContent } from './CompanyDetailContent';

interface TabContentProps {
  activeTab: number;
  jobData: JobDetailsData;
  isBookmarked: boolean;
  onBookmark: (e: React.MouseEvent) => void;
  onShare: (jobId: number, e: React.MouseEvent) => void;
  onMoreOptions: (jobId: number, e: React.MouseEvent) => void;
}

export const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  jobData,
  isBookmarked,
  onBookmark,
  onShare,
  onMoreOptions
}) => {
  return (
    <div className="mt-4 lg:mt-6 overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeTab * 100}%)` }}
      >
        <div 
          className="w-full flex-shrink-0 px-4"
          role="tabpanel"
          id="tab-panel-0"
          aria-labelledby="tab-0"
          aria-hidden={activeTab !== 0}
        >
          <OverviewContent
            jobData={jobData}
            isBookmarked={isBookmarked}
            onBookmark={onBookmark}
            onShare={onShare}
            onMoreOptions={onMoreOptions}
          />
        </div>
        <div 
          className="w-full flex-shrink-0 px-4"
          role="tabpanel"
          id="tab-panel-1"
          aria-labelledby="tab-1"
          aria-hidden={activeTab !== 1}
        >
          <CompanyDetailContent />
        </div>
        <div 
          className="w-full flex-shrink-0 px-4"
          role="tabpanel"
          id="tab-panel-2"
          aria-labelledby="tab-2"
          aria-hidden={activeTab !== 2}
        >
          <CompanyInsightContent />
        </div>
      </div>
    </div>
  );
};