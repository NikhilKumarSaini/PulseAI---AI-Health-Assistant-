import '../../styles/components/Button.css';

export default function Button({ children, type = 'button', className = '', ...props }) {
  return (
    <button 
      type={type}
      className={`button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}