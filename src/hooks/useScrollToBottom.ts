import { useEffect, useRef } from 'react';

export const useScrollToBottom = (dependencies: any[]) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  useEffect(() => {
    scrollToBottom();
  }, dependencies);

  return { bottomRef, scrollToBottom };
};