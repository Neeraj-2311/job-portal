import React from 'react';
import type { ChatbotConfig, Message } from '../../types/types';
import { ChatbotHeader } from './ChatbotHeader';
import { ChatMessages } from './ChatMessage';
import { SuggestionChips } from './SuggessionChip';
import { ChatInput } from './ChatInput';

interface ChatPanelProps {
  isOpen: boolean;
  messages: Message[];
  botTyping: boolean;
  message: string;
  config: ChatbotConfig;
  bottomRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onSuggestionClick: (suggestion: string) => void;
  onMessageChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onQuickGuide?: () => void;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({
  isOpen,
  messages,
  botTyping,
  message,
  config,
  bottomRef,
  onClose,
  onSuggestionClick,
  onMessageChange,
  onSubmit,
  onQuickGuide
}) => {
  return (
    <div
      className={`fixed bottom-0 right-0 z-40 w-full max-w-sm h-full lg:static lg:w-full transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      } lg:translate-y-0`}
      role="dialog"
      aria-label={`${config.botName} chat assistant`}
      aria-modal="true"
    >
      <div className="h-full flex flex-col bg-white dark:bg-gray-900 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 rounded-[20px]">
        <ChatbotHeader
          botName={config.botName}
          botTitle={config.botTitle}
          onClose={onClose}
          onQuickGuide={onQuickGuide}
        />

        <ChatMessages
          messages={messages}
          botTyping={botTyping}
          botName={config.botName}
          bottomRef={bottomRef}
        />

        <SuggestionChips
          suggestions={config.suggestions}
          onSuggestionClick={onSuggestionClick}
        />

        <ChatInput
          message={message}
          placeholder={config.placeholder}
          onMessageChange={onMessageChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};