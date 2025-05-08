import '../../styles/components/Message.css';

import { FaRobot, FaUser } from 'react-icons/fa';

export default function Message({ text, sender }) {
  return (
    <div className={`message ${sender}`}>
      <div className="message-icon">
        {sender === 'bot' ? <FaRobot /> : <FaUser />}
      </div>
      <div className="message-content">
        {text.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}