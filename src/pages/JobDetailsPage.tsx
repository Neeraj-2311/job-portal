import React from 'react';
import JobDetailContent from '../components/JobDetails/JobDetailContent';
import { DummyJobDetailsData } from '../sample/sample';
import { ApplyButton } from '../components/JobDetails/ApplyButton';

const JobDetailsPage: React.FC = () => {
  const jobData = DummyJobDetailsData;

  const handleApply = () => {
    console.log('Apply button clicked for:', jobData.title);
    // Add your apply logic here
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Scrollable Content */}
      <div className="px-2 lg:px-4 pt-2 lg:pt-4 pb-24 lg:pb-28">
        <JobDetailContent jobData={jobData}/>
      </div>

      <ApplyButton handleApply={handleApply} jobData={jobData}/>

    </div>
  );
};

export default JobDetailsPage;