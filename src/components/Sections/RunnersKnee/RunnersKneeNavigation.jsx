import './RunnersKneeNavigation.css';

const RunnersKneeNavigation = () => {
  return (
    <section className="runners-knee-navigation-section">
      <div className="runners-knee-navigation-container">
        <nav className="runners-knee-navigation" role="navigation" aria-label="Post Navigation">
          <div className="runners-knee-navigation-prev">
            <a href="/blog/non-surgical-sciatica-treatment-regenerative-medicine/" rel="prev">
              <span className="runners-knee-navigation-link-prev">
                <span className="runners-knee-navigation-prev-label">Previous</span>
                <span className="runners-knee-navigation-prev-title">
                  Regenerative Sciatica Therapy: Natural Relief Without Surgery or Medication
                </span>
              </span>
            </a>
          </div>
          <div className="runners-knee-navigation-next">
            <a href="/blog/non-surgical-achilles-tendonitis-treatment/" rel="next">
              <span className="runners-knee-navigation-link-next">
                <span className="runners-knee-navigation-next-label">Next</span>
                <span className="runners-knee-navigation-next-title">
                  How to Soothe Achilles Tendon Pain Fast: Regenerative Medicine Solutions
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default RunnersKneeNavigation;


