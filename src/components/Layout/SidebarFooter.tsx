import React from 'react';
import { UpgradeSection } from './UpgradeSection';
import { SidebarNavigation } from './SidebarNavigation';
import { BOTTOM_SIDEBAR_ITEMS, USER_PROFILE } from '../../constants/sidebarConfig';
import { ThemeToggle } from './ToggleTheme';
import { UserProfileComponent } from './UserProfile';

interface SidebarFooterProps {
  onItemClick: () => void;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ onItemClick }) => {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <UpgradeSection />
      
      <div className="space-y-1 mb-3">
        <SidebarNavigation 
          items={BOTTOM_SIDEBAR_ITEMS}
          onItemClick={onItemClick}
          ariaLabel="Secondary navigation"
        />
        <ThemeToggle onToggle={onItemClick} />
      </div>

      <UserProfileComponent 
        user={USER_PROFILE}
        onProfileClick={onItemClick}
      />
    </div>
  );
};