const InternalLink = ({ to, children, className = '', onClick, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // If there's a custom onClick, execute it first
    if (onClick) {
      onClick(e);
    }

    // Reload page and navigate
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

