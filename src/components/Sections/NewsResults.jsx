import { useState, useEffect, useRef } from 'react';
import './NewsResults.css';

const NewsResults = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const resultsSectionRef = useRef(null);

  // All news posts from the HTML
  const allNewsPosts = [
    {
      id: 1,
      title: '"Pain Free for Heroes: QC Kinetix Honors United States Military with Month-Long Giveback Initiative" – <em>Franchising.com</em>',
      url: 'https://qckinetix.com/blog/newspress/pain-free-for-heroes-qc-kinetix-honors-united-states-military-with-month-long-giveback-initiative-franchising-com/',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/11/fum-150x113-1.jpg.webp',
      date: 'November 5, 2025'
    },
    {
      id: 2,
      title: '"What exercises are best for knee osteoarthritis? Study offers clues" – <em>Medical News Today</em>',
      url: 'https://qckinetix.com/blog/newspress/what-exercises-are-best-for-knee-osteoarthritis-study-offers-clues/',
      image: 'https://qckinetix.com/wp-content/uploads/2025/10/cycling-swimming-knee-osteoarthritis-collage-1296x728-header-1024x575-1.avif',
      date: 'October 22, 2025'
    },
    {
      id: 3,
      title: '"The Surgery Taylor Swift\'s Mom Had Varies Widely in Price—Here\'s Why Knee Replacement Can Cost From $12K to $197K" – <em>Women\'s World</em>',
      url: 'https://qckinetix.com/blog/newspress/the-surgery-taylor-swifts-mom-had-varies-widely-in-price-heres-why-knee-replacement-can-cost-from-12k-to-197k/',
      image: 'https://qckinetix.com/wp-content/uploads/2025/08/taylor_swift_knee_surgery.webp',
      date: 'August 21, 2025'
    },
    {
      id: 4,
      title: '"Becoming Pain-Free: Dr. Mitchell Sheinkop Of QC Kinetix On How to Alleviate Chronic Pain" – <em>Medium</em>',
      url: 'https://qckinetix.com/blog/newspress/becoming-pain-free-dr-mitchell-sheinkop-of-qc-kinetix-on-how-to-alleviate-chronic-pain/',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/05/New-Project-15.jpg.webp',
      date: 'May 19, 2025'
    },
    {
      id: 5,
      title: '"National Pickleball League inks QC Kinetix to presenting sponsorship deal" – <em>Sports Business Journal</em>',
      url: 'https://qckinetix.com/blog/newspress/national-pickleball-league-inks-qc-kinetix-to-presenting-sponsorship-deal/',
      image: 'https://qckinetix.com/wp-content/uploads/2025/05/2WXOQPPYIBBJXMFFT25626IELE.avif',
      date: 'May 1, 2025'
    },
    {
      id: 6,
      title: '"Breaking Free from Big Pharma: Emily Nardone\'s Mission to Transform Patient Care" – <em>Women\'s Business Daily</em>',
      url: 'https://qckinetix.com/blog/newspress/breaking-free-from-big-pharma-emily-nardones-mission-to-transform-patient-care/',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/New-Project-14.jpg.webp',
      date: 'April 24, 2025'
    }
  ];

  const totalPages = Math.ceil(allNewsPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allNewsPosts.slice(startIndex, endIndex);

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPagination = () => {
    const pages = [];
    
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          className={currentPage === i ? 'active' : ''}
          onClick={(e) => handlePageChange(e, i)}
          data-page={i}
        >
          {i}
        </a>
      );
    }
    
    return pages;
  };

  return (
    <section className="news-results-section" ref={resultsSectionRef}>
      <div className="news-results-container">
        <div id="news-results" style={{ opacity: 1 }}>
          <div className="news-posts-list">
            {currentPosts.map((post) => (
              <article key={post.id} className="news-post-item">
                <a className="news-post-thumbnail-link" href={post.url} target="_blank" rel="noopener noreferrer">
                  <div className="news-post-thumbnail">
                    <img
                      src={post.image}
                      className="attachment-full size-full wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="news-post-text">
                  <h3 className="news-post-title">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: post.title }} />
                  </h3>
                  <div className="news-post-meta-data">
                    <span className="news-post-date">{post.date}</span>
                  </div>
                  <div className="news-post-read-more-wrapper">
                    <a
                      className="news-post-read-more"
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read more about ${post.title.replace(/<[^>]*>/g, '')}`}
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {totalPages > 1 && (
            <nav className="news-pagination" aria-label="Pagination">
              {renderPagination()}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsResults;

