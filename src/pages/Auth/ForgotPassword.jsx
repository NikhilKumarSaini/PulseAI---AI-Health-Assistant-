import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import '../../styles/pages/Auth.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage(`Password reset link sent to ${email}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Reset Password</h2>
          <p>Enter your email to receive a reset link</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          {message && (
            <div className="auth-message success">
              {message}
            </div>
          )}

          <Button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>

        <div className="auth-footer">
          <p>Remember your password? <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}