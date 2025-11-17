import { useEffect } from 'react';
import './QCLocationsHero.css';

const QCLocationsHero = () => {
  useEffect(() => {
    const scriptId = 'storepoint-locations';
    if (document.getElementById(scriptId)) {
      return undefined;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = 'https://cdn.storepoint.co/api/v1/js/1661e94a9c91e8.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {};
  }, []);

  return (
    <section className="qc-locations-hero-section">
      <div className="qc-locations-hero-container">
        <div className="qc-locations-hero-text">
          <h1 className="qc-locations-hero-title animated fadeInDown" data-animate-immediate="true">
            Find Your Nearest QC Kinetix Location
          </h1>
          <img
            className="qc-locations-hero-divider animated fadeInLeft"
            data-animate-immediate="true"
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
            width="177"
            height="8"
            alt="Decorative divider"
            loading="lazy"
          />
        </div>

        <div
          className="qc-locations-map-wrapper animated fadeInUp"
          data-animate-immediate="true"
        >
          <div id="storepoint-container" data-map-id="1661e94a9c91e8"></div>
        </div>
      </div>
    </section>
  );
};

export default QCLocationsHero;

