import type { Job } from '../types/types';

export interface FilterField {
  label: string;
  key: keyof Job;
}

export const FILTER_FIELDS: FilterField[] = [
  { label: 'Experience level', key: 'experience' },
  { label: 'Company', key: 'company' },
  { label: 'Internship', key: 'internship' },
  { label: 'On-site', key: 'remote' },
  { label: 'Industry', key: 'industry' }
];

export const getFilterOptions = (jobs: Job[], key: string): string[] => {
  const values = new Set<string>();
  
  jobs.forEach(job => {
    const value = job[key as keyof Job];
    if (value !== null && value !== undefined && value !== '') {
      values.add(String(value));
    }
  });
  
  return Array.from(values).sort();
};