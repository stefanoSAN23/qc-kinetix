import { useNavigate } from 'react-router-dom';

const InternalLink = ({ to, children, className = '', onClick, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    
    // Si hay un onClick personalizado, ejecutarlo primero
    if (onClick) {
      onClick(e);
    }

    // Recargar la página y navegar
    window.location.href = to;
  };

  return (
    <a 
      href={to} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default InternalLink;

