import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeElbowTherapy.css';

const WhatIsRegenerativeElbowTherapy = () => {
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
    <section className="what-is-elbow-therapy-section">
      <div className="what-is-elbow-therapy-container">
        <div className="what-is-elbow-therapy-panel">
          <div className="what-is-elbow-therapy-header animated fadeInDown" ref={headerRef}>
            <h3>What is</h3>
            <img
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-331.svg"
              alt="Decorative divider line"
              width="176"
              height="7"
              loading="lazy"
            />
          </div>
          <div className="what-is-elbow-therapy-text">
            <h2>Regenerative Elbow Pain Therapy?</h2>
            <p>
              Regenerative elbow pain therapy harnesses your body&rsquo;s natural healing mechanisms to relieve pain and
              improve joint function. While the goal of regenerative treatments is the same as elbow surgery — to reduce
              pain and enhance mobility — our biologic therapies avoid the numerous risks associated with surgery,
              offering a less invasive and therefore safer alternative.
            </p>
            <p className="what-is-elbow-therapy-highlight">
              <strong>Our regenerative elbow treatment without surgery can alleviate your pain without:</strong>
            </p>
            <ul>
              <li>Additional damage to your tissues</li>
              <li>Risking the complications of surgery</li>
              <li>Experiencing additional pain</li>
              <li>Building up scar tissue</li>
              <li>Developing post-traumatic arthritis</li>
              <li>Having to take medications</li>
              <li>Missing work</li>
            </ul>
            <p className="what-is-elbow-therapy-more">
              Consider regenerative alternatives to{' '}
              <a href="https://qckinetix.com/blog/is-elbow-surgery-painful/">elbow surgery</a> before you have the
              arthroplasty, carpal tunnel release, or elbow replacement your surgeon advises.
            </p>
            <div className="what-is-elbow-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default WhatIsRegenerativeElbowTherapy;


