import React from 'react';
import { SidebarLogo } from './SidebarLogo';
import { SidebarNavigation } from './SidebarNavigation';
import { MAIN_SIDEBAR_ITEMS } from '../../constants/sidebarConfig';
import { SidebarFooter } from './SidebarFooter';

interface SidebarProps {
  isOpen: boolean;
  onItemClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onItemClick }) => {
  return (
    <aside
      id="main-sidebar"
      className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 flex flex-col border-r border-gray-200 dark:border-gray-700`}
      role="navigation"
      aria-label="Main sidebar navigation"
    >
      <SidebarLogo />
      
      <div className="flex-1 pb-4 px-3 pt-2 overflow-y-auto mt-16 lg:mt-0">
        <SidebarNavigation 
          items={MAIN_SIDEBAR_ITEMS}
          onItemClick={onItemClick}
          ariaLabel="Primary navigation"
        />
      </div>

      <SidebarFooter onItemClick={onItemClick} />
    </aside>
  );
};