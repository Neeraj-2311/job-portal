import React from 'react';
import { Link } from "react-router-dom";
import { PiSignOut } from "react-icons/pi";
import type { User } from '../../types/types';

interface UserProfileProps {
  user: User;
  onProfileClick?: () => void;
}

export const UserProfileComponent: React.FC<UserProfileProps> = ({ 
  user, 
  onProfileClick 
}) => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-3" aria-label="User profile section">
      <Link
        to="/profile"
        onClick={onProfileClick}
        className="cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 w-full text-left group"
        aria-label={`View profile for ${user.name}, ${user.title}`}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold" aria-hidden="true">
            {user.initials}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
            {user.name}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {user.title}
          </div>
        </div>
        <PiSignOut 
          className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200 flex-shrink-0" 
          aria-hidden="true" 
        />
      </Link>
    </div>
  );
};