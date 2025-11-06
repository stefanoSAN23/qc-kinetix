import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ConditionsAddressed.css';

const ConditionsAddressed = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

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
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="conditions-addressed-section">
      <div className="conditions-addressed-container">
        <h2 className="conditions-addressed-title animated fadeInDown" ref={titleRef}>
          Conditions Addressed with Stem Cell Treatments
        </h2>
        <div className="conditions-addressed-text animated fadeInDown" ref={textRef}>
          <p>QC Kinetix utilizes regenerative medicine to address a variety of chronic pain conditions, with a focus on musculoskeletal issues. For individuals suffering from osteoarthritis and general joint wear and tear, the clinic offers stem cell treatments for osteoarthritis, aiming to support the body's natural healing of damaged cartilage in joints like the hips, ankles, wrists, and more.</p>
          <p><strong>Knees</strong> – Those facing injuries such as a torn meniscus or <Link to="/knee-pain/acl-treatment/" className="acl-link">Grade I or II ACL injury get relief</Link> from our stem cell treatments for knee pain.</p>
          <p><strong>Shoulders</strong> – People with bursitis, tendinitis, and rotator cuff injuries often seek out our stem cell treatments for shoulder pain.</p>
          <p><strong>Back</strong> – Our stem cell treatments for back pain can be helpful for patients suffering from sciatica, spinal stenosis, herniated disc, and sprains/strains.</p>
        </div>
      </div>
    </section>
  );
};

export default ConditionsAddressed;

