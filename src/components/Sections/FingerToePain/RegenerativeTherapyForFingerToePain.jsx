import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForFingerToePain.css';

const RegenerativeTherapyForFingerToePain = () => {
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
    <section className="regenerative-therapy-finger-toe-section">
      <div className="regenerative-therapy-finger-toe-container">
        <div className="regenerative-therapy-finger-toe-image-wrapper">
          <div className="regenerative-therapy-finger-toe-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/nguy-n-hi-p-XRzuBW1w6f4-unsplash.png.webp"
              alt="Finger and toe pain treatment"
              width="453"
              height="653"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-finger-toe-content">
          <div className="regenerative-therapy-finger-toe-text">
            <h1>Finger &amp; Toe Pain Relief</h1>
            <p>
              Many who suffer from finger or toe pain seek a natural solution. They shy away from the pain and lengthy
              recovery involved in surgery and are anxious to avoid potential complications. QC Kinetix
              <sup className="reg-symbol">®</sup> clinics offer another solution for finger and toe joint pain treatment:
              regenerative medicine. This therapy harnesses the body's innate healing mechanisms, offering a natural way to
              help toe and finger pain. With regenerative medicine, you can experience genuine pain relief from conditions
              like:
            </p>
            <ul>
              <li>Osteoarthritis (OA)</li>
              <li>Pain</li>
              <li>Injuries</li>
            </ul>
            <p>
              When rest, ice, compression, and elevation (RICE) cannot provide sufficient relief and you want to avoid
              surgery, regenerative finger or toe{' '}
              <a href="/joint-pain-treatments/">joint pain treatment</a> may be the best choice.
            </p>
          </div>
          <div className="regenerative-therapy-finger-toe-button animated fadeInUp" ref={buttonRef}>
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
    </section>
  );
};

export default RegenerativeTherapyForFingerToePain;

