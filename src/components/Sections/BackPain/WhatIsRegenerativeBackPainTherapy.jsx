import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeBackPainTherapy.css';

const WhatIsRegenerativeBackPainTherapy = () => {
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
    <section className="what-is-back-therapy-section">
      <div className="what-is-back-therapy-container">
        <div className="what-is-back-therapy-content">
          <div className="what-is-back-therapy-panel condition-two">
            <div className="what-is-back-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-back-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-back-therapy-text">
              <div className="what-is-back-therapy-text-content">
                <h2>Regenerative Back Pain Therapy?</h2>
                <p>
                  Our regenerative back pain treatments avoid the risk of further damage to the joint and cartilage by
                  targeting healing directly. At QC Kinetix<sup className="reg-symbol">®</sup>, we customize
                  orthobiologic therapies for each patient to stimulate the body’s natural ability to repair and
                  revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the
                  source of the patient&apos;s pain, promoting targeted recovery.
                </p>
                <p>
                  <strong>Regenerative back treatment without surgery can alleviate your pain without:</strong>
                </p>
                <ul>
                  <li>Additional damage to the tissue of your back</li>
                  <li>Risks of complications</li>
                  <li>Added pain</li>
                  <li>Scar tissue buildup</li>
                  <li>Developing post-traumatic arthritis</li>
                  <li>Pain medications</li>
                  <li>Missing work</li>
                  <li>Loss of independence</li>
                </ul>
                <p>
                  Investigate regenerative nonsurgical back pain treatment before you undergo the discectomy,
                  laminectomy, or artificial disk replacement your surgeon recommends.
                </p>
              </div>
              <div className="what-is-back-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeBackPainTherapy;


