import { useEffect, useRef } from 'react';
import './ReadyToReduceHipPain.css';

const ReadyToReduceHipPain = () => {
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
    <section className="ready-reduce-hip-section">
      <div className="ready-reduce-hip-container">
        <div className="ready-reduce-hip-content">
          <div className="ready-reduce-hip-text">
            <p>
              Getting started with regenerative hip pain treatment without surgery is simple. Schedule your free
              consultation at your <a href="/qc-locations/">local QC Kinetix</a> clinic. Bring your medical records and all
              your questions. Before your appointment, learn <a href="/what-to-expect/">what to expect from QC Kinetix</a>.
            </p>
          </div>
          <div className="ready-reduce-hip-button animated fadeInUp" ref={buttonRef}>
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

export default ReadyToReduceHipPain;


