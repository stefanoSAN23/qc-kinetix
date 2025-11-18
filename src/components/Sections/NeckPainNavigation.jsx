import './NeckPainNavigation.css';

const NeckPainNavigation = () => {
  return (
    <section className="neck-pain-navigation-section">
      <div className="neck-pain-navigation-container">
        <nav className="neck-pain-navigation" role="navigation" aria-label="Post Navigation">
          <div className="neck-pain-navigation-prev">
            <a href="/blog/non-surgical-achilles-tendonitis-treatment/" rel="prev">
              <span className="neck-pain-navigation-link-prev">
                <span className="neck-pain-navigation-prev-label">Previous</span>
                <span className="neck-pain-navigation-prev-title">
                  How to Soothe Achilles Tendon Pain Fast: Regenerative Medicine Solutions
                </span>
              </span>
            </a>
          </div>
          <div className="neck-pain-navigation-next">
            <a href="/blog/veteran-back-pain-without-surgery/" rel="next">
              <span className="neck-pain-navigation-link-next">
                <span className="neck-pain-navigation-next-label">Next</span>
                <span className="neck-pain-navigation-next-title">
                  Combat & Service-Related Back Pain: Regenerative Treatment for Veterans
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NeckPainNavigation;

