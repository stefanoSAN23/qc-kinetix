import { useEffect, useRef } from 'react';
import './KneePainHero.css';

const KneePainHero = () => {
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
    <section className="knee-pain-hero-section" id="HeroConTreatment">
      <div className="knee-pain-hero-container">
        <div className="knee-pain-hero-content">
          <div className="knee-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Knee Pain
          </div>
          <h2
            className="knee-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Knee Pain
          </h2>
        </div>
      </div>
    </section>
  );
};

export default KneePainHero;

