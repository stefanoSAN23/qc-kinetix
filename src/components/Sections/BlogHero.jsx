import './BlogHero.css';

const BlogHero = () => {
  return (
    <section className="blog-hero-section">
      <div className="blog-hero-container">
        <h1 className="blog-hero-title animated fadeInDown" data-animate-immediate="true">
          QC Kinetix Blog
        </h1>
        <img
          className="blog-hero-divider animated fadeInLeft"
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

export default BlogHero;

