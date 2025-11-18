import './VeteranBackPainHero.css';

const VeteranBackPainHero = () => {
  return (
    <section className="veteran-back-pain-hero-section">
      <div className="veteran-back-pain-hero-container">
        <div className="veteran-back-pain-featured-image">
          <img
            width="453"
            height="632"
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/back-pain-6949392_1920.png.webp"
            alt="Veteran back pain without surgery"
            loading="lazy"
          />
        </div>
        
        <div className="veteran-back-pain-post-info">
          <ul className="veteran-back-pain-info-list">
            <li className="veteran-back-pain-info-item" itemProp="datePublished">
              <span className="veteran-back-pain-info-icon">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
              <span className="veteran-back-pain-info-text">
                <time>November 12, 2025</time>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VeteranBackPainHero;

