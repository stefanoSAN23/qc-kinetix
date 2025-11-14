import { useEffect, useRef } from 'react';
import './JointPainHero.css';

const JointPainHero = () => {
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
    <section className="joint-pain-hero-section" id="HeroConTreatment">
      <div className="joint-pain-hero-container">
        <div className="joint-pain-hero-content">
          <div className="joint-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Joint Pain
          </div>
          <h2
            className="joint-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Joint Pain
          </h2>
        </div>
      </div>
    </section>
  );
};

export default JointPainHero;


