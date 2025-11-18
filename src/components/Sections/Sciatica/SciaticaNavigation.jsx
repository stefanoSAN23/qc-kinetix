import './SciaticaNavigation.css';

const SciaticaNavigation = () => {
  return (
    <section className="sciatica-navigation-section">
      <div className="sciatica-navigation-container">
        <nav className="sciatica-navigation" role="navigation" aria-label="Post Navigation">
          <div className="sciatica-navigation-prev">
            <a href="/blog/prp-vs-cortisone-regenerative-medicine/" rel="prev">
              <span className="sciatica-navigation-link-prev">
                <span className="sciatica-navigation-prev-label">Previous</span>
                <span className="sciatica-navigation-prev-title">
                  PRP Injection vs. Cortisone: The Natural Path to Long-Term Joint Health
                </span>
              </span>
            </a>
          </div>
          <div className="sciatica-navigation-next">
            <a href="/blog/runners-knee-regenerative-sports-medicine/" rel="next">
              <span className="sciatica-navigation-link-next">
                <span className="sciatica-navigation-next-label">Next</span>
                <span className="sciatica-navigation-next-title">
                  Runner's Knee Treatment: Regenerative Sports Medicine Solutions for Fall Marathon Training
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default SciaticaNavigation;


