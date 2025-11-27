// Los estilos están en global.css para disponibilidad global

/**
 * Button - Componente reutilizable para botones
 * 
 * @param {string} text - Texto del botón
 * @param {string} href - URL para enlaces (si se usa como link)
 * @param {string} variant - Variante visual: 'primary', 'secondary', 'outline', 'ghost', 'header'
 * @param {string} size - Tamaño: 'small', 'medium', 'large', 'hero'
 * @param {string} className - Clases adicionales para personalizar
 * @param {function} onClick - Handler para click (convierte en button)
 * @param {boolean} fullWidth - Si debe ocupar todo el ancho disponible
 * @param {string} target - Target para enlaces (_blank, _self, etc.)
 * @param {string} ariaLabel - Aria label para accesibilidad
 * @param {boolean} disabled - Si el botón está deshabilitado
 * @param {React.ReactNode} children - Contenido hijo (alternativa a text)
 */
const Button = ({ 
  text,
  href = '#contact', 
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  fullWidth = false,
  target,
  ariaLabel,
  disabled = false,
  children
}) => {
  const buttonContent = children || text || 'Request an Appointment';
  
  const buttonClasses = [
    'qc-button',
    `qc-button-${variant}`,
    `qc-button-${size}`,
    fullWidth ? 'qc-button-full-width' : '',
    disabled ? 'qc-button-disabled' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Si tiene onClick, renderizar como button
  if (onClick) {
    return (
      <button 
        className={buttonClasses} 
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {buttonContent}
      </button>
    );
  }
  
  // Si no tiene onClick, renderizar como enlace
  return (
    <a 
      href={href} 
      className={buttonClasses}
      target={target}
      aria-label={ariaLabel}
      {...(target === '_blank' && { rel: 'noopener noreferrer' })}
    >
      {buttonContent}
    </a>
  );
};

export default Button;
