import React from 'react';
import Chatbot from '../Chatbot/Chatbot';

export const ChatbotPanel: React.FC = () => {
  return (
    <div 
      className="fixed lg:top-[74px] right-2 w-[340px] h-[calc(100vh-84px)] rounded-2xl z-50 overflow-hidden"
      aria-label="AI Job Assistant"
    >
      <Chatbot />
    </div>
  );
};