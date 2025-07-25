import React from 'react';
import type { ChatbotConfig } from '../../types/types';
import { useChatbot } from '../../hooks/useChatbot';
import { ChatbotFloatingButton } from './ChatbotFloatingButton';
import { ChatPanel } from './ChatPanel';

const chatbotConfig: ChatbotConfig = {
  suggestions: ['Resume Analysis', 'Career Advisor', 'Interview Questions'],
  botName: 'Buddy',
  botTitle: 'Your AI Copilot',
  placeholder: 'Ask Buddy...'
};

const Chatbot: React.FC = () => {
  const {
    isOpen,
    message,
    messages,
    botTyping,
    bottomRef,
    toggleChat,
    handleSend,
    handleSuggestionClick,
    setMessage
  } = useChatbot();

  const handleQuickGuide = () => {
    console.log('Quick guide opened');
    // Implement quick guide functionality
  };

  return (
    <>
      <ChatbotFloatingButton 
        onClick={toggleChat} 
        isOpen={isOpen} 
      />

      <ChatPanel
        isOpen={isOpen}
        messages={messages}
        botTyping={botTyping}
        message={message}
        config={chatbotConfig}
        bottomRef={bottomRef}
        onClose={toggleChat}
        onSuggestionClick={handleSuggestionClick}
        onMessageChange={setMessage}
        onSubmit={handleSend}
        onQuickGuide={handleQuickGuide}
      />
    </>
  );
};

export default Chatbot;