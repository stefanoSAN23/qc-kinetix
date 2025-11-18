import './AboutHero.css';

const pillars = [
  {
    title: 'Improve Quality of Life',
    description:
      'Patients first. Our ultimate goal is to get people back to living a life free of pain and full of joy.',
  },
  {
    title: 'Honesty & Integrity',
    description: 'We do the morally and ethically right thing, every time. No exceptions.',
  },
  {
    title: 'Promote Positivity',
    description: 'We are our best selves when we are positively connected to and helping others.',
  },
];

const AboutHero = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-heading animated fadeInDown" data-animate-immediate="true">
            <h1 className="animated fadeInDown" data-animate-immediate="true">
              Advancing Regenerative Medicine
            </h1>
            <div
              className="about-hero-dots animated fadeIn"
              aria-hidden="true"
              data-animate-immediate="true"
            >
              <img
                src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
                width="177"
                height="8"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <p className="about-hero-description">
            Our mission is to utilize regenerative medicine to enhance the quality of life of as
            many people as possible without the use of drugs or surgery.
          </p>
        </div>
        <div className="about-hero-image animated fadeIn" data-animate-immediate="true">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/couple-running-1-1024x553.jpg.webp"
            width="800"
            height="432"
            loading="lazy"
            alt="Active couple running outdoors"
          />
        </div>
      </div>

      <div className="about-pillars">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="about-pillar-card">
            <div className="about-pillar-title">
              <h3>{pillar.title}</h3>
              <span />
            </div>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;


