import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source 
            src="https://qckinetix.com/wp-content/uploads/2025/03/QCK-Homepage-Video-v02-Compressed-NoOverlay_1.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in-down">
            Feel Better. Move Better. Live Better.
          </h1>
          
          <div className="hero-divider fade-in-left">
            <img 
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-69.svg" 
              alt="" 
              width="176" 
              height="7"
            />
          </div>
          
          <p className="hero-description">
            Regenerative medicine using your body's own healing abilities for natural pain relief. <br />
            No surgery. No drugs. No downtime.
          </p>
          
          <div className="hero-button fade-in-up">
            <a href="/about-us/" className="knee-pain-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

