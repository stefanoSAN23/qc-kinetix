import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeFootHandPainTherapy.css';

const WhatIsRegenerativeFootHandPainTherapy = () => {
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
    <section className="what-is-foot-hand-therapy-section">
      <div className="what-is-foot-hand-therapy-container">
        <div className="what-is-foot-hand-therapy-content">
          <div className="what-is-foot-hand-therapy-panel condition-two">
            <div className="what-is-foot-hand-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-foot-hand-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-foot-hand-therapy-text">
              <div className="what-is-foot-hand-therapy-text-content">
                <h2>Regenerative Foot &amp; Hand Pain Therapy?</h2>
                <p>
                  Our regenerative foot and hand pain treatments avoid the risk of further damage to the joint and cartilage
                  by targeting healing directly. At QC Kinetix, we customize orthobiologic therapies for each patient to
                  stimulate the body's natural ability to repair and revitalize its own tissues. We then guide these
                  self-healing mechanisms to focus specifically on the source of the patient's pain, promoting targeted
                  recovery.
                </p>
                <p>
                  <strong>Regenerative hand and foot pain treatments can reduce your pain and improve function without:</strong>
                </p>
                <ul>
                  <li>Causing additional tissue damage</li>
                  <li>Risking surgical complications</li>
                  <li>Causing additional pain</li>
                  <li>Creating scar tissue</li>
                  <li>Taking pharmaceutical pain medications</li>
                  <li>Developing post-traumatic arthritis</li>
                  <li>Missing work</li>
                </ul>
                <p>Before undergoing surgery, explore the possibilities of regenerative treatment for pain in the foot or hand.</p>
              </div>
              <div className="what-is-foot-hand-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeFootHandPainTherapy;

