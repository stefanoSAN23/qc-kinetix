import { useEffect, useRef } from 'react';
import './AreStemCellTreatmentsRight.css';

const AreStemCellTreatmentsRight = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="are-stem-cell-right-section">
      <div className="are-stem-cell-right-container">
        <div className="are-stem-cell-right-content">
          <h2 className="are-stem-cell-right-title animated fadeInDown" ref={titleRef}>
            Are Stem Cell Treatments<br />at QC Kinetix Right for You?
          </h2>
          <div className="are-stem-cell-right-button animated fadeInUp" ref={buttonRef}>
            <a href="/request-your-first-appointment/" className="knee-pain-btn">
              Request an Appointment
            </a>
          </div>
          <div className="are-stem-cell-right-text">
            <p>If you wish to avoid surgery, stem cell treatments for pain offer a compelling alternative to traditional orthopedic medicine treatments. The benefits include avoiding surgical complications, experiencing minimal downtime, and reducing your reliance on pain medications.</p>
            <p>Not everyone is a candidate for stem cell treatment. If you are pregnant or undergoing cancer treatment, regenerative medicine is not appropriate for you. In all cases, an evaluation is essential to determine if this treatment is right for you.</p>
            <p>If you are looking for a non-surgical option to address chronic pain, we invite you to schedule a free consultation at a <a href="/qc-locations/">QC Kinetix location</a> near you to learn more about <a href="/regenerative-medicine/">how regenerative medicine can help you</a>.</p>
          </div>
        </div>
        <div className="are-stem-cell-right-image">
          <img
            src="https://qckinetixsidev.wpenginepowered.com/wp-content/uploads/2025/09/DSC_3117-scaled.jpg"
            alt="Stem Cell Treatment Consultation"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AreStemCellTreatmentsRight;

