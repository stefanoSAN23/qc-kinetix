import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeArthritisPainTherapy.css';

const WhatIsRegenerativeArthritisPainTherapy = () => {
  const headerRef = useRef(null);
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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }

      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section className="what-is-arthritis-therapy-section">
      <div className="what-is-arthritis-therapy-container">
        <div className="what-is-arthritis-therapy-content">
          <div className="what-is-arthritis-therapy-panel condition-two">
            <div className="what-is-arthritis-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-arthritis-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-arthritis-therapy-text">
              <div className="what-is-arthritis-therapy-text-content">
                <h2>Regenerative Arthritis Pain Therapy?</h2>
                <p>
                  Our regenerative arthritis pain treatments avoid the damage surgery does to the body, going straight to
                  the healing. Our nonsurgical methods for treating arthritis go to the source of your pain, employing a
                  variety of natural and biologic arthritis pain relief treatments. Rather than mask your pain, our
                  therapies work to rebuild the damaged joint tissues to resolve the pain at its source.
                </p>
                <p>
                  <strong>Regenerative arthritis treatment without surgery can reduce your pain without:</strong>
                </p>
                <ul>
                  <li>Additional tissue damage</li>
                  <li>Potential surgical complications</li>
                  <li>Additional pain</li>
                  <li>Scar tissue buildup</li>
                  <li>Strong prescription pain medications</li>
                  <li>Lengthy recovery</li>
                </ul>
                <p>
                  Consider regenerative alternatives to surgery before undergoing joint repair, replacement, or fusion as
                  recommended by your surgeon.
                </p>
              </div>
              <div className="what-is-arthritis-therapy-button animated fadeInUp" ref={buttonRef}>
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
        </div>
      </div>
    </section>
  );
};

export default WhatIsRegenerativeArthritisPainTherapy;


