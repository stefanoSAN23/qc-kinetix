import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Regenerative Medicine',
      href: '/regenerative-medicine/',
      submenu: [
        { title: 'Stem Cell Treatments', href: '/regenerative-medicine/stem-cell-treatments/' },
        { title: 'PRP Treatments', href: '/regenerative-medicine/prp-treatments/' },
        { title: 'Laser Therapy Treatments', href: '/regenerative-medicine/class-iv-laser-treatment/' }
      ]
    },
    {
      title: 'Conditions Treated',
      href: '/conditions/',
      className: 'treatmentMegaMenu',
      submenu: [
        { title: 'Knee Pain', href: '/knee-pain/' },
        { title: 'Shoulder Pain', href: '/shoulder-pain/' },
        { title: 'Elbow Pain', href: '/elbow-pain/' },
        { title: 'Wrist Pain', href: '/wrist-pain/' },
        { title: 'Back Pain', href: '/back-pain/' },
        { title: 'Hip Pain', href: '/hip-pain/' },
        { title: 'Ankle Pain', href: '/ankle-pain/' },
        { title: 'Arthritis Pain', href: '/arthritis-pain/' },
        { title: 'Finger & Toe Pain', href: '/finger-toe-pain/' },
        { title: 'Foot & Hand Pain', href: '/foot-hand-pain/' },
        { title: 'Tendon & Ligament Pain', href: '/tendon-and-ligament-pain/' },
        { title: 'Joint Pain', href: '/joint-pain-treatments/' }
      ]
    },
    { title: 'What to Expect', href: '/what-to-expect/' },
    {
      title: 'About Us',
      href: '/about-us/',
      submenu: [
        { title: 'Success Stories', href: '/success-stories/' },
        { title: 'Blog', href: '/regenerative-medicine-blog/' },
        { title: 'News', href: '/news-and-press/' },
        { title: 'FAQs', href: '/faq/' },
        { title: 'Webinar', href: '/webinars/' }
      ]
    },
    { title: 'Locations', href: '/qc-locations/' }
  ];

  return (
    <header className={`header ${isSticky ? 'sticky-active' : ''}`}>
      {/* Desktop Header */}
      <div className="header-desktop">
        <div className="header-container">
          <div className="logo-container">
            <a href="/">
              <img 
                src="https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg" 
                alt="QC Kinetix" 
                className="logo"
              />
            </a>
          </div>

          <nav className="nav-menu-desktop">
            <ul className="menu-list">
              {menuItems.map((item, idx) => (
                <li 
                  key={idx} 
                  className={`menu-item ${item.className || ''} ${item.submenu ? 'has-children' : ''}`}
                >
                  <a href={item.href} className="menu-link">{item.title}</a>
                  {item.submenu && (
                    <ul className="sub-menu">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx} className="sub-menu-item">
                          <a href={sub.href} className="sub-menu-link">{sub.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href="/request-your-first-appointment/" className="req-btn">
              <span>Request a Consultation</span>
            </a>
            <div className="phone-icon">
              <a href="tel:1-800-490-4725">
                <svg className="phone-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span>800-490-4725</span>
              </a>
            </div>
            <div className="search-icon">
              <a href="#search">
                <svg className="search-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="header-mobile">
        <div className="mobile-header-top">
          <div className="logo-container-mobile">
            <a href="/">
              <img 
                src="https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg" 
                alt="QC Kinetix" 
                className="logo"
              />
            </a>
          </div>
          <div className="mobile-actions">
            <a href="/request-your-first-appointment/" className="req-btn mobile">
              Request a Consultation
            </a>
            <div className="phone-mob">
              <a href="tel:1-800-490-4725">📞 1.800.490.4QCK</a>
            </div>
          </div>
        </div>

        <nav className="mobile-nav">
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu Toggle"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="close-icon" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
              </svg>
            ) : (
              <svg className="menu-icon" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
              </svg>
            )}
          </button>

          <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item, idx) => (
              <li key={idx} className={`mobile-menu-item ${item.submenu ? 'has-children' : ''}`}>
                <a href={item.href} className="mobile-menu-link" onClick={() => !item.submenu && setIsMenuOpen(false)}>
                  {item.title}
                </a>
                {item.submenu && (
                  <ul className="mobile-sub-menu">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <a href={sub.href} onClick={() => setIsMenuOpen(false)}>{sub.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="desktop-hide req-btn mobile-menu-item">
              <a href="/request-your-first-appointment/" onClick={() => setIsMenuOpen(false)}>Request a Consultation</a>
            </li>
            <li className="desktop-hide phone-mob mobile-menu-item">
              <a href="tel:1-800-490-4725" onClick={() => setIsMenuOpen(false)}>📞 1.800.490.4QCK</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

