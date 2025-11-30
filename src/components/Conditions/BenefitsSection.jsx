import { useSingleIntersectionObserver } from '../../hooks';
import './BenefitsSection.css';

/**
 * BenefitsSection - Sección "Benefits of Nonsurgical Treatments" reutilizable
 * Replica exactamente la estructura original con soporte para todas las variantes
 */
const BenefitsSection = ({ data }) => {
  const headerRef = useSingleIntersectionObserver();

  // Función para renderizar contenido con posibles enlaces HTML
  const renderContent = (text) => {
    if (typeof text === 'object' && text.html) {
      return <span dangerouslySetInnerHTML={{ __html: text.html }} />;
    }
    return text;
  };

  return (
    <section className="condition-benefits-section">
      <div className="condition-benefits-container">
        <div className="condition-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="condition-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="condition-benefits-content">
          <div className="condition-benefits-left">
            <h2>{data.title}</h2>
            <p>{data.intro}</p>
            {data.leftContent && data.leftContent.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
          <div className="condition-benefits-right">
            {/* Less Invasive / Noninvasive Section */}
            {data.lessInvasive && (
              <div className="condition-benefits-subsection">
                <h3>{data.lessInvasive.title}</h3>
                {data.lessInvasive.content.map((text, index) => (
                  <p key={index}>{renderContent(text)}</p>
                ))}
              </div>
            )}
            
            {/* Faster Recovery Section */}
            {data.fasterRecovery && (
              <div className="condition-benefits-subsection">
                <h3>{data.fasterRecovery.title}</h3>
                {data.fasterRecovery.content && data.fasterRecovery.content.map((text, index) => (
                  <p key={index}>{renderContent(text)}</p>
                ))}
                
                {/* Recovery Lists (para Back, Hip, etc.) */}
                {data.fasterRecovery.recoveryList && (
                  <div className="condition-benefits-list-double">
                    {data.fasterRecovery.recoveryList.map((list, listIndex) => (
                      <ul key={listIndex}>
                        {list.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
                
                {/* Single Recovery List (para Shoulder) */}
                {data.fasterRecovery.list && (
                  <ul>
                    {data.fasterRecovery.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {/* Texto después de la lista */}
                {data.fasterRecovery.afterList && (
                  <p>{data.fasterRecovery.afterList}</p>
                )}
              </div>
            )}
            
            {/* Lower Risks Section */}
            {data.lowerRisks && (
              <div className="condition-benefits-subsection">
                <h3>{data.lowerRisks.title}</h3>
                <p>{renderContent(data.lowerRisks.intro)}</p>
                
                {/* Lista simple o doble (solo si hay elementos) */}
                {data.lowerRisks.risksList ? (
                  <div className="condition-benefits-list-double">
                    {data.lowerRisks.risksList.map((list, listIndex) => (
                      <ul key={listIndex}>
                        {list.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                ) : data.lowerRisks.risks && data.lowerRisks.risks.length > 0 ? (
                  <ul>
                    {data.lowerRisks.risks.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                ) : null}
                
                <p className="condition-benefits-note">{data.lowerRisks.conclusion}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
