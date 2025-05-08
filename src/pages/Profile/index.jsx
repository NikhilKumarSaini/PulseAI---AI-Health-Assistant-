import { useState } from 'react';
import Button from '../../components/ui/Button';
import '../../styles/pages/Profile.css';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567'
  });

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
        <div className="avatar">
          <img 
            src={`${process.env.PUBLIC_URL}/images/avatar-placeholder.png`} 
            alt="Profile"
          />
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-field">
          <label>Full Name</label>
          <p>{user.name}</p>
        </div>
        
        <div className="profile-field">
          <label>Email</label>
          <p>{user.email}</p>
        </div>
        
        <div className="profile-field">
          <label>Phone</label>
          <p>{user.phone}</p>
        </div>

        <div className="profile-actions">
          <Button className="edit-button">
            Edit Profile
          </Button>
          <Button variant="secondary">
            Change Password
          </Button>
        </div>
      </div>

      <div className="health-stats">
        <h2>Health Statistics</h2>
        {/* Health metrics would go here */}
      </div>
    </div>
  );
}