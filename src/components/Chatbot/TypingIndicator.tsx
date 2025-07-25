import React from 'react';
import { FaRobot } from 'react-icons/fa';

interface TypingIndicatorProps {
  botName: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ botName }) => {
  return (
    <div className="flex items-center gap-2" role="status" aria-live="polite">
      <div 
        className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
        aria-label={`${botName} avatar`}
      >
        <FaRobot size={12} />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm px-3 py-2 rounded-lg animate-pulse">
        {botName} is typing...
      </div>
    </div>
  );
};