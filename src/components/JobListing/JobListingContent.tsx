import React from 'react';
import type { FilterState, Job } from '../../types/types';
import { JobFilterSection } from './JobFilterSection';
import { JobList } from './JobList';

interface JobListingContentProps {
  jobs: Job[];
  filteredJobs: Job[];
  bookmarkedJobs: Set<number>;
  onFilterChange: (filters: FilterState) => void;
  onBookmark: (jobId: number, e: React.MouseEvent) => void;
}

export const JobListingContent: React.FC<JobListingContentProps> = ({
  jobs,
  filteredJobs,
  bookmarkedJobs,
  onFilterChange,
  onBookmark
}) => {
  return (
    <div className="overflow-y-auto pt-[50px] lg:pt-[74px] lg:max-w-[-webkit-fill-available] lg:pr-[360px]">
      <div className="space-y-4 rounded rounded-t-2xl bg-gray-100 dark:bg-gray-700/40 px-4 lg:px-6 pt-4 lg:pt-6 pb-10 relative">
        <JobFilterSection 
          jobs={jobs}
          onFilterChange={onFilterChange}
        />
        
        <JobList
          jobs={filteredJobs}
          bookmarkedJobs={bookmarkedJobs}
          onBookmark={onBookmark}
        />
      </div>
    </div>
  );
};