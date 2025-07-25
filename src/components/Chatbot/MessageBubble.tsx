import React from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';
import type { Message } from '../../types/types';

interface MessageBubbleProps {
  message: Message;
  isTyping?: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isTyping = false }) => {
  const isUser = message.role === 'user';

  return (
    <div 
      className={`flex items-start gap-2 ${isUser ? 'justify-end' : ''}`}
      role="listitem"
    >
      {!isUser && (
        <div 
          className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
          aria-label="Bot avatar"
        >
          <FaRobot size={12} />
        </div>
      )}
      
      <div
        className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
          isUser
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
        } ${isTyping ? 'animate-pulse' : ''}`}
        role={isTyping ? "status" : undefined}
        aria-label={isTyping ? "Bot is typing" : `${isUser ? 'Your' : 'Bot'} message: ${message.text}`}
      >
        {message.text}
      </div>
      
      {isUser && (
        <div 
          className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
          aria-label="Your avatar"
        >
          <FaUser size={12} />
        </div>
      )}
    </div>
  );
};