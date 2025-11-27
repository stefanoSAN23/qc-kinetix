import { useEffect, useRef } from 'react';
import './FindPRPTreatment.css';

const FindPRPTreatment = () => {
  const titleRef = useRef(null);
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

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const redirectToLocation = () => {
    const searchInput = document.getElementById('prpSearchInput');
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
    <section className="find-prp-section">
      <div className="find-prp-container">
        <div className="find-prp-content">
          <h2 className="find-prp-title" ref={titleRef}>
            Find PRP Treatment Near Me
          </h2>
          <div className="find-prp-text">
            <p style={{ color: '#ffffff' }}>
              <span>QC Kinetix serves patients throughout 30+ states with professional clinics offering PRP therapy near you. No need to travel internationally, we continue to expand locations where PRP treatment is needed most. Check out our clinics in <a className="in-cell-link" href="https://qckinetix.com/asheville/prp-treatment/" target="_blank" rel="noopener">Asheville</a>, <a className="in-cell-link" href="https://qckinetix.com/charleston/prp-treatment/" target="_blank" rel="noopener">Charleston</a> or <a className="in-cell-link" href="https://qckinetix.com/greenville/prp-treatment/" target="_blank" rel="noopener">Greenville</a>!</span>
            </p>
          </div>

          <div className="search-container">
            <input
              type="text"
              id="prpSearchInput"
              placeholder="   ZIP Code, City, or State"
              className="search-input"
              onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={redirectToLocation} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
              </svg>
            </button>
          </div>

          <div className="find-prp-button animated bounce" ref={buttonRef}>
            <a href="/qc-locations/" className="qc-btn">
              View All Locations
            </a>
          </div>
        </div>

        <div className="find-prp-image">
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

export default FindPRPTreatment;

