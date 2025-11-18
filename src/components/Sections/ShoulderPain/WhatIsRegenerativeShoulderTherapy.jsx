import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeShoulderTherapy.css';

const WhatIsRegenerativeShoulderTherapy = () => {
  const headerRef = useRef(null);
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
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="what-is-shoulder-therapy-section">
      <div className="what-is-shoulder-therapy-container">
        <div className="what-is-shoulder-therapy-panel">
          <div className="what-is-shoulder-therapy-header animated fadeInDown" ref={headerRef}>
            <h3>What is</h3>
            <img
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-331.svg"
              alt="Decorative divider line"
              width="176"
              height="7"
              loading="lazy"
            />
          </div>
          <div className="what-is-shoulder-therapy-text">
            <h2>Regenerative Shoulder Pain Therapy?</h2>
            <p>
              Our regenerative shoulder pain treatments avoid the risk of further damage to the joint and cartilage by targeting healing directly. At QC Kinetix, we customize orthobiologic therapies for each patient to stimulate the body's natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient's pain, promoting targeted recovery.
            </p>
            <p className="what-is-shoulder-therapy-highlight">
              <strong>Our regenerative shoulder pain treatments relieve your pain and improve joint functionality without these drawbacks related to surgery:</strong>
            </p>
            <ul>
              <li>No additional tissue damage</li>
              <li>No added pain</li>
              <li>No development of scar tissue</li>
              <li>No narcotics</li>
              <li>No risks of complications</li>
              <li>No risk of post-traumatic arthritis</li>
              <li>No lengthy and painful recovery</li>
            </ul>
            <p className="what-is-shoulder-therapy-more-text">
              Before you undergo the rotator cuff repair, joint replacement, or labrum repair your surgeon recommends, consider regenerative nonsurgical shoulder repair.
            </p>
            <div className="what-is-shoulder-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeShoulderTherapy;

