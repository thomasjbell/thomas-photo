// components/DarkModeProvider.jsx
'use client';

import { createContext, useState, useEffect, useContext } from 'react';

// Create context
const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Provider component
export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(storedDarkMode);
      
      if (storedDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      setIsInitialized(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, isInitialized }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom hook
export const useDarkMode = () => useContext(DarkModeContext);