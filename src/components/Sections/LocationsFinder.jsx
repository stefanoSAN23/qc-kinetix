import { useState } from 'react';
import './LocationsFinder.css';

const LocationsFinder = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      window.location.href = `https://qckinetix.com/qc-locations/?locate=${encodeURIComponent(query.trim())}`;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <section className="locations-finder-section">
      <div className="locations-finder-container">
        <div className="locations-finder-content">
          <h2>Find a QC Kinetix near you!</h2>
          <p>170+ regenerative medicine treatment centers nationwide</p>

          <div className="locations-finder-search">
            <input
              type="text"
              placeholder="ZIP Code, City, or State"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Location search"
            />
            <button type="button" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <a className="locations-finder-link" href="https://qckinetix.com/qc-locations/">
            View All Locations
          </a>
        </div>
        <div className="locations-finder-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Image-18.png.webp"
            width="714"
            height="444"
            alt="QC Kinetix map"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsFinder;

