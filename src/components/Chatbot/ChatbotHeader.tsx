import React from 'react';
import { FiX } from 'react-icons/fi';
import buddyLogoIcon from '../../assets/images/logo-icon.png';

interface ChatbotHeaderProps {
  botName: string;
  botTitle: string;
  onClose: () => void;
  onQuickGuide?: () => void;
}

export const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({ 
  botName, 
  botTitle, 
  onClose, 
  onQuickGuide 
}) => {
  return (
    <div className="flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700 h-[64px]">
      <div className="flex items-center gap-2">
        <img 
          src={buddyLogoIcon} 
          alt={`${botName} avatar`} 
          className="w-6 h-6 rounded-full" 
        />
        <div>
          <h2 className="font-semibold text-green-700 dark:text-green-400 text-sm">
            {botName}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {botTitle}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {onQuickGuide && (
          <button
            onClick={onQuickGuide}
            className="cursor-pointer text-xs border border-green-700 text-green-700 hover:bg-green-50 dark:hover:bg-green-900 px-2 py-1 rounded-sm font-medium transition-colors duration-200 hidden lg:block focus:outline-none"
            aria-label="Open quick guide for using the chatbot"
          >
            Quick Guide
          </button>
        )}
        
        <button
          onClick={onClose}
          className="cursor-pointer lg:hidden text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1 rounded transition-colors duration-200 focus:outline-none"
          aria-label="Close chat assistant"
        >
          <FiX size={20} />
        </button>
      </div>
    </div>
  );
};