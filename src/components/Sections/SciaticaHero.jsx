import './SciaticaHero.css';

const SciaticaHero = () => {
  return (
    <section className="sciatica-hero-section">
      <div className="sciatica-hero-container">
        <div className="sciatica-featured-image">
          <img
            width="1200"
            height="658"
            src="https://qckinetix.com/wp-content/smush-webp/2025/08/sciatica-image.jpg.webp"
            alt="Sciatica treatment regenerative medicine"
            loading="lazy"
          />
        </div>
        
        <div className="sciatica-post-info">
          <ul className="sciatica-info-list">
            <li className="sciatica-info-item" itemProp="datePublished">
              <span className="sciatica-info-icon">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
              <span className="sciatica-info-text">
                <time>August 19, 2025</time>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SciaticaHero;

