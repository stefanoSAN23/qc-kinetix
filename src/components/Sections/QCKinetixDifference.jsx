import { useEffect, useRef } from 'react';
import './QCKinetixDifference.css';

const QCKinetixDifference = ({ hideButton = false }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (hideButton) {
      return undefined;
    }

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, [hideButton]);
  const differences = [
    {
      title: 'Patient-First',
      subtitle: 'Philosophy',
      description: "No compromising. All of our choices are made with our patients' physical well-being in mind. The ultimate outcome — to improve the lives of our patients through a drug- and surgery-free alternative. Our goal is to restore and improve their lives."
    },
    {
      title: 'Personalized',
      subtitle: 'Treatment',
      description: "Every journey starts with a thorough understanding of your unique health needs. You'll meet with our medical provider to determine if you're a candidate and receive a personalized treatment plan tailored to you."
    },
    {
      title: 'Experienced Medical',
      subtitle: 'Professionals',
      description: 'Our regenerative health providers are highly trained Doctors, Physicians Assistants, and Nurse Practitioners who are board-certified in sports medicine, orthopedic medicine, emergency medicine, and geriatrics.'
    },
    {
      title: 'Revolutionary',
      subtitle: 'Approach',
      description: "We are leading the way in regenerative medicine, innovating pain relief with advanced techniques that use your body's own healing powers."
    }
  ];

  return (
    <section className="qc-difference-section">
      <div className="qc-difference-container">
        <h2 className="qc-difference-title">The QC Kinetix Difference</h2>
        
        <div className="differences-grid">
          {differences.map((diff, index) => (
            <div key={index} className="difference-card">
              <div className="difference-icon-box">
                <div className="difference-content-box">
                  <h3 className="difference-title">
                    <span>{diff.title}</span>
                  </h3>
                  <p className="difference-subtitle">{diff.subtitle}</p>
                </div>
              </div>
              
              <div className="difference-description">
                <img 
                  src="https://qckinetix.com/wp-content/smush-webp/2025/04/light-dark.png.webp" 
                  alt="Decorative divider line" 
                  width="101" 
                  height="5"
                  className="divider-img"
                  loading="lazy"
                />
                <p>{diff.description}</p>
              </div>
            </div>
          ))}
        </div>

        {!hideButton && (
          <div className="qc-difference-button animated fadeInUp" ref={buttonRef}>
            <a href="/about-us/" className="knee-pain-btn">
              Learn More
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default QCKinetixDifference;

