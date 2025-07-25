import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

import React from "react";
import { useSidebar } from "../hooks/useSidebar";
import { MobileHeader } from "./Layout/MobileHeader";
import { SidebarOverlay } from "./Layout/SidebarOverlay";
import { Sidebar } from "./Layout/Sidebar";
import { MainContent } from "./Layout/MainContent";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100 font-sans">
      <MobileHeader 
        sidebarOpen={sidebarOpen}
        onToggleSidebar={toggleSidebar}
      />

      <SidebarOverlay 
        isVisible={sidebarOpen}
        onClose={closeSidebar}
      />

      <Sidebar 
        isOpen={sidebarOpen}
        onItemClick={closeSidebar}
      />

      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};

export default Layout;