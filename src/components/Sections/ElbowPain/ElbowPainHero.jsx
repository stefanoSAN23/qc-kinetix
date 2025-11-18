import { useEffect, useRef } from 'react';
import './ElbowPainHero.css';

const ElbowPainHero = () => {
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
    <section className="elbow-pain-hero-section" id="HeroConTreatment">
      <div className="elbow-pain-hero-container">
        <div className="elbow-pain-hero-content">
          <div className="elbow-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Elbow Pain
          </div>
          <h1
            className="elbow-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Elbow Pain
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ElbowPainHero;

