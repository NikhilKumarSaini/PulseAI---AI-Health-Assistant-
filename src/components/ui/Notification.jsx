import { useEffect } from 'react';
import '../../styles/components/Notification.css';

export default function Notification({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <div className="notification-content">
        <span className="notification-message">{message}</span>
        <button 
          className="notification-close"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}