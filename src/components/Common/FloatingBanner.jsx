import { useState, useEffect } from 'react';
import './FloatingBanner.css';

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Check if already closed in localStorage
    const storageKey = 'popupClosedOrSubmitted';

    const getWithExpiry = (key) => {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;
      try {
        const item = JSON.parse(itemStr);
        if (new Date().getTime() > item.expiry) {
          localStorage.removeItem(key);
          return null;
        }
        return item.value;
      } catch {
        return null;
      }
    };

    if (!getWithExpiry(storageKey)) {
      // Show after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    
    // Save to localStorage for 30 days
    const storageKey = 'popupClosedOrSubmitted';
    const hideDays = 30;
    const now = new Date();
    const expiry = now.getTime() + hideDays * 24 * 60 * 60 * 1000;
    localStorage.setItem(storageKey, JSON.stringify({ value: 'yes', expiry }));
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className="floating-banner">
      <div className="floating-banner-content">
        <p className="floating-banner-text">
          To honor Veterans this November, all Veterans and active-duty military members receive $500 off.
        </p>
        <div className="floating-banner-cta">
          <a href="/firstresponders/" className="floating-banner-link">
            Learn More
          </a>
        </div>
        <button 
          className="floating-banner-close" 
          onClick={handleClose}
          aria-label="Close Banner"
        >
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingBanner;

