import { useEffect, useRef } from 'react';
import './NonsurgicalShoulderTreatments.css';

const NonsurgicalShoulderTreatments = () => {
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
    <section className="shoulder-therapy-section">
      <div className="shoulder-therapy-image-wrapper">
        <div className="shoulder-therapy-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/DSC_3429.png.webp"
            alt="Patient receiving shoulder treatment"
            width="453"
            height="706"
            loading="lazy"
          />
        </div>
      </div>
      <div className="shoulder-therapy-content">
        <div className="shoulder-therapy-text">
          <h1>Nonsurgical Shoulder Pain Treatments</h1>
          <p>
            <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with shoulder pain: nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural regenerative shoulder pain therapy that activates your body's own ability to revitalize its tissues so you can experience genuine pain relief from conditions like:
          </p>
          <ul>
            <li><a href="/blog/can-a-torn-rotator-cuff-heal-on-its-own/">Rotator cuff tear</a></li>
            <li><a href="/blog/shoulder-bursitis/">Bursitis</a></li>
            <li>Osteoarthritis (OA)</li>
            <li>Frozen shoulder (adhesive capsulitis)</li>
            <li>Tendonitis</li>
            <li><a href="/blog/torn-labrum-shoulder-recovery-without-surgery/">Labral tear</a></li>
            <li>Shoulder impingement</li>
            <li>Bicep injuries</li>
          </ul>
          <p className="shoulder-therapy-more-text">
            Traditionally, steroid injections and surgery have been the primary solutions for chronic shoulder pain. But imagine reducing your shoulder pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix's regenerative alternatives to shoulder surgery offer a safe and effective way to regain your active lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to your shoulder joint.
          </p>
        </div>
        <div className="shoulder-therapy-button animated fadeInUp" ref={buttonRef}>
          <a
            href="/request-your-first-appointment/"
            className="qc-btn"
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

export default NonsurgicalShoulderTreatments;

