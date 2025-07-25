import React from 'react';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { SectionHeader } from './SectionHeader';
import { BulletList } from './BulletList';
import { TagsList } from './TagsList';

interface JobDetailSectionProps {
  jobDetails: string[];
  tags: string[];
}

export const JobDetailSection: React.FC<JobDetailSectionProps> = ({ jobDetails, tags }) => {
  return (
    <section>
      <SectionHeader 
        icon={<IoBriefcaseOutline size={14} />}
        title="Job Detail"
      />
      <BulletList items={jobDetails} className="mb-4" />
      <TagsList tags={tags} className="mb-4" />
    </section>
  );
};