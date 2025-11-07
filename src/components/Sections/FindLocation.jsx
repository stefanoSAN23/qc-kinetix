import { useEffect, useRef } from 'react';
import './FindLocation.css';

const FindLocation = () => {
  const titleRef = useRef(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const redirectToLocation = () => {
    const searchInput = document.getElementById('findLocationSearchInput');
    if (searchInput && searchInput.value) {
      window.location.href = `/qc-locations/?locate=${encodeURIComponent(searchInput.value)}`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      redirectToLocation();
    }
  };

  return (
    <section className="find-location-section">
      <div className="find-location-container">
        <div className="find-location-content">
          <div className="find-location-left">
            <h2 className="find-location-title animated fadeInDown" ref={titleRef}>
              Find a QC Kinetix near you!
            </h2>
            <p className="find-location-subtitle">170+ Regenerative Medicine treatment centers nationwide</p>
            
            <div className="find-location-search">
              <input
                type="text"
                id="findLocationSearchInput"
                placeholder="ZIP Code, City, or State"
                className="find-location-search-input"
                onKeyDown={handleKeyDown}
              />
              <button className="find-location-search-button" onClick={redirectToLocation} aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
                </svg>
              </button>
            </div>

            <div className="find-location-button animated fadeInUp" ref={buttonRef}>
              <a 
                href="/qc-locations/" 
                className="qc-button qc-button-primary qc-button-small"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/qc-locations/';
                }}
              >
                View All Locations
              </a>
            </div>
          </div>

          <div className="find-location-right">
            <div className="find-location-image animated fadeIn" ref={imageRef}>
              <img
                src="https://qckinetix.com/wp-content/smush-webp/2025/04/Image-18.png.webp"
                alt="QC Kinetix Locations"
                width="714"
                height="444"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindLocation;

