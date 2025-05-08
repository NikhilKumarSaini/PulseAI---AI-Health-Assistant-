import { 
  FaHeartbeat, FaStethoscope, FaUserMd, 
  FaPills, FaFileMedical, FaQuoteLeft,
  FaChartLine,
  FaInfoCircle 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/layout/Footer';
import '../../styles/pages/Home.css';

const testimonials = [
  {
    quote: "PulseAI helped me identify early symptoms of diabetes. The doctor confirmed it and we caught it just in time!",
    author: "Rahul Sharma, Hyderabad",
    role: "Patient"
  },
  {
    quote: "As a busy professional, the medication reminders have been life-changing. Never missed a dose since I started using PulseAI.",
    author: "Priya Patel, Mumbai",
    role: "Marketing Executive"
  },
  {
    quote: "The virtual consultation feature saved me hours of waiting at the clinic. The doctor was just as thorough online!",
    author: "Dr. Arjun Reddy",
    role: "Cardiologist"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="medical-theme">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="medical-symbol">⚕</div>
            <h1><span className="highlight-blue">Pulse</span><span className="highlight-white">AI</span></h1>
            <p className="hero-tagline">Intelligent Healthcare at Your Fingertips</p>
            <p className="hero-description">
              Combining artificial intelligence with medical expertise to deliver personalized 
              health insights and preventive care recommendations.
            </p>
            <div className="hero-buttons">
              <button 
                className="cta-button primary"
                onClick={() => navigate('/login')}
              >
                <FaUserMd style={{ marginRight: '8px' }} /> Get Started
              </button>
              <button 
                className="cta-button secondary"
                onClick={() => navigate('/about')}
              >
                <FaInfoCircle style={{ marginRight: '8px' }} /> Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <FaHeartbeat className="stat-icon" />
          <div className="stat-number">10,000+</div>
          <div className="stat-label">Lives Impacted</div>
        </div>
        <div className="stat-item">
          <FaUserMd className="stat-icon" />
          <div className="stat-number">200+</div>
          <div className="stat-label">Medical Experts</div>
        </div>
        <div className="stat-item">
          <FaStethoscope className="stat-icon" />
          <div className="stat-number">95%</div>
          <div className="stat-label">Accuracy Rate</div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our Comprehensive <span className="highlight">Health Solutions</span></h2>
        <p className="section-subtitle">Powered by AI and medical expertise</p>
        
        <div className="features-grid">
          {/* Feature Cards */}
          {[
            {
              icon: <FaHeartbeat />,
              title: "Vital Monitoring",
              desc: "Continuous tracking of heart rate, blood pressure, and other critical metrics",
              color: "#e74c3c"
            },
            {
              icon: <FaStethoscope />,
              title: "Symptom Analysis",
              desc: "AI-powered assessment of your symptoms with risk evaluation",
              color: "#3498db"
            },
            {
              icon: <FaUserMd />,
              title: "Virtual Clinic",
              desc: "24/7 access to qualified healthcare professionals",
              color: "#2ecc71"
            },
            {
              icon: <FaPills />,
              title: "Medication Manager",
              desc: "Personalized reminders and interaction warnings",
              color: "#9b59b6"
            },
            {
              icon: <FaFileMedical />,
              title: "Health Vault",
              desc: "Secure, centralized storage for all medical records",
              color: "#f39c12"
            },
            {
              icon: <FaChartLine />,
              title: "Progress Tracking",
              desc: "Visualize your health journey with detailed analytics",
              color: "#1abc9c"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--card-accent': feature.color }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <button 
                className="feature-button"
                onClick={() => navigate('/login')}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonial-header">
          <h2>Trusted by <span className="highlight">Patients and Professionals</span></h2>
          <p>Real stories from our community</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="health-tips">
        <div className="tips-content">
          <h2><span className="highlight">Health Wisdom</span> for Daily Life</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Preventive Care Matters</h3>
              <p>
                "An ounce of prevention is worth a pound of cure. Regular check-ups 
                can detect health issues early when they're most treatable."
              </p>
              <div className="tip-source">- Dr. Ananya Iyer, Preventive Medicine</div>
            </div>
            <div className="tip-card">
              <h3>Digital Health Revolution</h3>
              <p>
                "AI in healthcare isn't about replacing doctors—it's about giving them 
                superpowers to serve patients better and faster than ever before."
              </p>
              <div className="tip-source">- Prof. Rajesh Khanna, Health Informatics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to Take Control of Your Health?</h2>
          <p>Join thousands of satisfied users experiencing better healthcare through technology</p>
          <button 
            className="cta-button primary large"
            onClick={() => navigate('/login')}
          >
            <FaUserMd style={{ marginRight: '8px' }} /> Start Your Health Journey
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}