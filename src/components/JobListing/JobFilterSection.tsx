import React from 'react';
import FilterBar from '../FilterBar';
import type { FilterState, Job } from '../../types/types';

interface JobFilterSectionProps {
  jobs: Job[];
  onFilterChange: (filters: FilterState) => void;
}

export const JobFilterSection: React.FC<JobFilterSectionProps> = ({
  jobs,
  onFilterChange
}) => {
  return (
    <div className="relative z-1">
      <div className="h-[50px] flex items-center">
        <FilterBar 
          onFilterChange={onFilterChange} 
          jobs={jobs} 
          aria-label="Filter job listings"
        />
      </div>
    </div>
  );
};