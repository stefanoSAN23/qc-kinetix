import { useEffect, useRef } from 'react';
import Button from '../Common/Button';
import './LaserTherapyResults.css';

const LaserTherapyResults = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
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

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="laser-therapy-results-section">
      <div className="laser-therapy-results-container">
        <div className="laser-therapy-results-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/09/AdobeStock_520966924-scaled-1-1024x683.jpeg.webp"
            alt="Class IV Laser Therapy Results"
            width="800"
            height="534"
            loading="lazy"
          />
        </div>

        <div className="laser-therapy-results-content">
          <div className="laser-therapy-results-text">
            <p>Clinically studied Class IV laser therapy reduces pain, increases function/range of motion, and improves quality of life, all without surgery or downtime. Ready to get started? Schedule a free consultation at your nearest <a href="/qc-locations/">QC Kinetix clinic location</a>. Be sure to bring your medical records and questions.</p>
          </div>

          <div className="laser-therapy-results-button animated fadeInUp" ref={buttonRef}>
            <Button 
              text="Request an Appointment" 
              href="/request-your-first-appointment/" 
              variant="primary"
              size="small"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserTherapyResults;

