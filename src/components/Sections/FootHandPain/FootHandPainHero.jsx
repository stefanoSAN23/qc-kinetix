import { useEffect, useRef } from 'react';
import './FootHandPainHero.css';

const FootHandPainHero = () => {
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
    <section className="foot-hand-pain-hero-section" id="HeroConTreatment">
      <div className="foot-hand-pain-hero-container">
        <div className="foot-hand-pain-hero-content">
          <div className="foot-hand-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Foot &amp; Hand Pain
          </div>
          <h1
            className="foot-hand-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Foot &amp; Hand Pain
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FootHandPainHero;

