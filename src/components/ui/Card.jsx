import '../styles/components/Card.css';

export default function Card({ title, value, unit, icon, trend }) {
  return (
    <div className="health-card">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="card-icon">{icon}</div>
      </div>
      <div className="card-body">
        <p className="card-value">
          {value} <span className="card-unit">{unit}</span>
        </p>
        <div className={`card-trend ${trend}`}>
          {trend === 'up' ? '↑' : '↓'} 2% from yesterday
        </div>
      </div>
    </div>
  );
}