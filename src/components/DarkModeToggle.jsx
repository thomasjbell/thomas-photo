// components/DarkModeToggle.jsx
'use client';

import { useDarkMode } from "./DarkModeProvider";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div 
      onClick={toggleDarkMode}
      className={`w-12 h-6 flex items-center rounded-full px-1 py-1 cursor-pointer transition-colors duration-300 ${
        isDarkMode ? 'bg-white/80' : 'bg-gray-300'
      }`}
      aria-label="Toggle dark mode"
    >
      <div 
        className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex justify-center items-center ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
        style={{
          transform: isDarkMode ? 'translateX(24px)' : 'translateX(0)'
        }}
      >
        {isDarkMode ? 
          <span className="text-[8px] text-white">🌙</span> : 
          <span className="text-[8px]">☀️</span>
        }
      </div>
    </div>
  );
}