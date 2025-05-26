import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Check system preference on mount
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemPreference);
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', systemPreference === 'dark');
  }, []);

  useEffect(() => {
    if (theme !== null) {
      // Apply theme changes to document
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Don't render until we have the initial theme
  if (theme === null) {
    return <div className="w-14 h-8 bg-gray-200 rounded-full animate-pulse"></div>;
  }

  return (
    <div 
      onClick={toggleTheme}
      className={`w-12 h-6 flex items-center rounded-full px-1 py-1 cursor-pointer transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/80' : 'bg-gray-300'
      }`}
      aria-label="Toggle dark mode"
    >
      <div 
        className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex justify-center items-center ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}
        style={{
          transform: theme === 'dark' ? 'translateX(24px)' : 'translateX(0)'
        }}
      >
        {theme === 'dark' ? 
          <span className="text-[8px] text-white">🌙</span> : 
          <span className="text-[8px]">☀️</span>
        }
      </div>
    </div>
  );
}; 

export default ThemeToggle;