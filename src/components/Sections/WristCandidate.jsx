import { useEffect, useRef } from 'react';
import './WristCandidate.css';

const WristCandidate = () => {
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
    <section className="wrist-candidate-section">
      <div className="wrist-candidate-container">
        <div className="wrist-candidate-left">
          <div className="wrist-candidate-text">
            <h2>Are You a Candidate for Regenerative Wrist Treatment?</h2>
            <p>
              Do the benefits of regenerative wrist pain treatment, as opposed to the pain and risks of surgery, appeal to
              you? If so, you owe it to yourself to learn whether you&apos;re a good candidate for our concentrated
              platelet-rich plasma therapies.{' '}
              <a href="https://qckinetix.com/#schedule-consultation">Schedule your free consultation</a> and examination at
              your <a href="/qc-locations/">local QC Kinetix clinic</a>.
            </p>
          </div>
          <div className="wrist-candidate-button animated fadeInUp" ref={buttonRef}>
            <a
              href="/request-your-first-appointment/"
              className="knee-pain-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/request-your-first-appointment/';
              }}
            >
              Request an Appointment
            </a>
          </div>
        </div>
        <div className="wrist-candidate-right">
          <div className="wrist-candidate-text">
            <p>
              <strong>What makes someone a good candidate for regenerative wrist pain treatment without surgery? Following are some factors we consider:</strong>
            </p>
            <ul>
              <li>You have chronic wrist pain</li>
              <li>Your pain is the result of injury, overuse, repetitive stress, or degeneration</li>
              <li>You&apos;re eager to avoid wrist surgery</li>
              <li>Your surgeon advises you&apos;re not a good candidate for surgery</li>
              <li>The lengthy recovery time would be a hardship for you</li>
              <li>You wish to avoid opioids and/or pain medications</li>
            </ul>
            <p>
              If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative
              nonsurgical wrist repair can decrease your pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WristCandidate;


