import React from 'react';
import type { UserProfile } from '../../types/types';
import { ProfileHeader } from './ProfileHeader';
import LinkedinProfileCard from './LinkedinProfileCard';
import { ProfileBio } from './ProfileBio';
import { SkillsList } from './SkillsList';

interface ProfileDisplayProps {
  profile: UserProfile;
  onEditClick: () => void;
}

export const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ profile, onEditClick }) => {
  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} onEditClick={onEditClick} />
      <LinkedinProfileCard profile={profile} />
      <ProfileBio bio={profile.bio} />
      <SkillsList skills={profile.skills} />
    </div>
  );
};