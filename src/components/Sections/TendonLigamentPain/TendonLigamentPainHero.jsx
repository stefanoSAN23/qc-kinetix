import { useEffect, useRef } from 'react';
import './TendonLigamentPainHero.css';

const TendonLigamentPainHero = () => {
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
    <section className="tendon-ligament-pain-hero-section" id="HeroConTreatment">
      <div className="tendon-ligament-pain-hero-container">
        <div className="tendon-ligament-pain-hero-content">
          <div className="tendon-ligament-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Tendon &amp; Ligament Pain
          </div>
          <h1
            className="tendon-ligament-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Tendon &amp; Ligament Pain
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TendonLigamentPainHero;

