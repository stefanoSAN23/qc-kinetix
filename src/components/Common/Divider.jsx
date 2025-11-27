// Los estilos están en global.css para disponibilidad global

/**
 * Divider - Componente reutilizable para separadores de sección
 * 
 * @param {string} variant - Variante del divider: 'default', 'dark', 'light', 'transparent'
 * @param {string} lineColor - Color de la línea (override del variant)
 * @param {string} backgroundColor - Color de fondo (override del variant)
 * @param {string} maxWidth - Ancho máximo de la línea (default: '1400px')
 * @param {string} thickness - Grosor de la línea (default: '2px')
 * @param {string} padding - Padding vertical (default: '20px')
 * @param {string} className - Clases adicionales para personalizar
 */
const Divider = ({ 
  variant = 'default',
  lineColor,
  backgroundColor,
  maxWidth = '1400px',
  thickness = '2px',
  padding = '20px',
  className = ''
}) => {
  // Estilos inline para override de los valores por defecto
  const containerStyle = {
    ...(backgroundColor && { backgroundColor }),
    ...(padding && { padding: `${padding} 0` })
  };

  const lineStyle = {
    ...(lineColor && { borderTopColor: lineColor }),
    ...(maxWidth && { maxWidth }),
    ...(thickness && { borderTopWidth: thickness })
  };

  return (
    <div 
      className={`qc-divider qc-divider-${variant} ${className}`}
      style={containerStyle}
    >
      <span 
        className="qc-divider-line"
        style={lineStyle}
      />
    </div>
  );
};

export default Divider;

