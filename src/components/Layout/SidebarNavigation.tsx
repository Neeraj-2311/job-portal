import React from 'react';
import type { SidebarItem } from '../../types/types';
import { useActiveRoute } from '../../hooks/useActiveRoute';
import { SidebarItemComponent } from './SidebarItem';

interface SidebarNavigationProps {
  items: SidebarItem[];
  onItemClick: () => void;
  ariaLabel?: string;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ 
  items, 
  onItemClick, 
  ariaLabel = "Main navigation" 
}) => {
  const { isActive } = useActiveRoute();

  return (
    <nav className="space-y-1" aria-label={ariaLabel}>
      {items.map((item) => (
        <SidebarItemComponent
          key={item.path}
          item={item}
          isActive={isActive(item.path)}
          onItemClick={onItemClick}
        />
      ))}
    </nav>
  );
};