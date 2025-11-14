import { useEffect, useRef } from 'react';
import './ReadyToReduceTendonLigamentPain.css';

const ReadyToReduceTendonLigamentPain = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
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
  }, []);

  return (
    <section className="ready-reduce-tendon-ligament-section">
      <div className="ready-reduce-tendon-ligament-container">
        <div className="ready-reduce-tendon-ligament-content">
          <div className="ready-reduce-tendon-ligament-text">
            <p>
              Ready to reduce your tendon and ligament pain without surgery? Getting started is simple:
              <br />
              Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical records
              and a list of questions. Before your appointment, learn{' '}
              <a href="/what-to-expect/">what to expect from QC Kinetix</a>.
            </p>
          </div>
          <div className="ready-reduce-tendon-ligament-button animated fadeInUp" ref={buttonRef}>
            <a
              href="/request-your-first-appointment/"
              className="knee-pain-btn"
              onClick={(event) => {
                event.preventDefault();
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

export default ReadyToReduceTendonLigamentPain;


