import React from 'react';
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import logo from '../../assets/images/logo.png';

interface MobileHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  sidebarOpen, 
  onToggleSidebar 
}) => {
  return (
    <header 
      className="lg:hidden bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 h-16 fixed top-0 left-0 right-0 z-50" 
      role="banner" 
      aria-label="Mobile navigation header"
    >
      <div className="h-full px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={sidebarOpen}
            aria-controls="main-sidebar"
          >
            {sidebarOpen ? (
              <MdClose className="text-xl" aria-hidden="true" />
            ) : (
              <MdMenu className="text-xl" aria-hidden="true" />
            )}
          </button>

          <Link 
            to="/" 
            className="cursor-pointer flex items-center gap-2 rounded-md" 
            aria-label="Go to Joblo.ai homepage"
          >
            <img src={logo} alt="Joblo.ai logo" className="h-8" />
          </Link>
        </div>
      </div>
    </header>
  );
};