import { useEffect, useRef } from 'react';
import './BackCandidate.css';

const BackCandidate = () => {
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
    <section className="back-candidate-section">
      <div className="back-candidate-container">
        <div className="back-candidate-left">
          <div className="back-candidate-text">
            <h2>
              Are You a Candidate for
              <br />
              Regenerative Lower Back Treatment?
            </h2>
            <p>
              Scheduling your free consultation at your <a href="/qc-locations/">local QC Kinetix</a> clinic is the best
              way to learn whether you’re a good candidate for regenerative lower back pain relief. We meet with you,
              review your symptoms and medical records, conduct a thorough examination, and answer all your questions.
            </p>
          </div>
          <div className="back-candidate-button animated fadeInUp" ref={buttonRef}>
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
        <div className="back-candidate-right">
          <div className="back-candidate-text">
            <p>
              <strong>Factors that make you a good candidate for regenerative lower back treatment include:</strong>
            </p>
            <ul>
              <li>You experience chronic back pain</li>
              <li>Your pain results from injury, repetitive stress, or joint degeneration</li>
              <li>You want to avoid back surgery</li>
              <li>You’re not considered a good candidate for back surgery</li>
              <li>The extensive recovery from surgery would be a hardship for you</li>
              <li>You wish to avoid taking opioids and/or pain medications</li>
            </ul>
            <p className="back-candidate-note">
              Do any of these statements describe you? If so, we look forward to meeting with you to learn how
              regenerative, nonsurgical back pain treatment can decrease your pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackCandidate;


