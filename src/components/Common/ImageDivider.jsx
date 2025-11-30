// Los estilos están en global.css para disponibilidad global

/**
 * ImageDivider - Componente reutilizable para dividers con imagen
 * Usado principalmente en Hero sections y headers
 * 
 * @param {string} src - URL de la imagen del divider
 * @param {string} alt - Texto alternativo para la imagen
 * @param {number} width - Ancho de la imagen (default: 176)
 * @param {number} height - Alto de la imagen (default: 7)
 * @param {string} variant - Variante: 'default', 'white', 'green'
 * @param {string} className - Clases adicionales
 * @param {boolean} animated - Si debe tener animación (default: false)
 * @param {string} animation - Tipo de animación: 'fadeInLeft', 'fadeInDown', 'fadeIn', 'fadeInUp' (default: 'fadeInDown')
 * @param {string} loading - Estrategia de carga: 'eager' o 'lazy' (default: 'lazy')
 * @param {boolean} animateImmediate - Si la animación debe ejecutarse inmediatamente (default: false)
 */

// URLs predefinidas de dividers
const DIVIDER_IMAGES = {
  default: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-69.svg',
  white: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp',
  green: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-69.svg'
};

const ImageDivider = ({ 
  src,
  alt = 'Decorative divider',
  width = 176,
  height = 7,
  variant = 'default',
  className = '',
  animated = false,
  animation = 'fadeInDown',
  loading = 'lazy',
  animateImmediate = false
}) => {
  // Usar la imagen del variant si no se proporciona src
  const imageSrc = src || DIVIDER_IMAGES[variant] || DIVIDER_IMAGES.default;
  
  const containerClasses = [
    'qc-image-divider',
    `qc-image-divider-${variant}`,
    animated ? `animated ${animation}` : '',
    animateImmediate ? 'animated-active' : '',
    className
  ].filter(Boolean).join(' ');

  // Determinar los data attributes
  const dataAttributes = {};
  if (animated) {
    dataAttributes['data-animated'] = 'true';
  }
  if (animateImmediate) {
    dataAttributes['data-animate-immediate'] = 'true';
  }

  return (
    <div 
      className={containerClasses}
      {...dataAttributes}
    >
      <img 
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        {...(loading === 'eager' && { fetchPriority: 'high' })}
      />
    </div>
  );
};

export default ImageDivider;

