import React from 'react';
import { LuTarget } from 'react-icons/lu';
import { SectionHeader } from './SectionHeader';
import { TagsList } from './TagsList';

interface AboutSectionProps {
  about: string;
  tags: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about, tags }) => {
  return (
    <section>
      <SectionHeader 
        icon={<LuTarget size={14} />}
        title="About"
      />
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {about}
        <span 
          className="text-blue-600 dark:text-blue-400 cursor-pointer ml-1 hover:underline focus:outline-none rounded" 
          role="button"
          tabIndex={0}
          aria-label="Read more about the company"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              console.log('Read more clicked');
            }
          }}
          onClick={() => console.log('Read more clicked')}
        >
          Read More
        </span>
      </p>
      <TagsList tags={tags} className="mb-4" />
    </section>
  );
};