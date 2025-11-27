import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForJointPain.css';

const RegenerativeTherapyForJointPain = () => {
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
    <section className="regenerative-therapy-joint-section">
      <div className="regenerative-therapy-joint-container">
        <div className="regenerative-therapy-joint-image-wrapper">
          <div className="regenerative-therapy-joint-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/pexels-kindelmedia-7298631.png.webp"
              alt="Joint pain treatment"
              width="453"
              height="622"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-joint-content">
          <div className="regenerative-therapy-joint-text">
            <h1>Regenerative Medicine for Joint Pain</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with joint pain:
              nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural regenerative joint
              pain therapy that activates your body's ability to revitalize its tissues so you experience genuine pain relief
              from conditions like:
            </p>
            <ul>
              <li>Bursitis</li>
              <li>Osteoarthritis (OA)</li>
              <li>Torn ligament</li>
              <li>Tendonitis</li>
              <li>Torn cartilage</li>
              <li>Gout</li>
            </ul>
            <p>
              Traditionally, steroid injections and surgery have been the primary solutions for chronic joint pain. But imagine
              alleviating your joint pain and returning to your favorite activities without the risks associated with surgery.
              QC Kinetix's regenerative alternatives to surgery can help you reclaim your lifestyle, providing lasting pain
              relief, improved range of motion, and restored functionality to the joint.
            </p>
          </div>
          <div className="regenerative-therapy-joint-button animated fadeInUp" ref={buttonRef}>
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

export default RegenerativeTherapyForJointPain;

