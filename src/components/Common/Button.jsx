import './Button.css';

const Button = ({ 
  text = "Request an Appointment", 
  href = "#contact", 
  variant = "primary",
  size = "medium",
  className = "",
  onClick
}) => {
  const buttonClass = `qc-button qc-button-${variant} qc-button-${size} ${className}`;
  
  if (onClick) {
    return (
      <button className={buttonClass} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  return (
    <a href={href} className={buttonClass}>
      {text}
    </a>
  );
};

export default Button;

