import { useEffect, useRef } from 'react';
import './NonsurgicalElbowTreatments.css';

const NonsurgicalElbowTreatments = () => {
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
    <section className="elbow-therapy-section">
      <div className="elbow-therapy-image-wrapper">
        <div className="elbow-therapy-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/QC-Kinetix9808.png.webp"
            alt="Patient receiving elbow treatment"
            width="453"
            height="663"
            loading="lazy"
          />
        </div>
      </div>
      <div className="elbow-therapy-content">
        <div className="elbow-therapy-text">
          <h1>Regenerative Medicine for Elbow Pain</h1>
          <p>
            <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with elbow pain:
            nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural regenerative elbow pain
            therapy that activates your body&rsquo;s own ability to revitalize its tissues so you experience genuine pain
            relief from conditions like:
          </p>
          <ul>
            <li>Bursitis</li>
            <li>Osteoarthritis (OA)</li>
            <li>Cubital tunnel syndrome</li>
            <li>Radial tunnel syndrome</li>
            <li>UCL injury</li>
            <li>
              <a href="https://qckinetix.com/blog/tennis-elbow-treatment/">Tennis elbow</a>
            </li>
            <li>Golfer&rsquo;s elbow</li>
          </ul>
          <p className="elbow-therapy-more">
            In some cases, successful elbow pain treatment requires surgery. However, in most cases, nonsurgical elbow pain
            relief is the best approach. Regenerative medicine provides a genuine elbow pain solution so you can reclaim your
            independence and resume the activities you love.
          </p>
        </div>
        <div className="elbow-therapy-button animated fadeInUp" ref={buttonRef}>
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
    </section>
  );
};

export default NonsurgicalElbowTreatments;

