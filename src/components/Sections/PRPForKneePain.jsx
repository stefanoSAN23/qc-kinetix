import { useEffect, useRef } from 'react';
import './PRPForKneePain.css';

const PRPForKneePain = () => {
  const titleRef = useRef(null);

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

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="prp-for-knee-pain-section">
      <div className="prp-for-knee-pain-container">
        <div className="prp-for-knee-pain-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/09/3B8A5970-1-683x1024.jpg.webp"
            alt="Knee Pain Treatment"
            width="683"
            height="1024"
            loading="lazy"
          />
        </div>
        <div className="prp-for-knee-pain-content">
          <h2 className="prp-for-knee-pain-title animated fadeInDown" ref={titleRef}>
            PRP Therapy for Knee Pain
          </h2>
          <div className="prp-for-knee-pain-text">
            <p><a href="/knee-pain/">Knee pain</a> is incredibly common, often caused by injuries from sports and daily activities. You can injure your knee from a sudden pivot in basketball, an awkward landing from a jump in volleyball, or a quick reverse of direction in tennis. These movements can lead to painful conditions like an ACL tear, a meniscus tear, or patellar tendonitis (jumper's knee).</p>
            <p>Historically, patients have relied on physical therapy, steroid injections, or, as a last resort, surgery. Surgical procedures like knee arthroscopy, meniscus repair, or total knee replacement are major operations that involve significant downtime, potential for infection, and a difficult recovery.</p>
            <p>PRP therapy for knees offers a promising alternative. Instead of cutting into the joint, PRP injections deliver a concentrated dose of your own healing cells directly to the damaged tissue, helping to reduce pain and inflammation. This approach avoids the extensive risks, uncertain outcomes, and lengthy rehabilitation associated with knee surgeries, providing a more natural path to restoring function and relieving pain.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PRPForKneePain;

