import { useSingleIntersectionObserver } from '../../hooks';
import './CandidateSection.css';

/**
 * CandidateSection - Sección "Are You a Candidate?" reutilizable
 * Replica exactamente la estructura original de los archivos antiguos
 */
const CandidateSection = ({ data }) => {
  const buttonRef = useSingleIntersectionObserver();

  // Función para renderizar título con <br /> si está presente
  const renderTitle = () => {
    if (data.title && data.title.includes('<br />')) {
      return <h2 dangerouslySetInnerHTML={{ __html: data.title }} />;
    }
    return <h2>{data.title}</h2>;
  };

  // Función para renderizar descripción con links HTML
  const renderDescription = () => {
    if (data.description && typeof data.description === 'string') {
      // Si contiene HTML (links), renderizar con dangerouslySetInnerHTML
      if (data.description.includes('<a ') || data.description.includes('href=')) {
        return <p dangerouslySetInnerHTML={{ __html: data.description }} />;
      }
      // Si contiene "local QC Kinetix" o "schedule your free consultation", crear links
      let processedText = data.description;
      if (processedText.includes('local QC Kinetix')) {
        processedText = processedText.replace(
          /local QC Kinetix/g,
          '<a href="/qc-locations/">local QC Kinetix</a>'
        );
      }
      if (processedText.includes('schedule your free consultation')) {
        processedText = processedText.replace(
          /schedule your free consultation/g,
          '<a href="https://qckinetix.com/#schedule-consultation">schedule your free consultation</a>'
        );
      }
      if (processedText.includes('local QC Kinetix clinic')) {
        processedText = processedText.replace(
          /local QC Kinetix clinic/g,
          '<a href="/qc-locations/">local QC Kinetix clinic</a>'
        );
      }
      return <p dangerouslySetInnerHTML={{ __html: processedText }} />;
    }
    return <p>{data.description}</p>;
  };

  return (
    <section className="candidate-section">
      <div className="candidate-container">
        <div className="candidate-left">
          <div className="candidate-text">
            {renderTitle()}
            {renderDescription()}
          </div>
          <div className="candidate-button animated fadeInUp" ref={buttonRef}>
            <a
              href="/request-your-first-appointment/"
              className="qc-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/request-your-first-appointment/';
              }}
            >
              Request an Appointment
            </a>
          </div>
        </div>
        <div className="candidate-right">
          <div className="candidate-text">
            <p><strong>{data.factorsIntro}</strong></p>
            <ul>
              {data.factors.map((factor, index) => (
                <li key={index}>{factor}</li>
              ))}
            </ul>
            <p>{data.conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSection;
