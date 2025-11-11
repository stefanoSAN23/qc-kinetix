import { useEffect, useRef } from 'react';
import './KneePainHero.css';

const KneePainHero = () => {
  const breadcrumbRef = useRef(null);
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

    if (breadcrumbRef.current) observer.observe(breadcrumbRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (breadcrumbRef.current) observer.unobserve(breadcrumbRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="knee-pain-hero-section" id="HeroConTreatment">
      <div className="knee-pain-hero-container">
        <div className="knee-pain-hero-content">
          <div className="knee-pain-breadcrumb animated fadeInDown" ref={breadcrumbRef}>
            <a href="/conditions/">Conditions Treated</a> &gt; Knee Pain
          </div>
          <h2 className="knee-pain-title animated fadeInDown" ref={titleRef}>Knee Pain</h2>
        </div>
      </div>
    </section>
  );
};

export default KneePainHero;
