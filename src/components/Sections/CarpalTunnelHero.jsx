import './CarpalTunnelHero.css';

const CarpalTunnelHero = () => {
  return (
    <section className="carpal-tunnel-hero-section">
      <div className="carpal-tunnel-hero-container">
        <div className="carpal-tunnel-featured-image">
          <img
            width="512"
            height="341"
            src="https://qckinetix.com/wp-content/uploads/2025/07/carpal-tunnel-image.jpg"
            alt="carpal tunnel syndrome"
            loading="lazy"
          />
        </div>
        
        <div className="carpal-tunnel-post-info">
          <ul className="carpal-tunnel-info-list">
            <li className="carpal-tunnel-info-item" itemProp="datePublished">
              <span className="carpal-tunnel-info-icon">
                <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
              <span className="carpal-tunnel-info-text">
                <time>July 23, 2025</time>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarpalTunnelHero;

