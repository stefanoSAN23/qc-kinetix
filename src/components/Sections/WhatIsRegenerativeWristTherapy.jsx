import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeWristTherapy.css';

const WhatIsRegenerativeWristTherapy = () => {
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
    <section className="what-is-wrist-therapy-section">
      <div className="what-is-wrist-therapy-container">
        <div className="what-is-wrist-therapy-panel">
          <div className="what-is-wrist-therapy-header animated fadeInDown" ref={headerRef}>
            <h3>What is</h3>
            <img
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-331.svg"
              alt="Decorative divider line"
              width="176"
              height="7"
              loading="lazy"
            />
          </div>
          <div className="what-is-wrist-therapy-text">
            <h2>Regenerative Wrist Pain Therapy?</h2>
            <p>
              While surgery may be required in some cases for wrist pain relief, nonsurgical treatments are often an
              effective, less invasive option. Regenerative medicine utilizes your body&apos;s natural healing processes,
              promoting tissue repair, reducing inflammation, and stimulating the regeneration of damaged tissues to improve
              function and alleviate pain.
            </p>
            <p className="what-is-wrist-therapy-highlight">
              <strong>Regenerative wrist treatment without surgery can alleviate your pain without:</strong>
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
            <p className="what-is-wrist-therapy-more">
              Consider regenerative alternatives to wrist surgery before you have the arthrodesis, carpal tunnel release, or
              wrist replacement your surgeon advises.
            </p>
            <div className="what-is-wrist-therapy-button animated fadeInUp" ref={buttonRef}>
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
        </div>
      </div>
    </section>
  );
};

export default WhatIsRegenerativeWristTherapy;


