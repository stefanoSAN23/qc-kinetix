import { useEffect, useRef } from 'react';
import './RegenerativeHero.css';

const RegenerativeHero = () => {
  const dividerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '100px 0px 0px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="regenerative-hero-section">
      <div className="regenerative-hero-container">
        <div className="regenerative-hero-content">
          <div className="regenerative-hero-divider-container animated fadeInDown" ref={dividerRef}>
            <img 
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-747.png.webp" 
              alt="Decorative divider" 
              width="177" 
              height="8"
              loading="eager"
              fetchPriority="high"
              className="regenerative-hero-divider"
            />
          </div>

          <h1 className="regenerative-hero-title animated fadeInDown" ref={titleRef}>
            Regenerative Medicine Treatments &amp; Therapy
          </h1>

          <div className="regenerative-hero-text">
            <p>
              <strong>QC Kinetix</strong> is the leader in regenerative medicine, a cutting-edge approach to healing that can help your body revive and revitalize damaged tissues. Regenerative medicine utilizes your own natural biologics like PRP (Platelet Rich Plasma), Plasma, and Stem Cells to work with your body's own healing process to reduce pain, improve mobility, and support long-term recovery. Whether you're dealing with joint pain, injuries, or chronic conditions, regenerative medicine offers a non-invasive solution to help you get back to living life on your terms.
            </p>
          </div>
        </div>

        <div className="regenerative-hero-image animated fadeIn" ref={imageRef}>
          <img 
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-47.png.webp" 
            alt="Regenerative Medicine" 
            width="690" 
            height="607"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default RegenerativeHero;

