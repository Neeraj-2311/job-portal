import React from 'react';
import { JobListHeader } from '../components/JobListing/JobListHeader';
import { ScrollToTopButton } from '../components/JobListing/ScrollToTopButton';
import { useBookmarks } from '../hooks/useBookmarks';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useJobTabs } from '../hooks/useJobTabs';
import { DummyJobs } from '../sample/sample';
import { ChatbotPanel } from '../components/JobListing/ChatbotPanel';
import { JobListingContent } from '../components/JobListing/JobListingContent';
import { useJobFilters } from '../hooks/useJobFilters';

const jobsData = DummyJobs;

const JobListingPage: React.FC = () => {
  const { filteredJobs, handleFilterChange } = useJobFilters(jobsData);
  const { bookmarkedJobs, toggleBookmark } = useBookmarks();
  const { isVisible, scrollToTop } = useScrollToTop();
  const { activeTab, handleTabChange } = useJobTabs('applied');

  return (
    <div className="min-h-screen relative">
      <JobListHeader
        activeTab={activeTab}
        onTabChange={handleTabChange}
        bookmarkedCount={bookmarkedJobs.size}
        appliedCount={4}
      />

      <JobListingContent
        jobs={jobsData}
        filteredJobs={filteredJobs}
        bookmarkedJobs={bookmarkedJobs}
        onFilterChange={handleFilterChange}
        onBookmark={toggleBookmark}
      />

      <ChatbotPanel />
      
      <ScrollToTopButton
        isVisible={isVisible}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default JobListingPage;