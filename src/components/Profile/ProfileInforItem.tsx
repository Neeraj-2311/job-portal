import React from 'react';

interface ProfileInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center text-gray-600 dark:text-gray-400" aria-label={label}>
      <div className="w-4 h-4 mr-2 flex-shrink-0">
        {icon}
      </div>
      {value}
    </div>
  );
};