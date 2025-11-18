import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForAnklePain.css';

const RegenerativeTherapyForAnklePain = () => {
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
    <section className="regenerative-therapy-ankle-section">
      <div className="regenerative-therapy-ankle-container">
        <div className="regenerative-therapy-ankle-image-wrapper">
          <div className="regenerative-therapy-ankle-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/erik-mclean-zJHQTqVpf1c-unsplash.png.webp"
              alt="Ankle pain treatment"
              width="453"
              height="642"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-ankle-content">
          <div className="regenerative-therapy-ankle-text">
            <h1>Regenerative Treatments for Ankle Pain</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with ankle
              pain: nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural
              regenerative ankle pain therapy that activates your body's own ability to revitalize its tissues so you
              experience genuine pain relief from conditions like:
            </p>
            <ul>
              <li>Ankle sprain</li>
              <li>Osteoarthritis (OA)</li>
              <li>Ankle replacement</li>
              <li>Peroneal tendonitis</li>
              <li>Achilles tendon injury</li>
              <li>Torn ligament</li>
              <li>Ankle impingement</li>
              <li>Gout</li>
            </ul>
            <p>
              Traditionally, steroid injections and surgery have been the primary solutions for chronic ankle pain. But
              imagine alleviating your ankle pain and returning to your favorite activities without the risks associated
              with surgery. QC Kinetix's regenerative alternatives to ankle surgery can help you reclaim your lifestyle,
              providing lasting pain relief, improved range of motion, and restored functionality to the ankle joint.
            </p>
          </div>
          <div className="regenerative-therapy-ankle-button animated fadeInUp" ref={buttonRef}>
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

export default RegenerativeTherapyForAnklePain;

