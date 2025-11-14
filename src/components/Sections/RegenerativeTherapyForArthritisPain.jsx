import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForArthritisPain.css';

const RegenerativeTherapyForArthritisPain = () => {
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
    <section className="regenerative-therapy-arthritis-section">
      <div className="regenerative-therapy-arthritis-container">
        <div className="regenerative-therapy-arthritis-image-wrapper">
          <div className="regenerative-therapy-arthritis-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/mhrezaa-oydOFpht1QU-unsplash.png.webp"
              alt="Arthritis pain treatment"
              width="453"
              height="697"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-arthritis-content">
          <div className="regenerative-therapy-arthritis-text">
            <h1>Regenerative Arthritis Pain Treatment</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with arthritis
              pain: nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural regenerative
              arthritis pain therapy that activates your body’s own ability to revitalize its tissues so you experience
              genuine pain relief from rheumatoid arthritis (RA) or osteoarthritis (OA) in areas such as:
            </p>
            <ul>
              <li>Hips</li>
              <li>Knees</li>
              <li>Ankles</li>
              <li>Feet</li>
              <li>Toes</li>
              <li>Shoulders</li>
              <li>Elbows</li>
              <li>Wrists</li>
              <li>Hands</li>
              <li>Fingers</li>
              <li>Neck</li>
              <li>Lower back</li>
            </ul>
            <p>
              Traditional arthritis pain relief often relies on heat, anti-inflammatory medications, steroid shots, massage,
              and physical therapy. When those options fail, surgery is typically recommended. QC Kinetix’s regenerative
              alternatives to surgery can help you regain your lifestyle with lasting pain relief, improved movement, and
              enhanced functionality.
            </p>
          </div>
          <div className="regenerative-therapy-arthritis-button animated fadeInUp" ref={buttonRef}>
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
    </section>
  );
};

export default RegenerativeTherapyForArthritisPain;


