import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeHipPainTherapy.css';

const WhatIsRegenerativeHipPainTherapy = () => {
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
    <section className="what-is-hip-therapy-section">
      <div className="what-is-hip-therapy-container">
        <div className="what-is-hip-therapy-content">
          <div className="what-is-hip-therapy-panel condition-two">
            <div className="what-is-hip-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-hip-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-hip-therapy-text">
              <div className="what-is-hip-therapy-text-content">
                <h2>Regenerative Hip Pain Therapy?</h2>
                <p>
                  Our regenerative hip pain treatments avoid the risk of further damage to the joint and cartilage by
                  targeting healing directly. At QC Kinetix<sup className="reg-symbol">®</sup>, we customize orthobiologic
                  therapies for each patient to stimulate the body’s natural ability to repair and revitalize its own
                  tissues. We then guide these self-healing mechanisms to focus specifically on the source of the
                  patient&apos;s pain, promoting targeted recovery.
                </p>
                <p>
                  <strong>Unlike surgery, pain relief through regenerative medicine involves:</strong>
                </p>
                <ul>
                  <li>No additional damage to your body</li>
                  <li>No additional pain</li>
                  <li>No scar tissue buildup</li>
                  <li>No drugs</li>
                  <li>No risk of complications</li>
                  <li>No lengthy and painful recovery</li>
                </ul>
                <p>
                  Yet regenerative hip pain therapy and surgery actually have a lot in common. Both approaches rely on the
                  body to heal its damaged tissues. It’s just that surgery causes additional damage and pain before the
                  body heals.
                </p>
              </div>
              <div className="what-is-hip-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeHipPainTherapy;


