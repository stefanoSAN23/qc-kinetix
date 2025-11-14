import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalAnkleTreatments.css';

const BenefitsOfNonsurgicalAnkleTreatments = () => {
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
    <section className="ankle-benefits-section">
      <div className="ankle-benefits-container">
        <div className="ankle-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="ankle-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="ankle-benefits-content">
          <div className="ankle-benefits-left">
            <h2>Nonsurgical Ankle Treatments</h2>
            <p>
              Regenerative ankle pain treatments offer the benefits of ankle surgery without a hospital stay, lost work,
              additional pain, surgical risk, or a lengthy recovery.
            </p>
          </div>
          <div className="ankle-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>
                Ankle surgery requires general anesthesia and invasive procedures. Regenerative ankle pain therapy is
                noninvasive, focusing on healing the tissues without creating further trauma.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                Ankle surgery demands a long, painful recovery that can stretch from weeks to months and usually
                involves prescription pain medications. The ankle must remain immobilized and non-weight-bearing for an
                extended period, and even daily routines like bathing can be difficult with a cast. With regenerative
                medicine, none of these limitations apply—you won’t miss a day of work.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>The inherent medical risks with ankle surgery include:</p>
              <div className="ankle-benefits-list">
                <ul>
                  <li>Additional pain</li>
                  <li>Excessive bleeding</li>
                  <li>Blood clots</li>
                  <li>Nerve damage</li>
                  <li>Infection</li>
                  <li>Joint stiffening</li>
                  <li>Pneumonia</li>
                  <li>Post-surgical arthritis</li>
                </ul>
              </div>
              <p className="ankle-benefits-note">
                In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two
                days, making it a safer and less invasive option for lasting pain relief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalAnkleTreatments;


