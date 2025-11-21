import './PostRelated.css';
import { Link } from 'react-router-dom';

const PostRelated = ({ relatedPosts }) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="post-related-section">
      <div className="post-related-container">
        <h2 className="post-related-title">Related Posts</h2>
        
        <div className="post-related-grid">
          {relatedPosts.map((relatedPost) => (
            <article key={relatedPost.id} className="post-related-post">
              <Link to={relatedPost.link} className="post-related-post-link">
                <div className="post-related-post-thumbnail">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    loading="lazy"
                  />
                </div>
                <div className="post-related-post-text">
                  <h4 className="post-related-post-title">
                    {relatedPost.title}
                  </h4>
                  <div className="post-related-post-meta">
                    <span className="post-related-post-date">
                      {relatedPost.date}
                    </span>
                  </div>
                  <div className="post-related-post-read-more">
                    <span
                      className="post-related-post-read-more-link"
                      aria-label={`Read more about ${relatedPost.title}`}
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostRelated;

