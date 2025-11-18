import './WhatToExpectHero.css';

const WhatToExpectHero = () => {
  return (
    <section className="wte-hero-section">
      <div className="wte-hero-container">
        <div className="wte-hero-content">
          <h1 className="animated fadeInDown" data-animate-immediate="true">
            Types of Regenerative
            <br />
            Medicine
          </h1>
          <div className="wte-hero-dots">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <p>
            At QC Kinetix we blend our orthobiologic regenerative medicine techniques with a patient-first
            approach that ensures you are supported at every step of the way. When you enter our clinic,
            you'll be greeted warmly, offered refreshments, and made to feel at home; then, your own patient
            advocate will walk you through the regenerative procedures we offer.
          </p>
          <p>
            We treat patients as our partners in their regenerative therapy journey. You will have direct
            access to your medical team and can expect answers the same day as your consultation. Our sole
            focus is getting you back to what you love without surgery, without medication and without downtime.
          </p>
        </div>

        <div className="wte-hero-image-wrapper animated fadeIn" data-animate-immediate="true">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-47-1.png.webp"
            alt="Patient consultation"
            width="759"
            height="686"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectHero;


