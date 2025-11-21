import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForTendonLigamentPain.css';

const RegenerativeTherapyForTendonLigamentPain = () => {
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
    <section className="regenerative-therapy-tendon-ligament-section">
      <div className="regenerative-therapy-tendon-ligament-container">
        <div className="regenerative-therapy-tendon-ligament-image-wrapper">
          <div className="regenerative-therapy-tendon-ligament-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/pexels-kindelmedia-7298407.png.webp"
              alt="Tendon and ligament pain treatment"
              width="453"
              height="662"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-tendon-ligament-content">
          <div className="regenerative-therapy-tendon-ligament-text">
            <h1>Non Surgical Tendon &amp; Ligament Pain Treatments</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> treatments revolutionize the treatment of tendon
              and ligament pain. The biologic therapies at QC Kinetix<sup className="reg-symbol">®</sup> leverage your body's
              innate capacity for self-repair, promoting natural healing and regeneration of injured tendons and ligaments.
              With this approach, we provide natural tendon and ligament pain relief, targeting the root cause of your pain
              to improve function. This approach activates your body's ability to revitalize its tissues so you experience
              genuine pain relief from conditions like:
            </p>
            <ul>
              <li>Tendonitis</li>
              <li>Tendinosis</li>
              <li>Tennis elbow</li>
              <li>Golfer's elbow</li>
              <li>Hamstring injuries</li>
              <li>Achilles tendon injuries</li>
              <li>Rotator cuff tendonitis</li>
              <li>Patellar tendon tear</li>
              <li>
                <a href="/knee-pain/acl-treatment/">ACL sprains and strains</a>
              </li>
              <li>MCL sprains and strains</li>
            </ul>
            <p>
              When rest, ice, compression, and elevation (RICE) cannot provide sufficient relief and you want to avoid
              surgery, regenerative tendon or ligament pain treatment may be an option for you. QC Kinetix's regenerative
              alternatives to tendon and ligament surgery can help you regain your lost lifestyle and enjoy lasting pain
              relief, improved range of motion, and improved functionality.
            </p>
          </div>
          <div className="regenerative-therapy-tendon-ligament-button animated fadeInUp" ref={buttonRef}>
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

export default RegenerativeTherapyForTendonLigamentPain;

