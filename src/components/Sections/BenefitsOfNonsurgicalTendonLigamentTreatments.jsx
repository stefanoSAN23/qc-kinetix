import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalTendonLigamentTreatments.css';

const BenefitsOfNonsurgicalTendonLigamentTreatments = () => {
  const headerRef = useRef(null);

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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="tendon-ligament-benefits-section">
      <div className="tendon-ligament-benefits-container">
        <div className="tendon-ligament-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="tendon-ligament-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="tendon-ligament-benefits-content">
          <div className="tendon-ligament-benefits-left">
            <h2>Nonsurgical Tendon &amp; Ligament Treatments</h2>
            <p>
              Regenerative tendon and ligament pain treatments offer the benefits of surgery without a hospital stay, loss of
              work, added pain, risk of complications, and a lengthy recovery.
            </p>
          </div>
          <div className="tendon-ligament-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>
                Tendon or ligament surgery requires general anesthesia and invasive surgery. Regenerative medicine treatments
                for tendon or ligament pain are noninvasive.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                Tendon or ligament surgery involves recovery time. You will probably need prescription pain relief for a few
                days. You may use a sling, a splint, a cast, a boot, or a walker for a time, depending on the type of surgery
                you have. You will need to miss work and limit your activities. With regenerative medicine, none of this is
                necessary.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>The medical risks of tendon or ligament surgery include:</p>
              <div className="tendon-ligament-benefits-list">
                <ul>
                  <li>Additional pain</li>
                  <li>Excessive bleeding</li>
                  <li>Blood clots</li>
                  <li>Nerve damage</li>
                  <li>Infection</li>
                  <li>Joint stiffening</li>
                  <li>Pneumonia</li>
                  <li>Post-traumatic arthritis</li>
                </ul>
              </div>
              <p className="tendon-ligament-benefits-note">
                The primary risk associated with regenerative medicine is fatigue for one to two days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalTendonLigamentTreatments;


