import React from 'react';
import type { LayoutProps } from '../Layout';

export const MainContent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main 
      className="pt-16 lg:pt-0 lg:pl-64 min-h-screen bg-white dark:bg-gray-800" 
      role="main"
      aria-label="Main content area"
    >
      <div>
        {children}
      </div>
    </main>
  );
};