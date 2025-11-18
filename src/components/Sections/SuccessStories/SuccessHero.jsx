import './SuccessHero.css';

const SuccessHero = () => {
  return (
    <section className="success-hero-section">
      <div className="success-hero-container">
        <div className="success-hero-left">
          <h1 className="animated fadeInDown" data-animate-immediate="true">PRP Before &amp; After<br />from Patients</h1>
          <img
            className="success-hero-divider animated fadeInDown"
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
            width="177"
            height="8"
            alt="Decorative divider"
            loading="lazy"
            data-animate-immediate="true"
          />
        </div>
        <div className="success-hero-right">
          <p className="success-hero-description">
            At QC Kinetix, we understand that every body, and every journey to a pain-free life, is unique.
            That's why we don't believe in one-size-fits-all solutions. Instead, we take the time to truly
            listen and understand your specific needs, crafting a personalized regenerative therapy plan to
            help you achieve your goals. Hear from individuals just like you who have discovered the QC
            Kinetix difference. These success stories are a testament to the power of regenerative medicine
            and the potential for a more fulfilling, active future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessHero;


