import './PostContent.css';

const PostContent = ({ post }) => {
  if (!post) return null;

  return (
    <section className="post-content-section">
      <div className="post-content-container">
        <h1 className="post-title">
          {post.title}
        </h1>
        
        <div 
          className="post-article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="post-categories">
          <ul className="post-categories-list">
            <li className="post-category-item">
              <span className="post-category-prefix">Category:</span>
              <span className="post-categories-list-items">
                {post.categories.map((category, index) => (
                  <span key={index}>
                    <span className="post-category-tag">{category}</span>
                    {index < post.categories.length - 1 && ', '}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PostContent;

