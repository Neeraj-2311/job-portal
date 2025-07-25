import React from 'react';

interface ProfilePhotoProps {
  src: string;
  alt: string;
  size?: 'small' | 'large';
  showEditButton?: boolean;
  onEditClick?: () => void;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  src,
  alt,
  size = 'large',
  showEditButton = false,
  onEditClick
}) => {
  const sizeClasses = size === 'large' ? 'w-32 h-32' : 'w-24 h-24';

  return (
    <div className="flex-shrink-0">
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className={`${sizeClasses} rounded-full object-cover border-4 border-gray-200 dark:border-gray-600`}
        />
        {showEditButton && (
          <button
            type="button"
            onClick={onEditClick}
            className="absolute bottom-0 right-0 bg-green-600 hover:bg-green-700 text-white rounded-full p-1.5 shadow-sm transition-colors focus:outline-none cursor-pointer"
            aria-label="Change profile photo"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};