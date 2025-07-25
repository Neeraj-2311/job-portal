import { useState, useEffect, useRef } from 'react';
import type { Message } from '../types/types';
import { useLocalStorage } from './useLocalStorage';

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useLocalStorage<Message[]>('buddy-chat-history', [
    { role: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [botTyping, setBotTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, botTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = { 
      role: 'user', 
      text: message.trim(),
      timestamp: new Date()
    };
    
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setMessage('');
    setBotTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botReply: Message = {
        role: 'bot',
        text: "Got it! Let me help you with that.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botReply]);
      setBotTyping(false);
    }, 1200);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  const clearChat = () => {
    setMessages([{ role: 'bot', text: 'Hi! How can I help you today?' }]);
  };

  return {
    isOpen,
    message,
    messages,
    botTyping,
    bottomRef,
    toggleChat,
    handleSend,
    handleSuggestionClick,
    clearChat,
    setMessage
  };
};