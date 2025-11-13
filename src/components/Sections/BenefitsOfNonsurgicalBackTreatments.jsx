import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalBackTreatments.css';

const BenefitsOfNonsurgicalBackTreatments = () => {
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
    <section className="back-benefits-section">
      <div className="back-benefits-container">
        <div className="back-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="back-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="back-benefits-content">
          <div className="back-benefits-left">
            <h2>Nonsurgical Back Treatments</h2>
            <p>
              Regenerative back pain treatments offer the benefits of lower back surgery without a hospital stay, loss of
              work, added pain, risk of complications, and a lengthy recovery.
            </p>
          </div>
          <div className="back-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>
                Back surgery requires general anesthesia and invasive surgery. Regenerative back pain therapy is noninvasive.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>Back surgery requires a long recovery. With regenerative medicine, you won&apos;t miss a day of work.</p>
              <div className="back-benefits-list">
                <ul>
                  <li>Hospital stay: typically, 1-3 days</li>
                  <li>Opioid pain relief: about 1 week</li>
                  <li>Subsequent pain meds: 4-12 weeks</li>
                  <li>Use of walker/cane: 1-10 weeks</li>
                </ul>
                <ul>
                  <li>Return to work: typically, 6-8 weeks</li>
                  <li>Return to full activity: 3-12 months</li>
                </ul>
              </div>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>The inherent medical risks with back surgery include:</p>
              <div className="back-benefits-list">
                <ul>
                  <li>Additional pain</li>
                  <li>Excessive bleeding</li>
                  <li>Blood clots</li>
                  <li>Nerve damage</li>
                </ul>
                <ul>
                  <li>Infection</li>
                  <li>Joint stiffening</li>
                  <li>Pneumonia</li>
                  <li>Post-traumatic arthritis</li>
                </ul>
              </div>
              <p className="back-benefits-note">
                In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days,
                making it a less invasive and therefore safer option for pain relief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalBackTreatments;

