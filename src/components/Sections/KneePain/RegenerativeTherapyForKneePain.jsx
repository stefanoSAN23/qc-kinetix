import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForKneePain.css';

const RegenerativeTherapyForKneePain = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="regenerative-therapy-knee-section">
      <div className="regenerative-therapy-knee-container">
        <div className="regenerative-therapy-knee-image-wrapper">
          <div className="regenerative-therapy-knee-image">
            <img
              data-src="https://qckinetix.com/wp-content/smush-webp/2025/04/QC-Kinetix9852.png.webp"
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/QC-Kinetix9852.png.webp"
              alt="Knee Pain Treatment"
              width="453"
              height="687"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-knee-content">
          <div className="regenerative-therapy-knee-text">
            <h1>Regenerative Therapy for Knee Pain</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with knee pain: nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural regenerative knee pain therapy that activates your body's own ability to revitalize its tissues so you can experience genuine pain relief from conditions like:
            </p>
            <ul>
              <li>Osteoarthritis (OA)</li>
              <li><a href="/knee-pain/meniscus-treatment/">Meniscus tear</a></li>
              <li>Tendonitis</li>
              <li>Damaged cartilage</li>
              <li>Ligament injuries</li>
              <li>Bursitis</li>
              <li>Tendonitis</li>
              <li><a href="/knee-pain/acl-treatment/">ACL injuries</a></li>
            </ul>
            <p>
              Traditionally, steroid injections and surgery have been the primary solutions for chronic knee pain. But imagine alleviating your knee pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix's regenerative alternatives to knee surgery can help you reclaim your lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to the knee joint.
            </p>
          </div>
          <div className="regenerative-therapy-knee-button animated fadeInUp" ref={buttonRef}>
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
      </div>
    </section>
  );
};

export default RegenerativeTherapyForKneePain;

