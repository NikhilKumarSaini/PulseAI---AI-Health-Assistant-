import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../../styles/components/MobileNav.css';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/ai-assistant" onClick={() => setIsOpen(false)}>
            AI Assistant
          </Link>
          <Link to="/solutions" onClick={() => setIsOpen(false)}>
            Smart Solutions
          </Link>
          <Link to="/insights" onClick={() => setIsOpen(false)}>
            User Insights
          </Link>
          <Link 
            to="/login" 
            className="mobile-login-btn"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </nav>
      </div>
    </>
  );
}