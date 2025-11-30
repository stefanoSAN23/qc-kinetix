import { Link } from 'react-router-dom';
import { useSingleIntersectionObserver } from '../../hooks';
import './ConditionHero.css';

/**
 * ConditionHero - Componente hero reutilizable para páginas de condiciones
 * 
 * @param {string} title - Título de la condición (ej: "Knee Pain")
 * @param {string} breadcrumb - Texto del breadcrumb (ej: "Knee Pain")
 * @param {string} className - Clase CSS adicional para personalización
 */
const ConditionHero = ({ title, breadcrumb, className = '' }) => {
  const titleRef = useSingleIntersectionObserver();

  return (
    <section className={`condition-hero-section ${className}`} id="HeroConTreatment">
      <div className="condition-hero-container">
        <div className="condition-hero-content">
          <div className="condition-hero-breadcrumb">
            <Link to="/conditions/">Conditions Treated</Link> &gt; {breadcrumb}
          </div>
          <h1
            className="condition-hero-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ConditionHero;

