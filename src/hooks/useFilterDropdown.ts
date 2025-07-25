import { useState, useRef, useEffect } from 'react';

export const useFilterDropdown = () => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openFilter &&
        buttonRefs.current[openFilter] &&
        !buttonRefs.current[openFilter]?.contains(event.target as Node) &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openFilter]);

  const openDropdown = (key: string) => {
    const button = buttonRefs.current[key];
    if (button) {
      const rect = button.getBoundingClientRect();
      setDropdownPos({ 
        top: rect.bottom + window.scrollY + 6, 
        left: rect.left + window.scrollX 
      });
    }
    setOpenFilter(openFilter === key ? null : key);
  };

  const closeDropdown = () => {
    setOpenFilter(null);
    setDropdownPos(null);
  };

  const getRefCallback = (key: string): React.RefCallback<HTMLButtonElement> =>
    (el) => {
      buttonRefs.current[key] = el;
    };

  return {
    openFilter,
    dropdownPos,
    dropdownRef,
    openDropdown,
    closeDropdown,
    getRefCallback
  };
};