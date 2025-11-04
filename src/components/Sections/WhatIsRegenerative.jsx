import './WhatIsRegenerative.css';

const WhatIsRegenerative = () => {
  return (
    <section className="what-is-section">
      <div className="what-is-container">
        <div className="what-is-header fade-in-down">
          <div className="header-top">
            <h2>What is</h2>
            <img 
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-331.svg" 
              alt="" 
              width="176" 
              height="7"
            />
          </div>
          <h2 className="title-large">Regenerative Medicine ?</h2>
        </div>

        <div className="what-is-content">
          <p>
            <strong>QC Kinetix</strong> is the leader in regenerative medicine, an alternative approach to healing that can help your body revive and revitalize damaged tissues. Regenerative medicine utilizes your own natural biologics like PRP (Platelet Rich Plasma), Plasma, and Stem Cells to work with your body's own healing process to reduce pain, improve mobility, and support long-term recovery. Whether you're dealing with joint pain, injuries, or chronic conditions, regenerative medicine offers a noninvasive solution to help you get back to living life on your terms.
          </p>

          <div className="dual-buttons">
            <a href="/regenerative-medicine/" className="btn-primary">
              Learn More
            </a>
            <a href="/request-your-first-appointment/" className="btn-primary">
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRegenerative;

