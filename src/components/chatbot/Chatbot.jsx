import { useState, useRef, useEffect } from 'react';
import Message from './Message';
import { IoSend } from 'react-icons/io5';
import '../../styles/components/Chatbot.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your PulseAI health assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [awaitingDetails, setAwaitingDetails] = useState(null);
  const messagesEndRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: getBotResponse(input),
          sender: 'bot'
        }]);
      }, 800);
    }
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (awaitingDetails) {
      setAwaitingDetails(null);
      return getDetailedResponse(awaitingDetails, userInput);
    }

    // Initial symptom detection
    if (input.includes('fever')) {
      setAwaitingDetails('fever');
      return "I can help analyze your fever. Please describe:\n1. Your current temperature\n2. How long you've had it\n3. Any other symptoms (chills, sweating, etc.)";
    }
    else if (input.includes('headache')) {
      setAwaitingDetails('headache');
      return "Let's discuss your headache. Please tell me:\n1. Where it hurts (forehead, temples, etc.)\n2. Pain type (throbbing, constant, etc.)\n3. How long it's lasted";
    }
    else if (input.includes('cough') || input.includes('cold')) {
      setAwaitingDetails('respiratory');
      return "About your cough/cold:\n1. Is it dry or productive?\n2. Any fever or difficulty breathing?\n3. How long have you had symptoms?";
    }
    else if (input.includes('stomach') || input.includes('nausea')) {
      setAwaitingDetails('digestive');
      return "For stomach issues:\n1. Describe your symptoms (pain, nausea, etc.)\n2. Any vomiting or diarrhea?\n3. When did it start?";
    }
    else if (input.includes('symptom')) {
      return "I can help analyze symptoms. Please describe them in detail (e.g., what you feel, location, duration, severity).";
    }
    else {
      return "I specialize in health-related questions. Could you tell me more about your concern? For emergencies, please seek immediate medical attention.";
    }
  };

  const getDetailedResponse = (symptomType, details) => {
    const detailText = details.toLowerCase();
    
    switch(symptomType) {
      case 'fever':
        if (detailText.includes('high') || detailText.includes('39') || detailText.includes('40')) {
          return "A high fever (above 39°C/102°F) may need medical attention, especially if lasting more than 48 hours. Stay hydrated and consider fever reducers like paracetamol if appropriate.";
        }
        return "For mild fever (below 38.5°C/101°F), rest and fluids are usually sufficient. Monitor your temperature and watch for worsening symptoms.";
      
      case 'headache':
        if (detailText.includes('throbbing') || detailText.includes('migraine')) {
          return "Throbbing pain could indicate a migraine. Try resting in a dark room. If this is your first severe headache or it's unusually painful, consult a doctor.";
        }
        return "For tension headaches, gentle massage and hydration may help. If headaches persist for more than 2 days, consider medical advice.";
      
      case 'respiratory':
        if (detailText.includes('difficulty breathing')) {
          return "Difficulty breathing requires immediate medical attention. Please contact a healthcare provider right away.";
        }
        return "For common cold symptoms, rest and hydration are key. A persistent cough (more than 10 days) should be evaluated by a doctor.";
      
      case 'digestive':
        if (detailText.includes('blood')) {
          return "Blood in vomit or stool requires urgent medical evaluation. Please seek care immediately.";
        }
        return "For general stomach upset, try the BRAT diet (bananas, rice, applesauce, toast). If symptoms persist beyond 48 hours or worsen, see a doctor.";
      
      default:
        return "Thank you for the details. Based on what you've described, monitoring your symptoms is recommended. If they worsen or persist, please consult a healthcare provider.";
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} sender={msg.sender} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSend} className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about symptoms, medications, etc..."
          required
        />
        <button type="submit">
          <IoSend />
        </button>
      </form>
    </div>
  );
}