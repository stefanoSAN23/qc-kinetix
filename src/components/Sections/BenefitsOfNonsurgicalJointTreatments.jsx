import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalJointTreatments.css';

const BenefitsOfNonsurgicalJointTreatments = () => {
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
    <section className="joint-benefits-section">
      <div className="joint-benefits-container">
        <div className="joint-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="joint-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="joint-benefits-content">
          <div className="joint-benefits-left">
            <h2>Nonsurgical Joint Treatments</h2>
            <p>
              Regenerative joint pain treatments offer the benefits of joint surgery without the hospital stay, loss of work,
              added pain, risk of complications, and lengthy recovery.
            </p>
          </div>
          <div className="joint-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>
                Joint surgery requires invasive surgery and general anesthesia. Regenerative joint pain therapy is noninvasive.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                Joint surgery requires a long recovery. You may have to stay in the hospital for a night or two, and you will
                likely need prescription pain medication for at least a week. You will need to use a walker, a boot, a splint,
                or a sling for several weeks, depending on the joint involved. You may miss weeks of work; it could be a few
                months before you are able to return to normal activities. With regenerative medicine, you won't miss a day of
                work.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>The inherent medical risks with joint surgery include:</p>
              <div className="joint-benefits-list">
                <ul>
                  <li>Postsurgical pain</li>
                  <li>Pneumonia</li>
                  <li>Excessive bleeding</li>
                  <li>Infection</li>
                  <li>Blood clots</li>
                  <li>Nerve damage</li>
                  <li>Joint stiffening</li>
                  <li>Post-traumatic arthritis</li>
                </ul>
              </div>
              <p className="joint-benefits-note">
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

export default BenefitsOfNonsurgicalJointTreatments;


