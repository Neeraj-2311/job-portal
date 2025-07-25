import React from 'react';
import { BsStars } from 'react-icons/bs';

interface ChatbotFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const ChatbotFloatingButton: React.FC<ChatbotFloatingButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      className="cursor-pointer fixed z-10 bottom-20 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg lg:hidden transition-colors duration-200 focus:outline-none"
      aria-label="Open Buddy Chat Assistant"
    >
      <BsStars size={24} />
    </button>
  );
};