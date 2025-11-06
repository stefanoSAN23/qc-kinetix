import { useEffect, useRef } from 'react';
import './WhatAreStemCellTreatments.css';

const WhatAreStemCellTreatments = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="what-are-stem-cell-section" id="regMed">
      <div className="what-are-stem-cell-container">
        <div className="what-are-stem-cell-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/09/AdobeStock_169681077-scaled-1-683x1024.jpeg.webp"
            alt="Stem Cell Treatment Process"
            width="683"
            height="1024"
            loading="lazy"
          />
        </div>

        <div className="what-are-stem-cell-content">
          <h2 className="what-are-stem-cell-title animated fadeInDown" ref={titleRef}>
            What Are Stem Cell Treatments and How Do They Work?
          </h2>
          <div className="what-are-stem-cell-text animated fadeInDown" ref={textRef}>
            <p>Stem cell treatments for pain use your body's own cells to help repair damaged tissue and reduce inflammation. There has been a growing interest in these regenerative treatments, particularly among people with orthopedic issues or joint discomfort, as they offer non-surgical options to ease discomfort and improve range of motion. By leveraging the body's extraordinary self-healing capabilities, orthopedic stem cell treatments aim to decrease pain and restore function, helping you return to a more active, unrestricted lifestyle.</p>
            <p>At QC Kinetix, we provide non-invasive, drug-free alternatives to surgery designed to enhance your quality of life. Our orthopedic stem cell treatments use <a href="/blog/orthobiologics/">natural biologics</a> to stimulate recovery while prioritizing your comfort and long-term wellness. Our patient-first approach makes you an active and informed partner in your own care, placing your needs, goals, and values at the forefront of all treatment decisions. Our clinical teams prioritize shared decision making, comprehensive education, and personalized treatment plans to improve your long-term function and overall well-being.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreStemCellTreatments;

