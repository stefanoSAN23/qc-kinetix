import './SciaticaRelated.css';

const SciaticaRelated = () => {
  const relatedPosts = [
    {
      id: 1,
      title: 'Why Your Back Makes Your IT Band Hurt',
      date: 'May 29, 2025',
      image: 'https://qckinetix.com/wp-content/uploads/2024/03/lower-back-pain-in-the-morning-2048x1366.jpg.webp',
      link: 'https://qckinetix.com/blog/why-your-back-makes-your-it-band-hurt/'
    },
    {
      id: 2,
      title: 'Why Patients are Choosing Regenerative Over Surgery',
      date: 'January 9, 2025',
      image: 'https://qckinetix.com/wp-content/uploads/2024/02/torn-labrum-shoulder-recovery-without-surgery-1024x683.jpg.webp',
      link: 'https://qckinetix.com/blog/why-patients-are-choosing-regenerative-over-surgery/'
    }
  ];

  return (
    <section className="sciatica-related-section">
      <div className="sciatica-related-container">
        <h2 className="sciatica-related-title">Related Posts</h2>
        
        <div className="sciatica-related-grid">
          {relatedPosts.map((post) => (
            <article key={post.id} className="sciatica-related-post">
              <a href={post.link} className="sciatica-related-post-link">
                <div className="sciatica-related-post-thumbnail">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>
                <div className="sciatica-related-post-text">
                  <h4 className="sciatica-related-post-title">
                    {post.title}
                  </h4>
                  <div className="sciatica-related-post-meta">
                    <span className="sciatica-related-post-date">
                      {post.date}
                    </span>
                  </div>
                  <div className="sciatica-related-post-read-more">
                    <span
                      className="sciatica-related-post-read-more-link"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SciaticaRelated;

