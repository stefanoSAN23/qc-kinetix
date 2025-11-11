import { useEffect, useRef } from 'react';
import './ShoulderPainHero.css';

const ShoulderPainHero = () => {
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
    <section className="shoulder-pain-hero-section" id="HeroConTreatment">
      <div className="shoulder-pain-hero-container">
        <div className="shoulder-pain-hero-content">
          <div className="shoulder-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Shoulder Pain
          </div>
          <h2 className="shoulder-pain-title animated fadeInDown" ref={titleRef}>
            Natural Shoulder Pain Relief
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ShoulderPainHero;


