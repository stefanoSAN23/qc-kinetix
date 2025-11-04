import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          {/* First Stat Item */}
          <div className="stat-item e-con-full e-flex e-con e-child">
            <div className="stat-heading animated fadeInDown">
              <h2 className="stat-number">
                Up to <span>10 Billion</span>
              </h2>
            </div>
            
            <div className="stat-divider animated fadeInLeft">
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
            
            <div className="stat-text animated fadeIn">
              <p>Platelets in each<br />PRP Injection</p>
            </div>
            
            <div className="stat-footnote animated fadeInUp">
              <p>Numbers can vary based on the health of the patient</p>
            </div>
          </div>

          {/* Second Stat Item */}
          <div className="stat-item e-con-full e-flex e-con e-child">
            <div className="stat-heading animated fadeInDown">
              <h2 className="stat-number">35,000+</h2>
            </div>
            
            <div className="stat-divider animated fadeInLeft">
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
            
            <div className="stat-text animated fadeIn">
              <p>Lives <br />transformed</p>
            </div>
          </div>

          {/* Third Stat Item */}
          <div className="stat-item e-con-full e-flex e-con e-child">
            <div className="stat-heading animated fadeInDown">
              <h2 className="stat-number">170+</h2>
            </div>
            
            <div className="stat-divider animated fadeInRight">
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
            
            <div className="stat-text animated fadeIn">
              <p>Locations</p>
            </div>
            
            <div className="stat-button animated fadeInUp">
              <a href="/qc-locations/" className="elementor-button elementor-button-link elementor-size-lg">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Find a Location</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

