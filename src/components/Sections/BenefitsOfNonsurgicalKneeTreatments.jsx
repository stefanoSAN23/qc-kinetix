import { useEffect, useRef } from 'react';
import './BenefitsOfNonsurgicalKneeTreatments.css';

const BenefitsOfNonsurgicalKneeTreatments = () => {
  const headerRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

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
    if (topTextRef.current) observer.observe(topTextRef.current);
    if (bottomTextRef.current) observer.observe(bottomTextRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (topTextRef.current) observer.unobserve(topTextRef.current);
      if (bottomTextRef.current) observer.unobserve(bottomTextRef.current);
    };
  }, []);

  return (
    <section className="benefits-nonsurgical-section">
      <div className="benefits-nonsurgical-container">
        <div className="benefits-nonsurgical-header animated fadeInDown" ref={headerRef}>
          <h3>Benefits of</h3>
          <div className="benefits-nonsurgical-dots">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className={`dot dot-${index + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="benefits-nonsurgical-content">
          <div className="benefits-nonsurgical-left animated fadeInDown" ref={topTextRef}>
            <h2>Nonsurgical Knee Treatments</h2>
            <p>
              Regenerative knee pain treatments offer the benefits of knee surgery without a hospital stay, loss of work, added pain, risk of complications, and a lengthy recovery.
            </p>
            <p>
              Unlike traditional knee replacement surgery, which addresses symptoms by replacing the joint, our non-surgical treatments focus on the root cause of your pain. Whether your knee pain is the result of arthritis, worn cartilage, or joint inflammation, our regenerative therapies work with your body's own healing processes to revitalize tissues and improve function without invasive procedures or long recovery times.
            </p>
            <p>
              If you've been told by an orthopedic surgeon that surgery is your only option, consider exploring knee replacement alternatives. Many patients experience reduced pain and improved mobility.
            </p>
          </div>
          <div className="benefits-nonsurgical-right animated fadeInDown" ref={bottomTextRef}>
            <h3>Less Invasive</h3>
            <p>
              Regenerative knee pain therapy is a minimally invasive treatment option that offers a less invasive alternative to knee surgery. Unlike surgery, which typically requires anesthesia and involves more extensive procedures, regenerative therapy focuses on restoring and healing the knee with minimal disruption to the surrounding tissues.
            </p>
            <p>
              Knee surgery involves a recovery process, with no guarantee of you being pain free or without limitations. In contrast, regenerative medicine offers a more effective solution with minimal to no downtime, allowing you to resume your daily activities immediately without the same recovery concerns.
            </p>
            <h3>Lower Risks</h3>
            <p>The inherent medical risks with knee surgery include:</p>
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
            <p>
              In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfNonsurgicalKneeTreatments;

