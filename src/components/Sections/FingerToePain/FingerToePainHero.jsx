import { useEffect, useRef } from 'react';
import './FingerToePainHero.css';

const FingerToePainHero = () => {
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
    <section className="finger-toe-pain-hero-section" id="HeroConTreatment">
      <div className="finger-toe-pain-hero-container">
        <div className="finger-toe-pain-hero-content">
          <div className="finger-toe-pain-breadcrumb">
            <a href="/conditions/">Conditions Treated</a> &gt; Finger &amp; Toe Pain
          </div>
          <h1
            className="finger-toe-pain-title animated fadeInDown"
            data-animate-immediate="true"
            ref={titleRef}
          >
            Finger &amp; Toe Pain
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FingerToePainHero;

