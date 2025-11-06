import { useEffect, useRef } from 'react';
import './FindStemCellTreatment.css';

const FindStemCellTreatment = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
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

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const redirectToLocation = () => {
    const searchInput = document.getElementById('stemCellSearchInput');
    if (searchInput && searchInput.value.trim()) {
      window.location.href = `/qc-locations/?locate=${encodeURIComponent(searchInput.value.trim())}`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      redirectToLocation();
    }
  };

  return (
    <section className="find-stem-cell-section">
      <div className="find-stem-cell-container">
        <div className="find-stem-cell-content">
          <h2 className="find-stem-cell-title" ref={titleRef}>
            Find Stem Cell Treatment Near Me
          </h2>
          <div className="find-stem-cell-text" ref={textRef}>
            <p>
              <span style={{ color: '#ffffff' }}>
                QC Kinetix serves patients throughout 30+ states with professional clinics offering stem cell treatment near you. No need to travel internationally, we continue to <a style={{ color: '#ffffff' }} href="/qc-locations/" rel="noopener">expand locations</a> where stem cell treatment is needed most.
              </span>
            </p>
          </div>

          <div className="search-container">
            <input
              type="text"
              id="stemCellSearchInput"
              placeholder="ZIP Code, City, or State"
              className="search-input"
              onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={redirectToLocation} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
              </svg>
            </button>
          </div>

          <div className="find-stem-cell-button animated bounce" ref={buttonRef}>
            <a href="/qc-locations/" className="knee-pain-btn">
              View All Locations
            </a>
          </div>
        </div>

        <div className="find-stem-cell-image" ref={imageRef}>
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Image-18.png.webp"
            alt="QC Kinetix Locations Map"
            width="714"
            height="444"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FindStemCellTreatment;

