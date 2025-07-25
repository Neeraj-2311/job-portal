import { useState, useMemo } from 'react';
import type { FilterState, Job } from '../types/types';

export const useJobFilters = (jobs: Job[]) => {
  const [filters, setFilters] = useState<Record<string, Set<string>>>({});

  const handleFilterChange = (newFilters: FilterState) => {
    console.log('Filters changed:', newFilters);
    setFilters(newFilters);
  };

  const applyFilters = (jobsList: Job[]): Job[] => {
    return jobsList.filter((job) => {
      return Object.entries(filters).every(([key, selectedValues]) => {
        if (selectedValues.size === 0) return true;
        
        const jobValue = job[key as keyof Job];
        const normalizedJobValue = jobValue !== null && jobValue !== undefined 
          ? String(jobValue) 
          : '';
        
        return selectedValues.has(normalizedJobValue);
      });
    });
  };

  const filteredJobs = useMemo(() => applyFilters(jobs), [jobs, filters]);

  return {
    filters,
    filteredJobs,
    handleFilterChange
  };
};