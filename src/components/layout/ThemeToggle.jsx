import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import '../styles/components/ThemeToggle.css';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <button 
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}