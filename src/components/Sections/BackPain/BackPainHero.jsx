import { useEffect, useRef } from 'react';
import './BackPainHero.css';

const BackPainHero = () => {
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
    <section className="back-pain-hero-section" id="HeroConTreatment">
      <div className="back-pain-hero-container">
        <div className="back-pain-hero-content">
          <div className="back-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Back Pain
          </div>
          <h1
            className="back-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Back Pain
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BackPainHero;


