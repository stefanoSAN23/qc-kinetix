import { useEffect, useRef } from 'react';
import { ImageDivider } from '../../Common';
import './RegenerativeHero.css';

const RegenerativeHero = () => {
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
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
          <ImageDivider 
            variant="green" 
            loading="eager" 
            animated={true}
            animation="fadeInDown"
            animateImmediate={true}
            className="regenerative-hero-divider" 
          />

        <h1
          className="regenerative-hero-title animated fadeInDown"
          data-animate-immediate="true"
          ref={titleRef}
        >
          Regenerative Medicine Treatments &amp; Therapy
        </h1>

          <div className="regenerative-hero-text">
            <p>
              <strong>QC Kinetix</strong> is the leader in regenerative medicine, a cutting-edge approach to healing that can help your body revive and revitalize damaged tissues. Regenerative medicine utilizes your own natural biologics like PRP (Platelet Rich Plasma), Plasma, and Stem Cells to work with your body's own healing process to reduce pain, improve mobility, and support long-term recovery. Whether you're dealing with joint pain, injuries, or chronic conditions, regenerative medicine offers a non-invasive solution to help you get back to living life on your terms.
            </p>
          </div>
        </div>

        <div
          className="regenerative-hero-image animated fadeIn"
          data-animate-immediate="true"
          ref={imageRef}
        >
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


