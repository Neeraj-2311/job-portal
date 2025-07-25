import React from 'react';

interface SidebarOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

export const SidebarOverlay: React.FC<SidebarOverlayProps> = ({ 
  isVisible, 
  onClose 
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40 transition-opacity duration-300 lg:hidden cursor-pointer"
      onClick={onClose}
      aria-label="Close sidebar"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
          onClose();
        }
      }}
    />
  );
};