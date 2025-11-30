import { Link } from 'react-router-dom';
import { useSingleIntersectionObserver } from '../../hooks';
import './RegenerativeTherapySection.css';

/**
 * RegenerativeTherapySection - Sección de terapia regenerativa reutilizable
 * Replica exactamente la estructura original
 */
const RegenerativeTherapySection = ({ data }) => {
  const buttonRef = useSingleIntersectionObserver();

  const renderCondition = (condition, index) => {
    if (typeof condition === 'string') {
      return <li key={index}>{condition}</li>;
    }
    return (
      <li key={index}>
        <Link to={condition.link}>{condition.text}</Link>
      </li>
    );
  };

  return (
    <section className="regenerative-therapy-section">
      <div className="regenerative-therapy-container">
        <div className="regenerative-therapy-image-wrapper">
          <div className="regenerative-therapy-image">
            <img
              src={data.image}
              alt={data.imageAlt}
              width={data.imageWidth}
              height={data.imageHeight}
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-content">
          <div className="regenerative-therapy-text">
            <h1>{data.title}</h1>
            <p>
              <Link to="/regenerative-medicine/">Regenerative medicine</Link> {data.intro}
            </p>
            <ul>
              {data.conditions.map((condition, index) => renderCondition(condition, index))}
            </ul>
            <p>{data.conclusion}</p>
          </div>
          <div className="regenerative-therapy-button animated fadeInUp" ref={buttonRef}>
            <Link to="/request-your-first-appointment/" className="qc-btn">
              Request an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegenerativeTherapySection;
