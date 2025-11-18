import './AchillesTendonitisNavigation.css';

const AchillesTendonitisNavigation = () => {
  return (
    <section className="achilles-tendonitis-navigation-section">
      <div className="achilles-tendonitis-navigation-container">
        <nav className="achilles-tendonitis-navigation" role="navigation" aria-label="Post Navigation">
          <div className="achilles-tendonitis-navigation-prev">
            <a href="/blog/runners-knee-regenerative-sports-medicine/" rel="prev">
              <span className="achilles-tendonitis-navigation-link-prev">
                <span className="achilles-tendonitis-navigation-prev-label">Previous</span>
                <span className="achilles-tendonitis-navigation-prev-title">
                  Runner's Knee Treatment: Regenerative Sports Medicine Solutions for Fall Marathon Training
                </span>
              </span>
            </a>
          </div>
          <div className="achilles-tendonitis-navigation-next">
            <a href="/blog/neck-pain-relief-near-me-regenerative-solutions/" rel="next">
              <span className="achilles-tendonitis-navigation-link-next">
                <span className="achilles-tendonitis-navigation-next-label">Next</span>
                <span className="achilles-tendonitis-navigation-next-title">
                  Advanced Neck Pain Relief: How Regenerative Medicine Outperforms Surgery
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default AchillesTendonitisNavigation;

