import { useEffect, useRef } from 'react';
import './SectionHeader.css';

const SectionHeader = ({ 
  titlePart = "What is",
  mainTitle,
  dividerType = "image", // "image" | "dots" | "none"
  dividerImage = "https://qckinetix.com/wp-content/smush-webp/2025/04/Group-747.png.webp",
  dotsCount = 7,
  className = "",
  animation = "fadeInDown"
}) => {
  const dividerRef = useRef(null);
  const titleRef = useRef(null);
  const titlePartRef = useRef(null);
  const topContainerRef = useRef(null);

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

    if (dividerRef.current) observer.observe(dividerRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (titlePartRef.current) observer.observe(titlePartRef.current);
    if (topContainerRef.current) observer.observe(topContainerRef.current);

    return () => {
      if (dividerRef.current) observer.unobserve(dividerRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (titlePartRef.current) observer.unobserve(titlePartRef.current);
      if (topContainerRef.current) observer.unobserve(topContainerRef.current);
    };
  }, []);

  return (
    <div className={`qc-section-header ${className}`}>
      {(titlePart || dividerType === "dots" || dividerType === "image") && (
        <div className={`qc-section-header-top animated ${className.includes('benefits-of-laser-therapy') ? 'fadeInDown' : ''}`} ref={topContainerRef}>
          {titlePart && (
            <h2 className="qc-section-header-title-part animated" ref={titlePartRef}>{titlePart}</h2>
          )}
          {dividerType === "image" && (
            <div className="qc-section-header-divider-container">
              <img
                src={dividerImage}
                alt="Decorative divider"
                width="177"
                height="8"
                loading="lazy"
                className={`qc-section-header-divider animated ${animation}`}
                ref={dividerRef}
              />
            </div>
          )}
          {dividerType === "dots" && (
            <div className={`qc-section-header-dots animated ${animation}`} ref={dividerRef}>
              {Array.from({ length: dotsCount }).map((_, index) => (
                <div key={index} className="qc-section-header-dot dot-green"></div>
              ))}
            </div>
          )}
        </div>
      )}
      {mainTitle && (
        <h2 className={`qc-section-header-main-title animated fadeInUp`} ref={titleRef}>
          {mainTitle}
        </h2>
      )}
    </div>
  );
};

export default SectionHeader;

