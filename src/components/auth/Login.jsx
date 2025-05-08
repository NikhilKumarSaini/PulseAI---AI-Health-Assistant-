import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import '../../../styles/pages/Auth.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate login API call
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password123') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo.png`} 
            alt="PulseAI" 
            className="auth-logo"
          />
          <h2>Welcome Back</h2>
          <p>Sign in to your PulseAI account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit" className="auth-button">
            Sign In
          </Button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <a href="/register">Sign up</a></p>
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}