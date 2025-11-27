import { useEffect, useRef } from 'react';
import './Benefits.css';

const Benefits = () => {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);
  const benefits = [
    'No surgery',
    'No drugs',
    'No downtime',
    'Lower risk',
    'Improved physical activity',
    'Improved mental well-being',
    'Better quality of life'
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header fade-in-down">
          <div className="benefits-header-top animated fadeInDown" ref={headerRef}>
            <h2>Benefits of</h2>
            <img 
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-331.svg" 
              alt="Decorative divider line" 
              width="176" 
              height="7"
              loading="lazy"
            />
          </div>
          <h2 className="benefits-title-large">Regenerative<br />Medicine</h2>
          <div className="benefits-header-button desktop-only animated fadeInUp" ref={buttonRef}>
            <a href="#contact" className="elementor-button elementor-button-link elementor-size-sm">
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">Book a Consultation</span>
              </span>
            </a>
          </div>
        </div>

        <div className="benefits-content">
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <svg className="check-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="benefits-button mobile-only">
            <a href="#contact" className="qc-btn">
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

