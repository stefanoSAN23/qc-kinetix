import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeTendonLigamentPainTherapy.css';

const WhatIsRegenerativeTendonLigamentPainTherapy = () => {
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
    <section className="what-is-tendon-ligament-therapy-section">
      <div className="what-is-tendon-ligament-therapy-container">
        <div className="what-is-tendon-ligament-therapy-content">
          <div className="what-is-tendon-ligament-therapy-panel condition-two">
            <div className="what-is-tendon-ligament-therapy-header-wrapper animated fadeInDown" ref={headerRef}>
              <h3>What is</h3>
              <div className="what-is-tendon-ligament-therapy-dots">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className={`dot dot-${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="what-is-tendon-ligament-therapy-text">
              <div className="what-is-tendon-ligament-therapy-text-content">
                <h2>Regenerative Tendon &amp; Ligament Pain Therapy?</h2>
                <p>
                  QC Kinetix delivers genuine relief from tendon and ligament pain. Rather than cause additional harm to
                  your body, we skip invasive surgery and go straight to healing and relief for tendon pain. Our
                  nonsurgical, drug-free regenerative therapies focus your body's ability to heal and repair itself at the
                  pain's source. We don't mask or manage your pain - instead, we stimulate your own innate healing
                  mechanisms to achieve genuine tendon and ligament pain relief.
                </p>
                <p>
                  <strong>Regenerative tendon and ligament treatment without surgery can reduce your pain without:</strong>
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
                <p>
                  Consider regenerative alternatives to surgery before you have the tendon or ligament repair or replacement
                  your surgeon advises.
                </p>
              </div>
              <div className="what-is-tendon-ligament-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeTendonLigamentPainTherapy;


