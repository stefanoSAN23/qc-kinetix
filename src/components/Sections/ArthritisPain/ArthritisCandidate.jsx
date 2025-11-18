import { useEffect, useRef } from 'react';
import './ArthritisCandidate.css';

const ArthritisCandidate = () => {
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
    <section className="arthritis-candidate-section">
      <div className="arthritis-candidate-container">
        <div className="arthritis-candidate-left">
          <div className="arthritis-candidate-text">
            <h2>Are You a Candidate for Regenerative Arthritis Pain Treatment?</h2>
            <p>
              The best way to discover whether you’re a candidate for regenerative arthritis pain relief without surgery is
              to come in for your free consultation at your <a href="/qc-locations/">local QC Kinetix</a> clinic. We’ll meet
              with you, review your medical records, answer your questions, and conduct a thorough examination.
            </p>
          </div>
          <div className="arthritis-candidate-button animated fadeInUp" ref={buttonRef}>
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
        <div className="arthritis-candidate-right">
          <div className="arthritis-candidate-text">
            <p>
              <strong>You are a candidate for regenerative alternatives to arthritis pain relief surgery if:</strong>
            </p>
            <ul>
              <li>You experience chronic arthritis pain</li>
              <li>Your pain is the result of injury, repetitive stress, or joint degeneration</li>
              <li>You want to avoid surgery</li>
              <li>You may not be a good candidate for surgery</li>
              <li>The extensive recovery from surgery would be a hardship for you</li>
              <li>You wish to avoid taking opioids and/or pain medications</li>
            </ul>
            <p>
              If any of these apply to you, schedule an appointment to learn how regenerative nonsurgical arthritis pain
              treatment can decrease your pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArthritisCandidate;


