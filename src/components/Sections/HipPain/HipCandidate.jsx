import { useEffect, useRef } from 'react';
import './HipCandidate.css';

const HipCandidate = () => {
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
    <section className="hip-candidate-section">
      <div className="hip-candidate-container">
        <div className="hip-candidate-left">
          <div className="hip-candidate-text">
            <h2>Are You a Candidate for Regenerative Hip Treatment?</h2>
            <p>
              In some cases, hip surgery is necessary. In many cases, regenerative medicine is a viable alternative to hip
              surgery. To discover whether you’re a candidate for regenerative hip repair without surgery, come in for a
              free consultation at your <a href="/qc-locations/">local QC Kinetix</a> clinic. We will meet with you, review
              your medical records, answer all your questions, and conduct a thorough examination.
            </p>
          </div>
          <div className="hip-candidate-button animated fadeInUp" ref={buttonRef}>
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
        <div className="hip-candidate-right">
          <div className="hip-candidate-text">
            <p>
              <strong>You are a good candidate for nonsurgical hip pain treatment if:</strong>
            </p>
            <ul>
              <li>Your chronic hip pain has not responded well to conventional treatments.</li>
              <li>You have osteoarthritis (OA).</li>
              <li>You want to be able to do your favorite activities again.</li>
              <li>You want to avoid the pain and potential complications of surgery.</li>
              <li>Steroid injection(s) and over-the-counter medications have not worked for you.</li>
            </ul>
            <p className="hip-candidate-note">
              If any of these describe you, we look forward to meeting with you to explore our regenerative alternatives to
              hip surgery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HipCandidate;


