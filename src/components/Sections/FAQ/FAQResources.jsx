import './FAQResources.css';

const FAQResources = () => {
  const resources = [
    {
      id: 1,
      title: 'Combat & Service-Related Back Pain: Regenerative Treatment for Veterans',
      url: 'https://qckinetix.com/blog/veteran-back-pain-without-surgery/',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/back-pain-6949392_1920.png.webp',
      author: 'QC Kinetix',
      date: 'November 12, 2025'
    },
    {
      id: 2,
      title: 'Advanced Neck Pain Relief: How Regenerative Medicine Outperforms Surgery',
      url: 'https://qckinetix.com/blog/neck-pain-relief-near-me-regenerative-solutions/',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/10/AdobeStock_127286389-scaled.jpeg.webp',
      author: 'QC Kinetix',
      date: 'October 26, 2025'
    },
    {
      id: 3,
      title: 'How to Soothe Achilles Tendon Pain Fast: Regenerative Medicine Solutions',
      url: 'https://qckinetix.com/blog/non-surgical-achilles-tendonitis-treatment/',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/09/achilles-tendonities-001.jpg.webp',
      author: 'QC Kinetix',
      date: 'September 20, 2025'
    },
    {
      id: 4,
      title: "Runner's Knee Treatment: Regenerative Sports Medicine Solutions for Fall Marathon Training",
      url: 'https://qckinetix.com/blog/runners-knee-regenerative-sports-medicine/',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/09/knee-pain-01.jpg.webp',
      author: 'QC Kinetix',
      date: 'September 16, 2025'
    }
  ];

  return (
    <section className="faq-resources-section">
      <div className="faq-resources-container">
        <h2 className="faq-resources-title animated fadeInDown">Additional Resources</h2>
        <img
          className="faq-resources-divider animated fadeInLeft"
          src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
          width="177"
          height="8"
          alt="Decorative divider"
          loading="lazy"
        />
        <div className="faq-resources-grid">
          {resources.map((resource) => (
            <article key={resource.id} className="faq-resource-card">
              <a href={resource.url} className="faq-resource-thumbnail" target="_blank" rel="noopener noreferrer">
                <img
                  src={resource.image}
                  alt={resource.title}
                  loading="lazy"
                  className="faq-resource-image"
                />
              </a>
              <div className="faq-resource-content">
                <h3 className="faq-resource-title">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </a>
                </h3>
                <div className="faq-resource-meta">
                  <span className="faq-resource-author">{resource.author}</span>
                  <span className="faq-resource-date">{resource.date}</span>
                </div>
                <a href={resource.url} className="faq-resource-read-more" target="_blank" rel="noopener noreferrer">
                  Read More »
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="faq-resources-button-wrapper">
          <a href="/regenerative-medicine-blog/" className="faq-resources-button animated fadeInUp">
            View Our Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQResources;

