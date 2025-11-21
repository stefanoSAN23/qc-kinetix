import { useEffect, useRef } from 'react';
import './FootHandCandidate.css';

const FootHandCandidate = () => {
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
    <section className="foot-hand-candidate-section">
      <div className="foot-hand-candidate-container">
        <div className="foot-hand-candidate-left">
          <div className="foot-hand-candidate-text">
            <h2>Are You a Candidate for Regenerative Foot or Hand Treatment?</h2>
            <p>
              In some cases, hand or foot surgery is truly necessary. For most cases, regenerative therapy is a better
              solution.
            </p>
          </div>
          <div className="foot-hand-candidate-button animated fadeInUp" ref={buttonRef}>
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
        <div className="foot-hand-candidate-right">
          <div className="foot-hand-candidate-text">
            <p>
              <strong>The factors that make you a good candidate for regenerative treatment for pain in the foot or hand include:</strong>
            </p>
            <ul>
              <li>You have severe or chronic pain in the foot or hand</li>
              <li>You are anxious to avoid surgery</li>
              <li>You want surgery but are not considered a good candidate for it</li>
              <li>A lengthy recovery would be a hardship for you</li>
              <li>You wish to avoid opioids and/or pain medications</li>
            </ul>
            <p>
              If any describe you, please schedule a free consultation at your{' '}
              <a href="https://qckinetix.com/qc-locations/">local QC Kinetix</a> clinic. It's the best way to learn whether
              you're a good candidate for regenerative alternatives to foot surgery or hand surgery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootHandCandidate;

