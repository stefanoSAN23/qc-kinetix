import './TennisElbowOfTheKneeNavigation.css';

const TennisElbowOfTheKneeNavigation = () => {
  return (
    <section className="tennis-elbow-of-the-knee-navigation-section">
      <div className="tennis-elbow-of-the-knee-navigation-container">
        <nav className="tennis-elbow-of-the-knee-navigation" role="navigation" aria-label="Post Navigation">
          <div className="tennis-elbow-of-the-knee-navigation-prev">
            <a href="/blog/non-surgical-regenerative-carpal-tunnel-treatment/" rel="prev">
              <span className="tennis-elbow-of-the-knee-navigation-link-prev">
                <span className="tennis-elbow-of-the-knee-navigation-prev-label">Previous</span>
                <span className="tennis-elbow-of-the-knee-navigation-prev-title">
                  Non-Surgical Regenerative Treatments for Carpal Tunnel Syndrome
                </span>
              </span>
            </a>
          </div>
          <div className="tennis-elbow-of-the-knee-navigation-next">
            <a href="/blog/prp-vs-cortisone-regenerative-medicine/" rel="next">
              <span className="tennis-elbow-of-the-knee-navigation-link-next">
                <span className="tennis-elbow-of-the-knee-navigation-next-label">Next</span>
                <span className="tennis-elbow-of-the-knee-navigation-next-title">
                  PRP Injection vs. Cortisone: The Natural Path to Long-Term Joint Health
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TennisElbowOfTheKneeNavigation;

