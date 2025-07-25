import React from 'react';
import logo from '../../assets/images/logo.png';

export const SidebarLogo: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-2 p-4 h-[74px]">
      <img src={logo} alt="Joblo.ai logo" className="h-8" />
    </div>
  );
};