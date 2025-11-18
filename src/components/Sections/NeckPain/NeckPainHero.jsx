import './NeckPainHero.css';

const NeckPainHero = () => {
  return (
    <section className="neck-pain-hero-section">
      <div className="neck-pain-hero-container">
        <div className="neck-pain-featured-image">
          <img
            width="2560"
            height="1810"
            src="https://qckinetix.com/wp-content/smush-webp/2025/10/AdobeStock_127286389-scaled.jpeg.webp"
            alt="Neck pain"
            loading="lazy"
          />
        </div>
        
        <div className="neck-pain-post-info">
          <ul className="neck-pain-info-list">
            <li className="neck-pain-info-item" itemProp="datePublished">
              <span className="neck-pain-info-icon">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
              <span className="neck-pain-info-text">
                <time>October 26, 2025</time>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NeckPainHero;

