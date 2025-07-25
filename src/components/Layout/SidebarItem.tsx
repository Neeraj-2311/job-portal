import React from 'react';
import { Link } from "react-router-dom";
import type { SidebarItem } from '../../types/types';

interface SidebarItemProps {
  item: SidebarItem;
  isActive: boolean;
  onItemClick: () => void;
}

export const SidebarItemComponent: React.FC<SidebarItemProps> = ({ 
  item, 
  isActive, 
  onItemClick 
}) => {
  const IconComponent = item.icon;

  return (
    <Link
      to={item.path}
      onClick={onItemClick}
      aria-current={isActive ? "page" : undefined}
      className={`cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 text-sm font-medium relative ${
        isActive
          ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
          : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
      aria-label={`Navigate to ${item.label}${item.badge ? ` (${item.badge})` : ''}`}
    >
      <IconComponent className="text-base flex-shrink-0" aria-hidden="true" />
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span 
          className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium dark:bg-green-900 dark:text-green-300" 
          aria-label={`${item.badge} feature`}
        >
          {item.badge}
        </span>
      )}
      {isActive && (
        <div 
          className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" 
          aria-hidden="true"
        />
      )}
    </Link>
  );
};