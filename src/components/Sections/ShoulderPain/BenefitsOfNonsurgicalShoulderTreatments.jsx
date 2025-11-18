import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalShoulderTreatments.css';

const BenefitsOfNonsurgicalShoulderTreatments = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <section className="shoulder-benefits-section">
      <div className="shoulder-benefits-container">
        <div className="shoulder-benefits-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="shoulder-benefits-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="shoulder-benefits-content">
          <div className="shoulder-benefits-left">
            <h2>Nonsurgical Shoulder Treatments</h2>
            <p>
              The benefits of regenerative, nonsurgical shoulder treatments can be profound. Imagine relieving your shoulder pain and restoring joint function without the need for time off work, added pain, the use of narcotics, or the risks and complications associated with surgery. Plus, you can avoid a lengthy and painful recovery process.
            </p>
            <p>
              Unlike traditional surgical procedures that often require prolonged downtime and carry the risk of complications, our regenerative therapies focus on the root cause of your shoulder pain. Whether the discomfort is due to arthritis, worn cartilage, or repetitive strain, our treatments work with your body's own healing processes to revitalize tissues and improve function without invasive procedures or long recovery times.
            </p>
            <p>
              If you've been told by an orthopedic surgeon that surgery is your only option, consider exploring shoulder surgery alternatives. Many patients experience reduced pain and improved mobility.
            </p>
          </div>
          <div className="shoulder-benefits-right">
            <h3>Less Invasive</h3>
            <p>
              Shoulder surgery requires general anesthesia and invasive surgery. Regenerative shoulder pain treatments do not require general anesthesia and cause no additional tissue damage.
            </p>
            <p>
              Regenerative medicine offers a more effective solution with minimal to no downtime, allowing you to resume your daily activities immediately without the same recovery concerns.
            </p>
            <h3>Faster Recovery</h3>
            <p>Shoulder surgery requires a long recovery:</p>
            <ul>
              <li>Hospital stay: typically, outpatient or 1 day</li>
              <li>Opioid pain relief: about 1 week</li>
              <li>Subsequent pain meds: 4-8 weeks</li>
              <li>Use of sling: 2-6 weeks</li>
              <li>Return to work: typically, 2 weeks to 6 months depending on the work</li>
              <li>Return to full activity: 4-6 months (longer for strenuous activity)</li>
            </ul>
            <p>With regenerative medicine, you won't miss a day of work.</p>
            <h3>Lower Risks</h3>
            <p>The inherent medical risks with shoulder surgery include:</p>
            <ul>
              <li>Excess bleeding</li>
              <li>Blood clots</li>
              <li>Infections</li>
              <li>Nerve damage</li>
              <li>Stiffening of the joint (frozen shoulder)</li>
              <li>Damage to blood vessels disrupting blood flow to the shoulder</li>
              <li>Cartilage damage</li>
              <li>Joint instability</li>
              <li>Post-traumatic arthritis</li>
              <li>Implant failure (for shoulder replacement)</li>
              <li>Scarring</li>
              <li>Pneumonia</li>
            </ul>
            <p>
              In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalShoulderTreatments;

