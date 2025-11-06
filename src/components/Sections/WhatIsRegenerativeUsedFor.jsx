import { useEffect, useRef } from 'react';
import './WhatIsRegenerativeUsedFor.css';

const WhatIsRegenerativeUsedFor = () => {
  const titleRef = useRef(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="what-is-used-for-section" id="regMed">
      <div className="what-is-used-for-container">
        <div className="what-is-used-for-content">
          <h2 className="what-is-used-for-title animated fadeInDown" ref={titleRef}>
            What is Regenerative<br /> Medicine Used For?
          </h2>
          <p className="what-is-used-for-text">
            At QC Kinetix, we use regenerative medicine for non-surgical, drug-free joint preservation. Our orthobiologic therapies treat joint pain caused by a musculoskeletal condition, injury, or degeneration, restoring joint health and function. These natural pain treatments provide effective alternatives to invasive and painful surgeries.
          </p>
        </div>
        <div className="what-is-used-for-image">
          <img 
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-635.png.webp" 
            alt="Regenerative Medicine Treatment" 
            width="690" 
            height="393"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsRegenerativeUsedFor;


