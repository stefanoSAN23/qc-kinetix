import { useEffect } from 'react';
import './QCLocationsHero.css';

// Map configuration - EDITABLE
const MAP_CONFIG = {
  // Storepoint map ID (change this value to use another map)
  mapId: '1661e94a9c91e8',
  
  // Section title (you can change the text)
  title: 'Find Your Nearest QC Kinetix Location',
  
  // Storepoint script URL (usually you don't need to change it)
  scriptUrl: 'https://cdn.storepoint.co/api/v1/js',
  
  // Map type: 'storepoint' | 'google' | 'mapbox' | 'custom'
  mapType: 'storepoint'
};

const QCLocationsHero = ({ 
  // Optional props to override configuration
  mapId = MAP_CONFIG.mapId,
  title = MAP_CONFIG.title,
  mapType = MAP_CONFIG.mapType
}) => {
  useEffect(() => {
    // Only load Storepoint if that map type is used
    if (mapType !== 'storepoint') {
      return;
    }

    const scriptId = `storepoint-locations-${mapId}`;
    if (document.getElementById(scriptId)) {
      return undefined;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = `${MAP_CONFIG.scriptUrl}/${mapId}.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {};
  }, [mapId, mapType]);

  return (
    <section className="qc-locations-hero-section">
      <div className="qc-locations-hero-container">
        <div className="qc-locations-hero-text">
          <h1 className="qc-locations-hero-title animated fadeInDown" data-animate-immediate="true">
            {title}
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
          {mapType === 'storepoint' ? (
            <div id="storepoint-container" data-map-id={mapId}></div>
          ) : (
            <div className="custom-map-container">
              {/* You can add other map types here (Google Maps, Mapbox, etc.) */}
              <p>Custom map - Implement as needed</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QCLocationsHero;

