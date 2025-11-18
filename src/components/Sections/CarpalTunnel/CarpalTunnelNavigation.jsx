import './CarpalTunnelNavigation.css';

const CarpalTunnelNavigation = () => {
  return (
    <section className="carpal-tunnel-navigation-section">
      <div className="carpal-tunnel-navigation-container">
        <nav className="carpal-tunnel-navigation" role="navigation" aria-label="Post Navigation">
          <div className="carpal-tunnel-navigation-prev">
            <a href="/blog/qc-kinetix-sponsors-national-pickleball-league/" rel="prev">
              <span className="carpal-tunnel-navigation-link-prev">
                <span className="carpal-tunnel-navigation-prev-label">Previous</span>
                <span className="carpal-tunnel-navigation-prev-title">
                  QC Kinetix Sponsors National Pickleball League
                </span>
              </span>
            </a>
          </div>
          <div className="carpal-tunnel-navigation-next">
            <a href="/blog/tennis-elbow-of-the-knee/" rel="next">
              <span className="carpal-tunnel-navigation-link-next">
                <span className="carpal-tunnel-navigation-next-label">Next</span>
                <span className="carpal-tunnel-navigation-next-title">
                  Tennis Elbow of the Knee: Understanding Medial Knee Pain
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default CarpalTunnelNavigation;


