import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalHipTreatments.css';

const BenefitsOfNonsurgicalHipTreatments = () => {
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
    <section className="hip-benefits-section">
      <div className="hip-benefits-container">
        <div className="hip-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="hip-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="hip-benefits-content">
          <div className="hip-benefits-left">
            <h2>Nonsurgical Hip Treatments</h2>
            <p>
              There are multiple benefits to our regenerative hip pain treatments without surgery.
            </p>
          </div>
          <div className="hip-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>
                Regenerative hip pain therapy is a minimally invasive treatment option, offering a less invasive alternative
                to hip surgery. Unlike surgery, which typically requires anesthesia and involves more extensive procedures,
                regenerative therapy focuses on healing and restoring the hip with minimal disruption to the surrounding
                tissues.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                Hip surgery causes major trauma to the body, requiring a lengthy recovery:
              </p>
              <div className="hip-benefits-list">
                <ul>
                  <li>Hospital stay: typically, 1-4 days</li>
                  <li>Opioid pain relief: about 1 week</li>
                  <li>Subsequent pain meds: 3-4 months</li>
                  <li>Use of walker/cane: 1-4 weeks</li>
                </ul>
                <ul>
                  <li>Return to work: typically, 6-12 weeks</li>
                  <li>Return to full activity: 6-12 months</li>
                </ul>
              </div>
              <p>
                With our regenerative alternatives to hip surgery, there is no need for pain medications or missing a day of
                work.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>The risks of hip surgery include:</p>
              <div className="hip-benefits-list">
                <ul>
                  <li>Bleeding</li>
                  <li>Blood clots</li>
                  <li>Infection</li>
                  <li>Nerve damage</li>
                </ul>
                <ul>
                  <li>Stiffening joint</li>
                  <li>Pneumonia</li>
                  <li>Post-traumatic arthritis</li>
                </ul>
              </div>
              <p className="hip-benefits-note">
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

export default BenefitsOfNonsurgicalHipTreatments;


