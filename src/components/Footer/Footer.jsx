import './Footer.css';

const Footer = () => {
  const redirectToLocation = () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value) {
      window.location.href = `/qc-locations/?locate=${encodeURIComponent(searchInput.value)}`;
    }
  };

  return (
    <footer className="footer-section">
      {/* Logo positioned absolutely */}
      <div className="footer-logo-container">
        <img
          width="1440"
          height="360"
          src="https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg"
          className="footer-logo"
          alt="QC Kinetix Logo"
        />
        <div className="footer-copyright-container">
          <p className="footer-copyright">© 2025 QC Kinetix. All Rights Reserved.</p>
        </div>
      </div>
      
      <div className="footer-main-content">
        {/* Pain Relief Section */}
        <div className="footer-pain-relief-section">
          <div className="footer-column-title-container">
            <h4 className="footer-column-title">I'm seeking pain relief for my:</h4>
          </div>
          <div className="footer-pain-relief-columns">
            <nav className="footer-nav-menu footer-nav-menu-left">
              <ul>
                <li><a href="https://qckinetix.com/knee-pain/">Knee</a></li>
                <li><a href="https://qckinetix.com/shoulder-pain/">Shoulder</a></li>
                <li><a href="https://qckinetix.com/elbow-pain/">Elbow</a></li>
                <li><a href="https://qckinetix.com/wrist-pain/">Wrist</a></li>
                <li><a href="https://qckinetix.com/back-pain/">Lower Back</a></li>
                <li><a href="https://qckinetix.com/hip-pain/">Hip</a></li>
              </ul>
            </nav>
            <nav className="footer-nav-menu footer-nav-menu-right">
              <ul>
                <li><a href="https://qckinetix.com/finger-toe-pain/">Finger/Toe</a></li>
                <li><a href="https://qckinetix.com/foot-hand-pain/">Foot/Hand</a></li>
                <li><a href="https://qckinetix.com/ankle-pain/">Ankle</a></li>
                <li><a href="https://qckinetix.com/joint-pain-treatments/">Joints</a></li>
                <li><a href="https://qckinetix.com/arthritis-pain/">Arthritis</a></li>
                <li><a href="https://qckinetix.com/tendon-and-ligament-pain/" className="tendon-link">Tendon, Ligament, Muscle</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Supplements and Join Our Team Section */}
        <div className="footer-supplements-section">
          <div className="footer-supplements-join-wrapper">
            <div className="footer-supplements-group">
              <div className="footer-column-title-container">
                <h4 className="footer-column-title">Supplements</h4>
              </div>
              <nav className="footer-nav-menu">
                <ul>
                  <li><a target="_blank" href="https://qcjointhealth.com/" rel="noopener noreferrer">Joint &amp; Bone Health</a></li>
                  <li><a target="_blank" href="https://qcpaincream.com/" rel="noopener noreferrer">Soreness Cream</a></li>
                </ul>
              </nav>
            </div>
            <div className="footer-join-team-group">
              <div className="footer-column-title-container">
                <h4 className="footer-column-title">Join Our Team</h4>
              </div>
              <nav className="footer-nav-menu">
                <ul>
                  <li><a href="https://qckinetix.com/employment/">Careers</a></li>
                  <li><a href="https://qckinetix.com/franchise/">Franchising Opportunities</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="footer-col footer-col-5">
          <div className="footer-column-title-container">
            <h4 className="footer-column-title">
              <a href="https://qckinetix.com/qc-locations/">Locations</a>
              <a href="/qc-locations/"><span className="footer-view-all">View All &gt;</span></a>
            </h4>
          </div>
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="ZIP Code, City, or State" className="search-input" />
            <button className="search-button" onClick={redirectToLocation} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Privacy Links and Disclaimer */}
      <div className="footer-bottom-section">
        <div className="footer-bottom-content">
          <nav className="footer-bottom-links">
            <a rel="privacy-policy" href="https://qckinetix.com/privacy-policy/">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="https://qckinetix.com/privacy-practices/">Privacy Practices</a>
            <span className="separator">|</span>
            <a href="https://qckinetix.com/terms-of-use/">Terms of use</a>
          </nav>
          <div className="footer-disclaimer">
            <p>The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment. All content, including text, graphics, images and information, contained on or available through this website is for general information purposes only. You are encouraged to confirm any information obtained from or through this website with other sources, and review all information regarding any medical condition or treatment with your licensed Healthcare provider.<br />Individual results may vary. The statements made by the endorsers reflect their personal experience and are not a guarantee of specific outcomes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
