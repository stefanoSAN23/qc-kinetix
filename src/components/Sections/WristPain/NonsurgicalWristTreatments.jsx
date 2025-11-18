import { useEffect, useRef } from 'react';
import './NonsurgicalWristTreatments.css';

const NonsurgicalWristTreatments = () => {
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
    <section className="wrist-therapy-section">
      <div className="wrist-therapy-container">
        <div className="wrist-therapy-image-wrapper">
          <div className="wrist-therapy-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/DSC_3465.png.webp"
              alt="Patient receiving wrist treatment"
              width="600"
              height="900"
              loading="lazy"
            />
          </div>
        </div>
        <div className="wrist-therapy-content">
          <div className="wrist-therapy-text">
            <h1>Regenerative Treatment for Wrist Pain</h1>
            <p>
              <a href="/regenerative-medicine/">Regenerative medicine</a> offers exciting promise for those with wrist pain:
              nonsurgical pain relief. At QC Kinetix<sup className="reg-symbol">®</sup>, we provide natural regenerative wrist pain
              therapy that activates your body&apos;s own ability to revitalize its tissues so you experience{' '}
              <a href="https://qckinetix.com/blog/what-causes-wrist-pain/">wrist pain</a> relief from conditions like:
            </p>
            <ul>
              <li>Repetitive strain injuries</li>
              <li>Osteoarthritis (OA)</li>
              <li>Fractures</li>
              <li>Infections</li>
              <li>Nerve compression</li>
              <li>Ligamentous injury</li>
            </ul>
            <p className="wrist-therapy-more">
              Traditionally, steroid injections and surgery have been the go-to solutions for chronic wrist pain. Now, imagine
              reducing your pain and returning to your favorite activities without the risks associated with wrist surgery. QC
              Kinetix&apos;s regenerative alternatives to wrist surgery can help you reclaim your lifestyle, offering lasting pain
              relief, improved range of motion, and restored functionality to your wrist joint.
            </p>
          </div>
          <div className="wrist-therapy-button animated fadeInUp" ref={buttonRef}>
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

export default NonsurgicalWristTreatments;

