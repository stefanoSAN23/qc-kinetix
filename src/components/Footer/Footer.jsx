import './Footer.css';

const Footer = () => {
  const painConditions = [
    { title: 'Knee', href: '/knee-pain/' },
    { title: 'Shoulder', href: '/shoulder-pain/' },
    { title: 'Elbow', href: '/elbow-pain/' },
    { title: 'Wrist', href: '/wrist-pain/' },
    { title: 'Lower Back', href: '/back-pain/' },
    { title: 'Hip', href: '/hip-pain/' },
    { title: 'Finger/Toe', href: '/finger-toe-pain/' },
    { title: 'Foot/Hand', href: '/foot-hand-pain/' },
    { title: 'Ankle', href: '/ankle-pain/' },
    { title: 'Joints', href: '/joint-pain-treatments/' },
    { title: 'Arthritis', href: '/arthritis-pain/' },
    { title: 'Tendon, Ligament, Muscle', href: '/tendon-and-ligament-pain/' }
  ];

  const supplements = [
    { title: 'Joint & Bone Health', href: 'https://qcjointhealth.com/', external: true },
    { title: 'Soreness Cream', href: 'https://qcpaincream.com/', external: true }
  ];

  const joinTeam = [
    { title: 'Careers', href: '/employment/' },
    { title: 'Franchising Opportunities', href: '/franchise/' }
  ];

  const handleLocationSearch = (e) => {
    e.preventDefault();
    const input = document.getElementById('footerSearchInput');
    if (input && input.value.trim()) {
      window.location.href = `/qc-locations/?locate=${encodeURIComponent(input.value.trim())}`;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-logo">
            <img 
              src="https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg" 
              alt="QC Kinetix Logo" 
              width="1440" 
              height="360"
              loading="lazy"
            />
            <p>© 2025 QC Kinetix. All Rights Reserved.</p>
          </div>

          <div className="footer-column">
            <h4>I'm seeking pain relief for my:</h4>
            <ul className="footer-menu">
              {painConditions.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Supplements</h4>
            <ul className="footer-menu">
              {supplements.map((item, index) => (
                <li key={index}>
                  <a href={item.href} target={item.external ? '_blank' : '_self'} rel={item.external ? 'noopener noreferrer' : ''}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Join Our Team</h4>
            <ul className="footer-menu">
              {joinTeam.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>
              <a href="/qc-locations/">Locations <span className="view-all">View All &gt;</span></a>
            </h4>
            <div className="search-container">
              <input 
                type="text" 
                id="footerSearchInput" 
                placeholder="ZIP Code, City, or State" 
                className="search-input"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleLocationSearch(e);
                  }
                }}
              />
              <button 
                className="search-button" 
                onClick={handleLocationSearch}
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <nav className="footer-nav" aria-label="Footer legal navigation">
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/privacy-practices/">Privacy Practices</a>
            <a href="/terms-of-use/">Terms of use</a>
          </nav>
          <div className="footer-disclaimer">
            <p>
              The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment. All content, including text, graphics, images and information, contained on or available through this website is for general information purposes only. You are encouraged to confirm any information obtained from or through this website with other sources, and review all information regarding any medical condition or treatment with your licensed Healthcare provider.<br />
              Individual results may vary. The statements made by the endorsers reflect their personal experience and are not a guarantee of specific outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

