import { useEffect, useRef } from 'react';
import './AlternativesToSurgery.css';

const AlternativesToSurgery = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="alternatives-section">
      <div className="alternatives-container">
        <div className="alternatives-image animated fadeIn" ref={imageRef}>
          <img 
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-636.png.webp" 
            alt="Alternatives to Surgery" 
            width="690" 
            height="393"
            loading="lazy"
          />
        </div>
        <div className="alternatives-content animated" ref={textRef}>
          <p>
            Our patients frequently rely on regenerative medicine treatments as alternatives to joint replacements, most commonly of the knee and the hip. Instead of undergoing additional tissue damage and pain, they prioritize joint preservation over surgical joint replacement to restore function. Treating soreness caused by arthritis or joint injury is the majority of our practice. Rather than endure surgical risks or a lengthy and painful recovery, they seek regenerative therapy, such as concentrated PRP or BMAC, for pain relief and restoration of joint health. Natural orthobiologics power their recovery so they can resume their favorite activities, improving their quality of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlternativesToSurgery;

