import { useEffect, useRef } from 'react';
import './WhyConsiderPRP.css';

const WhyConsiderPRP = () => {
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
    <section className="why-consider-prp-section">
      <div className="why-consider-prp-container">
        <div className="why-consider-prp-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/09/DSC_3414-1-1024x681.jpg.webp"
            alt="PRP Treatment"
            width="800"
            height="532"
            loading="lazy"
          />
        </div>
        <div className="why-consider-prp-content">
          <h2 className="why-consider-prp-title animated fadeInDown" ref={titleRef}>
            Why Consider PRP Injections for Pain?
          </h2>
          <div className="why-consider-prp-text">
            <p>PRP injections are a great alternative for pain because they are a non-surgical treatment that harnesses your body's own healing mechanisms.</p>
            <p>This makes it a compelling option for those who want to avoid the significant downsides of surgery, including:</p>
            <ul>
              <li>Long, difficult recovery periods</li>
              <li>The risk of infection and complications</li>
              <li>Uncertain success rates</li>
              <li>Extensive downtime away from work and daily activities</li>
              <li>The potential need for opioid pain medication during recovery</li>
            </ul>
            <p>By opting for PRP therapy, patients can get to the root cause of their pain and stimulate natural healing without the need for an invasive procedure. It offers a more natural, less risky path to lasting pain relief.</p>
          </div>
          <div className="why-consider-prp-button animated fadeInUp" ref={buttonRef}>
            <a href="/request-your-first-appointment/" className="qc-btn">
              Request an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderPRP;

