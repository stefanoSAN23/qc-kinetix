import { useEffect } from 'react';
import './TrustIndexWidget.css';

const TrustIndexWidget = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-trustindex]');
    if (existingScript) {
      return undefined;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?1c22e1743bcb812a96368e7fe1a';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-trustindex', 'true');
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="trustindex-section">
      <div className="trustindex-container">
        <div className="ti-widget ti-widget--list" data-ti-widget-id="1c22e1743bcb812a96368e7fe1a" />
      </div>
    </section>
  );
};

export default TrustIndexWidget;

