import React from 'react';
import { BsAward } from 'react-icons/bs';
import { SectionHeader } from './SectionHeader';
import { SkillsList } from './SkillsList';
import { BulletList } from './BulletList';

interface QualificationSectionProps {
  requiredQualifications: {
    skills: string[];
    details: string[];
  };
  additionalQualifications: string[];
}

export const QualificationSection: React.FC<QualificationSectionProps> = ({
  requiredQualifications,
  additionalQualifications
}) => {
  return (
    <section>
      <SectionHeader 
        icon={<BsAward size={14} />}
        title="Qualification"
      />

      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Required</h4>
      <SkillsList skills={requiredQualifications.skills} className="mb-4" />
      <BulletList items={requiredQualifications.details} className="mb-6" />

      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Additional</h4>
      <BulletList items={additionalQualifications} />
    </section>
  );
};