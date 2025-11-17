import './FAQHero.css';

const FAQHero = () => {
  return (
    <section className="faq-hero-section">
      <div className="faq-hero-container">
        <div className="faq-hero-left">
          <h1 className="faq-hero-title animated fadeInDown" data-animate-immediate="true">
            FAQs on Regenerative Medicine & PRP Therapy
          </h1>
          <img
            className="faq-hero-divider animated fadeInLeft"
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
            width="177"
            height="8"
            alt="Decorative divider"
            loading="lazy"
            data-animate-immediate="true"
          />
        </div>
        <div className="faq-hero-right">
          <div className="faq-description-container">
            <p>
              At QC Kinetix, we customize orthobiologic therapies for each patient to stimulate the body's natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient's pain, promoting targeted recovery.
            </p>
            <p>
              If you're eager to learn more about regenerative pain medicine and how it can help you with your specific issues, our FAQs provide basic information about our alternative therapies for pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;

