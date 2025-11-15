import './AboutStats.css';

const stats = [
  {
    value: 'Up to 10 Billion',
    description: 'Platelets in each PRP injection',
    footnote: 'Numbers can vary based on the health of the patient',
  },
  { value: '35,000+', description: 'Lives transformed' },
  { value: '170+', description: 'Locations nationwide' },
];

const AboutStats = () => {
  return (
    <section className="about-stats-section">
      <div className="about-stats-container">
        {stats.map((stat) => (
          <article key={stat.value} className="about-stat-card">
            <h3>{stat.value}</h3>
            <span />
            <p>{stat.description}</p>
            {stat.footnote && <small>{stat.footnote}</small>}
          </article>
        ))}

        <div className="about-stat-cta">
          <a href="https://qckinetix.com/qc-locations/" target="_blank" rel="noreferrer">
            Find a Location
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

