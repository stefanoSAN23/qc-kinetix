import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForBackPain.css';

const RegenerativeTherapyForBackPain = () => {
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
    <section className="regenerative-therapy-back-section">
      <div className="regenerative-therapy-back-container">
        <div className="regenerative-therapy-back-image-wrapper">
          <div className="regenerative-therapy-back-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/back-pain-6949392_1920.png.webp"
              alt="Back pain treatment"
              width="453"
              height="632"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-back-content">
          <div className="regenerative-therapy-back-text">
            <h1>Regenerative Medicine for Back Pain</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with back
              pain: nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural
              regenerative lower back pain therapy that activates your body’s healing ability so you experience lasting
              pain relief from conditions like:
            </p>
            <ul>
              <li>Sciatica</li>
              <li>Osteoarthritis (OA)</li>
              <li>Herniated disc</li>
              <li>Sprains &amp; strains</li>
              <li>Lumbar spinal stenosis</li>
              <li>Scoliosis</li>
            </ul>
            <p>
              Traditionally, steroid injections and surgery have been the primary solutions for chronic back pain. But
              imagine alleviating your back pain and returning to your favorite activities without the risks associated
              with surgery. QC Kinetix’s regenerative alternatives to back surgery can help you reclaim your lifestyle,
              providing lasting pain relief, improved range of motion, and restored functionality to the back.
            </p>
          </div>
          <div className="regenerative-therapy-back-button animated fadeInUp" ref={buttonRef}>
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

export default RegenerativeTherapyForBackPain;

