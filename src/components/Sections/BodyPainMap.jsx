import { useState } from 'react';
import './BodyPainMap.css';

const BodyPainMap = () => {
  const [highlightedPart, setHighlightedPart] = useState(null);

  const bodyParts = [
    { name: 'knee', label: 'Knee', href: '/knee-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-251.svg', highlights: ['knee'] },
    { name: 'shoulder', label: 'Shoulder', href: '/shoulder-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-648.svg', highlights: ['shoulder'] },
    { name: 'elbow', label: 'Elbow', href: '/elbow-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-649.svg', highlights: ['elbow'] },
    { name: 'wrist', label: 'Wrist', href: '/wrist-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-651.svg', highlights: ['wrist'] },
    { name: 'back', label: 'Back', href: '/back-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-652.svg', highlights: ['back'] },
    { name: 'hip', label: 'Hip', href: '/hip-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-653.svg', highlights: ['hip'] },
    { name: 'ankle', label: 'Ankle', href: '/ankle-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-654.svg', highlights: ['ankle'] },
    { name: 'finger toe', label: 'Finger/Toe', href: '/finger-toe-pain/', icon: 'https://qckinetix.com/wp-content/uploads/2025/03/Group-655.svg', highlights: ['finger', 'toe'] }
  ];

  return (
    <section className="body-pain-section">
      <div className="body-pain-container">
        <div className="body-pain-desktop">
          <div className="human-body-container">
            <div className="human-body">
              <img 
                src="https://qckinetix.com/wp-content/smush-webp/2025/03/Bodys-8.png.webp" 
                alt="Human Body" 
                width="497"
                height="497"
                className="body-image"
                loading="lazy"
              />
              {bodyParts.map((part, idx) => (
                part.highlights.map((highlight, hIdx) => (
                  <div 
                    key={`${idx}-${hIdx}`}
                    className={`highlight ${highlight} ${highlightedPart === part.name ? 'active' : ''}`}
                  ></div>
                ))
              ))}
            </div>
          </div>
        </div>

        <div className="body-pain-content">
          <h2 className="body-pain-title">
            Where Are You<br />
            Experiencing Pain?
          </h2>
          <p className="body-pain-description">
            We offer various nonsurgical regenerative treatments that stimulate the body's natural healing mechanisms rather than simply masking symptoms or resorting to surgery.
          </p>
          <div className="body-pain-button desktop-only">
            <a href="/conditions/" className="knee-pain-btn">
              View All Conditions Treated
            </a>
          </div>
        </div>

        <div className="body-parts-grid">
          {bodyParts.map((part, index) => (
            <div 
              key={index}
              className="body-part-item"
              onMouseEnter={() => {
                setHighlightedPart(part.name);
              }}
              onMouseLeave={() => setHighlightedPart(null)}
            >
              <a href={part.href} className="part-link">
                <figure>
                  <img 
                    src={part.icon} 
                    alt={`${part.label} pain treatment`}
                    width="96"
                    height="96"
                    loading="lazy"
                  />
                  <figcaption>{part.label}</figcaption>
                </figure>
              </a>
            </div>
          ))}
        </div>

        <div className="body-pain-button mobile-only">
          <a href="/conditions/" className="knee-pain-btn">
            View All Conditions Treated
          </a>
        </div>
        <div className="body-pain-button mobile-only">
          <a href="/request-your-first-appointment/" className="knee-pain-btn">
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default BodyPainMap;

