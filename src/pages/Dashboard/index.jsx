import Footer from '../../components/layout/Footer';
import Chatbot from '../../components/chatbot/Chatbot';
import '../../styles/pages/Dashboard.css';
import { FaHeartbeat, FaBed, FaTint, FaWalking } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <main className="dashboard-container">
        <div className="dashboard-header">
          <h1>PulseAI</h1>
          <p>Your AI-powered health assistant for a better life</p>
        </div>

        <div className="dashboard-grid">
          <div className="chatbot-container">
            <Chatbot />
          </div>

          <div className="metrics-collage">
            <div className="metric-card heart-rate">
              <FaHeartbeat className="icon" />
              <h3>Heart Rate</h3>
              <p>72 <span>bpm</span></p>
              <p>Keep up your healthy heart habits!</p>
            </div>
            <div className="metric-card sleep-quality">
              <FaBed className="icon" />
              <h3>Sleep Quality</h3>
              <p>8.2 <span>hours</span></p>
              <p>Your sleep routine looks great!</p>
            </div>
            <div className="metric-card hydration">
              <FaTint className="icon" />
              <h3>Hydration</h3>
              <p>2.5 <span>liters</span></p>
              <p>Good hydration keeps you energized!</p>
            </div>
            <div className="metric-card steps">
              <FaWalking className="icon" />
              <h3>Steps</h3>
              <p>10,500 <span>steps</span></p>
              <p>You're hitting your activity goals!</p>
            </div>
          </div>
        </div>

        <div className="dashboard-paragraphs">
          <h2>Stay Healthy, Stay Inspired</h2>
          <p>
            At PulseAI, we believe that small, consistent efforts lead to significant results. By keeping track of your
            health metrics and making conscious choices, you're investing in a healthier, happier future.
          </p>
          <p>
            Remember, your body is your most priceless possession. Take care of it with proper sleep, hydration, and
            regular activity. Every heartbeat, every step, and every ounce of water you drink is a step towards
            longevity.
          </p>
          <p>
            Embrace a balanced lifestyle. Prioritize mindfulness, practice gratitude, and don't forget to rest and
            recharge. Let PulseAI be your guide in this journey towards better health and well-being.
          </p>
          <blockquote>
            "The greatest wealth is health." – Virgil
          </blockquote>
        </div>
      </main>

      <Footer />
    </div>
  );
}
