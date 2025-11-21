import './PostNavigation.css';
import { Link } from 'react-router-dom';

const PostNavigation = ({ previousPost, nextPost }) => {
  if (!previousPost && !nextPost) return null;

  return (
    <section className="post-navigation-section">
      <div className="post-navigation-container">
        <nav className="post-navigation" role="navigation" aria-label="Post Navigation">
          {previousPost && (
            <div className="post-navigation-prev">
              <Link to={previousPost.url} rel="prev">
                <span className="post-navigation-link-prev">
                  <span className="post-navigation-prev-label">Previous</span>
                  <span className="post-navigation-prev-title">
                    {previousPost.title}
                  </span>
                </span>
              </Link>
            </div>
          )}
          {nextPost && (
            <div className="post-navigation-next">
              <Link to={nextPost.url} rel="next">
                <span className="post-navigation-link-next">
                  <span className="post-navigation-next-label">Next</span>
                  <span className="post-navigation-next-title">
                    {nextPost.title}
                  </span>
                </span>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};

export default PostNavigation;

