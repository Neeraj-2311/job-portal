import React from 'react';

interface ProfileBioProps {
  bio: string;
}

export const ProfileBio: React.FC<ProfileBioProps> = ({ bio }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {bio}
      </p>
    </div>
  );
};