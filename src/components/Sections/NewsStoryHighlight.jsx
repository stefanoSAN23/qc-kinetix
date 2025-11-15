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
            <h3>News Story</h3>
            <img
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-331.svg"
              width="176"
              height="7"
              alt=""
              loading="lazy"
            />
          </div>
          <h2>How Regenerative Medicine Is Accelerating the Evolution of Personalized Healthcare</h2>
          <div className="news-highlight-actions">
            <a href="https://qckinetix.com/news-and-press/">Read More</a>
            <a href="https://qckinetix.com/news-and-press/">More News</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsStoryHighlight;

