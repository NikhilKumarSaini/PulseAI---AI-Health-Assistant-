import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notification from './components/ui/Notification';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Profile from './pages/Profile';
import './styles/global.css';

export default function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <Router>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard showNotification={showNotification} />} />
        <Route path="/login" element={<LoginPage showNotification={showNotification} />} />
        <Route path="/register" element={<RegisterPage showNotification={showNotification} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}