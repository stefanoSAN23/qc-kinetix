import { useEffect, useRef } from 'react';
import './AnkleCandidate.css';

const AnkleCandidate = () => {
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
    <section className="ankle-candidate-section">
      <div className="ankle-candidate-container">
        <div className="ankle-candidate-left">
          <div className="ankle-candidate-text">
            <h2>Are You a Candidate for Regenerative Ankle Treatment?</h2>
            <p>
              The best way to discover whether you're a candidate for regenerative ankle repair without surgery is to
              come in for your free consultation at your <a href="/qc-locations/">local QC Kinetix</a> clinic. We'll
              meet with you, review your medical records, answer all your questions, and conduct a thorough examination.
            </p>
          </div>
          <div className="ankle-candidate-button animated fadeInUp" ref={buttonRef}>
            <a
              href="/request-your-first-appointment/"
              className="qc-btn"
              onClick={(event) => {
                event.preventDefault();
                window.location.href = '/request-your-first-appointment/';
              }}
            >
              Request an Appointment
            </a>
          </div>
        </div>
        <div className="ankle-candidate-right">
          <div className="ankle-candidate-text">
            <p>
              <strong>Factors that make you a good candidate for regenerative alternatives to ankle surgery include:</strong>
            </p>
            <ul>
              <li>You experience chronic ankle pain</li>
              <li>Your pain is the result of injury, repetitive stress, or joint degeneration</li>
              <li>You want to avoid joint replacement surgery</li>
              <li>You may not be a good candidate for surgery</li>
              <li>The extensive recovery from surgery would be a hardship for you</li>
              <li>You wish to avoid taking opioids and/or pain medications</li>
            </ul>
            <p>
              If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative
              nonsurgical ankle repair can decrease your pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnkleCandidate;

