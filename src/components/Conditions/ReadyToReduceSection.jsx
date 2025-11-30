import { useSingleIntersectionObserver } from '../../hooks';
import './ReadyToReduceSection.css';

/**
 * ReadyToReduceSection - Sección "Ready to Reduce Pain" reutilizable
 * Replica exactamente la estructura original de los archivos antiguos
 */
const ReadyToReduceSection = ({ data }) => {
  const buttonRef = useSingleIntersectionObserver();

  // Procesar el texto para manejar <br /> y convertir "what to expect from QC Kinetix" en un link
  const renderText = () => {
    let text = data.text;
    
    // Convertir "what to expect from QC Kinetix" en link
    if (text.includes('what to expect from QC Kinetix')) {
      text = text.replace(
        /what to expect from QC Kinetix/g,
        '<a href="/what-to-expect/">what to expect from QC Kinetix</a>'
      );
    }
    
    // Si el texto contiene <br />, renderizar con dangerouslySetInnerHTML
    if (text.includes('<br />') || text.includes('<br>')) {
      return <p dangerouslySetInnerHTML={{ __html: text }} />;
    }
    
    return <p>{text}</p>;
  };

  return (
    <section className="ready-reduce-section">
      <div className="ready-reduce-container">
        <div className="ready-reduce-content">
          <div className="ready-reduce-text">
            {renderText()}
          </div>
          <div className="ready-reduce-button animated fadeInUp" ref={buttonRef}>
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
      </div>
    </section>
  );
};

export default ReadyToReduceSection;
