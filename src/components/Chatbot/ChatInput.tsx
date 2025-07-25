import React from 'react';
import { IoMdSend } from 'react-icons/io';
import { BsStars } from 'react-icons/bs';

interface ChatInputProps {
  message: string;
  placeholder: string;
  onMessageChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  message, 
  placeholder, 
  onMessageChange, 
  onSubmit 
}) => {
  const hasMessage = message.trim().length > 0;

  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <form
        onSubmit={onSubmit}
        className="flex w-full overflow-hidden rounded-b-[20px] focus-within:ring-2 focus-within:ring-green-600 transition-all duration-200"
        aria-label="Send message to chat assistant"
      >
        <div className="flex items-center gap-2 flex-1 px-4 py-3 bg-white dark:bg-gray-800">
          <BsStars className="text-gray-400 dark:text-gray-500" aria-hidden="true" />
          <input
            type="text"
            placeholder={placeholder}
            className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            aria-label="Type your message to the chat assistant"
            maxLength={500}
          />
        </div>

        <button
          type="submit"
          disabled={!hasMessage}
          aria-label={hasMessage ? "Send message" : "Enter a message to send"}
          className={`cursor-pointer flex items-center justify-center w-12 transition-colors duration-200 focus:outline-none ${
            hasMessage
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          <IoMdSend size={18} />
        </button>
      </form>
    </div>
  );
};