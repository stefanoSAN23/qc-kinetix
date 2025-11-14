import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalArthritisTreatments.css';

const BenefitsOfNonsurgicalArthritisTreatments = () => {
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
    <section className="arthritis-benefits-section">
      <div className="arthritis-benefits-container">
        <div className="arthritis-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="arthritis-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="arthritis-benefits-content">
          <div className="arthritis-benefits-left">
            <h2>Benefits of Nonsurgical Arthritis Treatments</h2>
            <p>Regenerative arthritis pain treatments offer the benefits of pain-relief surgery without the hospital stay, loss of work, added pain, risk of complications, and lengthy recovery.</p>
          </div>
          <div className="arthritis-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>Arthritis surgery requires general anesthesia and invasive surgery that your body must heal from. Regenerative arthritis pain therapy is noninvasive.</p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                Surgeries to treat arthritis pain, such as joint repair, replacement, or fusion, require recovery time. You will likely need prescription pain medication for at least one week and nonprescription pain relief for weeks after that. You may need to use a brace, splint, sling,
                cast, boot, or walker for several weeks, depending on the surgical site. You will miss some work, and it can take several weeks to months to resume normal activities. With regenerative medicine, none of this is necessary—you do not need to miss even one day of work.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>The inherent medical risks with arthritis surgery include:</p>
              <div className="arthritis-benefits-list">
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
              <p className="arthritis-benefits-note">
                In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalArthritisTreatments;


