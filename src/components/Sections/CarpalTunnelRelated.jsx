import './CarpalTunnelRelated.css';

const CarpalTunnelRelated = () => {
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
    <section className="carpal-tunnel-related-section">
      <div className="carpal-tunnel-related-container">
        <h2 className="carpal-tunnel-related-title">Related Posts</h2>
        
        <div className="carpal-tunnel-related-grid">
          {relatedPosts.map((post) => (
            <article key={post.id} className="carpal-tunnel-related-post">
              <a href={post.link} className="carpal-tunnel-related-post-link">
                <div className="carpal-tunnel-related-post-thumbnail">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>
                <div className="carpal-tunnel-related-post-text">
                  <h4 className="carpal-tunnel-related-post-title">
                    {post.title}
                  </h4>
                  <div className="carpal-tunnel-related-post-meta">
                    <span className="carpal-tunnel-related-post-date">
                      {post.date}
                    </span>
                  </div>
                  <div className="carpal-tunnel-related-post-read-more">
                    <span
                      className="carpal-tunnel-related-post-read-more-link"
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

export default CarpalTunnelRelated;

