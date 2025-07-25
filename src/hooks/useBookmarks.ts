import { useState } from 'react';

export const useBookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<number>>(new Set());

  const toggleBookmark = (jobId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  const isBookmarked = (jobId: number) => bookmarkedJobs.has(jobId);

  return {
    bookmarkedJobs,
    toggleBookmark,
    isBookmarked
  };
};