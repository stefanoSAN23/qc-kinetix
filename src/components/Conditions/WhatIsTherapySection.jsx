import { Link } from 'react-router-dom';
import { useSingleIntersectionObserver } from '../../hooks';
import { ImageDivider } from '../Common';
import './WhatIsTherapySection.css';

/**
 * WhatIsTherapySection - Sección "What is Regenerative Therapy?" reutilizable
 * Replica exactamente la estructura original con panel oscuro sobre imagen
 */
const WhatIsTherapySection = ({ data }) => {
  const headerRef = useSingleIntersectionObserver();
  const buttonRef = useSingleIntersectionObserver();

  // Estilo dinámico para la imagen de fondo
  const sectionStyle = data.backgroundImage ? {
    backgroundImage: `url('${data.backgroundImage}')`
  } : {};

  // Estilo para el pseudo-elemento ::before en móvil (usando CSS variable)
  const panelStyle = data.backgroundImage ? {
    '--mobile-bg-image': `url('${data.backgroundImage}')`
  } : {};

  return (
    <section className="what-is-therapy-section" style={sectionStyle}>
      <div className="what-is-therapy-container">
        <div className="what-is-therapy-content">
          <div className="what-is-therapy-panel" style={panelStyle}>
            <div className="what-is-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <ImageDivider variant="green" className="what-is-therapy-divider" />
            </div>
            <div className="what-is-therapy-text">
              <div className="what-is-therapy-text-content">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p><strong>{data.benefitsIntro}</strong></p>
                <ul>
                  {data.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <p>{data.conclusion}</p>
              </div>
              <div className="what-is-therapy-button animated fadeInUp" ref={buttonRef}>
                <Link to="/request-your-first-appointment/" className="qc-btn">
                  Request an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTherapySection;
