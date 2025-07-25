import React from 'react';

interface SkillsListProps {
  skills: string[];
  className?: string;
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills, className = "" }) => {
  const iconMap: { [key: string]: string } = {
    'BS/BA Degree or higher': '🎓',
    '1+ Years of Work Experience': '📅',
    '1+ years of SQL': '💻',
    'A+ in PowerPoint': '📊',
    'A+ in MS Excel': '📈',
    'A+ in MS Word': '📝',
    'Excellent Analytical Skills': '📊',
    'Excellent Problem Solving Skills': '🧩',
    'Effective Communication': '💬',
    'Seamlessly Collaborative': '🤝'
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-sm"
        >
          <span role="img" aria-label="skill icon">{iconMap[skill] || '🔧'}</span>
          <span className="font-medium">{skill}</span>
        </div>
      ))}
    </div>
  );
};