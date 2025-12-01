import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ variant = 'auto' }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      // Change to black background when scrolling (from 50px for better UX)
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (variant !== 'main') {
      body.classList.add('non-home-header-active');
    } else {
      body.classList.remove('non-home-header-active');
    }

    return () => {
      body.classList.remove('non-home-header-active');
    };
  }, [variant]);

  const menuItems = [
    {
      title: 'Regenerative Medicine',
      href: '/regenerative-medicine',
      submenu: [
        { title: 'Stem Cell Treatments', href: '/regenerative-medicine/stem-cell-treatments' },
        { title: 'PRP Treatments', href: '/regenerative-medicine/prp-treatments' },
        { title: 'Laser Therapy Treatments', href: '/regenerative-medicine/class-iv-laser-treatment' }
      ]
    },
    {
      title: 'Stem Cell Category Treatment Protocol',
      href: '/stem-cell-category-treatment-protocol',
      submenu: [
        { title: 'Stem Cell Articulation Treatments', href: '/stem-cell-category-treatment-protocol?categories=stem-cell-articulation' },
        { title: 'Stem Cell Autoimmune & Chronic Degenerative Treatments', href: '/stem-cell-category-treatment-protocol?categories=stem-cell-autoimmune' },
        { title: 'Stem Cell Anti-Aging Treatments', href: '/stem-cell-category-treatment-protocol?categories=stem-cell-anti-aging' },
        { title: 'Regenerative Medications for Legal Fly and Buy Program', href: '/stem-cell-category-treatment-protocol?categories=regenerative-medications' }
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

  const isRegenerativePage = location.pathname === '/regenerative-medicine' || location.pathname.startsWith('/regenerative-medicine/');
  const isConditionsPage = location.pathname === '/conditions/' || location.pathname === '/conditions';
  const isKneePainPage = location.pathname === '/knee-pain/' || location.pathname === '/knee-pain';
  const isShoulderPainPage = location.pathname === '/shoulder-pain/' || location.pathname === '/shoulder-pain';
  let shouldUseWhiteHeader;

  if (variant === 'main') {
    shouldUseWhiteHeader = false;
  } else if (variant === 'regenerative') {
    shouldUseWhiteHeader = true;
  } else {
    shouldUseWhiteHeader = isRegenerativePage || isConditionsPage || isKneePainPage || isShoulderPainPage;
  }

  // Function to handle internal links that reload the page
  const handleInternalLink = (e, href) => {
    e.preventDefault();
    window.location.href = href;
  };

  const toggleSubmenu = (idx) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenus({});
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${shouldUseWhiteHeader ? 'regenerative-page' : ''}`}>
      {/* Desktop Header */}
      <div className="header-desktop">
        <div className="header-container">
          <div className="logo-container">
            <a 
              href="/" 
              aria-label="QC Kinetix Home"
              onClick={(e) => handleInternalLink(e, '/')}
            >
              <img 
                src="https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg"
                alt="QC Kinetix" 
                className={`logo ${shouldUseWhiteHeader ? 'logo-green' : ''}`}
                loading="eager"
                fetchPriority="high"
                width="200"
                height="50"
              />
            </a>
          </div>

          <nav className="nav-menu-desktop" aria-label="Main navigation">
            <ul className="menu-list">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname === item.href || 
                                 location.pathname === item.href.replace(/\/$/, '') ||
                                 item.href === location.pathname.replace(/\/$/, '') ||
                                 (item.href === '/regenerative-medicine' && isRegenerativePage) ||
                                 (item.href === '/conditions/' && (isConditionsPage || isKneePainPage || isShoulderPainPage));
                return (
                  <li 
                    key={idx} 
                    className={`menu-item ${item.className || ''} ${item.submenu ? 'has-children' : ''} ${isActive ? 'active' : ''}`}
                  >
                    <a 
                      href={item.href} 
                      className={`menu-link ${isActive && shouldUseWhiteHeader ? 'active-regenerative' : ''}`}
                      onClick={(e) => handleInternalLink(e, item.href)}
                    >
                      {item.title}
                    </a>
                    {item.submenu && (
                      <ul className="sub-menu">
                        {item.submenu.map((sub, subIdx) => (
                          <li key={subIdx} className="sub-menu-item">
                            <a href={sub.href} className="sub-menu-link" onClick={(e) => handleInternalLink(e, sub.href)}>{sub.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-actions">
            <a href="/request-your-first-appointment/" className="req-btn" onClick={(e) => handleInternalLink(e, '/request-your-first-appointment/')}>
              <span>Request a Consultation</span>
            </a>
            <div className="phone-icon">
              <a href="tel:1-800-490-4725" aria-label="Call QC Kinetix at 800-490-4725">
                <svg className="phone-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span>800-490-4725</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="header-mobile">
        <div className="mobile-header-top">
          <div className="logo-container-mobile">
            <a 
              href="/" 
              aria-label="QC Kinetix Home"
              onClick={(e) => handleInternalLink(e, '/')}
            >
              <img 
                src="https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg"
                alt="QC Kinetix" 
                className={`logo ${shouldUseWhiteHeader ? 'logo-green' : ''}`}
                loading="eager"
                fetchPriority="high"
                width="200"
                height="50"
              />
            </a>
          </div>
          <div className="mobile-actions">
            <a href="/request-your-first-appointment/" className="req-btn mobile" onClick={(e) => handleInternalLink(e, '/request-your-first-appointment/')}>
              Request a Consultation
            </a>
            <div className="phone-icon">
              <a href="tel:1-800-490-4725" aria-label="Call QC Kinetix at 800-490-4725">
                <svg className="phone-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span>800-490-4725</span>
              </a>
            </div>
          </div>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <button 
            className="menu-toggle" 
            onClick={() => {
              setIsMenuOpen((prev) => {
                const next = !prev;
                if (!next) {
                  setOpenSubmenus({});
                }
                return next;
              });
            }}
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
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.href || 
                               location.pathname === item.href.replace(/\/$/, '') ||
                               item.href === location.pathname.replace(/\/$/, '') ||
                               (item.href === '/regenerative-medicine' && isRegenerativePage) ||
                               (item.href === '/conditions/' && (isConditionsPage || isKneePainPage || isShoulderPainPage));
              return (
                <li key={idx} className={`mobile-menu-item ${item.submenu ? 'has-children' : ''} ${isActive ? 'active' : ''}`}>
                  <div className="mobile-menu-item-header">
                    <a 
                      href={item.href} 
                      className={`mobile-menu-link ${isActive && shouldUseWhiteHeader ? 'active-regenerative' : ''}`} 
                      onClick={(e) => {
                        handleInternalLink(e, item.href);
                        closeMobileMenu();
                      }}
                    >
                      {item.title}
                    </a>
                    {item.submenu && (
                      <button
                        type="button"
                        className={`submenu-toggle ${openSubmenus[idx] ? 'open' : ''}`}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          toggleSubmenu(idx);
                        }}
                        aria-expanded={!!openSubmenus[idx]}
                        aria-label={`Show options for ${item.title}`}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 15.5L4.5 8l1.41-1.41L12 12.67l6.09-6.08L19.5 8z"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.submenu && (
                    <ul className={`mobile-sub-menu ${openSubmenus[idx] ? 'open' : ''}`}>
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a href={sub.href} onClick={(e) => {
                            handleInternalLink(e, sub.href);
                            closeMobileMenu();
                          }}>{sub.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

