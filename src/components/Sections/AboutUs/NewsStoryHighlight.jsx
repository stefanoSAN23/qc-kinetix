import './NewsStoryHighlight.css';

const NewsStoryHighlight = () => {
  return (
    <section className="news-highlight-section">
      <div className="news-highlight-container">
        <div className="news-highlight-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-55.jpg.webp"
            width="720"
            height="401"
            alt="News highlight"
            loading="lazy"
          />
        </div>
        <div className="news-highlight-content">
          <div className="news-highlight-label">
            <h3 className="animated fadeInDown">News Story</h3>
            <img
              className="news-highlight-divider animated fadeInDown"
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
              width="177"
              height="8"
              alt="Decorative divider"
              loading="lazy"
            />
          </div>
          <h2>
            How Regenerative Medicine Is Accelerating the
            <br />
            Evolution of Personalized Healthcare
          </h2>
          <div className="news-highlight-actions">
            <a href="https://qckinetix.com/news-and-press/" className="animated fadeInUp">Read More</a>
            <a href="https://qckinetix.com/news-and-press/" className="animated fadeInUp">More News</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsStoryHighlight;


