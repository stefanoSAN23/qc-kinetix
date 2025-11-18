import { useEffect, useRef } from 'react';
import './WristPainHero.css';

const WristPainHero = () => {
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
    <section className="wrist-pain-hero-section" id="HeroConTreatment">
      <div className="wrist-pain-hero-container">
        <div className="wrist-pain-hero-content">
          <div className="wrist-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Wrist Pain
          </div>
          <h2
            className="wrist-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Wrist Pain
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WristPainHero;

