import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalFingerToeTreatments.css';

const BenefitsOfNonsurgicalFingerToeTreatments = () => {
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
    <section className="finger-toe-benefits-section">
      <div className="finger-toe-benefits-container">
        <div className="finger-toe-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="finger-toe-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="finger-toe-benefits-content">
          <div className="finger-toe-benefits-left">
            <h2>Benefits of Nonsurgical Finger &amp; Toe Treatments</h2>
            <p>
              Rather than simply masking symptoms, regenerative medicine eases your pain at its source. The many benefits of
              regenerative finger and toe joint pain natural treatment include:
            </p>
          </div>
          <div className="finger-toe-benefits-right">
            <div>
              <h3>Noninvasive</h3>
              <p>
                Regenerative treatments are nonsurgical, drug free, and noninvasive, reducing the risks and downtime
                associated with traditional surgical interventions.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                Finger or toe surgery requires recovery time. You will likely need prescription pain medication for a few
                days. You may need to use a boot, a splint, or a cast for a few weeks, depending on the joint involved. You
                will need to take some time away from work to recover. And it could be a few months before you are able to
                return to normal activities. With regenerative medicine, you won&apos;t miss a day of work.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>The inherent medical risks with finger or toe surgery include:</p>
              <div className="finger-toe-benefits-list">
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
              <p className="finger-toe-benefits-note">
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

export default BenefitsOfNonsurgicalFingerToeTreatments;

