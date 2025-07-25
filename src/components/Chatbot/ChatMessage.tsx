import React from 'react';
import type { Message } from '../../types/types';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';

interface ChatMessagesProps {
  messages: Message[];
  botTyping: boolean;
  botName: string;
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  botTyping,
  botName,
  bottomRef
}) => {
  return (
    <div
      className="flex-1 overflow-y-auto p-4 space-y-4"
      style={{ WebkitOverflowScrolling: 'touch' }}
      role="log"
      aria-label="Chat conversation"
      aria-live="polite"
    >
      <div role="list" aria-label={`${messages.length} messages in conversation`} className="space-y-4">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} message={msg} />
        ))}
      </div>

      {botTyping && <TypingIndicator botName={botName} />}
      <div ref={bottomRef} />
    </div>
  );
};