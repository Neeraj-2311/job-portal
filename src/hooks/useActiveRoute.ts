import { useLocation } from "react-router-dom";

export const useActiveRoute = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return { isActive, currentPath: location.pathname };
};