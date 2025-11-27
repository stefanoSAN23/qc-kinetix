import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeAnklePainTherapy.css';

const WhatIsRegenerativeAnklePainTherapy = () => {
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
    <section className="what-is-ankle-therapy-section">
      <div className="what-is-ankle-therapy-container">
        <div className="what-is-ankle-therapy-content">
          <div className="what-is-ankle-therapy-panel condition-two">
            <div className="what-is-ankle-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-ankle-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-ankle-therapy-text">
              <div className="what-is-ankle-therapy-text-content">
                <h2>Regenerative Ankle Pain Therapy?</h2>
                <p>
                  Our regenerative ankle pain treatments without surgery avoid additional damage to the joint and
                  cartilage by focusing directly on healing. At QC Kinetix<sup className="reg-symbol">®</sup>, we
                  customize biologic therapies for each patient to stimulate the body's innate ability to revive and
                  revitalize its tissues. We then guide these self-healing mechanisms to target the source of each
                  patient's pain.
                </p>
                <p>
                  <strong>Regenerative ankle treatment without surgery can reduce your pain without:</strong>
                </p>
                <ul>
                  <li>Further injury to your tissues</li>
                  <li>Surgical complication risks</li>
                  <li>A long, painful recovery</li>
                  <li>Scar tissue</li>
                  <li>Post-surgical arthritis</li>
                  <li>Prescription pain medication</li>
                  <li>Absence from work</li>
                </ul>
                <p>
                  Consider regenerative alternatives to ankle surgery before having the ankle fusion, ligament
                  reconstruction, or ankle replacement your surgeon recommends.
                </p>
              </div>
              <div className="what-is-ankle-therapy-button animated fadeInUp" ref={buttonRef}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRegenerativeAnklePainTherapy;

