import './PRPVsCortisoneNavigation.css';

const PRPVsCortisoneNavigation = () => {
  return (
    <section className="prp-vs-cortisone-navigation-section">
      <div className="prp-vs-cortisone-navigation-container">
        <nav className="prp-vs-cortisone-navigation" role="navigation" aria-label="Post Navigation">
          <div className="prp-vs-cortisone-navigation-prev">
            <a href="/blog/tennis-elbow-of-the-knee/" rel="prev">
              <span className="prp-vs-cortisone-navigation-link-prev">
                <span className="prp-vs-cortisone-navigation-prev-label">Previous</span>
                <span className="prp-vs-cortisone-navigation-prev-title">
                  Tennis Elbow of the Knee: Understanding Medial Knee Pain
                </span>
              </span>
            </a>
          </div>
          <div className="prp-vs-cortisone-navigation-next">
            <a href="/blog/non-surgical-sciatica-treatment-regenerative-medicine/" rel="next">
              <span className="prp-vs-cortisone-navigation-link-next">
                <span className="prp-vs-cortisone-navigation-next-label">Next</span>
                <span className="prp-vs-cortisone-navigation-next-title">
                  Regenerative Sciatica Therapy: Natural Relief Without Surgery or Medication
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default PRPVsCortisoneNavigation;


