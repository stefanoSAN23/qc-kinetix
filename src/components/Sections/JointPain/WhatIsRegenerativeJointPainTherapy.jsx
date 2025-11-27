import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeJointPainTherapy.css';

const WhatIsRegenerativeJointPainTherapy = () => {
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
    <section className="what-is-joint-therapy-section">
      <div className="what-is-joint-therapy-container">
        <div className="what-is-joint-therapy-content">
          <div className="what-is-joint-therapy-panel condition-two">
            <div className="what-is-joint-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-joint-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-joint-therapy-text">
              <div className="what-is-joint-therapy-text-content">
                <h2>Regenerative Joint Pain Therapy?</h2>
                <p>
                  Our regenerative joint pain treatments without surgery avoid additional damage to the joint and cartilage,
                  going straight to the healing. At QC Kinetix, we offer advanced regenerative medicine treatments for joint
                  pain designed to stimulate your body's natural healing and reduce pain. Our biologic therapies harness the
                  body's own healing mechanisms to promote healthy restoration, leading to lasting pain relief.
                </p>
                <p>
                  <strong>Regenerative joint treatment without surgery can alleviate your pain without:</strong>
                </p>
                <ul>
                  <li>Additional damage to your tissues</li>
                  <li>Experiencing additional pain</li>
                  <li>Risking the complications of surgery</li>
                  <li>Building up scar tissue</li>
                  <li>Developing post-traumatic arthritis</li>
                  <li>Having to take opioids</li>
                  <li>Missing work</li>
                </ul>
                <p>
                  Consider regenerative alternatives to joint surgery before you have the joint replacement your surgeon
                  advises.
                </p>
              </div>
              <div className="what-is-joint-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeJointPainTherapy;

