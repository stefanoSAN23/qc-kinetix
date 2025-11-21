import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalFootHandTreatments.css';

const BenefitsOfNonsurgicalFootHandTreatments = () => {
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
    <section className="foot-hand-benefits-section">
      <div className="foot-hand-benefits-container">
        <div className="foot-hand-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="foot-hand-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="foot-hand-benefits-content">
          <div className="foot-hand-benefits-left">
            <h2>Nonsurgical Foot &amp; Hand Treatments</h2>
            <p>
              Regenerative foot and hand pain treatments offer the benefits of foot and hand surgery without the hospital stay,
              loss of work, added pain, risk of complications, and lengthy recovery.
            </p>
          </div>
          <div className="foot-hand-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>
                Foot or hand surgery requires general anesthesia and invasive surgery. Regenerative foot or hand pain therapy is
                noninvasive.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                With regenerative hand and foot pain treatments, we skip the trauma of surgery and go straight to the healing
                process. You do not need to lose a day at work, and your pain starts to lessen right away.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>
                With regenerative treatments for pain in the foot or hand, you will have none of the risks for postsurgical
                complications, which include:
              </p>
              <div className="foot-hand-benefits-list">
                <ul>
                  <li>Blood clots</li>
                  <li>Infection</li>
                  <li>Nerve damage</li>
                  <li>Stiffening of the joints</li>
                  <li>Pneumonia</li>
                  <li>Post-traumatic arthritis</li>
                </ul>
              </div>
              <p className="foot-hand-benefits-note">
                Instead of the risks associated with surgery, with regenerative medicine, you can return to doing what you love
                without the excessive recovery time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalFootHandTreatments;

