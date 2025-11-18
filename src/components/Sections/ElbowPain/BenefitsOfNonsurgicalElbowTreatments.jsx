import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalElbowTreatments.css';

const BenefitsOfNonsurgicalElbowTreatments = () => {
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
    <section className="elbow-benefits-section">
      <div className="elbow-benefits-container">
        <div className="elbow-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="elbow-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="elbow-benefits-content">
          <div className="elbow-benefits-left">
            <h2>Nonsurgical Elbow Treatments</h2>
            <p>
              Regenerative elbow pain treatments offer the benefits of elbow surgery without a hospital stay, loss of
              work, added pain, risk of complications, and a lengthy recovery.
            </p>
          </div>
          <div className="elbow-benefits-right">
            <h3>Less Invasive</h3>
            <p>
              Elbow surgery requires general anesthesia and invasive techniques. Regenerative elbow pain therapy is
              noninvasive.
            </p>
            <h3>Faster Recovery</h3>
            <p>
              Elbow surgery can cause significant damage to the tissues it aims to repair, as it may involve cutting
              through bone, cartilage, and muscle, leading to intense pain and a prolonged recovery period. After tennis
              elbow surgery, you may need 3 to 12 weeks to return to work. With regenerative elbow pain treatments, you
              won&rsquo;t have to miss a single day of work, offering a faster, less invasive alternative for pain
              relief and recovery.
            </p>
            <h3>Lower Risks</h3>
            <p>
              <a href="https://qckinetix.com/blog/is-elbow-surgery-painful/">Elbow surgery is painful</a> and carries
              significant risks.
            </p>
            <ul>
              <li>Infection</li>
              <li>Joint stiffness</li>
              <li>Increased pain</li>
              <li>Scarring</li>
              <li>Nerve damage</li>
              <li>Post-traumatic arthritis</li>
              <li>Blood clots</li>
              <li>Failure to relieve pain</li>
              <li>Anesthesia complications</li>
            </ul>
            <p>With regenerative elbow pain treatment, you face none of these risks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalElbowTreatments;

