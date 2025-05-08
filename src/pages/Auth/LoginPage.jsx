import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import '../../styles/pages/Auth.css';

export default function LoginPage({ showNotification }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const TEST_CREDENTIALS = [
    { email: 'admin@pulseai.com', password: 'admin123' },
    { email: 'doctor@pulseai.com', password: 'doctor123' },
    { email: 'user1@pulseai.com', password: 'user123' },
    { email: 'user2@pulseai.com', password: 'user123' },
    { email: 'test@pulseai.com', password: 'test123' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const isValid =
        TEST_CREDENTIALS.some(
          (cred) =>
            cred.email === formData.email && cred.password === formData.password
        ) ||
        (formData.email === 'user@example.com' &&
          formData.password === 'password123');

      if (isValid) {
        localStorage.setItem('isAuthenticated', 'true');
        showNotification('Login successful!', 'success');
        navigate('/dashboard');
      } else {
        const credentialsHint = TEST_CREDENTIALS.map(
          (c) => `${c.email}:${c.password}`
        ).join('\n');
        throw new Error(
          `Invalid credentials. Try these test accounts:\n${credentialsHint}`
        );
      }
    } catch (error) {
      showNotification(error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2 style={{ color: '#007BFF', fontWeight: 'bold' }}>PulseAI</h2>
          <h3>Welcome Back</h3>
          <p>Sign in to access your health dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a
              href="/forgot-password"
              className="forgot-password"
              style={{
                marginLeft: 'auto',
                color: '#007BFF',
                textDecoration: 'underline',
              }}
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <Button
          variant="outline"
          className="auth-button"
          onClick={() =>
            showNotification('Google login coming soon!', 'warning')
          }
        >
          Continue with Google
        </Button>

        <div className="auth-footer">
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
