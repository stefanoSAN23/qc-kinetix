import './VeteranBackPainNavigation.css';

const VeteranBackPainNavigation = () => {
  return (
    <section className="veteran-back-pain-navigation-section">
      <div className="veteran-back-pain-navigation-container">
        <nav className="veteran-back-pain-navigation" role="navigation" aria-label="Post Navigation">
          <div className="veteran-back-pain-navigation-prev">
            <a href="/blog/neck-pain-relief-near-me-regenerative-solutions/" rel="prev">
              <span className="veteran-back-pain-navigation-link-prev">
                <span className="veteran-back-pain-navigation-prev-label">Previous</span>
                <span className="veteran-back-pain-navigation-prev-title">
                  Advanced Neck Pain Relief: How Regenerative Medicine Outperforms Surgery
                </span>
              </span>
            </a>
          </div>
          <div className="veteran-back-pain-navigation-next">
            {/* Next post would go here */}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default VeteranBackPainNavigation;

