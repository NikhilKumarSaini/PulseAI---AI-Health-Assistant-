import '../../styles/components/Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="brand-title">PulseAI</h2>
            <p>Your trusted AI Health Companion, here to keep you informed and empowered.</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/blog">Health Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><FaEnvelope /> support@pulseai.com</p>
            <p><FaPhoneAlt /> +1 (800) 555-0199</p>
            <p><FaMapMarkerAlt /> 1234 AI Drive, Tech City, CA 94043</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PulseAI. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
