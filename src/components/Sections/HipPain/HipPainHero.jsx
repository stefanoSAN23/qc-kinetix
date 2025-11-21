import { useEffect, useRef } from 'react';
import './HipPainHero.css';

const HipPainHero = () => {
  const titleRef = useRef(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="hip-pain-hero-section" id="HeroConTreatment">
      <div className="hip-pain-hero-container">
        <div className="hip-pain-hero-content">
          <div className="hip-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Hip Pain Relief
          </div>
          <h1
            className="hip-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Hip Pain Relief
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HipPainHero;


