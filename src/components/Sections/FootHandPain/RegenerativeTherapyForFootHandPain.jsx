import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForFootHandPain.css';

const RegenerativeTherapyForFootHandPain = () => {
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
    <section className="regenerative-therapy-foot-hand-section">
      <div className="regenerative-therapy-foot-hand-container">
        <div className="regenerative-therapy-foot-hand-image-wrapper">
          <div className="regenerative-therapy-foot-hand-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/towfiqu-barbhuiya-v47ltneXusM-unsplash.png.webp"
              alt="Foot and hand pain treatment"
              width="453"
              height="662"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-foot-hand-content">
          <div className="regenerative-therapy-foot-hand-text">
            <h1>Regenerative Medicine for Hand &amp; Foot Pain</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with foot or hand
              pain: nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural regenerative
              foot or hand pain therapy that activates your body's own ability to revitalize its tissues so you experience
              genuine pain relief from conditions like:
            </p>
            <ul>
              <li>Osteoarthritis (OA)</li>
              <li>Carpal tunnel syndrome and tarsal tunnel syndrome</li>
              <li>Neuromas</li>
              <li>Tendonitis</li>
              <li>Nerve compression or damage</li>
            </ul>
            <p>
              Traditionally, steroid injections and surgery have been the primary solutions for chronic foot or hand pain. But
              imagine alleviating your foot or hand pain and returning to your favorite activities without the risks associated
              with surgery. QC Kinetix's regenerative alternatives to foot or hand surgery can help you reclaim your lifestyle,
              providing lasting pain relief, improved range of motion, and restored functionality to your feet, hands, toes, or
              fingers.
            </p>
          </div>
          <div className="regenerative-therapy-foot-hand-button animated fadeInUp" ref={buttonRef}>
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

export default RegenerativeTherapyForFootHandPain;

