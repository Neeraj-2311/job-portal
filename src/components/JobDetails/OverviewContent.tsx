import React from 'react';
import JobDetailCard from '../JobListing/JobDetailCard';
import Cta from '../Cta';
import type { JobDetailsData } from '../../types/types';
import { AboutSection } from './AboutSection';
import { JobDetailSection } from './JobDetailSection';
import { QualificationSection } from './QualificationSection';

interface OverviewContentProps {
  jobData: JobDetailsData;
  isBookmarked: boolean;
  onBookmark: (e: React.MouseEvent) => void;
  onShare: (jobId: number, e: React.MouseEvent) => void;
  onMoreOptions: (jobId: number, e: React.MouseEvent) => void;
}

export const OverviewContent: React.FC<OverviewContentProps> = ({
  jobData,
  isBookmarked,
  onBookmark,
  onShare,
  onMoreOptions
}) => {
  return (
    <div className="space-y-6">
      <JobDetailCard
        jobData={jobData}
        isBookmarked={isBookmarked}
        onBookmark={onBookmark}
        onShare={onShare}
        onMoreOptions={onMoreOptions}
      />

      <Cta />

      <AboutSection 
        about={jobData.about}
        tags={jobData.tags}
      />

      <JobDetailSection 
        jobDetails={jobData.jobDetails}
        tags={jobData.tags}
      />

      <QualificationSection 
        requiredQualifications={jobData.requiredQualifications}
        additionalQualifications={jobData.additionalQualifications}
      />
    </div>
  );
};