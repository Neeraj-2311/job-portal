import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  onToggle?: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  const { darkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    onToggle?.();
  };

  return (
    <button
      onClick={handleToggle}
      className="cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700 w-full text-left"
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? (
        <FaSun className="text-base flex-shrink-0" aria-hidden="true" />
      ) : (
        <FaMoon className="text-base flex-shrink-0" aria-hidden="true" />
      )}
      <span className="flex-1">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};