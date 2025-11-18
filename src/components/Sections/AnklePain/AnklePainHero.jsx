import { useEffect, useRef } from 'react';
import './AnklePainHero.css';

const AnklePainHero = () => {
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
    <section className="ankle-pain-hero-section" id="HeroConTreatment">
      <div className="ankle-pain-hero-container">
        <div className="ankle-pain-hero-content">
          <div className="ankle-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Ankle Pain
          </div>
          <h2
            className="ankle-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Ankle Pain
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AnklePainHero;

