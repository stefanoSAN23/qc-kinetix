import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalWristTreatments.css';

const BenefitsOfNonsurgicalWristTreatments = () => {
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
    <section className="wrist-benefits-section">
      <div className="wrist-benefits-container">
        <div className="wrist-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="wrist-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="wrist-benefits-content">
          <div className="wrist-benefits-left">
            <h2>Nonsurgical Wrist Treatments</h2>
            <p>
              Regenerative wrist pain treatments offer the benefits of wrist surgery without a hospital stay, loss of work,
              added pain, risk of complications, and a lengthy recovery.
            </p>
          </div>
          <div className="wrist-benefits-right">
            <div>
              <h3>Less Invasive</h3>
              <p>
                Wrist surgery often involves cutting through soft tissue, ligaments, tendons, muscles, and even bone.
                Surgeons may need to manipulate nerves, arteries, and veins or insert pins, screws, or implants, which makes
                recovery a painful and lengthy process. In contrast, our wrist pain treatment only requires a simple
                injection, offering a minimally invasive alternative with less pain and quicker recovery.
              </p>
            </div>
            <div>
              <h3>Faster Recovery</h3>
              <p>
                Wrist surgery causes considerable damage to the wrist it repairs.{' '}
                <a href="https://qckinetix.com/blog/how-long-does-wrist-surgery-take-to-heal/">
                  Healing from wrist surgery
                </a>{' '}
                can take up to 12 painful weeks. With regenerative treatment for wrist pain, you won&apos;t miss a day of
                work.
              </p>
            </div>
            <div>
              <h3>Lower Risks</h3>
              <p>
                Wrist surgery carries several risks, including infection, nerve damage, joint stiffness, and scarring.
                Complications such as anesthesia issues, blood clots, and post-traumatic arthritis are also possible. In
                contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making
                it a less invasive and therefore safer option for pain relief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalWristTreatments;

