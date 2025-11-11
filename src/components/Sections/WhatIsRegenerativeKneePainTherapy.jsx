import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeKneePainTherapy.css';

const WhatIsRegenerativeKneePainTherapy = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="what-is-knee-therapy-section">
      <div className="what-is-knee-therapy-container">
        <div className="what-is-knee-therapy-content">
          <div className="what-is-knee-therapy-panel condition-two">
            <div className="what-is-knee-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-knee-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`}></span>
                ))}
              </div>
            </div>
            <div className="what-is-knee-therapy-text">
              <div className="what-is-knee-therapy-text-content animated fadeInDown" ref={textRef}>
                <h2>Regenerative Knee Pain Therapy?</h2>
                <p>
                  Our regenerative knee pain treatments avoid the risk of further damage to the joint and cartilage by targeting healing directly. At QC Kinetix, we customize orthobiologic therapies for each patient to stimulate the body's natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient's pain, promoting targeted recovery.
                </p>
                <p><strong>Regenerative knee treatment without surgery can alleviate your pain without</strong>:</p>
                <ul>
                  <li>Additional damage to your tissues</li>
                  <li>Risking the complications of surgery</li>
                  <li>Experiencing additional pain</li>
                  <li>Building up scar tissue</li>
                  <li>Developing post-traumatic arthritis</li>
                  <li>Taking opioids</li>
                  <li>Having to miss work</li>
                </ul>
                <p>
                  Consider regenerative alternatives to knee surgery before you have the meniscectomy, meniscus repair, lateral release, tendon repair, arthrotomy, or knee replacements your surgeon advises.
                </p>
              </div>
              <div className="what-is-knee-therapy-button animated fadeInUp" ref={buttonRef}>
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
      </div>
    </section>
  );
};

export default WhatIsRegenerativeKneePainTherapy;

