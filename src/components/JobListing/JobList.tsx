import React from 'react';
import type { Job } from '../../types/types';
import JobCard from './JobCard';

interface JobListProps {
  jobs: Job[];
  bookmarkedJobs: Set<number>;
  onBookmark: (jobId: number, e: React.MouseEvent) => void;
}

export const JobList: React.FC<JobListProps> = ({
  jobs,
  bookmarkedJobs,
  onBookmark
}) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <div className="text-lg font-medium mb-2">No jobs found</div>
        <p>Try adjusting your filters to see more results</p>
      </div>
    );
  }

  return (
    <>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          isBookmarked={bookmarkedJobs.has(job.id)}
          onBookmark={onBookmark}
          aria-label={`${job.title} at ${job.company}`}
        />
      ))}
    </>
  );
};