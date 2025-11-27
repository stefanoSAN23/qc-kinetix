import { useEffect, useRef } from 'react';
import './RegenerativeTherapyForHipPain.css';

const RegenerativeTherapyForHipPain = () => {
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
    <section className="regenerative-therapy-hip-section">
      <div className="regenerative-therapy-hip-container">
        <div className="regenerative-therapy-hip-image-wrapper">
          <div className="regenerative-therapy-hip-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/pexels-kampus-8638041.png.webp"
              alt="Hip pain treatment"
              width="453"
              height="713"
              loading="lazy"
            />
          </div>
        </div>
        <div className="regenerative-therapy-hip-content">
          <div className="regenerative-therapy-hip-text">
            <h1>Hip Pain Treatment Without Surgery</h1>
            <p>
              Regenerative treatments for hip pain offer an exciting alternative to hip surgery. At QC Kinetix
              <sup className="reg-symbol">®</sup>, we provide natural regenerative hip pain therapy that activates your
              body’s ability to revitalize its tissues so you experience genuine pain relief from conditions like:
            </p>
            <ul>
              <li>Bursitis</li>
              <li>
                <a href="https://qckinetix.com/hip-pain/hip-tendonitis-treatment/">Tendonitis</a>
              </li>
              <li>Hip impingement</li>
              <li>
                <a href="https://qckinetix.com/hip-pain/hip-labrum-treatment/">Labral tears</a>
              </li>
              <li>Ligament injuries</li>
              <li>Osteoarthritis (OA)</li>
            </ul>
            <p>
              Traditionally, hip surgery or a life of “pain management” were the only options for someone suffering from
              chronic hip pain. Managing pain through medication has left millions of Americans addicted without ever
              resolving the pain. Physical therapy can strengthen healthy muscles, tendons, and ligaments to help support
              the damaged ones but does nothing to revitalize the damaged tissues. QC Kinetix’s regenerative alternatives
              to hip surgery can help you regain your lost lifestyle and enjoy lasting pain relief, better range of motion,
              and improved functionality of your hip joint.
            </p>
          </div>
          <div className="regenerative-therapy-hip-button animated fadeInUp" ref={buttonRef}>
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

export default RegenerativeTherapyForHipPain;


