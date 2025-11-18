import './NewsHero.css';

const NewsHero = () => {
  return (
    <section className="news-hero-section">
      <div className="news-hero-container">
        <h1 className="news-hero-title animated fadeInDown" data-animate-immediate="true">
          QC Kinetix in the News
        </h1>
        <img
          className="news-hero-divider animated fadeInLeft"
          src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
          width="177"
          height="8"
          alt="Decorative divider"
          loading="lazy"
          data-animate-immediate="true"
        />
      </div>
    </section>
  );
};

export default NewsHero;


