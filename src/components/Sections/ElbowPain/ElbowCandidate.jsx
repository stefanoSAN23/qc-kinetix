import { useEffect, useRef } from 'react';
import './ElbowCandidate.css';

const ElbowCandidate = () => {
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

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section className="elbow-candidate-section">
      <div className="elbow-candidate-container">
        <div className="elbow-candidate-left">
          <div className="elbow-candidate-text">
            <h2>
              Are You a Candidate for
              <br />
              Regenerative Elbow Treatment?
            </h2>
            <p>
              To determine whether you&rsquo;re a candidate for regenerative elbow pain treatment, ask yourself whether
              the benefits of nonsurgical elbow pain relief appeal to you. If they do,{' '}
              <a href="https://qckinetix.com/#schedule-consultation">schedule your free consultation</a> at your{' '}
              <a href="/qc-locations/">local QC Kinetix clinic</a>. We will thoroughly examine you and your medical
              records to learn how we can help you.
            </p>
          </div>
          <div className="elbow-candidate-button animated fadeInUp" ref={buttonRef}>
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
        <div className="elbow-candidate-right">
          <div className="elbow-candidate-text">
            <p>
              <strong>Some of the factors that make you a good candidate for regenerative therapy include:</strong>
            </p>
            <ul>
              <li>You experience severe elbow pain</li>
              <li>Your pain results from overuse, an injury, or a degenerative condition</li>
              <li>You&rsquo;re anxious to avoid elbow surgery</li>
              <li>You&rsquo;re not considered a good candidate for surgery</li>
              <li>The extensive recovery time would be a hardship for you</li>
              <li>You wish to avoid taking opioids and/or pain medications</li>
            </ul>
            <p>
              Do any of these circumstances describe you? If so, we look forward to meeting with you to explore your
              candidacy for our regenerative treatment for elbow pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElbowCandidate;

