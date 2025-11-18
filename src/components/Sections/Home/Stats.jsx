import { useEffect, useRef } from 'react';
import './Stats.css';

const Stats = ({ animateImmediate = false }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElements = entry.target.querySelectorAll('.animated');
          animatedElements.forEach((el) => {
            el.classList.add('animated-active');
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          {/* First Stat Item */}
          <div className="stat-item e-con-full e-flex e-con e-child">
            <div className="stat-heading animated fadeInDown" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <h2 className="stat-number">
                Up to 10 Billion
              </h2>
            </div>
            
            <div className="stat-divider animated fadeInLeft" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
            
            <div className="stat-text animated fadeIn" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <p>Platelets in each<br />PRP Injection</p>
            </div>
            
            <div className="stat-footnote animated fadeInUp" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <p>Numbers can vary based on the health of the patient</p>
            </div>
          </div>

          {/* Second Stat Item */}
          <div className="stat-item e-con-full e-flex e-con e-child">
            <div className="stat-heading animated fadeInDown" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <h2 className="stat-number">35,000+</h2>
            </div>
            
            <div className="stat-divider animated fadeInLeft" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
            
            <div className="stat-text animated fadeIn" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <p>Lives <br />transformed</p>
            </div>
          </div>

          {/* Third Stat Item */}
          <div className="stat-item e-con-full e-flex e-con e-child">
            <div className="stat-heading animated fadeInDown" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <h2 className="stat-number">170+</h2>
            </div>
            
            <div className="stat-divider animated fadeInRight" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
            
            <div className="stat-text animated fadeIn" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <p>Locations</p>
            </div>
            
            <div className="stat-button animated fadeInUp" data-animate-immediate={animateImmediate ? 'true' : undefined}>
              <a href="/qc-locations/" className="elementor-button elementor-button-link elementor-size-lg">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Find a Location</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

