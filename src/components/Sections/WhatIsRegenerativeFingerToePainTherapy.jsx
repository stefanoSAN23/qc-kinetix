import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeFingerToePainTherapy.css';

const WhatIsRegenerativeFingerToePainTherapy = () => {
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
    <section className="what-is-finger-toe-therapy-section">
      <div className="what-is-finger-toe-therapy-container">
        <div className="what-is-finger-toe-therapy-content">
          <div className="what-is-finger-toe-therapy-panel condition-two">
            <div className="what-is-finger-toe-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-finger-toe-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-finger-toe-therapy-text">
              <div className="what-is-finger-toe-therapy-text-content">
                <h2>Regenerative Finger &amp; Toe Pain Therapy?</h2>
                <p>
                  Our regenerative finger and toe pain treatments avoid additional damage to the joint and cartilage, going
                  straight to the healing. QC Kinetix customizes biologic therapies for each patient to stimulate their
                  body’s innate abilities to revive and revitalize its own tissues. We then guide the self-healing mechanisms
                  and train them to focus on the source of the patient’s pain.
                </p>
                <p>
                  <strong>Regenerative finger or toe treatment without surgery can reduce your pain without:</strong>
                </p>
                <ul>
                  <li>Additional damage to your tissues</li>
                  <li>Risking the complications of surgery</li>
                  <li>Experiencing additional pain</li>
                  <li>Building up scar tissue</li>
                  <li>Developing post-traumatic arthritis</li>
                  <li>Having to take opioids</li>
                  <li>Missing work</li>
                </ul>
                <p>Consider regenerative alternatives to surgery before you have the osteotomy, arthroplasty, or joint fusion your surgeon advises.</p>
              </div>
              <div className="what-is-finger-toe-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeFingerToePainTherapy;


